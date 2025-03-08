<script lang="ts">
    import '@fontsource-variable/hanken-grotesk';
    import { page } from '$app/stores'; 
    import BlackHoleShader from '$lib/BlackHoleShader.svelte';
    let y: number = 0;  // current user y height
    let prevY: number = 0; // last logged y 
    let isHeaderVisible: boolean = true; 

    function handleScroll() {
        if (y > prevY && isHeaderVisible) {
            isHeaderVisible = false; 
        } else if (y < prevY && !isHeaderVisible) {
            isHeaderVisible = true; 
        }
        prevY = y; // updates the previous with the newest y position
    }
</script>

<svelte:window on:scroll={handleScroll} bind:scrollY={y} /> <!-- binds the scroll to the variable y-->

<link rel="stylesheet" href="/styles/global.css" />

<header class={isHeaderVisible ? 'fade-in' : 'fade-out'}> <!-- depending on if the header is visible, switch between fadein/fadeout-->
    <div class="header-container">
        <!-- left side -->
        <div class="left-info unblurred">
            <img src="/images/david-icon.png" class="logo" />
            <span>3D GENERALIST</span>
            <span class="status">OPEN TO WORK ●</span>
        </div>

        <!-- center nav -->
        <nav class="nav-blur">
            <ul>
                <li>
                    <a href="/" class="{$page.url.pathname === '/' ? 'unblurred' : 'blurred'}">HOME</a>
                </li>
                <li>
                    <a href="/personal" class="{$page.url.pathname === '/personal' ? 'unblurred' : 'blurred'}">PERSONAL</a>
                </li>
                <li>
                    <a href="/commercial" class="{$page.url.pathname === '/commercial' ? 'unblurred' : 'blurred'}">COMMERCIAL</a>
                </li>
                <li>
                    <a href="/about_me" class="{$page.url.pathname === '/about_me' ? 'unblurred' : 'blurred'}">ABOUT ME</a>
                </li>
            </ul>
        </nav>

        <!-- right side -->
        <div class="right-info unblurred">
            <span> About Me</span>
            <span>Czech Republic</span>
            <span>Near Prague</span>
        </div>
    </div>
</header>
<div class="shader-background">
    <BlackHoleShader />
    
    </div>
<main>
    <slot />
</main>

<footer>
    <p>↑</p>
    <p>Back to the top</p>
</footer>

<style>
  header {
        top: 0;
        position: sticky;
        z-index: 2;
        opacity: 1;
        transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out; /* header transformation settings for the fade in and fade out */
        
    }

    .fade-in { /* header fades in */
        opacity: 1;
        transform: translateY(0); 
    }

    .fade-out { /* header fades out */
        opacity: 0;
        transform: translateY(-100%); 
    }

    .header-container {
        background-image: linear-gradient(0deg, #04121d00 0%, #17263318 60%, #50abf157 100%);
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        top: 0%;
        display: flex;
        padding: 2rem 1.5rem;
        border-radius: 8px;
        vertical-align: text-top;
        font-size: 20px;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 8rem;
    }

    nav ul li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        transition: filter 0.3s ease-in-out;
    }

    .blurred {
        filter: blur(1.8px);
    }

    .unblurred {
        filter: blur(0px);
    }

    main {
        padding: 20px;
        text-align: center;
    }

    footer {
        background-image: linear-gradient(180deg, #04121d00 0%, #17263300 60%, #50aaf1 100%);
        color: white;
        text-align: center;
        padding: 1rem;
        bottom: 0;
        position: sticky;
        width: 100%;
    }
    .shader-background{
        opacity: 0.3;
    }
</style>