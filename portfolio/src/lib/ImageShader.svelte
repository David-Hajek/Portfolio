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
  let aspectRatio = 1; // container aspect ratio

  function initializeScene(texture) {
 
    // stores the aspect ratio after the calculations of width/height
    textureAspect = texture.image.naturalWidth / texture.image.naturalHeight;

    scene = new THREE.Scene();

    // Use the actual image dimensions for the renderer
    const imageWidth = texture.image.naturalWidth;
    const imageHeight = texture.image.naturalHeight;
    
    // Get container dimensions but prioritize image aspect ratio
    let containerWidth, containerHeight;
    
    if (exactWidth && exactHeight) {
      // Use exact dimensions if provided
      containerWidth = parseFloat(exactWidth);
      containerHeight = parseFloat(exactHeight);
    } else {
      // Otherwise use container size but maintain image aspect ratio
      const baseWidth = imageContainer.offsetWidth;
      const baseHeight = imageContainer.offsetHeight || parseFloat(minHeight);
      
      // Set aspect ratio for later use
      aspectRatio = baseWidth / baseHeight;
      
      // Match container size while preserving image aspect ratio
      if (baseWidth / baseHeight > textureAspect) {
        // Container is wider than image
        containerHeight = imageHeight;
        containerWidth = containerHeight * textureAspect;
      } else {
        // Container is taller than image
        containerWidth = imageWidth;
        containerHeight = containerWidth / textureAspect;
      }
    }
    
    // Set camera based on the determined dimensions
    camera = new THREE.PerspectiveCamera(
      45, // 45 degree FOV
      textureAspect, // Use image's aspect ratio for camera
      0.01,
      10
    );
    console.log(textureAspect)
    // Fixed camera position
    camera.position.z = 1.5;
   

    // Uniforms
    let shaderUniforms = {
      u_mouse: { value: new THREE.Vector2() },
      u_prevMouse: { value: new THREE.Vector2() },
      u_aberrationIntensity: { value: 1 },
      u_texture: { value: texture }
    };

    // creating a plane mesh with materials, preserving aspect ratio
    // create a plane with correct aspect ratio, sized to fit camera frustum
    let planeWidth, planeHeight;
    
    // Calculate the visible frustum dimensions at camera position z=1.5
    const vFov = 45 * Math.PI / 180; // 45 degrees in radians
    const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
    const visibleWidth = visibleHeight * aspectRatio;
    
    // Use the visible frustum dimensions for precise fitting with a vertical stretch
     // Stretch the image vertically by 8%
    
    if (textureAspect > aspectRatio) {
      // Image is wider than container - fit to width
      planeWidth = visibleWidth;
      planeHeight = (planeWidth / textureAspect) ;
    } else {
      // Image is taller than container - fit to height
      planeHeight = visibleHeight ;
      planeWidth = planeHeight * textureAspect;
    }
    
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
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create a canvas, style it, and append to container
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.width = containerWidth + 'px';
    canvas.style.height = containerHeight + 'px';
    canvas.style.display = 'block'; 
    canvas.style.margin = 'auto';
    canvas.style.borderRadius = '2rem';
    canvas.style.objectFit = 'contain';
    canvas.style.transformOrigin = 'center center';
    
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

  // adjust plane scale to exactly match image dimensions
  function adjustPlaneScale() {
    if (!planeMesh || !camera || !imageContainer) return;
    
    // Get current container dimensions
    const containerWidth = imageContainer.offsetWidth;
    const containerHeight = imageContainer.offsetHeight;
    
    // Ensure we have valid dimensions
    if (!containerWidth || !containerHeight) return;
    
    // Always use the image's aspect ratio, not the container's
    // This ensures the image fills the canvas but maintains proportions
    
    // Calculate the visible frustum dimensions at the fixed camera position z=1.5
    const vFov = 45 * Math.PI / 180; // Fixed 45 degrees in radians
    const visibleHeight = 2 * Math.tan(vFov / 2) * 1.5; // Using fixed z=1.5
    const visibleWidth = visibleHeight * textureAspect;
    
    // Apply a vertical stretch factor
    const verticalStretchFactor = 1.4; // Stretch the image vertically by 8%
    const horizontalStretchFactor = 0.9;
    
    // Reset scale to 1 before applying new scale
    planeMesh.scale.set(1, 1, 1);
    
    // Scale plane to match the image's dimensions with vertical stretch
    planeMesh.scale.set(
      visibleWidth * verticalStretchFactor,
      visibleHeight * horizontalStretchFactor,
      1
    );
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
          
          // Add resize observer for responsive behavior
          resizeObserver = new ResizeObserver(handleResize);
          resizeObserver.observe(imageContainer);
          
          // Initial resize to ensure proper sizing
          handleResize();
        }
      });
      
      
    }, 0);
  });

  // Add a resize observer to handle responsive resizing
  let resizeObserver;
  
  function handleResize() {
    if (renderer && camera && imageContainer) {
      const containerWidth = imageContainer.offsetWidth;
      const containerHeight = imageContainer.offsetHeight;
      
      // Return early if container dimensions are invalid
      if (!containerWidth || !containerHeight) return;
      
      // Calculate dimensions that preserve image aspect ratio
      let renderWidth, renderHeight;
      
      // Apply vertical stretch factor when calculating render dimensions
      
      if (containerWidth / containerHeight > textureAspect) {
        // Container is wider than image
        renderHeight = containerHeight ;
        renderWidth = (renderHeight * textureAspect);
      } else {
        // Container is taller than image
        renderWidth = containerWidth;
        renderHeight = (renderWidth / textureAspect);
      }
      
      // Update renderer size to match calculated dimensions
      renderer.setSize(renderWidth, renderHeight);
      
      // Update the canvas element style to match the new dimensions
      const canvas = renderer.domElement;
      canvas.style.width = renderWidth + 'px';
      canvas.style.height = renderHeight + 'px';
      
      // Update camera with image's aspect ratio, not container's
      camera.aspect = textureAspect;
      
      // Fixed FOV at 45 degrees
      camera.fov = 45;
      
      camera.updateProjectionMatrix();
      
      // Adjust plane scale to fit the new dimensions
      adjustPlaneScale();
      
      // Force a render to update the view
      if (scene) renderer.render(scene, camera);
    }
  }
  

  onDestroy(() => {
    // clean up event listeners and animation to prevent memory leaks
    if (imageContainer) {
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      imageContainer.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);
    }

    // remove resize listener
    if (resizeObserver) {
      resizeObserver.disconnect();
    }

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    if (renderer) {
      renderer.dispose();
    }
  });
</script>

<div bind:this={imageContainer} class="image-container" style={`${exactWidth || exactHeight ? '' : `min-height: ${minHeight};`}`}>
  <img bind:this={imageElement} src={imageSrc} alt="Shader Effect" />
</div>

<style>
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    /* Canvas will be absolutely positioned inside */
    margin: 0 auto; /* Center the container horizontally */
  }
  img{
    opacity: 0;
    width: 0%;
    width: 0%;
  }

</style>
