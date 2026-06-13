<script lang="ts">
	import '@fontsource-variable/hanken-grotesk';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let y = 0;
	let prevY = 0;
	let headerVisible = true;
	let mobileOpen = false;
	let mounted = false;
	let innerWidth = 0;
	let cursorX = 0;
	let cursorY = 0;

	function handleScroll() {
		if (y > prevY && y > 80) headerVisible = false;
		else if (y < prevY) headerVisible = true;
		prevY = y;
	}

	function toggleMobile() {
		mobileOpen = !mobileOpen;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = mobileOpen ? 'hidden' : '';
		}
	}

	function closeMobile() {
		mobileOpen = false;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	}

	onMount(() => {
		mounted = true;
		window.addEventListener('mousemove', (e) => {
			cursorX = e.clientX;
			cursorY = e.clientY;
		});
	});

	afterNavigate(() => {
		document.body.style.overflow = '';
	});

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/commercial', label: 'Commercial' },
		{ href: '/personal', label: 'Personal' },
		{ href: '/retro', label: 'Retro' },
		{ href: '/about_me', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		const path = $page.url.pathname;
		if (href === '/') return path === '/';
		return path.startsWith(href);
	}
</script>

<svelte:window bind:scrollY={y} bind:innerWidth on:scroll={handleScroll} />

<div class="dot-bg" aria-hidden="true"></div>

{#if mounted && innerWidth > 768}
	<div class="cursor" style="left:{cursorX}px;top:{cursorY}px" aria-hidden="true"></div>
{/if}

<header class:hidden={!headerVisible}>
	<div class="nav-inner">
		<a href="/" class="brand">David Hajek</a>

		<nav class="desktop-nav">
			{#each links as link}
				<a href={link.href} class="nav-link" class:active={isActive(link.href)}>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="nav-meta">
			<span class="loc">Czech Republic</span>
			<span class="status">Open to work ●</span>
		</div>

		<button
			class="hamburger"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			on:click={toggleMobile}
		>
			<span class="bar" class:open={mobileOpen}></span>
			<span class="bar" class:open={mobileOpen}></span>
			<span class="bar" class:open={mobileOpen}></span>
		</button>
	</div>
</header>

{#if mobileOpen}
	<div class="mobile-overlay" on:click={closeMobile} transition:fade={{ duration: 200 }}></div>
	<nav class="mobile-nav" transition:fade={{ duration: 150 }}>
		{#each links as link}
			<a href={link.href} class="mobile-link" class:active={isActive(link.href)} on:click={closeMobile}>
				{link.label}
			</a>
		{/each}
		<div class="mobile-meta">
			<span class="loc">Czech Republic</span>
			<span class="status">Open to work ●</span>
		</div>
	</nav>
{/if}

<div class="page-content">
	<main>
		<slot />
	</main>

	<footer>
		<span class="copy">© 2025 David Hajek</span>
		<div class="foot-links">
			<a href="https://www.linkedin.com/in/david-h%C3%A1jek-98901b292/" target="_blank" rel="noopener">LinkedIn</a>
			<a href="https://www.artstation.com/naden" target="_blank" rel="noopener">ArtStation</a>
			<a href="https://mhaace.itch.io/" target="_blank" rel="noopener">Itch.io</a>
			<a href="https://www.instagram.com/dejvid.hajek/" target="_blank" rel="noopener">Instagram</a>
		</div>
	</footer>
</div>

<style>
	.cursor {
		position: fixed;
		width: 16px;
		height: 16px;
		background: #fff;
		border-radius: 50%;
		pointer-events: none;
		mix-blend-mode: difference;
		z-index: 9999;
		transform: translate(-50%, -50%);
		transition: width 0.15s, height 0.15s;
	}

	header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(10, 10, 10, 0.96);
		border-bottom: 1px solid #181818;
		transition: transform 0.35s ease, opacity 0.35s ease;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	header.hidden {
		transform: translateY(-100%);
		opacity: 0;
	}

	.nav-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 40px;
		max-width: 1600px;
		margin: 0 auto;
	}

	.brand {
		font-size: 14px;
		font-weight: 500;
		color: #f0f0f0;
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	.desktop-nav {
		display: flex;
		gap: 28px;
	}

	.nav-link {
		font-size: 11px;
		color: #666;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		transition: color 0.15s;
	}

	.nav-link:hover { color: #ccc; }
	.nav-link.active { color: #f0f0f0; }

	.nav-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 3px;
	}

	.loc {
		font-size: 11px;
		color: #555;
		letter-spacing: 0.06em;
	}

	.status {
		font-size: 11px;
		color: #3a7a3a;
		letter-spacing: 0.06em;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		padding: 4px;
	}

	.bar {
		display: block;
		width: 22px;
		height: 1px;
		background: #666;
		transition: all 0.25s ease;
	}

	.mobile-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		z-index: 200;
	}

	.mobile-nav {
		position: fixed;
		top: 0;
		right: 0;
		width: 280px;
		height: 100vh;
		background: #0d0d0d;
		border-left: 1px solid #181818;
		z-index: 300;
		display: flex;
		flex-direction: column;
		padding: 80px 32px 40px;
		gap: 4px;
	}

	.mobile-link {
		font-size: 13px;
		color: #777;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 14px 0;
		border-bottom: 1px solid #141414;
		transition: color 0.15s;
	}

	.mobile-link:hover, .mobile-link.active { color: #f0f0f0; }

	.mobile-meta {
		margin-top: auto;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 40px;
		border-top: 1px solid #141414;
		background: #080808;
		max-width: 100%;
	}

	.copy {
		font-size: 10px;
		color: #282828;
		letter-spacing: 0.08em;
	}

	.foot-links {
		display: flex;
		gap: 20px;
	}

	.foot-links a {
		font-size: 10px;
		color: #444;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		transition: color 0.15s;
	}

	.foot-links a:hover { color: #888; }

	main {
		min-height: 80vh;
	}

	@media (max-width: 768px) {
		.nav-inner { padding: 16px 20px; }
		.desktop-nav { display: none; }
		.nav-meta { display: none; }
		.hamburger { display: flex; }
		footer { padding: 16px 20px; flex-direction: column; gap: 12px; text-align: center; }
		.foot-links { flex-wrap: wrap; justify-content: center; gap: 12px; }
	}
</style>
