<script>
    import { onMount } from 'svelte';
    import { reveal } from 'svelte-reveal';
    import BlackHoleShader from '$lib/BlackHoleShader.svelte';
    onMount(() =>{
        console.log("Contacts loaded");
    });

</script>
  

<div class="container glassmorphism">
    <div class="left-side" use:reveal={{ preset: "slide", y: 50, x: 0 }}>
        <img src="/images/face.gif" alt="profile photo" class="profile"/>
        <h1 class="contacts">CONTACT/S</h1>
        <p class="contacts"><a href="mailto:example@email.com" >info@example.com</a>.</p>
        <nav class="contacts2">
            <ul>
                <a href="https://www.linkedin.com/in/david-h%C3%A1jek-98901b292/">
                    <li><img src="/images/linkedin.png" alt="linkedin" class="images"></li>
                </a>
                <a href="https://www.artstation.com/naden">
                    <li><img src="images/artstation.png" alt="artstation" class="images"></li>
                </a>
                <a href="https://mhaace.itch.io/">
                    <li><img src="images/itch.png" alt="itch.io" class="images"></li>
                </a>
                <a href="https://www.instagram.com/dejvid.hajek/?hl=en">
                    <li><img src="images/instagram.png" alt="instagram" class="images"></li>
                </a>
            </ul>
        </nav>
    </div>

    <div class="right-side " use:reveal={{ preset: "slide", y: 50, x: 0, delay: 500 }}>
        <h1 class="about">ABOUT</h1>
        <p>David Hájek is a self-taught 3D artist from the Czech Republic, currently pursuing a bachelor's degree in Ireland. 
        With a deep passion for storytelling through visuals, he focuses on crafting immersive scenes, and expressive characters that connect with the viewer.</p>
        <h1 class="workedwith">WORKED WITH</h1>
        <p class="workedwithtext">KRYSTOF JEZEK, APPARENTLY STUDIOS, 
            MIRA LUMIÈRE</p>
    </div>
</div>
<BlackHoleShader></BlackHoleShader>
<style>
    .glassmorphism {
        backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(17, 25, 40, 0.75);
        border-radius: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.125);
        padding: 3rem;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        margin: 2rem auto;
        max-width: 1200px;
    }

    .about {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.1em;
    }

    .workedwith {
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        letter-spacing: 0.1em;
    }

    h1 { 
        color: #ffffff;
        margin: 0;
        padding: 0;
    }

    p { 
        font-size: 1.2rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
        padding: 0;
    }

    a { 
        color: #4a9eff;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    a:hover { 
        color: #66b2ff;
        text-shadow: 0 0 8px rgba(102, 178, 255, 0.5);
    }

    .profile {
        border-radius: 1.5rem;
        width: 100%;
        max-width: 300px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        transition: transform 0.3s ease;
    }

    .profile:hover {
        transform: scale(1.02);
    }

    .contacts {
        text-align: left;
        margin-top: 1.5rem;
    }

    .right-side {
        font-kerning: auto;
        text-align: left;
        max-width: 60ch;
        line-height: 1.6;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 3rem;
        align-items: start;
    }

    .contacts2 {
        margin-top: 2rem;
    }

    .contacts2 ul {
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1.5rem;
    }

    li {
        list-style: none;
        display: inline-block;
    }

    .images {
        height: 40px;
        width: 40px;
        transition: all 0.3s ease;
        filter: brightness(0.9);
    }

    .images:hover {
        transform: translateY(-5px);
        filter: brightness(1.2);
    }

    @media (max-width: 768px) {
        .container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .right-side {
            transform: none;
        }

        .about, .workedwith {
            transform: none;
        }

        .glassmorphism {
            margin: 1rem;
            padding: 1.5rem;
        }
    }
</style>

