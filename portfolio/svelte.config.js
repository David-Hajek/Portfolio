import adapter from '@sveltejs/adapter-static';


const dev = process.env.NODE_ENV === 'development';
const repoName = 'Portfolio'; // 👈 Replace with your repo name!

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
	}
};

export default config;
