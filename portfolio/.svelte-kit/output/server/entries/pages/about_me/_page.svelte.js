import { p as push, c as pop, g as stringify } from "../../../chunks/index2.js";
import "svelte-reveal";
import { B as BlackHoleShader } from "../../../chunks/BlackHoleShader.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="container glassmorphism svelte-1glt1t7"><div class="left-side"><img${attr("src", `${stringify(base)}/images/face.gif`)} alt="profile photo" class="profile svelte-1glt1t7"> <h1 class="contacts svelte-1glt1t7">SOCIAL/S</h1> <p class="contacts svelte-1glt1t7"><a href="mailto:david.mhaace@gmail.com" class="svelte-1glt1t7">david.mhaace@gmail.com</a></p> <nav class="contacts2 svelte-1glt1t7"><ul class="svelte-1glt1t7"><a href="https://www.linkedin.com/in/david-h%C3%A1jek-98901b292/" class="svelte-1glt1t7"><li class="svelte-1glt1t7"><img${attr("src", `${stringify(base)}/images/linkedin.png`)} alt="linkedin" class="images svelte-1glt1t7"></li></a> <a href="https://www.artstation.com/naden" class="svelte-1glt1t7"><li class="svelte-1glt1t7"><img${attr("src", `${stringify(base)}/images/artstation.png`)} alt="artstation" class="images svelte-1glt1t7"></li></a> <a href="https://mhaace.itch.io/" class="svelte-1glt1t7"><li class="svelte-1glt1t7"><img${attr("src", `${stringify(base)}/images/itch.png`)} alt="itch.io" class="images svelte-1glt1t7"></li></a> <a href="https://www.instagram.com/dejvid.hajek/?hl=en" class="svelte-1glt1t7"><li class="svelte-1glt1t7"><img${attr("src", `${stringify(base)}/images/instagram.png`)} alt="instagram" class="images svelte-1glt1t7"></li></a></ul></nav></div> <div class="right-side svelte-1glt1t7"><h1 class="about svelte-1glt1t7">ABOUT</h1> <p class="svelte-1glt1t7">David Hájek is a self-taught 3D artist from the Czech Republic, currently pursuing a bachelor's degree in Ireland. 
        With a deep passion for storytelling through visuals, he focuses on crafting immersive scenes, and expressive characters that connect with the viewer.</p> <h1 class="workedwith svelte-1glt1t7">WORKED WITH</h1> <p class="workedwithtext svelte-1glt1t7">KRYSTOF JEZEK, APPARENTLY STUDIOS, 
            MIRA LUMIÈRE, DYKY, DEVOMI</p></div></div> `;
  BlackHoleShader($$payload, {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
