<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { vertexShader, fragmentShader } from '$lib/imageshader.js';
  
  // Props
  export let imageSrc;
  export let exactWidth = undefined; // exact width
  export let exactHeight = undefined; // for exact height
  export let minHeight = "400px"; // default minimum height
  
  // DOM element references - using Svelte's bind:this instead of getElementById
  let imageContainer;
  let imageElement;
  let isInitialized = false;

  // Variables
  let easeFactor = 0.02;
  let scene, camera, renderer, planeMesh;
  let mousePosition = { x: 0.5, y: 0.5 };
  let targetMousePosition = { x: 0.5, y: 0.5 };
  let aberrationIntensity = 1.0;
  let prevPosition = { x: 0.5, y: 0.5 };
  let mouseVelocity = 0;
  let animationFrameId;
  let textureAspect = 1; // store the image's aspect ratio


  function initializeScene(texture) {
 
    // stores the aspect ratio after the calculations of width/height
    textureAspect = texture.image.naturalWidth / texture.image.naturalHeight;
    console.log(textureAspect)
    
    scene = new THREE.Scene();

    // get container dimensions - uses exact width/height if they are provided
    const containerWidth = exactWidth ? parseFloat(exactWidth) : imageContainer.offsetWidth;
    const containerHeight = exactHeight ? parseFloat(exactHeight) : (imageContainer.offsetHeight || parseFloat(minHeight));
    const containerAspect = containerWidth / containerHeight;

    // camera 
    const frustumSize = 2;
    const aspectRatio = containerWidth / containerHeight;
    camera = new THREE.PerspectiveCamera(
      70,
      aspectRatio,
      0.01,
      10
    );
    if(exactWidth>exactHeight){ // handles the weird shenanigans that the horizontal images cause
    
      camera.position.z = 0.535;
    }
    else{
      camera.position.z = 1;
    }
   

    // Uniforms
    let shaderUniforms = {
      u_mouse: { value: new THREE.Vector2() },
      u_prevMouse: { value: new THREE.Vector2() },
      u_aberrationIntensity: { value: 1 },
      u_texture: { value: texture }
    };

    // creating a plane mesh with materials, preserving aspect ratio
    // create a plane with correct aspect ratio
    const planeWidth = 1;
    const planeHeight = planeWidth / textureAspect;
    
    planeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(planeWidth, planeHeight),
      new THREE.ShaderMaterial({
        uniforms: shaderUniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      })
    );
    
    // adjust plane scale to maintain aspect ratio
    adjustPlaneScale();

    // add mesh to scene
    scene.add(planeMesh);

    // Render
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerWidth, containerHeight);

    // Create a canvas, style it, and append to container
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = containerWidth;
    canvas.style.height = containerHeight;
    canvas.style.display = 'block'; 
    
    // Make sure imageContainer exists before appending
    if (imageContainer) {
      imageContainer.appendChild(canvas);
      isInitialized = true;
    }
  }

  function animateScene() {
    animationFrameId = requestAnimationFrame(animateScene);

    mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
    mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

    // check if planeMesh exists before accessing
    if (!planeMesh || !planeMesh.material) return;
    
    planeMesh.material.uniforms.u_mouse.value.set(
      mousePosition.x,
      1.0 - mousePosition.y
    );

    planeMesh.material.uniforms.u_prevMouse.value.set(
      prevPosition.x,
      1.0 - prevPosition.y
    );
    // calculate mouse movement velocity for aberration intensity
    const dx = mousePosition.x - prevPosition.x;
    const dy = mousePosition.y - prevPosition.y;
    const movementDistance = Math.sqrt(dx * dx + dy * dy);

    // Update velocity based on movement
    mouseVelocity = Math.max(mouseVelocity, movementDistance * 20);

    // Slower decay rate for aberration
    aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.015);
    mouseVelocity = Math.max(0.0, mouseVelocity - 0.1);

    // Combine base aberration with velocity for more dynamic effects
    const effectiveAberration = Math.min(2.0, aberrationIntensity + mouseVelocity * 0.2);

    planeMesh.material.uniforms.u_aberrationIntensity.value = effectiveAberration;

    renderer.render(scene, camera);
  }

  // Event handlers
  function handleMouseMove(event) {
    if (!imageContainer) return;
    
    easeFactor = 0.02;
    let rect = imageContainer.getBoundingClientRect();
    prevPosition = { ...targetMousePosition };

    // Calculate mouse position relative to container
    const mouseX = (event.clientX - rect.left) / rect.width;
    const mouseY = (event.clientY - rect.top) / rect.height;

    // Check if mouse is within bounds (0-1)
    if (mouseX >= 0 && mouseX <= 1 && mouseY >= 0 && mouseY <= 1) {
      targetMousePosition.x = mouseX;
      targetMousePosition.y = mouseY;
      aberrationIntensity = 1;
    } else {
      // If mouse is outside bounds, trigger a mouse leave effect
      handleMouseLeave();
    }
  }

  function handleMouseEnter(event) {
    if (!imageContainer) return;
    
    easeFactor = 0.02;
    let rect = imageContainer.getBoundingClientRect();

    // Calculate mouse position and clamp to 0-1 range
    const mouseX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const mouseY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

    mousePosition.x = targetMousePosition.x = mouseX;
    mousePosition.y = targetMousePosition.y = mouseY;
    prevPosition = { ...mousePosition };
    aberrationIntensity = 1.0;
    mouseVelocity = 0.5;
  }

  function handleMouseLeave() {
    easeFactor = 0.05;
    targetMousePosition = { ...prevPosition };
  }

  // adjust plane scale to maintain aspect ratio
  function adjustPlaneScale() {
    if (!planeMesh || !imageElement || !imageContainer) return;
    
    // get current container aspect ratio - use exactWidth/exactHeight if provided
    const containerWidth = exactWidth ? parseFloat(exactWidth) : imageContainer.offsetWidth;
    const containerHeight = exactHeight ? parseFloat(exactHeight) : imageContainer.offsetHeight;
    
    // ensure we have valid dimensions
    if (!containerWidth || !containerHeight) return;
    
    const containerAspect = containerWidth / containerHeight;
    
    // scale the plane to fit the container while preserving image aspect ratio
    if (textureAspect > containerAspect) {
      // omage is wider than container - fit to width
      planeMesh.scale.x = 1;
      planeMesh.scale.y = containerAspect / textureAspect;
    } else {
      // image is taller than container - fit to height
      planeMesh.scale.x = textureAspect / containerAspect;
      planeMesh.scale.y = 1;
    }
  }
  
  onMount(() => {
    // Wait for next tick to ensure DOM elements are bound
    setTimeout(() => {
      if (!imageContainer || !imageElement) {
        console.error("ImageShader: Could not initialize - DOM elements not available");
        return;
      }
      
      // Load image and initialize
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(imageSrc, (texture) => {
        initializeScene(texture);
        animateScene();
        
        // Add event listeners only after initialization
        if (imageContainer) {
          imageContainer.addEventListener("mousemove", handleMouseMove);
          imageContainer.addEventListener("mouseenter", handleMouseEnter);
          imageContainer.addEventListener("mouseleave", handleMouseLeave);
        }
      });
      
      
    }, 0);
  });

  onDestroy(() => {
    // clean up event listeners and animation to prevent memory leaks
    if (imageContainer) {
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      imageContainer.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);
    }

    // remove resize listener
    

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    if (renderer) {
      renderer.dispose();
    }
  });
</script>

<div bind:this={imageContainer} class="image-container" style={`min-height: ${minHeight}; ${exactWidth ? `width: ${exactWidth}px;` : ''} ${exactHeight ? `height: ${exactHeight}px;` : ''}`}>
  <img bind:this={imageElement} src={imageSrc} alt="Shader Effect" />
</div>

<style>
  .image-container {
    position: relative;
    width: 100%;
    min-height: 400px;
    overflow: hidden;
    display: block;
  }

</style>
