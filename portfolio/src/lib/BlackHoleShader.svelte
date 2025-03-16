<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
    import { vertexShader, fragmentShader } from '$lib/shader.js';

    let container;
    let camera, scene, renderer;
    let uniforms;
    let windowHalfX = 0;
    let windowHalfY = 0;
    let animationFrameId;
    let isActive = true;
    let resizeTimeout;
    let qualityFactor = 1;

    // Check if device is mobile
  /*  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        typeof navigator !== 'undefined' ? navigator.userAgent : ''
    );*/

    onMount(() => {
        if (typeof window !== 'undefined') {
            // Set quality factor based on device
            qualityFactor = isMobile ? 0.5 : 1;
            
            init();
            animate();

            // Debounced resize handler
            const handleResize = () => {
                if (resizeTimeout) clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(onWindowResize, 150);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                cleanUp();
            };
        }
    });

    function init() {
        try {
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            scene = new THREE.Scene();

            uniforms = {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2() },
                uMouse: { value: new THREE.Vector2(0.5, 0.5) },
                uIntensity: { value: isMobile ? 0.6 : 0.8 } // Reduced intensity for mobile
            };

            const geometry = new THREE.PlaneGeometry(2, 2);
            const material = new THREE.ShaderMaterial({
                uniforms,
                vertexShader,
                fragmentShader,
            });

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            renderer = new THREE.WebGLRenderer({
                antialias: !isMobile,
                powerPreference: 'high-performance',
                alpha: true
            });

            renderer.setPixelRatio(Math.min(window.devicePixelRatio * qualityFactor, 2));
            container.appendChild(renderer.domElement);

            onWindowResize();
        } catch (error) {
            console.error('Error initializing BlackHoleShader:', error);
            cleanUp();
        }
    }

    function onWindowResize() {
        if (!container || !renderer || !uniforms) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        windowHalfX = width / 2;
        windowHalfY = height / 2;

        // Apply quality factor to render size
        const renderWidth = width * qualityFactor;
        const renderHeight = height * qualityFactor;

        renderer.setSize(renderWidth, renderHeight, false);
        renderer.domElement.style.width = width + 'px';
        renderer.domElement.style.height = height + 'px';

        uniforms.uResolution.value.x = renderWidth;
        uniforms.uResolution.value.y = renderHeight;
    }

    function animate() {
        if (!isActive) return;
        animationFrameId = requestAnimationFrame(animate);
        render();
    }

    function render() {
        if (!uniforms || !renderer || !scene || !camera) return;
        
        // slower animation on mobile
        uniforms.uTime.value += isMobile ? 0.005 : 0.01;
        renderer.render(scene, camera);
    }

    function cleanUp() {
        isActive = false;

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        if (scene) {
            scene.traverse((object) => {
                if (object.isMesh) {
                    if (object.geometry) {
                        object.geometry.dispose();
                    }
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                }
            });
            scene.clear();
        }

        if (renderer) {
            renderer.dispose();
            renderer.forceContextLoss();
            if (renderer.domElement && renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        }

        // Clear references
        scene = null;
        camera = null;
        renderer = null;
        uniforms = null;
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
        z-index: -10;
        overflow: hidden;
        pointer-events: none;
    }
</style>

