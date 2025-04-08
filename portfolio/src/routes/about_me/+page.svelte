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
        <h1 class="contacts">SOCIAL/S</h1>
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
            MIRA LUMIÈRE, DYKY, DEVOMI</p>
    </div>
</div>
<BlackHoleShader></BlackHoleShader>
<style>
    .glassmorphism {
        backdrop-filter: blur(16px) saturate(180%);
        background: linear-gradient(135deg, rgba(17, 25, 40, 0.75), rgba(17, 25, 40, 0.95));
        border-radius: 2.5rem;
        border: 1px solid rgba(255, 255, 255, 0.125);
        padding: 4rem;
        box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 0 32px rgba(255, 255, 255, 0.05);
        margin: 3rem auto;
        max-width: 1200px;
        position: relative;
        overflow: hidden;
    }

    .glassmorphism::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
        );
        transition: 0.5s;
    }

    .glassmorphism:hover::before {
        left: 100%;
    }

    .about {
        font-size: clamp(2rem, 5vw, 2.5rem);
        margin-bottom: 2rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        background: linear-gradient(45deg, #ffffff, #4a9eff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
    }

    .about::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #4a9eff, transparent);
        border-radius: 2px;
    }

    .workedwith {
        font-size: clamp(1.5rem, 4vw, 2rem);
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: #ffffff;
        position: relative;
    }

    .workedwith::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 3px;
        background: linear-gradient(90deg, #4a9eff, transparent);
        border-radius: 2px;
    }

    h1 { 
        color: #ffffff;
        margin: 0;
        padding: 0;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
        padding: 0;
        transition: color 0.3s ease;
    }

    .workedwithtext {
        font-weight: 500;
        letter-spacing: 0.05em;
    }

    a {
        color: #4a9eff;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
    }

    a::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: #4a9eff;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    a:hover {
        color: #66b2ff;
        text-shadow: 0 0 12px rgba(102, 178, 255, 0.7);
    }

    .profile {
        border-radius: 1.5rem;
        width: 100%;
        max-width: 300px;
        box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: translateX(-6%);
    }

    .profile:hover {
        transform: scale(1.03) translateY(-5px);
        box-shadow: 
            0 12px 40px 0 rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.2);
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
        gap: 4rem;
        align-items: start;
    }

    .contacts2 {
        margin-top: 2rem;
    }

    .contacts2 ul {
        padding: 0;
        margin: 0;
        display: flex;
        gap: 2rem;
    }

    li {
        list-style: none;
        display: inline-block;
    }

    .images {
        height: 40px;
        width: 40px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        filter: brightness(0.9) contrast(1.1);
    }

    .images:hover {
        transform: translateY(-8px) scale(1.1);
        filter: brightness(1.2) contrast(1.2);
    }

    @media (max-width: 768px) {
        .container {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .right-side {
            transform: none;
        }

        .about, .workedwith {
            transform: none;
        }

        .glassmorphism {
            margin: 1.5rem;
            padding: 2rem;
            border-radius: 2rem;
        }

        .contacts2 ul {
            justify-content: center;
        }

        .profile {
            margin: 0 auto;
            display: block;
        }
    }

    @media (max-width: 480px) {
        .glassmorphism {
            margin: 1rem;
            padding: 1.5rem;
            border-radius: 1.5rem;
        }

        .contacts2 ul {
            gap: 1.5rem;
        }

        .images {
            height: 35px;
            width: 35px;
        }
    }
</style>

