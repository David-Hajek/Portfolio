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
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-text">
        <div class="identity" use:reveal={{ preset: "slide", delay: 0, threshold: 0.01 }}>
          <span class="greeting">Hi, I'm</span>
          <h1 class="name">David</h1>
        </div>

        <h2 class="profession" use:reveal={{ preset: "slide", delay: 1700 }}>
          3D Artist & Visual Designer
        </h2>

        <div class="tagline" use:reveal={{ preset: "slide", delay: 1900 }}>
          Transforming creative concepts into stunning digital experiences
        </div>

        <div class="description" use:reveal={{ preset: "slide", delay: 2200 }}>
          <p>I specialize in creating immersive 3D visuals and compelling digital art that helps brands and businesses stand out in the digital space.</p>
          <p>With expertise in 3D modeling, animation, and visual design, I bring ideas to life through technical excellence and artistic vision.</p>
        </div>

        <div class="hero-cta" use:reveal={{ preset: "slide", delay: 2600 }}>
          <a href="/personal" class="primary-btn">View My Work</a>
          <a href="/contact" class="secondary-btn">Let's Talk</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="image-container">
          <ImageShader imageSrc="images/landing.jpg"></ImageShader>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="logos">
  <div class="logos-slide">
      <!-- First set of logos - Client companies -->
      <img src="/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
    </div>
      <!-- Second set of logos - For continuous scrolling animation -->
      <div class="logos-slide">
      <img src="/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
    </div>
    <!-- Third set of logos - For continuous scrolling animation -->
    <div class="logos-slide">
      <img src="/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
    </div>
    <!-- Fourth set of logos - For continuous scrolling animation -->
    <div class="logos-slide">
      <img src="/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
</div>
</div>
  <div class="landing-page white-section">
    <div id="glass-landingWhite"></div>
    <div class="skills-container">
      <div class="skills-content">
        <h1 class="skills-title" use:reveal={{ preset: "slide", delay: 300 }}>Skills</h1>
        <div class="accent-bar" use:reveal={{ preset: "slide", delay: 500 }}></div>
        
        <div class="skills-section">
          <div class="section-container" use:reveal={{ preset: "slide", delay: 900 }}>
            <div class="bubble-container">
              <span class="bubble">3D Modeling</span>
              <span class="bubble">Texturing</span>
              <span class="bubble">Animation</span>
              <span class="bubble">UV Mapping</span>
              <span class="bubble">Rigging</span>
              <span class="bubble">Sculpting</span>
            </div>
          </div>

          <div class="section-container" use:reveal={{ preset: "slide", delay: 1100 }}>
            <h2 class="section-title">Technology</h2>
            <div class="accent-bar"></div>
            <div class="bubble-container">
              <span class="bubble">Blender</span>
              <span class="bubble">Substance Painter</span>
              <span class="bubble">Substance Designer</span>
              <span class="bubble">3DCoat</span>
              <span class="bubble">Zbrush</span>
              <span class="bubble">Photoshop</span>
              <span class="bubble">Illustrator</span>
              <span class="bubble">Indesign</span>
              <span class="bubble">Premiere Pro</span>
              <span class="bubble">Davinci Resolve</span>
              <span class="bubble">Houdini</span>
              <span class="bubble"> maja 3ds max after effects blesky renderer za 50 tisic na mesic</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>


  
 

    <BlackHoleShader />
  
  <style>
  /* Base styles with CSS variables for theming */
  :root {
    --text-primary: #ffffff;
    --text-secondary: #e0e0e0;
    --bg-glass: rgba(28, 29, 32, 0.5);
    --bg-glassWhite: rgba(255, 255, 255, 0.733);
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


  /* Enhanced landing page with absolute positioning */
  .landing-page {
    width: 100%;
    min-height: 89vh;
    position: relative;
    padding: var(--spacing-unit);
  }

  /* Enhanced glass effect */
  #glass-landing {
    z-index: -5;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(17, 25, 40, 0.75);
    backdrop-filter: blur(var(--glass-blur)) saturate(180%);
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
  }
  #glass-landingWhite {
    z-index: -5;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--bg-glassWhite);
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
  }
  
  
  
 
  


  /* Enhanced animations */
  .tracking-in-expand {
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
  
  

 
  
.skills-container {
  grid-column: 2 / 12;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
  z-index: 1;
}

.skills-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.skills-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #191919;
  text-align: left;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.accent-bar {
  height: 4px;
  background: linear-gradient(90deg, #191919 0%, rgba(25,25,25,0.5) 100%);
  border-radius: 4px;
  margin: 1.5rem auto 2.5rem;
}



.skills-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.section-container {
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: #191919;
  font-weight: 600;
  margin-bottom: 1rem;
}

.accent-bar {
  height: 4px;
  background: linear-gradient(90deg, #191919 0%, rgba(25,25,25,0.5) 100%);
  border-radius: 4px;
  margin: 1.5rem 0 2.5rem;
  width: 100%;
}

.bubble-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.bubble {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: #444;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.bubble:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .skills-section {
    gap: 3rem;
  }

  .bubble-container {
    gap: 0.8rem;
  }

  .bubble {
    padding: 0.6rem 1.2rem;
  }
}


  .logo {
      height: 100px;
      margin: 0 50px;
      object-fit: contain;
  }

  /* Carousel Styles */
  .logos {
     overflow: hidden;
     padding: 1vh 0;
     background-color: #191919;
     white-space: nowrap;
     position: relative;
  }

  .logos::after{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0%;
    width: 250px;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0), rgb(255, 255, 255));
    content: "";
    z-index: 2;
  }
  .logos::before{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0%;
    width: 250px;
    height: 100%;
    background: linear-gradient(to left, rgba(255,255,255,0), rgb(255, 255, 255));
    content: "";
    z-index: 2;
  }
  .logos-slide img {
      height: 80px;
      margin: 0 50px;
  }
  .logos-slide{
    display: inline-block;
      animation: 15s slide infinite linear;
  }
  .logos:hover .logos-slide{
    animation-play-state: paused;
  }
  @keyframes slide {
      from{
        transform: translateX(0);
      }
      to{
        transform: translateX(-100%);
      }
  }

  p{
    text-align: left;
  }

  /* Hero Section Styles */
  .hero-container {
    width: 100%;
    min-height: 89vh;
    align-items: center;
    padding: 4rem 0;
  }

  .hero-content {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 40%;
    gap: 4rem;
    align-items: center;
  }

  .hero-text {
    position: relative;
    z-index: 2;
  }

  .identity {
    margin-bottom: 1.5rem;
  }

  .greeting {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    color: var(--text-secondary);
    display: block;
    margin-bottom: 0.5rem;
    mix-blend-mode: difference;
    text-align: left;
  }

  .name {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin: 0;
    mix-blend-mode: difference;
  }

  .profession {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.2;
    mix-blend-mode: difference;
  }

  .tagline {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.4;
    max-width: 600px;
    text-align: left;
    mix-blend-mode: difference;
  }

  .description {
    margin-bottom: 3rem;
    mix-blend-mode: difference;
  }

  .description p {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
    max-width: 600px;
  }

  .hero-cta {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .primary-btn, .secondary-btn {
    padding: 1rem 2rem;
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    font-weight: 500;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .primary-btn {
    background: var(--text-primary);
    color: #191919;
  }

  .secondary-btn {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--text-primary);
  }

  .primary-btn:hover, .secondary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .hero-visual {
    position: relative;
    height: 100%;
  }

  .image-container {
    width: 100%;
    height: 100%;
    min-height: 500px;
    position: relative;
    overflow: hidden;
    border-radius: 24px;
  }

  @media (max-width: 1024px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .hero-visual {
      order: -1;
    }

    .image-container {
      min-height: 400px;
    }
    .skills-container {
    grid-column: 1 / 13;
    padding: 6rem 1rem;
  }
  
  .skills-grid {
    gap: 1.5rem;
  }

  
  }

  @media (max-width: 768px) {
    .hero-container {
      padding: 3rem 0;
    }

    .hero-content {
      padding: 0 1.5rem;
      gap: 2rem;
    }

    .hero-cta {
      flex-direction: column;
      gap: 1rem;
    }

    .primary-btn, .secondary-btn {
      text-align: center;
    }

    .image-container {
      min-height: 300px;
    }
    :root {
      --spacing-unit: clamp(0.5rem, 2vw, 1rem);
    }
    #glass-landing {
    z-index: -5;
    position: absolute;
    width: 100%;
    height: 150vh;
    }
    .contact-container {
      padding: 3rem 1rem;
    }

    .contact-form-wrapper {
      padding: 1.5rem;
    }

    .contact-title {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .contact-description p {
      font-size: clamp(1rem, 1.5vw, 1.2rem);
    }
    .contact-container {
      padding: 4rem 1.5rem;
    }
    .skills-container {
    padding: 4rem 1rem;
  }

  .skills-section {
    gap: 2rem;
  }

 
  }
 
  /* White Section Styling */
  .white-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    color: #191919;
    position: relative;
   /* width: 95%;  
    margin: 0 auto;  
    border-radius: 10px;  
    overflow: hidden;  */
  }
 
 



</style>
