<script lang="ts">
    import '@fontsource-variable/hanken-grotesk';
    import { page } from '$app/stores'; 
    import { onMount } from 'svelte';;
    import { fly, fade } from 'svelte/transition';
    import CustomCursor from '$lib/CustomCursor.svelte';

    let y: number = 0;  // current user y height
    let prevY: number = 0; // last logged y 
    let isHeaderVisible: boolean = true;
    let isMobileMenuOpen: boolean = false;
    let mounted: boolean = false;
    let innerWidth: number;
    let innerHeight: number;
    let scrollProgress = 0;

    function calculateScrollProgress() {
        const docElement = document.documentElement;
        const windowHeight = docElement.clientHeight;
        const docHeight = docElement.scrollHeight - windowHeight;
        scrollProgress = (y / docHeight) * 100;
    }

    onMount(() => {
        mounted = true;
        
        // Close mobile menu on resize if screen becomes desktop size
        window.addEventListener('resize', () => {
            if (innerWidth > 768 && isMobileMenuOpen) {
                isMobileMenuOpen = false;
            }
        });
        
        return () => {
            window.removeEventListener('resize', () => {});
        };
    });

    function handleScroll() {
        if (y > prevY && y > 100 && isHeaderVisible) {
            isHeaderVisible = false; 
            // Don't auto-close mobile menu when scrolling
            // isMobileMenuOpen = false;
        } else if (y < prevY && !isHeaderVisible) {
            isHeaderVisible = true; 
        }
        prevY = y; // updates the previous with the newest y position
    }
    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        
        // Prevent scrolling when menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

<svelte:window 
    on:scroll={() => {
        handleScroll();
        calculateScrollProgress();
    }} 
    bind:scrollY={y} 
    bind:innerWidth 
    bind:innerHeight 
/> <!-- binds the scroll to the variable y-->
<CustomCursor />

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</svelte:head>

<link rel="stylesheet" href="/styles/global.css" />
<header class={isHeaderVisible ? 'fade-in' : 'fade-out'}>
    {#if mounted}
    <div class="header-container" transition:fade={{ duration: 300 }}>
        <!-- left side -->
        <div class="left-info unblurred">
            <img src="/images/david-icon.png" class="logo" alt="David Icon" />
            <span>3D GENERALIST</span>
            <span class="status">OPEN TO WORK ●</span>
        </div>

        <!-- center nav - desktop -->
        <nav class="nav-blur desktop-nav">
            <ul>
                <li>
                    <a href="/" class="{$page.url.pathname === '/' ? 'nav-link active' : 'nav-link'}" data-sveltekit-preload-data>HOME</a>
                </li>
                <li>
                    <a href="/personal" class="{$page.url.pathname === '/personal' ? 'nav-link active' : 'nav-link'}" data-sveltekit-preload-data>PERSONAL</a>
                </li>
                <li>
                    <a href="/commercial" class="{$page.url.pathname === '/commercial' ? 'nav-link active' : 'nav-link'}" data-sveltekit-preload-data>COMMERCIAL</a>
                </li>
                <li>
                    <a href="/retro" class="{$page.url.pathname === '/retro' ? 'nav-link active' : 'nav-link'}" data-sveltekit-preload-data>RETRO</a>
                </li>
                <li>
                    <a href="/about_me" class="{$page.url.pathname === '/about_me' ? 'nav-link active' : 'nav-link'}" data-sveltekit-preload-data>ABOUT ME</a>
                </li>
                <li>
                    <a href="/contact" class="{$page.url.pathname === '/contact' ? 'nav-link active' : 'nav-link'}" data-sveltekit-preload-data>CONTACT</a>
                </li>
            </ul>
        </nav>

        <!-- right side -->
        <div class="right-info">
            <span>Czech Republic</span>
            <span>Near Prague</span>
        </div>
    </div>
    {/if}
</header>

<div class="scroll-progress-bar">
    <div class="progress" style="width: {scrollProgress}%" />
</div>

<!-- Mobile menu navigation -->
{#if mounted}
    <!-- Desktop navigation has been kept in the header, this is the mobile slide-in menu -->
    <nav class={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
            <li>
                <a 
                    href="/" 
                    class:active={$page.url.pathname === '/'} 
                    on:click={() => toggleMobileMenu()}
                >
                    HOME
                </a>
            </li>
            <li>
                <a 
                    href="/personal" 
                    class:active={$page.url.pathname === '/personal'} 
                    on:click={() => toggleMobileMenu()}
                >
                    PERSONAL
                </a>
            </li>
            <li>
                <a 
                    href="/commercial" 
                    class:active={$page.url.pathname === '/commercial'} 
                    on:click={() => toggleMobileMenu()}
                >
                    COMMERCIAL
                </a>
            </li>
            <li>
                <a 
                    href="/retro" 
                    class:active={$page.url.pathname === '/retro'} 
                    on:click={() => toggleMobileMenu()}
                >
                    RETRO
                </a>
            </li>
            <li>
                <a 
                    href="/about_me" 
                    class:active={$page.url.pathname === '/about_me'} 
                    on:click={() => toggleMobileMenu()}
                >
                    ABOUT ME
                </a>
            </li>
            <li>
                <a 
                    href="/contact" 
                    class:active={$page.url.pathname === '/contact'} 
                    on:click={() => toggleMobileMenu()}
                >
                    CONTACT
                </a>
            </li>
        </ul>
    </nav>
    <!-- Overlay for mobile menu background -->
    {#if isMobileMenuOpen}
        <div 
            class="mobile-overlay" 
            on:click={() => toggleMobileMenu()}
            transition:fade={{ duration: 300 }}
        ></div>
    {/if}
{/if}
<div class="shader-background">
    
    
    </div>
<main>
    <slot />
</main>
<footer>
    <div class="footer-content">
        <div class="footer-grid">
            <div class="footer-column left">
                    <h3>Connect</h3>
                    <a href="mailto:david.mhaace@gmail.com" class="footer-link email-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>david.mhaace@gmail.com</span>
                    </a>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/david-h%C3%A1jek-98901b292/" target="_blank" class="social-link">
                            <img src="/images/linkedin.png" alt="LinkedIn" class="footer-icon" />
                        </a>
                        <a href="https://www.artstation.com/naden" target="_blank" class="social-link">
                            <img src="/images/artstation.png" alt="ArtStation" class="footer-icon" />
                        </a>
                        <a href="https://mhaace.itch.io/" target="_blank" class="social-link">
                            <img src="/images/itch.png" alt="Itch.io" class="footer-icon" />
                        </a>
                        <a href="https://www.instagram.com/dejvid.hajek/?hl=en" target="_blank" class="social-link">
                            <img src="/images/instagram.png" alt="Instagram" class="footer-icon" />
                        </a>
                    </div>
                </div>
            
            
            <div class="footer-column center">
                <div class="back-to-top-container">
                    <button class="back-to-top" on:click={scrollToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                        Back to top
                    </button>
                </div>
            </div>

            <div class="footer-column right">
                <h3>Quick Links</h3>
                <nav class="footer-nav">
                    <ul>
                        <li><a href="/" class="footer-link">Home</a></li>
                        <li><a href="/personal" class="footer-link">Personal</a></li>
                        <li><a href="/commercial" class="footer-link">Commercial</a></li>
                        <li><a href="/retro" class="footer-link">Retro</a></li>
                        <li><a href="/about_me" class="footer-link">About Me</a></li>
                        <li><a href="/contact" class="footer-link">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </div>
        
        <div class="footer-bottom">
            <p>&copy; {new Date().getFullYear()} David Hajek Portfolio | All Rights Reserved</p>
            <p class="credits">Designed & Developed with &lt3 by David</p>
        </div>
    </div>
</footer>
<button 
    class="menu-toggle" 
    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} 
    on:click={toggleMobileMenu}
    aria-expanded={isMobileMenuOpen}
>
    <span class={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </span>
</button>
<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(body) {
        margin: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    header {
        top: 0;
        position: sticky;
        z-index: 10;
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        width: 100;
        background-color: rgba(4, 18, 29, 0.733);
        backdrop-filter: blur(12px) saturate(180%);
        -webkit-backdrop-filter: blur(12px) saturate(180%);
        border-bottom: 1px solid rgba(80, 170, 241, 0.15);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .scroll-progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: rgba(80, 170, 241, 0.1);
        z-index: 1002;
    }

    .scroll-progress-bar .progress {
        height: 100%;
        background: linear-gradient(90deg, #50aaf1, #82c6ff);
        transition: width 0.2s ease-out;
        box-shadow: 0 0 10px rgba(80, 170, 241, 0.5);
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .fade-out {
        opacity: 0;
        transform: translateY(-100%);
    }

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        padding: 10px 20px;
    }
    
    /* Hamburger Menu Styles */
    .menu-toggle {
        display: none;
        @media (max-width: 768px) {
            display: flex !important;
        }
        background: rgba(4, 18, 29, 0.8);
        border: 1px solid rgba(80, 170, 241, 0.3);
        border-radius: 6px;
        cursor: pointer;
        position: fixed;
        right: 20px;
        top: 16px;
        z-index: 1100;
        width: 40px;
        height: 40px;
        padding: 8px 5px;
        transition: all 0.3s ease;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3), 0 0 5px rgba(80, 170, 241, 0.2);
    }
    
    .menu-toggle:hover {
        transform: scale(1.05);
        background: rgba(4, 18, 29, 0.95);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.4), 0 0 8px rgba(80, 170, 241, 0.3);
    }
    
    .menu-toggle:focus {
        outline: none;
    }
    
    .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 24px;
        width: 30px;
    }
    
    .bar {
        display: block;
        width: 100%;
        height: 3px;
        background-color: white;
        border-radius: 3px;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        box-shadow: 0 0 10px rgba(80, 170, 241, 0.7);
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
        background-color: #50aaf1;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
        transform: translateX(-10px);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
        background-color: #50aaf1;
    }
    
    /* Mobile menu overlay */
    .mobile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        z-index: 990;
        transition: opacity 0.3s ease;
        pointer-events: auto;
        visibility: visible;
    }
    /* Mobile Navigation */
    .mobile-nav {
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        max-width: 350px;
        height: 100vh;
        background-color: rgba(4, 18, 29, 0.95);
        backdrop-filter: blur(12px) saturate(180%);
        -webkit-backdrop-filter: blur(12px) saturate(180%);
        z-index: 1000;
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateX(100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 80px 20px 20px;
        border-left: 1px solid rgba(80, 170, 241, 0.2);
        overflow-y: auto;
        overflow-x: hidden;
        pointer-events: all;
        visibility: visible;
    }
    
    .mobile-nav.active {
        transform: translateX(0);
        right: 0;
        pointer-events: auto;
        visibility: visible;
    }
    
    .mobile-nav ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 10px 0;
        width: 100%;
        position: relative;
        z-index: 1020;
        pointer-events: auto;
    }
    
    .mobile-nav ul li {
        text-align: center;
        transition: all 0.4s ease;
        transition-delay: calc(var(--i, 0) * 0.1s);
        opacity: 1;
        transform: translateX(0);
    }
    
    .mobile-nav.active ul li {
        opacity: 1;
        transform: translateX(0);
    }
    
    .mobile-nav.active ul li:nth-child(1) { --i: 1; }
    .mobile-nav.active ul li:nth-child(2) { --i: 2; }
    .mobile-nav.active ul li:nth-child(3) { --i: 3; }
    .mobile-nav.active ul li:nth-child(4) { --i: 4; }
    
    .mobile-nav ul li a {
        font-size: 24px;
        display: block;
        padding: 15px;
        width: 100%;
        border-radius: 8px;
        transition: all 0.3s ease;
        color: white;
        text-decoration: none;
        font-weight: 500;
        position: relative;
        overflow: hidden;
        z-index: 1010;
        cursor: pointer;
        pointer-events: auto;
        user-select: none;
        -webkit-tap-highlight-color: rgba(80, 170, 241, 0.2);
    }
    
    .mobile-nav ul li a::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #50aaf1;
        transition: width 0.4s ease;
        pointer-events: none;
    }
    
    .mobile-nav ul li a:hover::before,
    .mobile-nav ul li a.active::before {
        width: 100%;
    }
    
    .mobile-nav ul li a:hover,
    .mobile-nav ul li a.active {
        background-color: rgba(80, 170, 241, 0.3);
        transform: translateY(-2px);
        color: #50aaf1;
        text-shadow: 0 0 10px rgba(80, 170, 241, 0.7);
        box-shadow: 0 0 15px rgba(80, 170, 241, 0.3);
    }
    
    .mobile-nav ul li a:active {
        transform: translateY(0);
        background-color: rgba(80, 170, 241, 0.5);
        box-shadow: 0 0 8px rgba(80, 170, 241, 0.4);
    }
    

    .left-info {
        margin-top: 10px;
        margin-left: 20px;
        color: white;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .status {
        color: #32CD32;
        font-size: 12px;
    }

    .right-info {
        margin-top: 10px;
        margin-right: 20px;
        color: white;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .nav-blur {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem;
        z-index: 1001;
        font-size: 18px;
        mix-blend-mode:difference
    }

    /* Active link styling */
    .nav-blur ul li a.active {
        color: #50AAF1;
        position: relative;
    }

    .nav-blur ul li a.active::after {
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #50AAF1;
        transform: scaleX(1);
    }

    :global(a[aria-current="page"]) {
        color: #50AAF1 !important;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 2rem;
    }
    
    .desktop-nav ul li {
        position: flex;
    }
    
    .nav-link {
        position: relative;
        color: white;
        text-decoration: none;
        font-weight: 500;
        border-radius: 10px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-link:hover {
        color: #50aaf1;
        transform: translateY(-2px);
        text-shadow: 0 0 15px rgba(80, 170, 241, 0.4);
    }
    
    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #50aaf1;
        transition: width 0.3s ease;
    }
    
    .nav-link:hover::after,
    .nav-link.unblurred::after {
        width: 100%;
    }
    
    
    .blurred {
        filter: blur(0.5px);
        opacity: 0.8;
        transition: all 0.3s ease;
    }
    
    


    main {
        flex: 1;
        text-align: center;
        width: 100%;
    }

    footer {
        z-index: 10;
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        width: 100%;
        background-color: rgba(4, 18, 29, 0.9);
        backdrop-filter: blur(12px) saturate(180%);
        -webkit-backdrop-filter: blur(12px) saturate(180%);
        border-top: 1px solid rgba(80, 170, 241, 0.25);
        box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.2);
        background-image: linear-gradient(180deg, #04121d 0%, #172633 50%, rgba(80, 170, 241, 0.2) 100%);
        color: white;
        padding: 4rem 2rem 1rem;
        margin-top: auto;
        position: relative;
    }
    
    .footer-content {
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
    }
    
    .footer-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        align-items: start;
        max-width: 1400px;
        margin: 0 auto;
    }

    .footer-column {
        display: flex;
        flex-direction: column;
    }
    
    .footer-column.center {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 3.5rem;  /* Align with other columns */
    }
    .footer-column.right {
        display: flex;
        justify-content: right;
        align-items: flex-end;
        text-align: right;
    }

    .footer-column.right .footer-link {
        text-align: right;
        display: inline-block;
        width: fit-content;
    }
    
    .back-to-top-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .footer-column h3 {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        position: relative;
        color: #fff;
        font-weight: 600;
    }
    
    .footer-column h3::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 3px;
        background: linear-gradient(90deg, #50aaf1, #82c6ff);
        border-radius: 3px;
        transition: width 0.3s ease;
    }
    
    .footer-column.right h3::after {
        left: auto;
        right: 0;
        background: linear-gradient(90deg, #82c6ff, #50aaf1);
    }
    
    .footer-column:hover h3::after {
        width: 60px;
    }
    
    .footer-nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        align-items: flex-end;
    }
    
    .footer-link {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        padding: 3px 0;
    }
    
    .footer-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
        background-color: #50aaf1;
        transition: width 0.3s ease-out;
        transform-origin: right;
    }
    
    .footer-link:hover {
        color: #50aaf1;
        transform: translateX(-5px);
        text-shadow: 0 0 10px rgba(80, 170, 241, 0.5);
    }
    
    .footer-link:hover::after {
        width: 100%;
    }
    
    .social-links {
        display: flex;
        gap: 1.5rem;
        margin-top: 1.5rem;
        
    }
    
    .email-link {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.95rem;
    }
    
    .email-link:hover {
        color: #50aaf1;
        transform: translateY(-2px);
    }
    
    .email-link svg {
        transition: all 0.3s ease;
    }
    
    .email-link:hover svg {
        stroke: #50aaf1;
        transform: scale(1.1);
    }
    
    .social-icons {
        display: flex;
        gap: 1rem;
        margin-top: 0.5rem;
    }
    
    .footer-icon {
        width: 30px;
        height: 30px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        filter: brightness(0.9) contrast(1.1);
    }
    
    .social-link {
        color: rgba(255, 255, 255, 0.8);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .social-link:hover .footer-icon {
        transform: translateY(-8px) scale(1.1);
        filter: brightness(1.2) contrast(1.2);
    }
    .footer-bottom {
        margin-top: 1rem;
        text-align: center;
        padding-top: 2rem;
        border-top: 1px solid rgba(80, 170, 241, 0.15);
    }

    /* Mobile responsive rules */
    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 0 1rem;
        }

        .footer-column.center {
            order: 3;
        }
        
        .header-container {
            flex-direction: column;
            padding: 10px 0;
        }
        
        .left-info, .right-info {
            margin: 5px 10px;
            align-items: center;
            text-align: center;
        }
        
        .desktop-nav {
        position: absolute;
       	left: 50%;
        transform: translateX(-50%);
        width: auto;
        }
        
        .menu-toggle {
            display: flex !important;
        }
        
        .footer-content {
            gap: 1rem;
        }
        .desktop-nav {
            display: none;
        }
        
        @media (max-width: 768px) {
            .desktop-nav {
                display: none;
            }
        }
    }

        
    
    /* Animation durations for mobile menu */
    @media (prefers-reduced-motion: no-preference) {
        .mobile-nav {
            transition-duration: 0.4s;
        }
        
        .mobile-nav ul li {
            transition-duration: 0.5s;
        }
    }
    
    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
        .mobile-nav, 
        .mobile-nav ul li,
        .hamburger .bar {
            transition-duration: 0.1s !important;
        }
    }
    
    @media (max-width: 480px) {
        nav ul {
            gap: 0.5rem;
        }
        
        nav ul li a {
            font-size: 14px;
        }
        
        .left-info, .right-info {
            font-size: 12px;
        }
        
        .header-container {
            padding: 8px 0;
        }
        
        .status {
            font-size: 10px;
        }
        
        .back-to-top {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
        }
        
        .footer-info {
            font-size: 0.8rem;
        }
    }
    


  .nav-link[href="/retro"]:hover,
  .nav-link[href="/retro"].active {
    color: #50aaf1;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .mobile-nav ul li a[href="/retro"] {
      font-family: 'Press Start 2P', cursive;
      font-size: 1.2em;
      letter-spacing: 1px;
    }
  }
  
  .back-to-top {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.8rem 1.5rem;
      background: rgba(80, 170, 241, 0.1);
      border: 1px solid rgba(80, 170, 241, 0.3);
      border-radius: 50px;
      color: white;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      margin: 0 auto;
  }

  .back-to-top svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
  }

  .back-to-top:hover {
      background: rgba(80, 170, 241, 0.2);
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(80, 170, 241, 0.2);
  }

  .back-to-top:hover svg {
      transform: translateY(-3px);
  }

  .back-to-top:active {
      transform: translateY(-1px);
      box-shadow: 0 3px 10px rgba(80, 170, 241, 0.1);
  }
</style>
