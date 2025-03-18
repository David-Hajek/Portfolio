<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    interface Project {
        id: number;
        title: string;
        description: string;
        images: {
            url: string;
            alt: string;
            width?: string; // Optional width override
        }[];
        isRight: boolean;
    }

    const projects: Project[] = [
        {
            id: 1,
            title: "SLAVE KNIGHT DOMINIC REDESIGN",
            description: "Dominic started out as a Matura project for my end of High School assignment, I always had a fascination with the medieval fantasy theme, and back then, I was not as proficient with 3D software as I am now, so I wanted to challange myself to recreate Dominic with my current knowledge and skillset. Staying true to the design I had set for myself baack then was my number one priority, that is why I had to create certain compromises when it came to his redesign and overall creation. Overall I was happy to finally create him the way I envisioned back then.",
            images: [
                { url: "/images/dominic/domca1.jpg", alt: "Project One Main" },
                { url: "/images/dominic/domca2.jpg", alt: "Project One Detail"},
                { url: "/images/dominic/domca3.jpg", alt: "Project One Close-up" },
                { url: "/images/dominic/domca4.jpg", alt: "Project One Detail"},
                { url: "/images/dominic/domca5.jpg", alt: "Project One Detail"},
                { url: "/images/dominic/domca6.jpg", alt: "Project One Detail"}
            ],
            isRight: false
        },
        {
            id: 2,
            title: "UNCLAIMED TERRITORY",
            description: "I was always fascinated with nature and wanted to create something bright and hopeful, this was a very fun and challenging piece, as I needed to balance performance with quality and light, alot of the lighting issues were solved using blender's native light nodes. This piece also includes a gif, showcasing my workflow and my approach to solving various problems that may arise.",
            images: [
                { url: "/images/enviroknight/david-hajek-forestfinal.jpg", alt: "Project Two Main" },
                { url: "/images/enviroknight/david-hajek-ezgif-com-animated-gif-maker.gif", alt: "Project Two Main"}
            ],
            isRight: true
        },
        {
            id: 3,
            title: "HWEI - BUST SCULPT",
            description: "Hwei was a personal challenge for me, as I always wanted to try sculpting, I initially wanted to sculpt the entire character, but due to time constraints, I settled onto creating just the bust. This model was project in which I wanted to expand my repertoaire of 3D software, as I wanted to learn more 3DCoat and Zbrush respectively",
            images: [
                { url: "images/hwei/david-hajek-hweisidefinal.jpg", alt: "Project Three Main" },
                { url: "/images/hwei/david-hajek-frontbase.jpg", alt: "Project Three Detail"}
            ],
            isRight: false
        },
        {
            id: 4,
            title: "LEGARDE- SCULPT",
            description: "Creating Legarde from Fear and Hunger was a personal challenge I set out to conquer, as I wanted to aim for more realism in this one. It was tough trying to recreate the textures just right for him, so many reference photos were mandatory for this project to work. The model of the sword was provided by my good friend Tomas Dite",
            images: [
                { url: "/images/legarde/david-hajek-legardcinema.jpg", alt: "Project Two Main" },
                { url: "/images/legarde/david-hajek-wireframe.jpg", alt: "Project Two Main" }
            ],
            isRight: true
        },
        {
            id: 5,
            title: "wow this is amazing",
            description: "more to come",
            images: [
                { url: "/images/bms/david-hajek-bms-final.jpg", alt: "Project Two Main" },
                { url: "/images/bms/david-hajek-topviewrend-final.jpg", alt: "Project Two Main" },
                { url: "/images/bms/david-hajek-bms22-final.jpg", alt: "Project Two Main" },
                { url: "/images/bms/david-hajek-bms222-final.jpg", alt: "Project Two Main" }
            ],
            isRight: false
        },
        {
            id: 6,
            title: "wow this is amazing",
            description: "more to come",
            images: [
                { url: "/images/pyro/david-hajek-workshopart.jpg", alt: "Project Two Main" },
                { url: "/images/pyro/david-hajek-pyrophoto.jpg", alt: "Project Two Main" },
                { url: "/images/pyro/david-hajek-ws2.jpg", alt: "Project Two Main" },
                { url: "/images/pyro/david-hajek-workshop.jpg", alt: "Project Two Main" }
            ],
            isRight: true
        },
        {
            id: 7,
            title: "wow this is amazing",
            description: "more to come",
            images: [
                { url: "/images/sunshower/david-hajek-heahtcliff-sunshower-min-1.jpg", alt: "Project Two Main" },
                { url: "/images/sunshower/david-hajek-basemesh-min.jpg", alt: "Project Two Main" }
            ],
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
    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 20px;
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
        font-size: 1.5rem;
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

    @media (max-width: 768px) {
        .modal-content {
            max-width: 95vw;
        }

        .close-button {
            top: -40px;
            right: 0;
        }
    }
</style>
