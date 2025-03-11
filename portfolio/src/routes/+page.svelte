<script lang="ts">
  import { Canvas } from '@threlte/core';
  import ThreeScene from '$lib/ThreeScene.svelte';
  import ImageShader from '$lib/ImageShader.svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { reveal } from 'svelte-reveal';
    import { onDestroy } from 'svelte';
    import BlackHoleShader from '$lib/BlackHoleShader.svelte';
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
      setTimeout(() => showIntro = false, 2000);
  
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
  
  
  <div class="landing-page">
    <div id="glass-landing"></div>
    <div style="grid-column: 1 / 11; "> <!-- this is probably the ugliest and only solution I had to implement to fix a problem with a library-->
      <h1 id="landing-text" use:reveal={{ preset: "slide", delay: 1000 }}> Welcome to My Creative Space</h1>
    </div>
    <div class ="scale-in-hor-center"></div>
    <div style="grid-column: 1 / 12;">
      <h1 id="sub-text" use:reveal={{ preset: "slide", delay: 2500 }}>Let's create content that is truly</h1>
    </div>
    <div style="grid-column: 1 / 12;">
      <h1 id="memorable" use:reveal={{ preset: "slide", delay: 3250 }}> Memorable.</h1>
    </div>
    <div style="grid-column: 1 / 12;">
    <h2 id="second-text" use:reveal={{ preset: "slide", delay: 3500 }}>I specialize in 3D visuals, transforming ideas into striking, immersive experiences.</h2>
  </div>
  <div style="grid-column: 1 / 12;">
    <h2 id="third-text" use:reveal={{ preset: "slide", delay: 3500 }}>Whether you're looking to refresh your brand or create stunning content, I'm here to make your vision a reality.</h2>
  </div>
    <div class ="landing-image">
      <ImageShader imageSrc="images/landing.jpg"  exactWidth={507} exactHeight={803} ></ImageShader>
    </div>

  </div>
    <ImageShader imageSrc="images/test2front.jpg" exactWidth={1920/2} exactHeight={1443/2} ></ImageShader>
  

    <BlackHoleShader />
    <div bind:this={canvasContainer} class="canvas-container">
      {#if visible}
      <Canvas dpr={0.6}>
      <ThreeScene/>
    </Canvas>
      {/if}
    </div>
    <h1 use:reveal={{ preset: "slide", delay: 5000 }}>TOMAS DITE</h1>
    <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
    <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
    <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
    <h1 use:reveal={{ preset: "slide", y: 50, x: 0 }}>TOMAS DITE</h1>
    <p>This is the homepage of our TOMAS DITE application.</p>
  
  
  <style>
  /* Base styles with CSS variables for theming */
  :root {
    --text-primary: #ffffff;
    --text-secondary: #e0e0e0;
    --bg-glass: rgba(28, 29, 32, 0.5);
    --glass-blur: 12px;
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: rgba(0, 0, 0, 0.2);
    --accent-color: aliceblue;
    --transition-speed: 0.3s;
    --spacing-unit: clamp(0.5rem, 1vw, 1.5rem);
  }

  /* Global transitions for smooth interactions */
  * {
    transition: transform var(--transition-speed) ease, 
                opacity var(--transition-speed) ease,
                background-color var(--transition-speed) ease;
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

  /* updated Canvas Container with smooth scaling */
  .canvas-container {
    width: 100%; 
    height: clamp(300px, 50vh, 600px);
    max-width: 100%; 
    margin: 0 auto; 
    display: flex;
    transition: height 0.5s ease-in-out;
  }

  /* Enhanced landing page with absolute positioning */
  .landing-page {
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding: var(--spacing-unit);
    transform: translateY(0);
  }

  /* Enhanced glass effect */
  #glass-landing {
    z-index: -5;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--bg-glass);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: clamp(10px, 2vw, 20px);
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
  }
  
  /* Responsive typography for all text elements */
  #landing-text {
    font-size: clamp(2rem, 5vw, 4.5rem);
    width: 55%;
    padding: var(--spacing-unit);
    max-width: 20ch;
    line-height: 1.2;
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin-bottom: var(--spacing-unit);
    font-weight: 700;
  }

  #memorable {
    font-size: clamp(1.8rem, 4vw, 3.5rem);
    padding: var(--spacing-unit);
    width: 55%;
    text-decoration: underline;
    position: relative;
    transition: all 0.3s ease;
  }
  
  #memorable:hover {
    text-shadow: 0 0 15px var(--accent-color);
    letter-spacing: 0.05em;
  }

  #sub-text {
    padding: var(--spacing-unit);
    font-size: clamp(1.5rem, 3.5vw, 3rem);
    width: 55%;
    align-items: end;
    margin-top: calc(var(--spacing-unit) * 2);
  }

  #second-text, #third-text {
    font-kerning: auto;
    text-align: left;
    max-width: 60ch;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 55%;
    font-size: clamp(1rem, 1.8vw, 1.5rem);
    padding: var(--spacing-unit);
    line-height: 1.6;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }
  
  #second-text:hover, #third-text:hover {
    opacity: 1;
  }

  /* Responsive image container with absolute positioning */
  .landing-image {
    position: absolute;
    right: var(--spacing-unit);
    top: var(--spacing-unit);
    width: 40%;
    height: clamp(300px, 50vh, 600px);
    padding: var(--spacing-unit);
    display: flex;
    justify-content: center;
    align-items: start;
    z-index: 1;
    transform: scale(1);
    transition: transform 0.5s ease;
  }
  
  .landing-image:hover {
    transform: scale(1.02);
  }

  /* Enhanced animations */
  .tracking-in-expand {
    -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
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

  .scale-in-hor-center {
    align-self: flex-end;
    margin-left: var(--spacing-unit);
    height: 6px;
    background: linear-gradient(90deg, var(--accent-color) 0%, rgba(255,255,255,0.5) 100%);
    width: 55%;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(240, 248, 255, 0.3);
    animation: scale-in-hor-center 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 2000ms;
  }

  @keyframes scale-in-hor-center {
    0% {
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      transform: scaleX(0.98);
      opacity: 1;
    }
  }
  
  /* Media Queries for Responsive Design */
  @media (max-width: 1024px) {
    .landing-image {
      width: 45%;
      height: clamp(250px, 40vh, 400px);
    }
    
    #landing-text, #sub-text, #memorable, #second-text, #third-text, .scale-in-hor-center {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    :root {
      --spacing-unit: clamp(0.5rem, 2vw, 1rem);
    }
    
    .landing-image {
      position: relative;
      width: 100%;
      right: 0;
      top: 0;
      height: clamp(200px, 30vh, 300px);
      margin-bottom: var(--spacing-unit);
    }
    
    #landing-text, #sub-text, #memorable, #second-text, #third-text, .scale-in-hor-center {
      width: 100%;
    }
    
    .canvas-container {
      height: clamp(200px, 40vh, 400px);
    }
    
    #landing-text {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
    }
    
    #memorable {
      font-size: clamp(1.5rem, 3vw, 2rem);
    }
    
    #sub-text {
      font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    }
  }

  @media (max-width: 480px) {
    .canvas-container {
      height: clamp(150px, 30vh, 250px);
    }
    
    #second-text, #third-text {
      font-size: clamp(0.9rem, 4vw, 1.2rem);
    }
  }
</style>