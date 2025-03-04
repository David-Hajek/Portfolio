<script>
    import { onMount } from 'svelte';
    onMount(() =>{
        console.log("Contacts loaded");
    });
    </script>
    
    
    <div class ="container">
    <div class ="left-side"> 
        <img src="/images/face.gif" alt="profile photo" class ="profile"/>
        <h1 class ="contacts">CONTACT/S</h1>
        <p><a href="mailto:example@email.com">info@example.com</a>.</p>
    </div>
    <h1> ABOUT</h1>
    
    
    <div class ="right-side"> 
        David Hájek is a self-taught 3D artist from the Czech Republic, currently pursuing a bachelor's degree in Ireland. 
        With a deep passion for storytelling through visuals, he focuses on crafting immersive scenes, and expressive characters that connect with the viewer.<br><br>

        David is currently exploring his knowledge of the 3D aspect of his arts, and is constanlty working on delivering the best possible result, striving for perfection.</div>
        <h1> WORKED WITH</h1>
    </div>
    
    <style>
        h1{color: #ffffff;}
        p{font-size: 28px;}
        a{color: #ff0000; filter: blur(2px);}
        a:hover {filter:  blur(0px);}
        .left-side{
           
        }
        img{
            
            border-radius: 25px;
        }
        .contacts{
            text-align: left;
            /*transform: translateX(23%);*/
        }
        p{
            text-align: left;
        }
        .right-side{
            
            font-kerning: auto;
            text-align: left;
            max-width: 50ch;
            line-height: 1.6;
            word-wrap: break-word;
            overflow-wrap: break-word;
           /* font-size: clamp(1.5vw, 1rem, 2vw); might come in handy later*/ 
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
  "contact about abouttext"
  "contact2 workedwith workedwithtext";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 10% 10%;
}

.container > img.profile {
  grid-area: profile;
  text-align: center;
}

.container > div.contacts {
  grid-area: contacts;
  text-align: center;
}

    </style>
