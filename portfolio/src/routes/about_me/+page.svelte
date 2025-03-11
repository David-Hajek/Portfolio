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
        <p class="workedwithtext">KRYSTOF JEZEK, APPARENTLY STUDIOS</p>
    </div>
</div>
<BlackHoleShader></BlackHoleShader>
<style>
  
    .glassmorphism {
        backdrop-filter: blur(8px) saturate(100%);
    -webkit-backdrop-filter: blur(8px) saturate(100%);
    background-color: rgba(17, 25, 40, 0.5);
    border-radius: 3rem; 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 20px;
    }

    .about {
        transform: translateX(-30%);
    }

    .workedwith {
        transform: translateX(-58%);
        text-align: left;
    }

    h1 { color: #ffffff; }
    p { font-size: 28px; }
    a { color: #ff0000; filter: blur(2px); }
    a:hover { filter: blur(0px); }

    .profile { 
        border-radius: 25px;
    }

    .contacts {
        text-align: left;
    }

    .right-side {
        transform: translateX(65%);
        font-kerning: auto;
        text-align: left;
        max-width: 50ch;
        line-height: 1.6;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .container {
        display: grid;
        flex-wrap: wrap;
        gap: 7%;
        justify-content: left;
        margin-top: 2.5rem;
        grid-row: span 3;
        grid-template-areas: 
            "profile about abouttext"
            "contacts workedwith abouttext"
            "contacts2 workedwith workedwithtext";
        grid-template-columns: 1fr 3fr;
    }

    li {
        list-style: none;
        display: inline-block;
        justify-content: left;
        margin-right: 11%;
        margin-top: 10%;
    }

    .images {
        height: 50px;
        width: 50px;
        -webkit-transition-property: all; 
        -webkit-transition-duration: 0.3s; 
        -webkit-transition-timing-function: ease; 
    }

    .images:hover { 
        transform: scale(2); 
    }
</style>

