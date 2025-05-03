<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, scale} from 'svelte/transition';
    import { cubicOut} from 'svelte/easing';
    import { base } from '$app/paths';
    interface Project {
        id: number;
        title: string;
        description: string;
        problem?: string;
        solution?: string;
        outcome?: string;
        images: {
            url: string;
            alt: string;
            width?: string; // Optional width override
        }[];
        videoUrl?: string;
        isRight: boolean;
        credits?: {
            company: {
                name: string;
                logo?: string;
            };
            team: {
                name: string;
                role: string;
            }[];
        };
    }

    const projects: Project[] = [
        {
            id: 1,
            title: "Antarctica Scene",
            description: "An environment for a scene I helped to create",
            problem: "I was tasked with the creation of the environment for a scene, we needed to create a realistic environment, that would complement the jewelery in the middle of the scene.",
            solution: "I first started with the modeling of the environment, I used a combination of sculpting, importing heightmaps, and texturing based on its's Z values, to create a realistic arctic environment.",
            outcome: "The resulting environment was a perfect base for the scene, it added a sense of realism and dept, while keeping the focus on the jewelery, making the entire scene otheworldly and grounded.",
            videoUrl: "https://player.vimeo.com/video/1069158462",
            images: [
                { url: "/images/commercial/antarctic/antarctica-bts.gif", alt: "Antarctica BTS" },
            ],
            credits: {
                company: {
                    name: "Krystof Jezek",
                    logo: "/images/krystof-logo.png"  
                },
                team: [
                    {
                        name: "David Hajek",
                        role: "Environment Modeling, Base Textures, Composition,  Scene Concept Artist"
                    },
                    {
                        name: "Krystof Jezek",
                        role: "Art Direction, Rendering, Textures, Lighting, Animation, Sound, Compositing"
                    }
                ]
            },
            isRight: false
        },
        {
            id: 2,
            title: "A Witch Cries, So Comes the End",
            description: "A series of background renders that were used for a trailer for a newly released novel",
            problem: "I was tasked with the creation of Background renders for a novel trailer, the client needed to maintain a degree of stylization, as there would always be a character occupying the image.",
            solution: "I needed to create compositions that would allow for the client to place the characters in the foreground, without the worry of the background taking too much attention away from the voice acted characters. ",
            outcome: "The renders created, set the mood of the trailer perfectly, while maintaing the mix of realism and stylization.",
            videoUrl: "https://www.youtube.com/embed/LM-yDnRP4PI",
            images: [
                { url: "/images/commercial/mira/mansionpost.png", alt: "Side view of the mansion from outside the gate"},
                { url: "/images/commercial/mira/frontmansion2.png", alt: "Mansion front view"},
                { url: "/images/commercial/mira/rooftopFinal.png", alt: "Rooftops during thunderstorm"},
                { url: "/images/commercial/mira/street.png", alt: "Abandoned streets"},
            ],
            credits: {
                company: {
                    name: "Yoimira Entertainment",
                    logo: "/images/mira-logo.png"  
                },
                team: [
                    {
                        name: "David Hajek",
                        role: "CG Visualization, Rendering, Texturing, Lighting"
                    },
                    {
                        name: "Mira Lumière",
                        role: "Art Direction, Video Creation"
                    }
                ]
            },
            isRight: true
        },
        {
            id: 3,
            title: "KRAJÁČ",
            description: "Logo creation, 3D Assets, Transitions",
            problem: "I was tasked with the creation of a Logo, and helping with particular 3D assets for the video series Krajáč. ",
            solution: "As Krajáč is a hockey themed series, I needed to nail the hockey aesthethic, I wanted the logo to scream Hockey. After discussing it further, we picked out a font and I started to create the logo while staying true to the Hockey aesthethic. I also created a transition for the series, where a hockey puck covers the screen and flies out.",
            outcome: "The logo was very well received, aswell as the transition, as both fit very well into our own Hockey-Krajáč aesthethic we have created.",
            videoUrl: "https://www.youtube.com/embed/pjrx30rcJ3A?si=A--97fr2R4mZhuRy",
            images: [
                { url: "/images/commercial/krajac/logo_main.png", alt: "Krajac Logo"},
                { url: "/images/commercial/krajac/transition.gif", alt: "Transition"},
            ],
            credits: {
                company: {
                    name: "Vladimir Dykast",
                    logo: "/images/dyky-logo.png"  
                },
                team: [
                    {
                        name: "David Hajek",
                        role: "Transitions, Logo, Visual Identity"
                    },
                    {
                        name: "Vladimir Dykast",
                        role: "Art Direction, Video Creation"
                    },
                    {
                        name: "Jachym Wizz",
                        role: "Intro Cinematic, Recording, VFX"
                    },
                    {
                        name: "Vojtěch Štor",
                        role: "Recording, VFX"
                    }
                ]
            },
            isRight: false
        },
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

<div class="container" in:fade={{ duration: 300, delay: 300 }}>
    <header class="page-header">
        <h1>Commercial Projects</h1>
        <p class="subtext">A comprehensive collection of my favorite projects I had to pleasure to work on.</p>
    </header>

    <div class="projects-container">
        {#each projects as project, i}
            <section 
                class="project-section" 
                class:right={project.isRight}
                bind:this={sections[i]}>
                <div class="content-column images">
                    {#if project.videoUrl}
                    <div class="video-wrapper" class:vertical={project.videoUrl.includes('vimeo')} class:horizontal={!project.videoUrl.includes('vimeo')}> 
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
                        
                        {#if project.problem}
                            <div class="problem-solution-section">
                                <div class="ps-block problem">
                                    <h3>Problem</h3>
                                    <p>{project.problem}</p>
                                </div>
                                {#if project.solution}
                                    <div class="ps-block solution">
                                        <h3>Solution</h3>
                                        <p>{project.solution}</p>
                                    </div>
                                {/if}
                                {#if project.outcome}
                                    <div class="ps-block outcome">
                                        <h3>Outcome</h3>
                                        <p>{project.outcome}</p>
                                    </div>
                                {/if}
                            </div>
                        {/if}
                        
                        {#if project.credits}
                            <div class="credits-section">
                                <h3>Credits</h3>
                                <div class="company-info">
                                    {#if project.credits.company.logo}
                                        <img src={`${base}${project.credits.company.logo}`} alt={project.credits.company.name} class="company-logo" />
                                    {/if}
                                    <span class="company-name">{project.credits.company.name}</span>
                                </div>
                                <div class="team-credits">
                                    {#each project.credits.team as member}
                                        <div class="team-member">
                                            <span class="member-name">{member.name}</span>
                                            <span class="member-role">{member.role}</span>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </section>
        {/each}
    </div>

    <div class="ending-statement">
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
                <a href="{base}/retro" class="next-button">
                    <div class="button-content">
                        <span class="button-text">Retro Section</span>
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

<style>
    .container {
        max-width: 1600px;
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
        max-width: 60%;
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
        min-height: 100vh;
        position: relative;
        gap: 40px;
        margin-bottom: 100px;
    }

    .project-section.right {
        flex-direction: row-reverse;
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
        opacity: 1;
        transform: translateY(20px);
        transition: all 0.5s ease;
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
        font-size: 1rem;
        line-height: 1.6;
        color: #a0a0a0;
        text-align: left;
    }

    @media (max-width: 768px) {
        .page-header {
            padding: 60px 0 30px;
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
            padding: 20px;
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

        .more-text {
            font-size: 2.2rem;
        }

        .next-button {
            width: 100%;
            justify-content: center;
        }

        .button-content {
            padding: 14px 30px;
            justify-content: center;
            width: 100%;
        }
        .modal-content {
            max-width: 95vw;
        }

        .close-button {
            top: -40px;
            right: 0;
        }

        .problem-solution-section {
            margin-top: 20px;
            gap: 15px;
        }

        .ps-block {
            padding: 15px 20px;
        }

        .ps-block h3 {
            font-size: 1.4rem;
        }

        .ps-block p {
            font-size: 1rem;
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

   
    /* Problem-Solution Section Styles */
    .problem-solution-section {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .ps-block {
        padding: 10px 15px;
        border-radius: 12px;
        transition: all 0.3s ease;
        border-left: 4px solid transparent;
    }

    .ps-block:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .ps-block.problem {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(216, 65, 65, 0.1));
        border-left-color: rgba(216, 65, 65, 0.6);
    }

    .ps-block.solution {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(65, 179, 124, 0.1));
        border-left-color: rgba(65, 179, 124, 0.6);
    }

    .ps-block h3 {
        font-size: 1.6rem;
        margin-bottom: 10px;
        font-weight: 600;
        background: linear-gradient(to right, #ffffff, #a0a0a0);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
    }

    .ps-block.problem h3 {
        background: linear-gradient(to right, #ffffff, #ff6b6b);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .ps-block.solution h3 {
        background: linear-gradient(to right, #ffffff, #65cf9c);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .ps-block.outcome {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(65, 105, 225, 0.1));
        border-left-color: rgba(65, 105, 225, 0.6);
    }

    .ps-block.outcome h3 {
        background: linear-gradient(to right, #ffffff, #6495ED);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .ps-block p {
        font-size: 0.9;
        line-height: 1.6;
        color: #c0c0c0;
    }
    

   

    .video-wrapper {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto 40px;
    height: 0;
    padding-bottom: 177.78%; /* Default for vertical videos (9:16) */
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
.video-wrapper.vertical {
    padding-bottom: 125.78%; /* For 9:16 videos */
}
.video-wrapper.horizontal {
    padding-bottom: 56.25%; /* For 16:9 videos */
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

    .credits-section {
        margin-top: 30px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
    }

    .credits-section h3 {
        font-size: 1.6rem;
        margin-bottom: 20px;
        background: linear-gradient(to right, #ffffff, #50aaf1);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .company-info {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
    }

    .company-logo {
        height: 50px;
        object-fit: contain;
    }

    .company-name {
        font-size: 1.2rem;
        color: #ffffff;
        font-weight: 500;
    }

    .team-credits {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .team-member {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 8px;
    }

    .member-name {
        color: #ffffff;
        font-weight: 500;
    }

    .member-role {
        color: #a0a0a0;
        font-size: 0.9rem;
    }
</style>