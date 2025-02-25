<script>
    import { page } from '$app/stores';
</script>

<link rel="stylesheet" href="/styles/global.css" />

<header>
    <div class="header-container">
        <!-- left side -->
        <div class="left-info unblurred">
            <img src="/images/david-icon.png" class ="logo"/>
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

<main>
    <slot />
</main>

<footer>
    <p>↑
    </p>
    <p>Back to the top</p>
</footer>

<style>
    
    header { /* header styling */
        position: relative;
        background-image: linear-gradient(0deg, #04121d 0%, #172633 60%, #50aaf1 100%);
        padding: 1rem 8rem;
        overflow: hidden;   
    }

  
    .header-container {   /* aligns everything */
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

  
    .left-info {
        color: white;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .status {
        color: #32CD32; /* green color  - oepn to work' */
        font-size: 12px;
    }


    .right-info {     
        color: white;
        font-weight: bold;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

   
    .nav-blur {  /* navigation styling */
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0%;
        display: flex;
        /*backdrop-filter: blur(8px); blurs the behind, save for later */ 
        padding: 0.5rem 1.5rem;
        border-radius: 8px;
        vertical-align: text-top;
        font-size: 20px;
    }

    nav ul { /* the item decorations in the middle*/
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 8rem;
    }

    nav ul li a { /* decoration */
        text-decoration: none;
        color: white;
        font-weight: bold;
        transition: filter 0.3s ease-in-out;
    }

    
    .blurred { /* blurred state*/
        filter: blur(3px);
    }

    
    .unblurred { /* unblurred state */
        filter: blur(0px);
    }

    main {
        padding: 20px;
        text-align: center;
    }

    footer {
        background-image: linear-gradient(180deg, #04121d 0%, #172633 60%, #50aaf1 100%);
        color: white;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>