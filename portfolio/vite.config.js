import { threlteStudio } from '@threlte/studio/vite'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [threlteStudio(), sveltekit()]

});
