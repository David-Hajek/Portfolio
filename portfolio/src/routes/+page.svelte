<script lang="ts">


  import { Canvas } from '@threlte/core';
  import ThreeScene from '$lib/ThreeScene.svelte';
  import '@fontsource-variable/hanken-grotesk';
  import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
  import { reveal, type RevealOptions } from 'svelte-reveal';

  let showIntro = true;
  let fadeOutBackground = false;

  onMount(() => {
    console.log("Home Page Loaded");

    setTimeout(() => {
      fadeOutBackground = true; 
    }, 2500); 

    setTimeout(() => {
      showIntro = false; 
    }, 3500); 
  });
</script>

<svelte:head>
  <title>TOMAS DITE</title>
</svelte:head>


{#if showIntro}
  <div class="intro" class:fade-out={fadeOutBackground}>
    <h1 class="logo" >TOMAS DITE</h1>
  </div>
{/if}

<div class="main-content">
  
  <div class="canvas-container">
    <Canvas 
    dpr={0.65}
    >
      <ThreeScene />
      
    </Canvas>
  </div>
  
  <h1 use:reveal={{ preset: "slide", delay: 5000 }}>TOMAS DITE</h1>
  <p>This is the homepage of our TOMAS DITE application.</p>
</div>

<style>
 
  .intro {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
    font-size: 3rem;
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
    
    width: 100vw; 
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
</style>
