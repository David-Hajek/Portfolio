import { p as push, l as ensure_array_like, d as attr_class, e as attr_style, g as stringify, c as pop } from "../../../chunks/index2.js";
import "svelte-reveal";
import { b as base } from "../../../chunks/paths.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  const projects = [
    {
      id: 1,
      title: "UNTITLED GAME PROJECT",
      description: "This was a project I worked on with my friend. I was in charge of creating the PSX models for the game. I was overally very pleased with the visuals for the ingame characters and environments. I created my own pipeline of creating said models with realtive ease later on.",
      images: [
        {
          url: "/images/retro/untitled/bgtest.webp",
          alt: "Ingame background"
        },
        {
          url: "/images/retro/untitled/tank.webp",
          alt: "Game character - Tank"
        },
        {
          url: "/images/retro/untitled/rendertest.webp",
          alt: "Game character - Assasin"
        },
        {
          url: "/images/retro/untitled/preview.webp",
          alt: "Game preview"
        },
        {
          url: "/images/retro/untitled/concept.webp",
          alt: "Concept render"
        }
      ],
      videoUrl: "https://www.youtube.com/embed/RJHFx1jc5Oc",
      isRight: false
    },
    {
      id: 2,
      title: "UNIVERSITY MODELING PRACTICE",
      description: "A simple university assignment, I have created, rigged and textured the knight, so that It can be moved within blender and posed. Probably my favorite knight model I have done so far, very happy with how clean he turned out! The background was also a part of the assignment, I wanted to create a somber forest scape, with a towering castle in the back, while also maintaining the depth and atmosphere.",
      images: [
        {
          url: "/images/retro/proj2/gifmaker_me.gif",
          alt: "Model turnaround"
        },
        {
          url: "/images/retro/proj2/bg.jpg",
          alt: "Medieval forest background"
        }
      ],
      isRight: true
    },
    {
      id: 3,
      title: "BACKSTREETS",
      description: "A personal challenge, where I wanted to learn more software to add to my toolbelt in the future. I at first only wanted to have a quick enviro render, however I then created a character for the scene, and all of a sudden it was animated. I then edited the animations in davinci resolve, and created a pretty artistic piece in the end :) ",
      images: [
        {
          url: "/images/retro/to-add/main.webp",
          alt: "Closeup render PSX"
        },
        {
          url: "/images/retro/to-add/background.webp",
          alt: "Wide shot of backstreets, PSX"
        }
      ],
      videoUrl: "https://www.youtube.com/embed/ECQ7oTGyaNY",
      isRight: false
    },
    {
      id: 4,
      title: "UYUU - Stream Background/Model",
      description: "A friend of mine wanted to have a sort of intermission background for his streams, and I really wanted to model something in the psx style, so I took it upon myself to create the 3D model of his avatar, aswell as the render of the intermission stage. I was pretty happy with how both turned out! It was a very fun project for me",
      images: [
        {
          url: "/images/retro/uyuy/uyuu-main.webp",
          alt: "Background art"
        },
        {
          url: "/images/retro/uyuy/ujuj-stream.webp",
          alt: "Background art, livestream screenshot"
        },
        {
          url: "/images/retro/uyuy/uyuu-model.webp",
          alt: "Raw Vtuber model"
        }
      ],
      isRight: true
    }
  ];
  let currentSection = 0;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="retro-container svelte-5kau42"><div class="content-section svelte-5kau42"><h1 class="retro-title svelte-5kau42">RETRO VAULT</h1> <h1 class="retro-title svelte-5kau42" style="font-size: small; opacity: 0.5">My personal guilty pleasure</h1> <div class="retro-bar svelte-5kau42"></div></div> <div class="projects-container"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    const each_array_1 = ensure_array_like(project.images);
    $$payload.out += `<section${attr_class("project-section svelte-5kau42", void 0, { "right": project.isRight })}><div class="content-column images svelte-5kau42">`;
    if (project.videoUrl) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="video-wrapper svelte-5kau42"><iframe${attr("src", project.videoUrl)}${attr("title", project.title)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-5kau42"></iframe></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let image = each_array_1[$$index];
      $$payload.out += `<div class="image-wrapper svelte-5kau42"${attr_style(`width: ${stringify(image.width || "100%")}`)} role="button" tabindex="0"><img${attr("src", `${base}${image.url}`)}${attr("alt", image.alt)} loading="lazy" class="svelte-5kau42"> <div class="image-overlay svelte-5kau42"><span class="expand-icon svelte-5kau42">+</span></div></div>`;
    }
    $$payload.out += `<!--]--></div> <div class="content-column text svelte-5kau42"><div${attr_class("text-content svelte-5kau42", void 0, { "active": currentSection === i })}><h2 class="svelte-5kau42">${escape_html(project.title)}</h2> <p class="svelte-5kau42">${escape_html(project.description)}</p></div></div></section>`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
