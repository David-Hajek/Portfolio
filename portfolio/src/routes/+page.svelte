<script lang="ts">
  import { Canvas } from '@threlte/core';
  import ThreeScene from '$lib/ThreeScene.svelte';
  import ImageShader from '$lib/ImageShader.svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { reveal } from 'svelte-reveal';
    import { onDestroy } from 'svelte';
    import BlackHoleShader from '$lib/BlackHoleShader.svelte';
    import { base } from '$app/paths';
    let showIntro = true;
    let fadeOutBackground = false;
    let visible = false; 
    let canvasContainer: HTMLDivElement; // sets the canvas container as a divelement from html
    let cursorGif = '';
    let showGif = false;
    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove(event, gifSrc) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursorGif = gifSrc;
      showGif = true;
    }

    function handleMouseLeave() {
      showGif = false;
    }
  
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
  
  
<div class="landing-page dark-section">
  <div id="glass-landing"></div>
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-text">
        <div class="identity" use:reveal={{ preset: "slide", delay: 0, threshold: 0.01 }}>
          <span class="greeting">Hi, I'm</span>
          <h1 class="name">David</h1>
        </div>

        <h2 class="profession" use:reveal={{ preset: "slide", delay: 1700, threshold: 0.01 }}>
          3D Artist & Visual Designer
        </h2>

        <div class="tagline" use:reveal={{ preset: "slide", delay: 1900, threshold: 0.01 }}>
          Transforming creative concepts into stunning digital experiences
        </div>

        <div class="description" use:reveal={{ preset: "slide", delay: 2200, threshold: 0.01 }}>
          <p>I specialize in creating immersive 3D visuals and compelling digital art that helps brands and businesses stand out in the digital space.</p>
          <p>With expertise in the 3D sphere, I bring ideas to life through technical excellence and artistic vision.</p>
        </div>

        <div class="hero-cta" use:reveal={{ preset: "slide", delay: 2600, threshold: 0.01 }}>
          <a href="{base}/personal" class="primary-btn">View My Work</a>
          <a href="{base}/contact" class="secondary-btn">Let's Talk</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="image-container">
          <ImageShader imageSrc="{base}/images/landing.jpg"></ImageShader>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Featured Work Section -->
<div class="landing-page">
  <div id="glass-landingWhite"></div>
  <div class="featured-container">
    <div class="featured-content">
      <h1 class="section-title" use:reveal={{ preset: "slide", delay: 150, threshold: 0.01 }}>Featured Work</h1>
      <div class="accent-bar" use:reveal={{ preset: "slide", delay: 200, threshold: 0.01 }}></div>
      <div class="featured-grid" use:reveal={{ preset: "slide", delay: 250, threshold: 0.01 }}>
        <a href="{base}/project/visualization" class="featured-item">
          <div class="featured-image-container">
            <img src="{base}/images/projects/wrap/thumbnail.webp" alt="3D Visualization Project" />
            <div class="featured-overlay">
              <h3>THE MAG WRAP 2025</h3>
              <p>Garment & Crowd Simulations</p>
              <span class="view-details">View Project →</span>
            </div>
          </div>
        </a>
 <!--       <a href="/project/character" class="featured-item">
          <div class="featured-image-container">
            <img src="/images/featured-2.jpg" alt="Character Design Project" />
            <div class="featured-overlay">
              <h3>Character Design</h3>
              <p>Game Character Concept</p>
              <span class="view-details">View Project →</span>
            </div>
          </div>
        </a> -->
      </div>
    </div>
  </div>
</div>
<div class="logos">
  <div class="logos-slide">
      <!-- First set of logos - Client companies -->
      <img src="{base}/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="{base}/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="{base}/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="{base}/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
      <img src="{base}/images/dyky-logo.png" alt="dykast Logo" class="logo" />
    </div>
      <!-- Second set of logos - For continuous scrolling animation -->
      <div class="logos-slide">
      <img src="{base}/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="{base}/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="{base}/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="{base}/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
      <img src="{base}/images/dyky-logo.png" alt="dykast Logo" class="logo" />
    </div>
    <!-- Third set of logos - For continuous scrolling animation -->
    <div class="logos-slide">
      <img src="{base}/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="{base}/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="{base}/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="{base}/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
      <img src="{base}/images/dyky-logo.png" alt="dykast Logo" class="logo" />
    </div>
    <!-- Fourth set of logos - For continuous scrolling animation -->
    <div class="logos-slide">
      <img src="{base}/images/apparently-logo.png" alt="Apparently Logo" class="logo" />
      <img src="{base}/images/krystof-logo.png" alt="Krystof Logo" class="logo" />
      <img src="{base}/images/mira-logo.png" alt="Mira Logo" class="logo" />
      <img src="{base}/images/devomi-logo.png" alt="Devomi Logo" class="logo" />
      <img src="{base}/images/dyky-logo.png" alt="dykast Logo" class="logo" />
</div>
</div>
<!-- Testimonials Section -->
<div class="landing-page dark-section">
  <div id="glass-landing"></div>
  <div class="testimonials-container">
    <div class="testimonials-content">
      <h1 class="section-title" use:reveal={{ preset: "slide", delay: 100, threshold: 0.01 }}>Client Testimonials</h1>
      <div class="accent-bar" use:reveal={{ preset: "slide", delay: 110, threshold: 0.01 }}></div>
      <div class="testimonials-grid" use:reveal={{ preset: "slide", delay: 120, threshold: 0.01 }}>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="testimonial-text">"Working with David was a real pleasure. He is quick to respond to any requests and very accommodating, making co-operating smooth and effective. Can always be trusted to deliver!"</p>
            <div class="testimonial-author">
              <strong>Mira Lumière</strong>
              <span>Director @ Yoimira Entertainment</span>
              <img src="{base}/images/mira-logo.png" alt="Mira Logo" class="logo-testamonial" style="opacity:0.5" />
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="testimonial-text">"David is a great addition to my team. He knows his way around 3D graphics and isn’t afraid to take on complex technical challenges. He communicates really well, so working with him is always a breeze. Plus, he's reliable and always delivers his work on time, which I truly appreciate. I really enjoy working with him, and I know he'll keep playing a big part in our projects' success."</p>
            <div class="testimonial-author">
              <strong>Krystof Jezek</strong>
              <span>Motion Director @ Krystof Jezek</span>
              <img src="{base}/images/krystof-logo.png" alt="Krystof Logo" class="logo-testamonial" style="opacity:0.5" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

  <div class="landing-page">
    <div id="glass-landingWhite"></div>
    <div class="skills-container">
      <div class="skills-content">
        <h1 class="skills-title" use:reveal={{ preset: "slide", delay: 100 , threshold: 0.01 }}>Skills</h1>
        <div class="accent-bar" use:reveal={{ preset: "slide", delay: 110, threshold: 0.01 }}></div>
        
        <div class="skills-section">
          <div class="section-container" use:reveal={{ preset: "slide",  threshold: 0.01}}>
            <div class="bubble-container">
              <span class="bubble">3D Modeling</span>
              <span class="bubble">Texturing</span>
              <span class="bubble">Animation</span>
              <span class="bubble">UV Mapping</span>
              <span class="bubble">Rigging</span>
              <span class="bubble">Rendering</span>
              <span class="bubble">Lighting</span>
              <span class="bubble">Sculpting</span>
              <span class="bubble">Geometry Nodes</span>
              <span class="bubble">Simulations</span>
            </div>
          </div>

          <div class="section-container" use:reveal={{ preset: "slide", threshold: 0.01 }}>
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
              <span class="bubble">After Effects</span>
              <span class="bubble"> Figma</span>
              <span class="bubble">Davinci Resolve</span>
              <span class="bubble">Houdini</span>
              <span class="bubble"> Figma</span>
              <span class="bubble"> Github</span>
              <span class="bubble"> Svelte</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>


  
 

<div class="landing-page dark-section final-section">
  <div id="glass-landing"></div>
  <div class="sections-container">
    <div class="sections-content">
      <div class="sections-left">
        <h1 class="mega-title" use:reveal={{ preset: "slide", delay: 50, threshold: 0.01 }}>Not Impressed<br/>Yet?</h1>
        <div class="accent-bar" use:reveal={{ preset: "slide", delay: 100, threshold: 0.01 }}></div>
        <p class="mega-description" use:reveal={{ preset: "slide", delay: 110 , threshold: 0.01 }}>
          Choose your journey through my portfolio collections
        </p>
      </div>
      <div class="sections-right">
        <div class="sections-grid" use:reveal={{ preset: "slide", delay: 120, threshold: 0.01 }}>
          <a 
            href="{base}/personal" 
            class="section-item"
            on:mousemove={(e) => handleMouseMove(e, '/images/gifs/personal.gif')}
            on:mouseleave={handleMouseLeave}
          >
            <h2>Personal</h2>
            <p>Explore my creative projects and artistic expressions</p>
            <div class="section-number">01</div>
          </a>
          <a 
            href="{base}/commercial" 
            class="section-item"
            on:mousemove={(e) => handleMouseMove(e, '/images/gifs/commercial.gif')}
            on:mouseleave={handleMouseLeave}
          >
            <h2>Commercial</h2>
            <p>View my professional work and client projects</p>
            <div class="section-number">02</div>
          </a>
          <a 
            href="{base}/retro" 
            class="section-item"
            on:mousemove={(e) => handleMouseMove(e, '/images/gifs/retro.gif')}
            on:mouseleave={handleMouseLeave}
          >
            <h2>Retro</h2>
            <p>Discover my land of PSX creations</p>
            <div class="section-number">03</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

{#if showGif}
  <div 
    class="cursor-preview"
    style="left: {mouseX + 180}px; top: {mouseY-50}px;"
  >
    <img src={base}{cursorGif} alt="Section Preview" />
  </div>
{/if}

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
    --max-width-glass: 1447px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Enhanced glass effect */
  #glass-landing {
    z-index: -5;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(1, 11, 29, 0.774);
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
    mix-blend-mode: difference;
    background: #ffffffc2;
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 32px 0 var(--glass-shadow) ;
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
  padding: 6rem 0;
  z-index: 1;
}

.skills-content {
  max-width: var(--max-width-glass);
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
  max-width: var(--max-width-glass);
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


  .logos {
      overflow: hidden;
      padding: 3rem 0;
      background: var(--bg-glass);
      white-space: nowrap;
      position: relative;
      backdrop-filter: blur(50px);
  }

  .logos::before,
  .logos::after {
      position: absolute;
      top: 0;
      width: 250px;
      height: 100%;
      content: "";
      z-index: 2;
  }

  .logos::before {
      left: 0;
      background: linear-gradient(to left, transparent, var(--bg-glass));
  }

  .logos::after {
      right: 0;
      background: linear-gradient(to right, transparent, var(--bg-glass));
  }

  .logos-slide {
      display: inline-block;
      animation: 20s slide infinite linear;
  }

  .logos:hover .logos-slide {
      animation-play-state: paused;
  }

  .logo {
      height: 90px;
      margin: 0 4rem;
      opacity: 0.7;
      transition: all 0.3s ease;
    
  }

  .logo:hover {
      opacity: 1;
      transform: scale(1.1);
  }

  @keyframes slide {
      from {
          transform: translateX(0);
      }
      to {
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 0 4rem;
    margin-top: 1.5rem;
  }
  .hero-content {
    width: 100%;
    max-width: var(--max-width-glass);
    margin: 0 auto;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 40%;
    gap: 3.5rem;
    align-items: center;
  }

  .hero-text {
    position: relative;
    z-index: 2;
    padding-top: 2rem;
    max-width: 650px;
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
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin: 0;
    mix-blend-mode: difference;
  }

  .profession {
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.25rem;
    line-height: 1.2;
    mix-blend-mode: difference;
  }

  .tagline {
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    color: var(--text-secondary);
    margin-bottom: 1.75rem;
    line-height: 1.4;
    max-width: 580px;
    text-align: left;
    mix-blend-mode: difference;
  }

  .description {
    margin-bottom: 2.5rem;
    mix-blend-mode: difference;
  }

  .description p {
    font-size: clamp(0.95rem, 1.3vw, 1.1rem);
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 0.85rem;
    max-width: 580px;
  }

  .hero-cta {
    display: flex;
    gap: 1.25rem;
    margin-top: 1.75rem;
  }

  .primary-btn, .secondary-btn {
    padding: 0.9rem 1.8rem;
    font-size: clamp(0.95rem, 1.3vw, 1.05rem);
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container {
    width: 100%;
    height: 100%;
    min-height: 450px;
    position: relative;
    overflow: hidden;
    border-radius: 25px;
  }
  /* Media query for larger screens */
  @media (min-width: 1440px) {
    .hero-container {
      padding: 2rem 0 6rem;
      margin-top: 2.5rem;
    }
    
    .hero-content {
      padding: 2.5rem;
      gap: 5rem;
    }
    
    .hero-text {
      padding-top: 2rem;
    }
    
    .image-container {
      min-height: 500px;
    }
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
    
    .hero-container {
      padding: 6rem 0 4rem;
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    .hero-container {
      padding: 3rem 0 2rem;
      margin-top: 0;
    }

    .hero-content {
      padding: 1.5rem;
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
    }
    
    .skills-container {
    padding: 4rem 1rem;
  }

  .skills-section {
    gap: 2rem;
  }

 
  }
 
 
 
 



.featured-container, .testimonials-container {
  grid-column: 2 / 12;
  display: flex;
  justify-content: center;
  padding: 6rem 0;
  z-index: 1;
}

.featured-content, .testimonials-content {
  max-width: var(--max-width-glass);
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1.75rem;
  margin-top: 2.5rem;
}

.featured-item {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease;
}

.featured-image-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.featured-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  color: white;
  transform: translateY(20%);
  opacity: 0;
  transition: all 0.3s ease;
}

.featured-overlay h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.featured-overlay p {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.view-details {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease 0.1s;
}

.featured-item:hover {
  transform: translateY(-5px);
}

.featured-item:hover .featured-image-container img {
  transform: scale(1.05);
}

.featured-item:hover .featured-overlay {
  transform: translateY(0);
  opacity: 1;
}

.featured-item:hover .view-details {
  transform: translateY(0);
  opacity: 1;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.logo-testamonial{
  height: 100px;
  object-fit: contain;
}
.testimonial-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.quote-icon {
  width: 40px;
  height: 40px;
  color: rgba(25, 25, 25, 0.1);
  margin-bottom: 1.5rem;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.testimonial-author strong {
  color: #191919;
  font-size: 1.1rem;
}

.testimonial-author span {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .featured-container, .testimonials-container {
    grid-column: 1 / 13;
    padding: 6rem 1rem;
  }
}

@media (max-width: 768px) {
  .featured-container, .testimonials-container {
    padding: 4rem 1rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  .testimonial-card{
    min-width: 0px;
  
  }
}

.dark-section {
  position: relative;
  color: var(--text-primary);
  background-color: rgba(255,255,255,0.01);
}

.dark-section .section-title,
.dark-section .testimonial-author strong {
  color: var(--text-primary);
}

.dark-section .testimonial-text,
.dark-section .testimonial-author span {
  color: var(--text-secondary);
}

.dark-section .testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.dark-section .testimonial-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}
.quote-icon {
  color: rgba(255, 255, 255, 0.1);
}

.dark-section .accent-bar {
  background: var(--text-primary);
}

.final-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.sections-container {
  grid-column: 2 / 12;
  display: flex;
  justify-content: center;
  padding: 6rem 0;
  z-index: 1;
  width: 100%;
}

.sections-content {
  max-width: var(--max-width-glass);
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: center;
}

.sections-left {
  flex: 1;
  text-align: left;
  padding-right: 2rem;
}

.mega-title {
  font-size: clamp(3.2rem, 5.5vw, 4.5rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1.75rem;
  letter-spacing: -0.02em;
}

.mega-description {
  font-size: clamp(1.1rem, 1.4vw, 1.35rem);
  color: var(--text-secondary);
  margin-top: 1.75rem;
  max-width: 380px;
}

.sections-right {
  flex: 1.5;
}

.sections-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(20px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.section-item h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.section-item p {
  color: var(--text-secondary);
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.section-number {
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  font-weight: 800;
  opacity: 0.2;
  transition: all 0.3s ease;
}

.section-item:hover .section-number {
  opacity: 0.4;
  transform: translateY(-50%) scale(1.1);
}

.cursor-preview {
  position: fixed;
  width: 15%;
  pointer-events: none;
  z-index: 1000;
  transform: translate(-35%, -85%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  object-fit: cover;
}

.cursor-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .sections-container {
    grid-column: 1 / 13;
    padding: 5
  }
  .sections-content {
    flex-direction: column;
    gap: 3rem;
  }

  .sections-left {
    text-align: center;
    padding-right: 0;
  }

  .mega-description {
    margin: 2rem auto 0;
  }

  .sections-right {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .section-item:hover {
    transform: translateX(0) translateY(-5px);
  }
  
  .cursor-preview {
    display: none;
  }
}
  
</style>

