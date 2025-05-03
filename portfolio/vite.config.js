import { threlteStudio } from '@threlte/studio/vite'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { vite as vidstack } from 'vidstack/plugins';
export default defineConfig({
	plugins: [threlteStudio(), sveltekit(), vidstack()]
	
});
