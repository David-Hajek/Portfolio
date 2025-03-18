<script lang="ts">
    import '@fontsource-variable/hanken-grotesk';
    import { page } from '$app/stores'; 
    import { onMount } from 'svelte';
    import BlackHoleShader from '$lib/BlackHoleShader.svelte';
    import { fly, fade } from 'svelte/transition';
    import { spring } from 'svelte/motion';
    import { quintOut } from 'svelte/easing';
    import CustomCursor from '$lib/CustomCursor.svelte';

    let y: number = 0;  // current user y height
    let prevY: number = 0; // last logged y 
    let isHeaderVisible: boolean = true;
    let isMobileMenuOpen: boolean = false;
    let mounted: boolean = false;
    let innerWidth: number;
    let innerHeight: number;

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

<svelte:window on:scroll={handleScroll} bind:scrollY={y} bind:innerWidth bind:innerHeight /> <!-- binds the scroll to the variable y-->
<CustomCursor />

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
        <button class="back-to-top" on:click={scrollToTop}>
            <span class="arrow">↑</span>
            <span>Back to the top</span>
        </button>
        <div class="footer-info">
            <p>&copy; {new Date().getFullYear()} | David Portfolio</p>
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
        opacity: 1;
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
        width: 100;
        background-color: rgba(4, 18, 29, 0.7);
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(10px) saturate(180%);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(80, 170, 241, 0.1);
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
        color: white;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: all 0.3s ease;
        position: relative;
    }
    
    .nav-link:hover {
        color: #50aaf1;
        transform: translateY(-2px);
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
    
    .nav-link.unblurred {
        color: #50aaf1;
        text-shadow: 0 0 10px rgba(80, 170, 241, 0.5);
    }
    
    .blurred {
        filter: blur(0.5px);
        opacity: 0.8;
        transition: all 0.3s ease;
    }
    
    .blurred:hover {
        filter: blur(0);
        opacity: 1;
    }
    
    .unblurred {
        filter: blur(0);
        opacity: 1;
    }

    main {
        flex: 1;
        text-align: center;
        width: 100%;
    }

    footer {
        background-image: linear-gradient(180deg, #04121d00 0%, #17263300 60%, #50aaf1 100%);
        color: white;
        text-align: center;
        padding: 3rem 1rem 1rem;
        width: 100%;
        margin-top: auto;
    }
    
    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .footer-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 0.9rem;
        opacity: 0.9;
    }
    
    .back-to-top {
        background: rgba(80, 170, 241, 0.2);
        border: 1px solid rgba(80, 170, 241, 0.3);
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    
    .back-to-top:hover {
        background: rgba(80, 170, 241, 0.4);
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(80, 170, 241, 0.2);
    }
    
    .back-to-top .arrow {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }
    
    .back-to-top:hover .arrow {
        transform: translateY(-3px);
    }
    
    /* Mobile responsive rules */
    @media (max-width: 768px) {
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
    
</style>