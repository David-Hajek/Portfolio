import { p as push, l as ensure_array_like, d as attr_class, c as pop } from "../../../../chunks/index2.js";
import "svelte-reveal";
import { b as base } from "../../../../chunks/paths.js";
/* empty css                                                           */
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  const mediaItems = [
    {
      type: "image",
      src: "/images/projects/wrap/static.webp",
      alt: "Final Render 1",
      caption: "Final Garment Render",
      landscape: false,
      square: false
    },
    {
      type: "image",
      src: "/images/projects/wrap/box.webp",
      alt: "Final Render 2",
      caption: "Model showcase",
      landscape: false,
      square: true
    },
    {
      type: "image",
      src: "/images/projects/wrap/bts2.webp",
      alt: "Final Render 2",
      caption: "Model showcase",
      landscape: false,
      square: false
    },
    {
      type: "image",
      src: "/images/projects/wrap/runbts.gif",
      alt: "Final Render 2",
      caption: "Crowd Simulation Demo",
      landscape: false,
      square: true
    },
    {
      type: "video",
      src: "/images/projects/wrap/bts.mp4",
      poster: "/images/projects/wrap/poster.webp",
      caption: "Garment Simulation Demo",
      landscape: true,
      square: false
    }
  ];
  const project = {
    title: "The Mag Wrap 2025",
    subtitle: "Garment & Crowd Simulations",
    description: "I had the opportunity to contribute to The Mag Wrap 2025 under the direction of Krystof Jezek. My role focused on developing realistic garment simulations and implementing crowd dynamics. You can watch the final series <a href='https://www.youtube.com/watch?v=bCpYQCTLIRs&t' target='_blank' rel='noopener noreferrer' style='color: #50aaf1; text-decoration: none; border-bottom: 1px solid #50aaf1;'>here</a>.",
    client: "THE MAG\nWorked under: Krystof Jezek",
    duration: "6 weeks",
    year: "2025",
    role: "Simulation Developer"
  };
  const each_array = ensure_array_like(mediaItems);
  $$payload.out += `<div class="project-page dark-section svelte-1fl658k"><div id="glass-landing" class="svelte-1fl658k"></div> <div class="hero-container svelte-1fl658k"><div class="hero-content svelte-1fl658k"><div class="hero-text svelte-1fl658k"><div class="svelte-1fl658k"><h4 class="project-category svelte-1fl658k">SIMULATION DEVELOPMENT</h4> <h1 class="project-title svelte-1fl658k">${escape_html(project.title)}</h1></div> <div class="project-subtitle svelte-1fl658k">${escape_html(project.subtitle)}</div> <div class="project-intro svelte-1fl658k"><p class="svelte-1fl658k">${html(project.description)}</p></div> <div class="project-meta svelte-1fl658k"><div class="meta-item svelte-1fl658k"><span class="meta-label svelte-1fl658k">Client</span> <span class="meta-value svelte-1fl658k">${escape_html(project.client)}</span></div> <div class="meta-item svelte-1fl658k"><span class="meta-label svelte-1fl658k">Duration</span> <span class="meta-value svelte-1fl658k">${escape_html(project.duration)}</span></div> <div class="meta-item svelte-1fl658k"><span class="meta-label svelte-1fl658k">Year</span> <span class="meta-value svelte-1fl658k">${escape_html(project.year)}</span></div> <div class="meta-item svelte-1fl658k"><span class="meta-label svelte-1fl658k">Role</span> <span class="meta-value svelte-1fl658k">${escape_html(project.role)}</span></div></div></div> <div class="hero-visual svelte-1fl658k"><div class="video-container svelte-1fl658k"><video${attr("src", `${base}/images/vidz/magwrap.mp4`)} class="hero-video svelte-1fl658k" autoplay muted loop playsinline></video></div></div></div></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="scroll-indicator svelte-1fl658k"><div class="scroll-arrow svelte-1fl658k"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1fl658k"><path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1fl658k"></path></svg></div> <span class="scroll-text svelte-1fl658k">Scroll Down</span></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="project-page svelte-1fl658k"><div id="glass-landing-bottom" class="svelte-1fl658k"></div> <div class="media-container svelte-1fl658k"><div class="media-content svelte-1fl658k"><h2 class="section-title svelte-1fl658k">Project Gallery</h2> <div class="accent-bar svelte-1fl658k"></div> <div class="media-grid svelte-1fl658k"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out += `<div${attr_class("media-item svelte-1fl658k", void 0, {
      "landscape": item.landscape,
      "square": item.square
    })}>`;
    if (item.type === "video") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="video-wrapper svelte-1fl658k"><video${attr("src", `${base}${item.src}`)} autoplay muted loop playsinline preload="metadata"${attr("poster", `${base}${item.poster}`)} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" class="svelte-1fl658k"></video></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<img${attr("src", `${base}${item.src}`)}${attr("alt", item.alt)} loading="lazy" class="svelte-1fl658k">`;
    }
    $$payload.out += `<!--]--> `;
    if (item.caption) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="media-caption svelte-1fl658k">${escape_html(item.caption)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
