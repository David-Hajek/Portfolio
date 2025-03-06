<script lang="ts">
import { Canvas } from '@threlte/core';
import ThreeScene from '$lib/ThreeScene.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { reveal } from 'svelte-reveal';
  import { onDestroy } from 'svelte';

  let showIntro = true;
  let fadeOutBackground = false;
  let visible = false; 
  let canvasContainer: HTMLDivElement; // sets the canvas container as a divelement from html

  function handleIntersection(entries: IntersectionObserverEntry[]) { // this gets the intersectionObserverEntry from the svelte-intersection-observer
    for (const entry of entries) {
      visible = entry.isIntersecting; // is visible if the view is intersecting with the canvas
    }
  }

  onMount(() => {
    console.log("Home Page Loaded");

    setTimeout(() => fadeOutBackground = true, 1000); 
    setTimeout(() => showIntro = false, 3500);

    if (canvasContainer) {
      const observer = new IntersectionObserver(handleIntersection, {
        root: null, 
        threshold: 0.2 // the threshold that has to be passed in order for it to be displayed
      });
      observer.observe(canvasContainer);

      onDestroy(() => observer.disconnect());
    }
  });
</script>

{#if showIntro}
  <div class="intro" class:fade-out={fadeOutBackground}>
    <h1 class="tracking-in-expand">WELCOME</h1>
  </div>
{/if}


<div class="main-content">
  <div bind:this={canvasContainer} class="canvas-container">
    {#if visible}
      <Canvas dpr={0.45}>
        <ThreeScene />
      </Canvas>
    {/if}
  </div>
  <h1 use:reveal={{ preset: "slide", delay: 5000 }}>TOMAS DITE</h1>
  <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
  <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
  <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
  <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
  <p>This is the homepage of our TOMAS DITE application.</p>
</div>

<style>
.shader-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
  .intro {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: opacity 1s ease-in-out;
  }

  .fade-out {
    opacity: 0;
  }

  .logo {
    color: white;
    font-size: 6rem;
    font-weight: bold;
    opacity: 0;
    transform: translateY(30px); 
    animation: fadeInAndMove 2s ease-out forwards; 
  }

  @keyframes fadeInAndMove {
    from {
      opacity: 0;
      transform: translateY(30px); 
    }
    to {
      opacity: 1;
      transform: translateY(0); 
    }
  }

 
  .main-content {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  .canvas-container {
    
    width: 100%; 
    height: 600px;
    max-width: 1880px; 
    margin: 0 auto; 
    display: flex;
  }

  /* resizing for tablets */
  @media (max-width: 768px) {
    .canvas-container {
      height: 400px;
    }
  }

  /* resizing for phones */
  @media (max-width: 480px) {
    .canvas-container {
      height: 300px;
    }
  }

  h1 {
    font-size: 140px;
  }
  .tracking-in-expand {
	-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

</style>
