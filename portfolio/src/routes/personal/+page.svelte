<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { base } from '$app/paths';

    interface Project {
        id: number;
        title: string;
        description: string;
        images: {
            url: string;
            alt: string;
            width?: string; // Optional width override
        }[];
        videoUrl?: string; // Optional YouTube embed URL
        isRight: boolean;
    }

    const projects: Project[] = [
        {
            id: 0,
            title: "The Fated Return",
            description: "A small series of renders, where I tested out new tools to add to my 3D Arsenal, I used Gaea for the environment, megascans for some of the assets scattered around the scene, Houdini for the vdb beam and smoke, and finally Blender to put it all together into a cohesive piece. Edited in Lightroom and Photoshop.",
            images: [
                { url: "/images/fatedreturn/david-hajek-field-rend1.webp", alt: "Convenience Wide-Shot" },
                { url: "/images/fatedreturn/david-hajek-field-rend2.webp", alt: "Convenience Close up"},
                { url: "/images/fatedreturn/david-hajek-field-rend3.webp", alt: "Convenience Close up"},
                { url: "/images/fatedreturn/david-hajek-process-gif.gif", alt: "Process Gif" }
            ],
            isRight: false
        },
        {
            id: 1,
            title: "Convenience Store",
            description: "A set of renders where I really went out of my comfort zone, as I have found that I sort of gravitate to always including a character somewhere in the scene, this one however, has none. I loved the outcome of this one, it has quickly became my favorite CG creation honestly.",
            images: [
                { url: "/images/convenience/david-hajek-front-final.jpg", alt: "Convenience Wide-Shot" },
                { url: "/images/convenience/david-hajek-side-final-really.jpg", alt: "Convenience Close up"},
                { url: "/images/convenience/david-hajek-makro.jpg", alt: "Convenience Macro" }
            ],
            isRight: true
        },
        {
            id: 2,
            title: "SLAVE KNIGHT DOMINIC REDESIGN",
            description: "Dominic started out as a Matura project for my end of High School assignment, I always had a fascination with the medieval fantasy theme, and back then, I was not as proficient with 3D software as I am now, so I wanted to challange myself to recreate Dominic with my current knowledge and skillset. Staying true to the design I had set for myself baack then was my number one priority, that is why I had to create certain compromises when it came to his redesign and overall creation. Overall I was happy to finally create him the way I envisioned back then.",
            images: [
                { url: "/images/dominic/domca1.jpg", alt: "Knight Money Shot - main" },
                { url: "/images/dominic/domca2.jpg", alt: "Knight model showcase"},
                { url: "/images/dominic/domca3.jpg", alt: "Helmet Close-up" },
                { url: "/images/dominic/domca4.jpg", alt: "Gauntlet Detail"},
                { url: "/images/dominic/domca5.jpg", alt: "Recreation of a previous render"},
                { url: "/images/dominic/domca6.jpg", alt: "Previous poster render"}
            ],
            isRight: false
        },
        {
            id: 3,
            title: "UNCLAIMED TERRITORY",
            description: "I was always fascinated with nature and wanted to create something bright and hopeful, this was a very fun and challenging piece, as I needed to balance performance with quality and light, alot of the lighting issues were solved using blender's native light nodes. This piece also includes a gif, showcasing my workflow and my approach to solving various problems that may arise.",
            images: [
                { url: "/images/enviroknight/david-hajek-forestfinal.jpg", alt: "Forest scene with a knight marching towards a tree" },
                { url: "/images/enviroknight/david-hajek-ezgif-com-animated-gif-maker.gif", alt: "Behind the scenes of the previous scene"}
            ],
            isRight: true
        },
        {
            id: 4,
            title: "HWEI - BUST SCULPT",
            description: "Hwei was a personal challenge for me, as I always wanted to try sculpting, I initially wanted to sculpt the entire character, but due to time constraints, I settled onto creating just the bust. This model was project in which I wanted to expand my repertoaire of 3D software, as I wanted to learn more 3DCoat and Zbrush respectively",
            images: [
                { url: "/images/hwei/david-hajek-hweisidefinal.jpg", alt: "Hwei money shot" },
                { url: "/images/hwei/david-hajek-frontbase.jpg", alt: "Flat shaded base model"}
            ],
            isRight: false
        },
        {
            id: 5,
            title: "LEGARDE- SCULPT",
            description: "Creating Legarde from Fear and Hunger was a personal challenge I set out to conquer, as I wanted to aim for more realism in this one. It was tough trying to recreate the textures just right for him, so many reference photos were mandatory for this project to work. The model of the sword was provided by my good friend Tomas Dite",
            images: [
                { url: "/images/legarde/david-hajek-legardcinema.jpg", alt: "Legarde money shot main" },
                { url: "/images/legarde/david-hajek-wireframe.jpg", alt: "Topology and behind the scenes" }
            ],
            isRight: true
        },
        {
            id: 6,
            title: "Environment & Character Renders",
            description: "A set of renders that I created as a practice for my lighting and editing skills, these have been created a while ago, however I am still happy with them to this day, I initally started with just the character render, but wanted to branch out into a more story like component, so I went full out with the environment building and the character rendering.",
            images: [
                { url: "/images/bms/david-hajek-bms-final.jpg", alt: "Pyro main money shot" },
                { url: "/images/bms/david-hajek-topviewrend-final.jpg", alt: "Top view of a scene with the pyro character" },
                { url: "/images/bms/david-hajek-bms22-final.jpg", alt: "3rd person esque shot of the same scene from above" },
                { url: "/images/bms/david-hajek-bms222-final.jpg", alt: "Ground shot from a different place in the scene of the character" }
            ],
            isRight: false
        },
        {
            id: 7,
            title: "Game Ready Model Practice",
            description: "I wanted to challange myself with something I always wanted to tick off my bucket list. When I was younger, I loved the game Team Fortress 2 and sunk countless hours into it, so naturally, when I got older, I wanted to try and contribute to the game, I set out to create a Steam Workshop compatible item for the class Pyro, I first started out by concepting something that would fit the characters personality, as Pyro cannot express emotions via his mask, I decided to try and give him a permanent work stare, the stare that you have after a grueling day at the office. I modeled the glasses in Blender and then worked out a way to have it compatible and game ready in the steam workshop. Such a fun project",
            images: [
                { url: "/images/pyro/david-hajek-workshopart.jpg", alt: "TF2 Pyro money shot - main item showcase" },
                { url: "/images/pyro/david-hajek-pyrophoto.jpg", alt: "Headshot, showcasing the item" },
                { url: "/images/pyro/david-hajek-ws2.jpg", alt: "Promo material" },
                { url: "/images/pyro/david-hajek-workshop.jpg", alt: "Promo material" }
            ],
            isRight: true
        },
        {
            id: 8,
            title: "Sunshower",
            description: "This was a fanmade passion project, in which I wanted to create a character from the game Limbus Company, I have also experimented with the use of After Effects, overall a very fun experience! Will most definitely do again, maybe, someday?",
            images: [
                { url: "/images/sunshower/david-hajek-heahtcliff-sunshower-min-1.jpg", alt: "Main money shot of heathcliff" },
                { url: "/images/sunshower/david-hajek-basemesh-min.jpg", alt: "Flat shaded base of the model" }
            ],
            videoUrl: "https://www.youtube.com/embed/3Got7Yyc-Dc?si=vjT0wip0BYxzIL9c",
            isRight: false
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

<div class="bg">
<div class="container" in:fade={{ duration: 300, delay: 300 }}>
    <header class="page-header">
        <h1>Personal Projects</h1>
        <p class="subtext">A comprehensive collection of my most recent personal work.</p>
    </header>

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
                                src={`${base}${image.url}`} 
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

    <div class="ending-statement" in:fade={{ duration: 500, delay: 300 }}>
        <div class="ending-statement-container">
            <div class="left-side">
                    <div class="text-reveal-container">
                        <span class="more-text">
                            More to come<span><span >.</span><span>.</span><span>.</span></span>
                        </span>
                        <div class="text-underline"></div>
                    </div>
            </div>
            <div class="right-side">
                <a href="{base}/commercial" class="next-button">
                    <div class="button-content">
                        <span class="button-text">Commercial Section</span>
                        <div class="arrow-container">
                            <span class="arrow">→</span>
                        </div>
                    </div>
                    <div class="button-background"></div>
                </a>
            </div>
        </div>
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
                <img src={`${base}${modalImage.url}`} alt={modalImage.alt} />
                <button class="close-button" on:click={closeModal}>×</button>
            </div>
        </div>
    {/if}
</div>
</div>
<style>
 /*   .bg{
        background: rgb(46,168,234);
        background: linear-gradient(90deg, rgba(46,168,234,0.7511379551820728) 0%, rgba(84,152,180,0.5998774509803921) 7%, rgba(24,86,135,0.7035189075630253) 14%, rgba(13,51,80,0.7483368347338936) 19%, rgba(2,15,24,0.7959558823529411) 50%, rgba(13,51,80,0.7455357142857143) 80%, rgba(24,86,135,0.6951155462184874) 87%, rgba(84,152,180,0.5970763305322129) 93%, rgba(46,168,234,0.7539390756302521) 100%);
        width: 100%;
        position: static;
    }    ¯\_(ツ)_/¯ */ 
    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 5px;
    }

    .page-header {
        text-align: center;
        padding: 80px 0 40px;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 0;
        background: linear-gradient(to right, #ffffff, #50aaf1);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 20px rgba(80, 170, 241, 0.3);
        text-align: center;
    }

    .subtext {
        font-size: 1.2rem;
        color: #a0a0a0;
        margin: 20px 0 0;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
        text-align: center;
    }

    .projects-container {
        padding: 40px 0;
    }

    .project-section {
        display: flex;
        position: relative;
        gap: 40px;
        margin-bottom: 100px;
        border-radius: 24px;
        padding: 30px;
        background: linear-gradient(to left, rgba(32, 64, 96, 0.9), rgba(8, 15, 30, 0.2));
        box-shadow: -8px 0 30px rgba(32, 64, 96, 0.15);
        transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .project-section.right {
        flex-direction: row-reverse;
        background: linear-gradient(to right, rgba(32, 64, 96, 0.9), rgba(8, 15, 30, 0.2));
        box-shadow: 8px 0 30px rgba(32, 64, 96, 0.15);
    }

    .content-column {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .content-column.images {
        gap: 40px;
    }

    .content-column.text {
        position: sticky;
        top: 8vh;
        align-self: flex-start;
        height: fit-content;
    }

    .image-wrapper {
        margin: 0 auto;
        border-radius: 12px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.05);
        position: relative;
        cursor: pointer;
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

    .image-wrapper img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.4s ease;
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

    .expand-icon {
        color: white;
        mix-blend-mode: difference;
        font-size: 2rem;
        transform: translateY(20px);
        transition: transform 0.3s ease;
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

    .text-content {
        padding: 40px;
        transform: translateY(20px);
        transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .text-content.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    
 

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #ffffff;
    }

    p {
        font-size: 1.4rem;
        line-height: 1.6;
        color: #a0a0a0;
        text-align: left;
    }

    @media (max-width: 768px) {
        .page-header {
            padding: 60px 0 30px;
        }

        .video-wrapper {
            margin-bottom: 20px;
        }

        h1 {
            font-size: 2.5rem;
            
        }

        .subtext {
            font-size: 1rem;
            padding: 0 20px;
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
            padding: 5px;
        }

        h2 {
            font-size: 2rem;
        }

        .image-wrapper {
            width: 100% !important;
        }
        p{
            font-size: 14px;
            
        }
        .modal-content {
            max-width: 95vw;
        }

        .close-button {
            top: -40px;
            right: 0;
        }
        .ending-statement {
            margin: 60px 0;
            padding: 40px 0;
        }

        .ending-statement-container {
            flex-direction: column;
            gap: 40px;
        }

        .left-side, .right-side {
            width: 100%;
            text-align: center;
        }
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
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
    }

    .modal-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
    }

    .close-button {
        position: absolute;
        top: -40px;
        right: -40px;
        background: none;
        border: none;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
        padding: 10px;
        line-height: 1;
        transition: transform 0.2s ease;
    }

    .close-button:hover {
        transform: scale(1.1);
    }

    .ending-statement {
        margin: 100px 0;
        padding: 60px 0;
        position: relative;
        overflow: hidden;
        border-radius: 16px;
        background: rgba(8, 15, 30, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .ending-statement::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 85%;
        height: 1px;
        background: linear-gradient(90deg, 
            rgba(80, 170, 241, 0) 0%, 
            rgba(80, 170, 241, 0.4) 20%, 
            rgba(80, 170, 241, 0.7) 50%,
            rgba(80, 170, 241, 0.4) 80%,
            rgba(80, 170, 241, 0) 100%);
    }

    .ending-statement-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .left-side, .right-side {
        flex: 1;
        position: relative;
    }

    .left-side {
        text-align: left;
    }

    .right-side {
        text-align: right;
    }


    .text-reveal-container {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .more-text {
        font-size: 2.8rem;
        font-weight: 700;
        background: linear-gradient(45deg, #ffffff 10%, #50aaf1 80%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        letter-spacing: 0.5px;
    }
    
    
  
    
    .text-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #50aaf1, #ffffff);
        transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow: 0 0 10px rgba(80, 170, 241, 0.6);
    }
    
  

    .next-button {
        display: inline-flex;
        position: relative;
        text-decoration: none;
        overflow: hidden;
        border-radius: 30px;
        z-index: 1;
    }
    
    .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 35px;
        position: relative;
        z-index: 2;
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    .button-text {
        font-size: 1.2rem;
        font-weight: 500;
        color: #ffffff;
        letter-spacing: 0.5px;
        margin-right: 10px;
    }
    
    .arrow-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        position: relative;
        overflow: hidden;
    }
    
    .arrow {
        display: inline-block;
        font-size: 1.8rem;
        position: relative;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .button-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
            rgba(32, 64, 96, 0.8) 0%, 
            rgba(50, 100, 160, 0.6) 50%, 
            rgba(80, 170, 241, 0.4) 100%);
        box-shadow: 
            0 6px 20px rgba(80, 170, 241, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
        z-index: 1;
        transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        border-radius: 30px;
    }
    
    .next-button:hover .button-content {
        transform: translateY(-3px);
    }
    
    .next-button:hover .arrow {
        transform: translateX(5px);
    }
    
    .next-button::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 150%;
        height: 100%;
        background: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%);
        transform: translateX(-100%) skewX(-15deg);
        transition: transform 0.6s ease;
    }
    
    .next-button:hover::after {
        transform: translateX(100%) skewX(-15deg);
    }
    
    .next-button:hover .button-background {
        background: linear-gradient(135deg,
            rgba(50, 100, 160, 0.8) 0%, 
            rgba(80, 170, 241, 0.6) 50%, 
            rgba(100, 200, 255, 0.4) 100%);
        box-shadow: 
            0 8px 25px rgba(80, 170, 241, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
    }
    .next-button:hover {
        box-shadow: 0 0 30px rgba(80, 170, 241, 0.3);
    }

    .more-text {
        position: relative;
    }

    .more-text::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, 
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%, 
            rgba(255, 255, 255, 0) 100%);
        background-size: 200% 100%;
        animation: shimmer 3s infinite linear;
        transform: skewX(-20deg);
    }
    @keyframes shimmer {
        0% { background-position: -100% 0; }
        100% { background-position: 200% 0; }
    }
</style>
