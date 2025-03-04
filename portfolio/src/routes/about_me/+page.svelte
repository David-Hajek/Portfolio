<script>
    import { onMount } from 'svelte';
    onMount(() =>{
        console.log("Contacts loaded");
    });
    </script>
    
    <h1>Contact Us</h1>
    <p>get in touch via email at <a href="mailto:example@email.com">info@example.com</a>.</p>
    <div class ="about">
    <div class ="left-side"> fiks</div>
    <h1> ABOUT</h1>
    <div class ="right-side"> David Hájek is a self-taught 3D artist from the Czech Republic, currently pursuing a bachelor's degree in Ireland. 
        With a deep passion for storytelling through visuals, he focuses on crafting immersive scenes, and expressive characters that connect with the viewer.<br><br>

        David is currently exploring his knowledge of the 3D aspect of his arts, and is constanlty working on delivering the best possible result, striving for perfection.</div>
    </div>
    <h1> WORKED WITH</h1>
    <style>
        h1{color: #ffffff;}
        p{font-size: 28px;}
        a{color: #ff0000; filter: blur(2px);}
        a:hover {filter:  blur(0px);}
        .left-side{
            width: 50%;
            
            
        }
        .right-side{
            width: 50%;
            font-kerning: auto;
            text-align: left;
            max-width: 50ch;
            line-height: 1.6;
            word-wrap: break-word;
            overflow-wrap: break-word;
           /* font-size: clamp(1.5vw, 1rem, 2vw); might come in handy later*/ 
        }
        .about {
  display: flex;
}
    </style>
