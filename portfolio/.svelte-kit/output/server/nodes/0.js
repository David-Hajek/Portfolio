import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CA6FwZoS.js","_app/immutable/chunks/uTVFfCR1.js","_app/immutable/chunks/Doxv_zDN.js","_app/immutable/chunks/C-KlFWM5.js","_app/immutable/chunks/DmqhWuLb.js","_app/immutable/chunks/CJUtn9Sh.js","_app/immutable/chunks/Du-6FoUU.js","_app/immutable/chunks/DzPMz6Vi.js","_app/immutable/chunks/Do2w9o0u.js","_app/immutable/chunks/DJyR-pXI.js","_app/immutable/chunks/DXRek5ao.js","_app/immutable/chunks/D3mgWV0X.js","_app/immutable/chunks/CDzFYmCE.js","_app/immutable/chunks/CdC3-oiW.js","_app/immutable/chunks/DamVsYRs.js","_app/immutable/chunks/CjQns1bL.js","_app/immutable/chunks/D_usMznt.js","_app/immutable/chunks/BRz8ZVQu.js"];
export const stylesheets = ["_app/immutable/assets/0.9eZ_YazY.css"];
export const fonts = ["_app/immutable/assets/hanken-grotesk-vietnamese-wght-normal.DScp5n_0.woff2","_app/immutable/assets/hanken-grotesk-latin-ext-wght-normal.wfJQUmEd.woff2","_app/immutable/assets/hanken-grotesk-latin-wght-normal.Cbpd52k8.woff2"];
