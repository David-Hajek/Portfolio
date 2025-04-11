
<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { reveal } from 'svelte-reveal';
	import ImageShader from '$lib/ImageShader.svelte';
	
	let showScrollIndicator = true;
	let scrollY = 0;
	
	// Handle scroll to hide the arrow indicator
	function handleScroll() {
		scrollY = window.scrollY;
		showScrollIndicator = scrollY < 100;
	}
  
	// Media items for the grid
	const mediaItems = [
	  {
		type: 'video',
		src: '/videos/simulation1.mp4',
		poster: '/images/simulation1-poster.jpg',
		caption: 'Garment Simulation Demo',
		landscape: false
	  },
	  {
		type: 'image',
		src: '/images/projects/wrap/david-hajek-pyrophoto.jpg',
		alt: 'Final Render 1',
		caption: 'Final Garment Render',
		landscape: false
	  },
	  {
		type: 'image',
		src: '/images/projects/wrap/thumbnail.webp',
		alt: 'Final Render 1',
		caption: 'Final Garment Render',
		landscape: true
	  },
	  {
		type: 'video',
		src: '/videos/crowd1.mp4',
		poster: '/images/crowd1-poster.jpg',
		caption: 'Crowd Simulation Test',
		landscape: false
	  },
	  {
		type: 'image',
		src: '/images/render2.jpg',
		alt: 'Final Render 2',
		caption: 'Crowd Implementation',
		landscape: true
	  }
	];
  
	// Project information
	const project = {
	  title: "The Mag Wrap 2025",
	  subtitle: "Garment & Crowd Simulations",
	  description: "I had the opportunity to contribute to The Mag Wrap 2025 under the direction of Krystof Jezek. My role focused on developing realistic garment simulations and implementing crowd dynamics.",
	  client: "THE MAG\nWorked under: Krystof Jezek",
	  duration: "6 weeks",
	  year: "2025",
	  role: "Simulation Developer",
	};
  
  
	onMount(() => {
	  console.log("Visualization Project Page Loaded");
	  
	  // Add scroll event listener
	  window.addEventListener('scroll', handleScroll);
	  
	  // Clean up event listener on component destruction
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	});
  </script>
  
  <!-- Hero Section -->
  <div class="project-page dark-section">
	<div id="glass-landing"></div>
	<div class="hero-container">
	  <div class="hero-content">
		<div class="hero-text">
		  <div use:reveal={{ preset: "slide", delay: 0, threshold: 0.01 }}>
			<h4 class="project-category">SIMULATION DEVELOPMENT</h4>
			<h1 class="project-title">{project.title}</h1>
		  </div>
		  
		  <div class="project-subtitle" use:reveal={{ preset: "slide", delay: 300 }}>
			{project.subtitle}
		  </div>
  
		  <div class="project-intro" use:reveal={{ preset: "slide", delay: 500 }}>
			<p>{project.description}</p>
		  </div>
  
		  <div class="project-meta" use:reveal={{ preset: "slide", delay: 700 }}>
			<div class="meta-item">
			  <span class="meta-label">Client</span>
			  <span class="meta-value">{project.client}</span>
			</div>
			<div class="meta-item">
			  <span class="meta-label">Duration</span>
			  <span class="meta-value">{project.duration}</span>
			</div>
			<div class="meta-item">
			  <span class="meta-label">Year</span>
			  <span class="meta-value">{project.year}</span>
			</div>
			<div class="meta-item">
			  <span class="meta-label">Role</span>
			  <span class="meta-value">{project.role}</span>
			</div>
		  </div>
		</div>
  
		<div class="hero-visual">
		  <div class="video-container">
			<iframe
			  src="https://player.vimeo.com/video/1065385532?h=3dd2400c80&background=1&autoplay=1&loop=1&byline=0&title=0"
			  class="hero-video"
			  frameborder="0"
			  allow="autoplay; fullscreen; picture-in-picture"
			  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
			></iframe>
		  </div>
		</div>
	  </div>
	</div>
	
	<!-- Animated scroll indicator -->
	{#if showScrollIndicator}
	  <div class="scroll-indicator" transition:fade={{ duration: 400 }}>
		<div class="scroll-arrow">
		  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		  </svg>
		</div>
		<span class="scroll-text">Scroll Down</span>
	  </div>
	{/if}
  </div>
  
  <!-- Media Grid Section -->
  <div class="project-page">
	<div id="glass-landing-bottom"></div>
	<div class="media-container">
	  <div class="media-content">
		<h2 class="section-title">Project Gallery</h2>
		<div class="accent-bar"></div>
		
		<div class="media-grid">
		  <!-- Grid items will be populated with videos and renders -->
		  {#each mediaItems as item, i}
			<div class="media-item" class:landscape={item.landscape}>
			  {#if item.type === 'video'}
				<div class="video-wrapper">
				  <video
					src={item.src}
					controls
					preload="metadata"
					poster={item.poster}
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"
				  >
					<track kind="captions">
				  </video>
				</div>
			  {:else}
				<img src={item.src} alt={item.alt} loading="lazy" />
			  {/if}
			  {#if item.caption}
				<p class="media-caption">{item.caption}</p>
			  {/if}
			</div>
		  {/each}
		</div>
	  </div>
	</div>
  </div>
  
  
  
  <style>
	/* Base styles with CSS variables inherited from main site */
	:root {
	  --text-primary: #ffffff;
	  --text-secondary: #e0e0e0;
	  --bg-glass: rgba(69, 72, 80, 0.5);
	  --bg-glassWhite: rgba(255, 255, 255, 0.733);
	  --glass-blur: 12px;
	  --glass-border: rgba(255, 255, 255, 0.1);
	  --glass-shadow: rgba(0, 0, 0, 0.2);
	  --accent-color: aliceblue;
	  --transition-speed: 0.3s;
	  --spacing-unit: clamp(0.5rem, 1vw, 1.5rem);
	  --max-width-glass: 1447px;
	  --scroll-indicator-color: rgba(255, 255, 255, 0.8);
	}
  
	/* Global transitions for smooth interactions */
	* {
	  transition: transform var(--transition-speed) ease, 
				  opacity var(--transition-speed) ease,
				  background-color var(--transition-speed) ease,
				  box-shadow var(--transition-speed) ease,
				  filter var(--transition-speed) ease;
	}
  
	/* Project page container */
	.project-page {
	  width: 100%;
	  min-height: 93vh;
	  position: relative;
	  padding: var(--spacing-unit);
	}
  
	p{
	  text-align: left;
	}
  
	/* Glass effects (reused from main site) */
	#glass-landing {
	  z-index: -5;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  left: 0;
	  top: 0;
	  background: rgb(2,0,36);
      background: linear-gradient(180deg, rgba(2,0,36,0.1) 0%, rgba(45,45,69,0.35) 42%, rgba(107,127,240,0.5) 100%);
	  backdrop-filter: blur(var(--glass-blur)) saturate(190%);
	  box-shadow: 0 8px 32px 0 var(--glass-shadow);
	}
	#glass-landing-bottom {
	  z-index: -5;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  left: 0;
	  top: 0;
	  background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(45,45,69,0.3113620448179272) 42%, rgba(107,127,240,0.44861694677871145) 100%);
	  backdrop-filter: blur(var(--glass-blur)) saturate(180%);
	  box-shadow: 0 8px 32px 0 var(--glass-shadow);
	}
	
  
	/* Dark section styling */
	.dark-section {
	  position: relative;
	  color: var(--text-primary);
	  background-color: rgba(255,255,255,0.01);
	  overflow: hidden;
	}
	
	/* Scroll indicator styling */
	.scroll-indicator {
	  position: absolute;
	  bottom: 5rem;
	  left: 50%;
	  transform: translateX(-50%);
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  color: var(--scroll-indicator-color);
	  z-index: 10;
	}
	
	.scroll-arrow {
	  animation: float 2s ease-in-out infinite;
	  background: rgba(255, 255, 255, 0.1);
	  border-radius: 50%;
	  padding: 10px;
	  backdrop-filter: blur(8px);
	  border: 1px solid rgba(255, 255, 255, 0.15);
	  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
	  margin-bottom: 0.5rem;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  transition: all 0.4s ease;
	}
	
	.scroll-arrow:hover {
	  transform: translateY(-5px);
	  background: rgba(255, 255, 255, 0.2);
	  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
	}
	
	.scroll-text {
	  font-size: 0.875rem;
	  font-weight: 500;
	  letter-spacing: 1px;
	  opacity: 0.8;
	  text-transform: uppercase;
	}
	
	@keyframes float {
	  0%, 100% {
		transform: translateY(0);
	  }
	  50% {
		transform: translateY(-15px);
	  }
	}
  
	/* Accent bar (consistent with main site) */
	.accent-bar {
	  height: 4px;
	  background: linear-gradient(90deg, #ffffff 0%, rgba(156, 156, 156, 0.5) 100%);
	  border-radius: 4px;
	  margin: 1.5rem 1.5rem 2.5rem; /* Added horizontal padding to match grid */
	  width: calc(100% - 3rem); /* Adjust width to account for padding */
	}
  
  
	/* Container and content layouts */
	.hero-container, .media-container {
	  width: 100%;
	  display: flex;
	  justify-content: center;
	  min-height: 10vh;
	}
  
	.hero-content {
	  width: 100%;
	  max-width: 90vw;
	  margin: 0 auto;
	  padding: 0 3rem;
	  position: relative;
	  z-index: 1;
	}
	
	.media-content {
	  width: 100%;
	  max-width: 1600px; /* Match grid max-width */
	  margin: 0 auto;
	  padding: 0;
	}
  
	/* Hero section styling */
	.hero-content {
	  display: grid;
	  grid-template-columns: 0.7fr 1.3fr; /* Give even more space to video */
	  gap: 8rem;
	  align-items: center;
	  padding-top: 2rem;
	}
  
	.hero-text {
	  position: relative;
	  z-index: 2;
	  max-width: 90%;
	}
  
	.project-category {
	  font-size: 1rem;
	  font-weight: 600;
	  letter-spacing: 2px;
	  color: var(--text-secondary);
	  margin-bottom: 1rem;
	  mix-blend-mode: difference;
	}
  
	.project-title {
	  font-size: clamp(2.5rem, 5vw, 4rem);
	  font-weight: 800;
	  line-height: 1.1;
	  margin-bottom: 1rem;
	  letter-spacing: -0.02em;
	  color: var(--text-primary);
	  mix-blend-mode: difference;
	}
  
	.project-subtitle {
	  font-size: clamp(1.5rem, 2.5vw, 2rem);
	  font-weight: 600;
	  color: var(--text-secondary);
	  margin-bottom: 2rem;
	  mix-blend-mode: difference;
	  text-align: left;
	}
  
	.project-intro {
	  font-size: clamp(1rem, 1.5vw, 1.2rem);
	  line-height: 1.6;
	  margin-bottom: 2.5rem;
	  color: var(--text-secondary);
	  max-width: 90%;
	  mix-blend-mode: difference;
	}
  
	/* Project meta information styling */
	.project-meta {
	  display: grid;
	  grid-template-columns: repeat(2, 1fr);
	  gap: 1.5rem 2rem;
	  margin-top: 2rem;
	  mix-blend-mode: difference;
	  background: rgba(255, 255, 255, 0.05);
	  border-radius: 12px;
	  padding: 1.5rem;
	  backdrop-filter: blur(8px);
	  border: 1px solid rgba(255, 255, 255, 0.1);
	  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}
  
	.meta-item {
	  display: flex;
	  flex-direction: column;
	}
  
	.meta-label {
	  text-align: left;
	  font-size: 0.875rem;
	  font-weight: 600;
	  text-transform: uppercase;
	  letter-spacing: 1px;
	  margin-bottom: 0.5rem;
	  color: var(--text-secondary);
	  opacity: 0.8;
	}
  
	.meta-value {
	  text-align: left;
	  font-size: 1rem;
	  font-weight: 500;
	  color: var(--text-primary);
	  white-space: pre-line;
	}
  
	.hero-visual {
	  position: relative;
	  z-index: 1;
	  width: 100%;
	  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
	  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	}
	
	.hero-visual:hover {
	  transform: translateY(-10px);
	}
	
	.video-container {
	  position: relative;
	  padding-top: 56.25%; /* 16:9 aspect ratio */
	  width: 100%;
	  border-radius: 16px;
	  overflow: hidden;
	  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
	}
  
	.video-container:hover {
	  transform: perspective(2000px) rotateY(0deg) translateZ(50px);
	}
  
	.hero-video {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  border: none;
	  object-fit: cover;
	  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.6);
	}
  
	/* Section title styling (consistent across sections) */
	.section-title {
	  font-size: clamp(2rem, 4vw, 3rem);
	  font-weight: 700;
	  margin-bottom: 1rem;
	  letter-spacing: -0.02em;
	  padding: 0 1.5rem; /* Match grid gap */
	}
  
	/* Media grid styling */
	.media-grid {
	  display: grid;
	  grid-template-columns: repeat(3, 1fr); /* Changed from 2 to 3 columns */
	  gap: 1.5rem;
	  max-width: 1600px; /* Match media-content max-width */
	  margin: 0 auto;
	}
  
	.media-item {
	  position: relative;
	  border-radius: 12px;
	  overflow: hidden;
	  background: rgba(255, 255, 255, 0.03);
	  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
	  transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
	  border: 1px solid rgba(255, 255, 255, 0.05);
	}
	
	.media-item:hover {
	  transform: translateY(-8px);
	  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
	}
	
	.media-item.landscape {
	  grid-column: span 2; /* Span 2 instead of full width */
	  max-height: none; /* Remove height restriction to allow proper aspect ratio */
	  object-fit: cover;
	}
  
	.video-wrapper {
	  position: relative;
	  padding-top: 56.25%; /* 16:9 aspect ratio */
	  width: 100%;
	  background: #050505;
	  border-radius: 12px;
	  overflow: hidden;
	}
  
	
  
	.media-item img {
	  width: 100%;
	  height: auto;
	  aspect-ratio: 4/3; /* More standard aspect ratio */
	  object-fit: cover;
	  display: block;
	  transform: scale(1);
	  transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
	  filter: brightness(0.95);
	}
	
	.media-item:hover img {
	  transform: scale(1.05);
	  filter: brightness(1.05);
	}
	
	.media-item.landscape img {
	  aspect-ratio: 16/9;
	}
  
	.media-caption {
	  padding: 1.5rem;
	  font-size: 1rem;
	  color: var(--text-secondary);
	  background: rgba(0, 0, 0, 0.7);
	  backdrop-filter: blur(10px);
	  margin: 0;
	  border-top: 1px solid rgba(255, 255, 255, 0.07);
	  letter-spacing: 0.02em;
	}
  
	/* Update container padding for more space */
	.media-container {
	  padding: 2rem 0;
	}
  
	/* Adjust spacing for better vertical rhythm */
	.section-title {
	  margin-bottom: 2rem;
	}
  
	/* This is overridden by the main .accent-bar definition above */
  
	/* Make items stack on smaller screens but maintain large size */
	/* Updated media queries for responsive grid */
	@media (max-width: 1800px) {
	  .media-grid {
	    grid-template-columns: repeat(3, 1fr);
	    gap: 1.5rem;
	  }
	}
	
	@media (max-width: 1400px) {
	  .media-grid {
	    grid-template-columns: repeat(2, 1fr);
	    gap: 1.25rem;
	  }
	  
	  .media-content {
		padding: 0 2rem;
	  }
	}
  
	@media (max-width: 1024px) {
	  .section-title, .accent-bar {
	    padding: 0 1rem;
	  }
	  .accent-bar {
	    width: calc(100% - 2rem);
	    margin: 1.5rem 1rem 2.5rem;
	  }
	  .media-grid {
		grid-template-columns: 1fr;
		gap: 2rem;
	  }
	  
	  .media-item.landscape {
		grid-column: auto;
	  }
  
	  .media-item {
		max-width: 100%;
	  }
  
	  .media-container {
		padding: 6rem 0;
	  }
	}
	
	@media (max-width: 640px) {
	  .media-grid {
	    gap: 1.25rem;
	  }
	  
	  .media-caption {
	    padding: 1rem;
	    font-size: 0.9rem;
	  }
	}
  
	/* Responsive design breakpoints */
	@media (max-width: 1800px) {
	  .hero-content {
		max-width: 2200px;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 6rem;
	  }
	}
  
	@media (max-width: 1400px) {
	  .hero-content {
		padding: 0 2rem;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 4rem;
	  }
	  
	  
	  .video-container {
		width: 100%;
		margin-left: 0;
	  }
	  .project-meta {
		grid-template-columns: repeat(2, 1fr);
	  }
	}
  
	@media (max-width: 1024px) {
	  .hero-content {
		grid-template-columns: 1fr;
		gap: 4rem;
	  }
	  
	  .hero-text {
		order: 0;
	  }
	  
	  .hero-visual {
		order: 1;
	  }
  
	  .hero-text {
		max-width: 100%;
	  }
	  
	  .video-container {
		transform: none;
	  }
  
	  .video-container:hover {
		transform: translateY(-10px);
	  }
  
	  .hero-container {
		padding: 6rem 0;
		min-height: auto;
	  }
	}
	  </style>
  