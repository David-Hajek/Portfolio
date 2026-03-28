import { k as current_component, p as push, j as bind_props, c as pop } from "./index2.js";
import { f as fallback } from "./utils.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function BlackHoleShader($$payload, $$props) {
  push();
  let pixelRatio = fallback($$props["pixelRatio"], 0.35);
  let scene;
  function cleanUp() {
    if (scene) {
      const mesh = scene.children[0];
      if (mesh) {
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }
        if (mesh.material) {
          mesh.material.dispose();
        }
      }
      scene.clear();
    }
    scene = null;
  }
  onDestroy(() => {
    cleanUp();
  });
  $$payload.out += `<div class="black-hole-container svelte-1vyghv"></div>`;
  bind_props($$props, { pixelRatio });
  pop();
}
export {
  BlackHoleShader as B,
  onDestroy as o
};
