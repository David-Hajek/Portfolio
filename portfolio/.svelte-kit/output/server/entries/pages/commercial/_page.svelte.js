import { p as push, l as ensure_array_like, d as attr_class, e as attr_style, g as stringify, c as pop } from "../../../chunks/index2.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  const projects = [
    {
      id: 0,
      title: "Bottle Desturction & Smoke Sim",
      description: "A Houdini made ground destruction with a smoke sim",
      problem: "We needed a ground destruction simulation for a bottle that would crash into it, I knew that Houdini was the right choice for this task, as it allowed me to create smoke VDBs and ground destruction RBDs very quickly",
      solution: "I created a reusable node setup in Houdini, which allowed me to quickly iterate between crashes and made the entire process of creating it a breeze",
      outcome: "The finished RBD and VDB were then placed into Blender, where Krystof was able to composit it and create the finished render",
      videoUrl: "/images/vidz/pivko.mp4",
      images: [{ url: "", alt: "" }],
      credits: {
        company: {
          name: "Krystof Jezek",
          logo: "/images/krystof-logo.png"
        },
        team: [
          {
            name: "David Hajek",
            role: "RBD Physics Simulation, VDB Smoke Simulation"
          },
          {
            name: "Krystof Jezek",
            role: "Rendering, Bottle Textures, Lighting, Sound, Compositing"
          }
        ]
      },
      isRight: true
    },
    {
      id: 0,
      title: "Growth Simulation",
      description: "A geometry node setup used for the growth of flowers, grass and ferns",
      problem: "We needed to create a growth simulation that could be easily controled within blender, as we needed full artistic control as to where and how much vegetation will grow.",
      solution: "I created a robust geometry node setup, that allowed us to control the growth of the vegetation using invisible objects, allowing us to easily tell the software where and how quickly will the vegetation grow.",
      outcome: "Once the growth simulation was all functioning and ready, Krystof put it all together, textured the bottle, lit up the scene and rendered it all out.",
      videoUrl: "https://s3.amazonaws.com/webflow-prod-assets/5d626c045bf4d84a1c256e90/6952764313a8841f851c94e3_cgi_spojka%20updated.webm",
      images: [{ url: "", alt: "" }],
      credits: {
        company: {
          name: "Krystof Jezek",
          logo: "/images/krystof-logo.png"
        },
        team: [
          {
            name: "David Hajek",
            role: "Reconstruction, Grass Growth System"
          },
          {
            name: "Krystof Jezek",
            role: "Rendering, Bottle Textures, Lighting, Animation, Sound, Compositing"
          }
        ]
      },
      isRight: false
    },
    {
      id: 0,
      title: "Tweezers Close Up",
      description: "A hero model of tweezers that needed to be created for a close up render",
      problem: "I had the task to create a detailed an high definition model of tweezers that needed to hold a diamond, I knew this model needed to be high poly, as it was the second most important thing in the shot.",
      solution: "I have modelled the tweezers from a real world reference, while utilizing booleans to create the grates that held the diamond. The model was then textured within substance painter to allow for creative control when texturing the tweezers ",
      outcome: "After the model was rigged, Krystof gave it a small animation to enhance the realness of the entire shot. A gem was placed in the middle and really brought the scene together.",
      videoUrl: "https://s3.amazonaws.com/webflow-prod-assets/5d626c045bf4d84a1c256e90/69527656311e8cb2a4036ef8_cgi_tweezers.webm",
      images: [{ url: "", alt: "" }],
      credits: {
        company: {
          name: "Krystof Jezek",
          logo: "/images/krystof-logo.png"
        },
        team: [
          {
            name: "David Hajek",
            role: "Tweezers model, Texturing, Rigging"
          },
          {
            name: "Krystof Jezek",
            role: " Rendering, Gem Textures, Lighting, Animation, Sound, Compositing"
          }
        ]
      },
      isRight: true
    },
    {
      id: 1,
      title: "Antarctica Scene",
      description: "An environment for a scene I helped to create",
      problem: "I was tasked with the creation of the environment for a scene, we needed to create a realistic environment, that would complement the jewelery in the middle of the scene.",
      solution: "I first started with the modeling of the environment, I used a combination of sculpting, importing heightmaps, and texturing based on its's Z values, to create a realistic arctic environment.",
      outcome: "The resulting environment was a perfect base for the scene, it added a sense of realism and dept, while keeping the focus on the jewelery, making the entire scene otheworldly and grounded.",
      videoUrl: "https://s3.amazonaws.com/webflow-prod-assets/5d626c045bf4d84a1c256e90/6952766676940c71000e3fff_cgi_antartcica.webm",
      images: [
        {
          url: "/images/commercial/antarctic/antarctica-bts.gif",
          alt: "Antarctica BTS"
        }
      ],
      credits: {
        company: {
          name: "Krystof Jezek",
          logo: "/images/krystof-logo.png"
        },
        team: [
          {
            name: "David Hajek",
            role: "Environment Modeling, Base Textures, Composition,  Scene Concept Artist"
          },
          {
            name: "Krystof Jezek",
            role: "Art Direction, Rendering, Textures, Lighting, Animation, Sound, Compositing"
          }
        ]
      },
      isRight: false
    },
    {
      id: 2,
      title: "A Witch Cries, So Comes the End",
      description: "A series of background renders that were used for a trailer for a newly released novel",
      problem: "I was tasked with the creation of Background renders for a novel trailer, the client needed to maintain a degree of stylization, as there would always be a character occupying the image.",
      solution: "I needed to create compositions that would allow for the client to place the characters in the foreground, without the worry of the background taking too much attention away from the voice acted characters. ",
      outcome: "The renders created, set the mood of the trailer perfectly, while maintaing the mix of realism and stylization.",
      videoUrl: "/images/vidz/witch.mp4",
      images: [
        {
          url: "/images/commercial/mira/mansionpost.png",
          alt: "Side view of the mansion from outside the gate"
        },
        {
          url: "/images/commercial/mira/frontmansion2.png",
          alt: "Mansion front view"
        },
        {
          url: "/images/commercial/mira/rooftopFinal.png",
          alt: "Rooftops during thunderstorm"
        },
        {
          url: "/images/commercial/mira/street.png",
          alt: "Abandoned streets"
        }
      ],
      credits: {
        company: {
          name: "Yoimira Entertainment",
          logo: "/images/mira-logo.png"
        },
        team: [
          {
            name: "David Hajek",
            role: "CG Visualization, Rendering, Texturing, Lighting"
          },
          {
            name: "Mira Lumière",
            role: "Art Direction, Video Creation"
          }
        ]
      },
      isRight: true
    },
    {
      id: 3,
      title: "KRAJÁČ",
      description: "Logo creation, 3D Assets, Transitions",
      problem: "I was tasked with the creation of a Logo, and helping with particular 3D assets for the video series Krajáč. ",
      solution: "As Krajáč is a hockey themed series, I needed to nail the hockey aesthethic, I wanted the logo to scream Hockey. After discussing it further, we picked out a font and I started to create the logo while staying true to the Hockey aesthethic. I also created a transition for the series, where a hockey puck covers the screen and flies out.",
      outcome: "The logo was very well received, aswell as the transition, as both fit very well into our own Hockey-Krajáč aesthethic we have created.",
      videoUrl: "/images/vidz/krajac.mp4",
      images: [
        {
          url: "/images/commercial/krajac/logo_main.png",
          alt: "Krajac Logo"
        },
        {
          url: "/images/commercial/krajac/transition.gif",
          alt: "Transition"
        }
      ],
      credits: {
        company: {
          name: "Vladimir Dykast",
          logo: "/images/dyky-logo.png"
        },
        team: [
          {
            name: "David Hajek",
            role: "Transitions, Logo, Visual Identity"
          },
          {
            name: "Vladimir Dykast",
            role: "Art Direction, Video Creation"
          },
          {
            name: "Jachym Wizz",
            role: "Intro Cinematic, Recording, VFX"
          },
          { name: "Vojtěch Štor", role: "Recording, VFX" }
        ]
      },
      isRight: false
    }
  ];
  let currentSection = 0;
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="container svelte-1hesfsh"><header class="page-header svelte-1hesfsh"><h1 class="svelte-1hesfsh">Commercial Projects</h1> <p class="subtext svelte-1hesfsh">A comprehensive collection of my favorite projects I had to pleasure to work on.</p></header> <div class="projects-container svelte-1hesfsh"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    const each_array_1 = ensure_array_like(project.images);
    $$payload.out += `<section${attr_class("project-section svelte-1hesfsh", void 0, { "right": project.isRight })}><div class="content-column images svelte-1hesfsh"><div class="video-wrapper svelte-1hesfsh"><video${attr("src", project.videoUrl?.startsWith("http") ? project.videoUrl : `${base}${project.videoUrl}`)}${attr("title", project.title)} autoplay muted loop playsinline class="svelte-1hesfsh"></video></div> <!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let image = each_array_1[$$index];
      $$payload.out += `<div class="image-wrapper svelte-1hesfsh"${attr_style(`width: ${stringify(image.width || "100%")}`)} role="button" tabindex="0"><img${attr("src", `${base}${image.url}`)}${attr("alt", image.alt)} loading="lazy" class="svelte-1hesfsh"> <div class="image-overlay svelte-1hesfsh"><span class="expand-icon svelte-1hesfsh">+</span></div></div>`;
    }
    $$payload.out += `<!--]--></div> <div class="content-column text svelte-1hesfsh"><div${attr_class("text-content svelte-1hesfsh", void 0, { "active": currentSection === i })}><h2 class="svelte-1hesfsh">${escape_html(project.title)}</h2> <p class="svelte-1hesfsh">${escape_html(project.description)}</p> `;
    if (project.problem) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="problem-solution-section svelte-1hesfsh"><div class="ps-block problem svelte-1hesfsh"><h3 class="svelte-1hesfsh">Problem</h3> <p class="svelte-1hesfsh">${escape_html(project.problem)}</p></div> `;
      if (project.solution) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="ps-block solution svelte-1hesfsh"><h3 class="svelte-1hesfsh">Solution</h3> <p class="svelte-1hesfsh">${escape_html(project.solution)}</p></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (project.outcome) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="ps-block outcome svelte-1hesfsh"><h3 class="svelte-1hesfsh">Outcome</h3> <p class="svelte-1hesfsh">${escape_html(project.outcome)}</p></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (project.credits) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(project.credits.team);
      $$payload.out += `<div class="credits-section svelte-1hesfsh"><h3 class="svelte-1hesfsh">Credits</h3> <div class="company-info svelte-1hesfsh">`;
      if (project.credits.company.logo) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img${attr("src", `${base}${project.credits.company.logo}`)}${attr("alt", project.credits.company.name)} class="company-logo svelte-1hesfsh">`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> <span class="company-name svelte-1hesfsh">${escape_html(project.credits.company.name)}</span></div> <div class="team-credits svelte-1hesfsh"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let member = each_array_2[$$index_1];
        $$payload.out += `<div class="team-member svelte-1hesfsh"><span class="member-name svelte-1hesfsh">${escape_html(member.name)}</span> <span class="member-role svelte-1hesfsh">${escape_html(member.role)}</span></div>`;
      }
      $$payload.out += `<!--]--></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div></section>`;
  }
  $$payload.out += `<!--]--></div> <div class="ending-statement svelte-1hesfsh"><div class="ending-statement-container svelte-1hesfsh"><div class="left-side svelte-1hesfsh"><div class="text-reveal-container svelte-1hesfsh"><span class="more-text svelte-1hesfsh">More to come<span class="svelte-1hesfsh"><span class="svelte-1hesfsh">.</span><span class="svelte-1hesfsh">.</span><span class="svelte-1hesfsh">.</span></span></span> <div class="text-underline svelte-1hesfsh"></div></div></div> <div class="right-side svelte-1hesfsh"><a${attr("href", `${stringify(base)}/retro`)} class="next-button svelte-1hesfsh"><div class="button-content svelte-1hesfsh"><span class="button-text svelte-1hesfsh">Retro Section</span> <div class="arrow-container svelte-1hesfsh"><span class="arrow svelte-1hesfsh">→</span></div></div> <div class="button-background svelte-1hesfsh"></div></a></div></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
