<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { reveal } from 'svelte-reveal';
    interface Project {
        id: number;
        title: string;
        description: string;
        images: {
            url: string;
            alt: string;
            width?: string; // Optional width override
        }[];
        videoUrl?: string;
        isRight: boolean;
    }

    const projects: Project[] = [
        {
            id: 1,
            title: "UNTITLED GAME PROJECT",
            description: "This was a project I worked on with my friend. I was in charge of creating the PSX models for the game. I was overally very pleased with the visuals for the ingame characters and environments. I created my own pipeline of creating said models with realtive ease later on.",
            images: [
                { url: "/images/retro/untitled/bgtest.webp", alt: "Project One Main" },
                { url: "/images/retro/untitled/tank.webp", alt: "Project One Detail"},
                { url: "/images/retro/untitled/rendertest.webp", alt: "Project One Close-up" },
                { url: "/images/retro/untitled/preview.webp", alt: "Project One Detail"},
                { url: "/images/retro/untitled/concept.webp", alt: "Project One Detail"},
            ],
            videoUrl: "https://www.youtube.com/embed/RJHFx1jc5Oc",
            isRight: false
        },
        {
            id: 2,
            title: "UNIVERSITY MODELING PRACTICE",
            description: "A simple university assignment, I have created, rigged and textured the knight, so that It can be moved within blender and posed. Probably my favorite knight model I have done so far, very happy with how clean he turned out! The background was also a part of the assignment, I wanted to create a somber forest scape, with a towering castle in the back, while also maintaining the depth and atmosphere.",
            images: [
                { url: "/images/retro/proj2/gifmaker_me.gif", alt: "Project Two Main" },
                { url: "/images/retro/proj2/bg.jpg", alt: "Project Two Main"}
            ],
            isRight: true
        },
        {
            id: 3,
            title: "BACKSTREETS",
            description: "A personal challenge, where I wanted to learn more software to add to my toolbelt in the future. I at first only wanted to have a quick enviro render, however I then created a character for the scene, and all of a sudden it was animated. I then edited the animations in davinci resolve, and created a pretty artistic piece in the end :) ",
            images: [
                { url: "/images/retro/to-add/main.webp", alt: "Project Three Main" },
                { url: "/images/retro/to-add/background.webp", alt: "Project Three Detail"}
            ],
            videoUrl: "https://www.youtube.com/embed/ECQ7oTGyaNY",
            isRight: false
        },
        {
            id: 4,
            title: "UYUU - Stream Background/Model",
            description: "A friend of mine wanted to have a sort of intermission background for his streams, and I really wanted to model something in the psx style, so I took it upon myself to create the 3D model of his avatar, aswell as the render of the intermission stage. I was pretty happy with how both turned out! It was a very fun project for me",
            images: [
                { url: "/images/retro/uyuy/uyuu-main.webp", alt: "Project Two Main" },
                { url: "/images/retro/uyuy/ujuj-stream.webp", alt: "Project Two Main" },
                { url: "/images/retro/uyuy/uyuu-model.webp", alt: "Project Two Main" }
            ],
            isRight: true
        }
    ];

    let sections: HTMLElement[] = [];
    let currentSection = 0;
    let modalImage: { url: string; alt: string; } | null = null;
    let isModalOpen = false;

    function openModal(image: { url: string; alt: string; }) {
        modalImage = image;
        isModalOpen = true;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        isModalOpen = false;
        document.body.style.overflow = '';
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && isModalOpen) {
            closeModal();
        }
    }

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = sections.indexOf(entry.target as HTMLElement);
                    if (index !== -1) {
                        currentSection = index;
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-50% 0px -50% 0px'
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    });
</script>

<div class="retro-container" in:fade={{ duration: 300, delay: 300 }}>
  <div class="content-section ">
    <h1 class="retro-title" >RETRO VAULT</h1>
    <h1 class="retro-title" style="font-size: small; opacity: 0.5"> My personal guilty pleasure</h1>
    <div class="retro-bar"></div>
  </div>

<div class="projects-container">
    {#each projects as project, i}
        <section 
            class="project-section" 
            class:right={project.isRight}
            bind:this={sections[i]}>
            <div class="content-column images">
                {#if project.videoUrl}
                        <div class="video-wrapper">
                            <iframe
                                src={project.videoUrl}
                                title={project.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    {/if}
                {#each project.images as image}
                    <div 
                        class="image-wrapper" 
                        style="width: {image.width || '100%'}"
                        on:click={() => openModal(image)}
                        on:keydown={(e) => e.key === 'Enter' && openModal(image)}
                        role="button"
                        tabindex="0"
                    >
                        <img 
                            src={image.url} 
                            alt={image.alt}
                            loading="lazy"
                        />
                        <div class="image-overlay">
                            <span class="expand-icon">+</span>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="content-column text">
                <div class="text-content" class:active={currentSection === i}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            </div>
        </section>
    {/each}
</div>



{#if isModalOpen && modalImage}
    <div 
        class="modal-overlay" 
        on:click={closeModal}
        transition:fade={{ duration: 200 }}
    >
        <div 
            class="modal-content"
            transition:scale={{ duration: 300, easing: cubicOut }}
            on:click|stopPropagation
        >
            <img src={modalImage.url} alt={modalImage.alt} />
            <button class="close-button" on:click={closeModal}>×</button>
        </div>
    </div>
{/if}


</div>
<style>
  :global(body) {
    background: #1f1f1f;
    background-image: 
      linear-gradient(rgba(16, 16, 32, 0.5) 2px, transparent 2px),
      linear-gradient(90deg, rgba(16, 16, 32, 0.5) 2px, transparent 2px);
    background-size: 40px 40px;
    background-attachment: fixed;
  }
  .expand-icon {
        color: white;
        mix-blend-mode: difference;
        font-size: 2rem;
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }
  .retro-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
  }

  .content-section {
    max-width: 1200px;
    margin: 0 auto;
  }

  .retro-title {
    margin-top: 1rem;
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: #e8e8e8;
    text-align: center;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 
      0 0 10px rgba(114, 167, 255, 0.8),
      0 0 20px rgba(114, 167, 255, 0.5);
    position: relative;
  }

  .retro-title::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(114, 167, 255, 0.5), 
      rgba(114, 167, 255, 0.8),
      rgba(114, 167, 255, 0.5), 
      transparent);
  }

  .retro-bar {
    height: 4px;
    background: linear-gradient(90deg,
      transparent,
      rgba(114, 167, 255, 0.8),
      transparent);
    width: 100%;
    margin: 2rem auto;
    max-width: 800px;
    position: relative;
  }

  .project-section {
    display: flex;
    min-height: 100vh;
    position: relative;
    gap: 40px;
    margin-bottom: 100px;
    position: relative;
  }

  .project-section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      rgba(16, 16, 32, 0.1) 50%,
      rgba(16, 16, 32, 0) 50%
    );
    background-size: 4px 4px;
    pointer-events: none;
    z-index: 2;
  }

  .project-section.right {
    flex-direction: row-reverse;
  }

  .content-column {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .content-column.text {
    position: sticky;
    top: 8vh;
    align-self: flex-start;
    height: fit-content;
  }

  .content-column.images {
    gap: 40px;
  }

  .image-wrapper {
    margin: 0 auto;
    border-radius: 4px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    position: relative;
    cursor: pointer;
    border: 1px solid rgba(114, 167, 255, 0.3);
    box-shadow: 0 0 20px rgba(114, 167, 255, 0.2);
  }

  .image-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      rgba(16, 16, 32, 0.1) 50%,
      rgba(16, 16, 32, 0) 50%
    );
    background-size: 4px 4px;
    pointer-events: none;
    z-index: 1;
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease;
    filter: brightness(0.9) contrast(1.1);
  }

  .text-content {
    padding: 40px;
    background: rgba(16, 16, 32, 0.7);
    border: 1px solid rgba(114, 167, 255, 0.3);
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(114, 167, 255, 0.2);
    transform: translateY(20px);
    transition: all 0.5s ease;
    opacity: 1;
  }

  .text-content.active {
    opacity: 1;
    transform: translateY(0);
  }

  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 1.8rem;
    color: #e8e8e8;
    margin-bottom: 20px;
    text-shadow: 
      0 0 10px rgba(114, 167, 255, 0.8),
      0 0 20px rgba(114, 167, 255, 0.5);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #a0a0a0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(16, 16, 32, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  }

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    border: 1px solid rgba(114, 167, 255, 0.3);
    border-radius: 4px;
    padding: 10px;
    background: rgba(16, 16, 32, 0.8);
    box-shadow: 0 0 30px rgba(114, 167, 255, 0.3);
  }

  .modal-content img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 4px;
    filter: brightness(0.9) contrast(1.1);
  }

  .close-button {
    position: absolute;
    top: -40px;
    right: -40px;
    background: rgba(16, 16, 32, 0.8);
    border: 2px solid rgba(114, 167, 255, 0.5);
    color: #e8e8e8;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 4px;
    transition: all 0.2s ease;
    text-shadow: 0 0 10px rgba(114, 167, 255, 0.8);
  }

  .close-button:hover {
    background: rgba(114, 167, 255, 0.2);
    transform: scale(1.1);
  }
 p{
    text-align: left;
 }
 .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.123);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
 .image-wrapper:hover img {
        transform: scale(1.05);
    }

    .image-wrapper:hover .image-overlay {
        opacity: 1;
    }
    .image-wrapper:hover .expand-icon {
        transform: translateY(0);
    }
 .video-wrapper {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
        margin-bottom: 40px;
        border-radius: 12px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }

    .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
  @media (max-width: 768px) {
    .retro-container {
      padding: 4rem 1rem;
    }

    .retro-title {
      font-size: clamp(1.2rem, 2vw, 1.8rem);
    }

    .project-section {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 60px;
    }

    .project-section.right {
      flex-direction: column;
    }

    .content-column.text {
      position: static;
    }

    .text-content {
      padding: 20px;
      transform: none;
      opacity: 1;
    }

    h2 {
      font-size: 1.4rem;
    }

    .image-wrapper {
      width: 100% !important;
    }

    .modal-content {
      max-width: 95vw;
    }

    .close-button {
      top: -40px;
      right: 0;
    }
    p{
            font-size: 14px;
            
        }
  }
  </style>
