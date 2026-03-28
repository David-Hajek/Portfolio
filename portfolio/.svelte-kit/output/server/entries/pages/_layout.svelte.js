import { p as push, h as head, d as attr_class, e as attr_style, f as slot, c as pop, g as stringify } from "../../chunks/index2.js";
import "../../chunks/client.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr, e as escape_html, c as clsx } from "../../chunks/attributes.js";
function _layout($$payload, $$props) {
  push();
  let isMobileMenuOpen = false;
  let scrollProgress = 0;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&amp;display=swap" rel="stylesheet">`;
  });
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <link rel="stylesheet"${attr("href", `${stringify(base)}/styles/global.css`)}> <header${attr_class(clsx("fade-in"), "svelte-545l6q")}>`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></header> <div class="scroll-progress-bar svelte-545l6q"><div class="progress svelte-545l6q"${attr_style(`width: ${stringify(scrollProgress)}%`)}></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="shader-background"></div> <main class="svelte-545l6q"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="svelte-545l6q"><div class="footer-content svelte-545l6q"><div class="footer-grid svelte-545l6q"><div class="footer-column left svelte-545l6q"><h3 class="svelte-545l6q">Connect</h3> <a href="mailto:david.mhaace@gmail.com" class="footer-link email-link svelte-545l6q"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-545l6q"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> <span>david.mhaace@gmail.com</span></a> <div class="social-links svelte-545l6q"><a href="https://www.linkedin.com/in/david-h%C3%A1jek-98901b292/" target="_blank" class="social-link svelte-545l6q"><img${attr("src", `${stringify(base)}/images/linkedin.png`)} alt="LinkedIn" class="footer-icon svelte-545l6q"></a> <a href="https://www.artstation.com/naden" target="_blank" class="social-link svelte-545l6q"><img${attr("src", `${stringify(base)}/images/artstation.png`)} alt="ArtStation" class="footer-icon svelte-545l6q"></a> <a href="https://mhaace.itch.io/" target="_blank" class="social-link svelte-545l6q"><img${attr("src", `${stringify(base)}/images/itch.png`)} alt="Itch.io" class="footer-icon svelte-545l6q"></a> <a href="https://www.instagram.com/dejvid.hajek/?hl=en" target="_blank" class="social-link svelte-545l6q"><img${attr("src", `${stringify(base)}/images/instagram.png`)} alt="Instagram" class="footer-icon svelte-545l6q"></a></div></div> <div class="footer-column center svelte-545l6q"><div class="back-to-top-container svelte-545l6q"><button class="back-to-top svelte-545l6q"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-545l6q"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg> Back to top</button></div></div> <div class="footer-column right svelte-545l6q"><h3 class="svelte-545l6q">Quick Links</h3> <nav class="footer-nav svelte-545l6q"><ul class="svelte-545l6q"><li class="svelte-545l6q"><a${attr("href", `${stringify(base)}/`)} class="footer-link svelte-545l6q">Home</a></li> <li class="svelte-545l6q"><a${attr("href", `${stringify(base)}/commercial`)} class="footer-link svelte-545l6q">Commercial</a></li> <li class="svelte-545l6q"><a${attr("href", `${stringify(base)}/personal`)} class="footer-link svelte-545l6q">Personal</a></li> <li class="svelte-545l6q"><a${attr("href", `${stringify(base)}/retro`)} class="footer-link svelte-545l6q">Retro</a></li> <li class="svelte-545l6q"><a${attr("href", `${stringify(base)}/about_me`)} class="footer-link svelte-545l6q">About Me</a></li> <li class="svelte-545l6q"><a${attr("href", `${stringify(base)}/contact`)} class="footer-link svelte-545l6q">Contact</a></li></ul></nav></div></div> <div class="footer-bottom svelte-545l6q"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} David Hajek Portfolio | All Rights Reserved</p> <p class="credits">Designed &amp; Developed with &lt;3 by David</p></div></div></footer> <button class="menu-toggle svelte-545l6q"${attr("aria-label", "Open menu")}${attr("aria-expanded", isMobileMenuOpen)}><span${attr_class(`hamburger ${""}`, "svelte-545l6q")}><span class="bar svelte-545l6q"></span> <span class="bar svelte-545l6q"></span> <span class="bar svelte-545l6q"></span></span></button>`;
  pop();
}
export {
  _layout as default
};
