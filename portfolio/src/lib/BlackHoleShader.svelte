<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
    import { vertexShader, fragmentShader } from '$lib/shader.js';
    
    let container;
    let camera, scene, renderer;
    let uniforms;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationFrameId; // Store the animation frame ID
    
    onMount(() => {
        init();
        animate(); // Start animation loop
    
        window.addEventListener('resize', onWindowResize);
        window.addEventListener('mousemove', onMouseMove);
    
        return () => {
            // Cleanup Three.js resources when the component is destroyed
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('mousemove', onMouseMove);
            cleanUp();
        };
    });
    
    function init() {
        camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        scene = new THREE.Scene();
    
        uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2() },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uIntensity: { value: 0.8 }
        };
    
        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });
    
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
    
        onWindowResize();
    }
    
    function onWindowResize() {
        const width = container.clientWidth;
        const height = container.clientHeight;
    
        windowHalfX = width / 2;
        windowHalfY = height / 2;
    
        renderer.setSize(width, height);
    
        uniforms.uResolution.value.x = width;
        uniforms.uResolution.value.y = height;
    }
    
    function onMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    
        // Normalize mouse coordinates
        uniforms.uMouse.value.x = event.clientX / window.innerWidth;
        uniforms.uMouse.value.y = 1.0 - (event.clientY / window.innerHeight);
    }
    
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        render();
    }
    
    function render() {
        uniforms.uTime.value += 0.01;
        renderer.render(scene, camera);
    }
    
    function cleanUp() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    
        if (renderer) {
            renderer.dispose();
    
            // remove renderer canvas from the DOM
            if (renderer.domElement && renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        }
    
        // dispose of Three.js objects
        scene.traverse((object) => {
            if (object.isMesh) {
                object.geometry.dispose();
                if (object.material.isMaterial) {
                    object.material.dispose();
                }
            }
        });
    
        scene.clear();
    }
    
    onDestroy(() => {
        cleanUp();
    });
    </script>
    
    <div class="black-hole-container" bind:this={container}></div>
    
    <style>
    .black-hole-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }
    </style>
    