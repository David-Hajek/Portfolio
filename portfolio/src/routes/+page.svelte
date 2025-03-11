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
    <div style="grid-column: 1 / 12; padding: 1rem ">
      <h1 id="sub-text" use:reveal={{ preset: "slide", delay: 1500 }}>Let's create content that is truly</h1>
    </div>
    <div style="grid-column: 1 / 12; padding: 1rem;">
      <h1 id="memorable" use:reveal={{ preset: "slide", delay: 2000 }}> Memorable.</h1>
    </div>
    <h1 id="second-text">I specialize in 3D Visuals, helping you bring your ideas to life through impactful and unique visuals.</h1>
    <h1 id="third-text">Whether you're looking to refresh your brand or create stunning content, I'm here to make your vision a reality.</h1>
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
    @keyframes expandLine {
  0% {
    width: 0;
  }
  100% {
    width: 100%; 
  }
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
      .landing-page {
      height: auto;
     padding: 1rem;
     }
    .landing-image {
     height: 300px; /* Reduce the height for smaller screens */
     }
    } 
  
    /* resizing for phones */
    @media (max-width: 480px) {
      .canvas-container {
        height: 300px;
      }
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

@-webkit-keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    opacity: 1;
  }
}
@keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(0.98);
            transform: scaleX(0.98);
    opacity: 1;
  }
}

  
  #landing-text{
    font-size: 4rem;
    grid-column: 1 / 11; /*I absolutely love this*/
    padding: 1rem;
  }
   .landing-page {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 200px 50px 50px 100px 50px 1fr;
    transform: translateY(-3vh);
  
  }
  #glass-landing {
    z-index: -5;
    position: absolute;
    width: 98vw;
    height: 90vh;
    background: rgba(28, 29, 32, 0.685);
backdrop-filter: blur( 6px );

border-radius: 10px;

  }
  .landing-image{
    
      grid-column: 12 / 12;
      grid-row: 1/3;
      padding: 1rem;
    }
  #memorable{
    font-size: 2.7rem;
    grid-column: 1 / 12;
  }
  #sub-text{
    font-size: 2.5rem;
    width: 100%;
    height: 100%;
    grid-column: 1 / 12;
    align-items: end;
  }
  #second-text{
    grid-column: 1 / 12;
    font-size: 1.5rem;
    padding: 1rem;
  }
  #third-text{
    grid-column: 1 / 12;
    font-size: 1.5rem;
    padding: 1rem;
  }
  .scale-in-hor-center {
    align-self: center;
    padding-left: 3rem;
    height: 6px;
    background-color: aliceblue;
    grid-column: 1 / 12;
    border-radius: 6px;
    animation-delay: 20000ms;
	-webkit-animation: scale-in-hor-center 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 2000ms;
	        animation: scale-in-hor-center 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 2000ms;
}
  </style>
