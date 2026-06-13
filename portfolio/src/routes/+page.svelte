<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let showIntro = false;
	let fadeOut = false;

	onMount(() => {
		if (browser) {
			const visited = localStorage.getItem('hasVisited');
			if (!visited) {
				showIntro = true;
				setTimeout(() => (fadeOut = true), 1000);
				setTimeout(() => (showIntro = false), 2000);
				localStorage.setItem('hasVisited', 'true');
			}
		}
	});
</script>

{#if showIntro}
	<div class="intro" class:fade-out={fadeOut}>
		<span class="intro-text">David Hajek</span>
	</div>
{/if}

<section class="hero">
	<div class="hero-inner">
		<div class="hero-left">
			<p class="hero-label sec-label">3D Artist & Visual Designer</p>
			<h1 class="hero-title">Turning ideas<br />into immersive<br />3D worlds.</h1>
		</div>
		<div class="hero-right">
			<p class="hero-desc">
				Specialising in 3D art, VFX, simulation and visual design — for brands and studios that want
				work that stands out.
			</p>
			<div class="hero-ctas">
				<a href="/commercial" class="btn-primary">View my work</a>
				<a href="/contact" class="btn-secondary">Let's talk</a>
			</div>
		</div>
	</div>
</section>

<section class="work-section">
	<div class="work-header">
		<span class="sec-label">Selected work</span>
		<span class="work-count sec-label">3 projects</span>
	</div>
	<div class="work-grid">
		<a href="/project/visualization" class="work-cell">
			<img src="/images/projects/wrap/thumbnail.webp" alt="The Mag Wrap 2025" />
			<div class="work-num sec-label">01</div>
			<div class="work-overlay">
				<div class="wo-title">The Mag Wrap 2025</div>
				<div class="wo-sub">Garment & Crowd Simulation</div>
			</div>
		</a>
		<a href="/personal" class="work-cell">
			<img src="/images/fatedreturn/david-hajek-field-rend1.webp" alt="The Fated Return" />
			<div class="work-num sec-label">02</div>
			<div class="work-overlay">
				<div class="wo-title">The Fated Return</div>
				<div class="wo-sub">Environment Renders</div>
			</div>
		</a>
		<a href="/personal" class="work-cell">
			<img src="/images/convenience/david-hajek-front-final.jpg" alt="Convenience Store" />
			<div class="work-num sec-label">03</div>
			<div class="work-overlay">
				<div class="wo-title">Convenience Store</div>
				<div class="wo-sub">Environment Art</div>
			</div>
		</a>
	</div>
</section>

<div class="clients">
	<span class="sec-label clients-label">Clients</span>
	<div class="client-logos">
		<img src="/images/apparently-logo.png" alt="Apparently Studios" />
		<img src="/images/krystof-logo.png" alt="Krystof Jezek" />
		<img src="/images/mira-logo.png" alt="Yoimira Entertainment" />
		<img src="/images/devomi-logo.png" alt="Devomi" />
		<img src="/images/dyky-logo.png" alt="Dykast" />
	</div>
</div>

<div class="split">
	<div class="split-col">
		<p class="sec-label" style="margin-bottom: 20px">Skills</p>
		<h2 class="split-title">Technical craft<br />meets artistic vision.</h2>
		<p class="split-body">
			From concept to final render — modeling, simulation, texturing, lighting and everything in
			between.
		</p>
		<div class="tags-row">
			<span class="tag">3D Modeling</span>
			<span class="tag">Simulations</span>
			<span class="tag">Texturing</span>
			<span class="tag">Rendering</span>
			<span class="tag">Sculpting</span>
			<span class="tag">Animation</span>
			<span class="tag">Lighting</span>
			<span class="tag">Geometry Nodes</span>
		</div>
	</div>
	<div class="split-col">
		<p class="sec-label" style="margin-bottom: 20px">What clients say</p>
		<div class="tcard">
			<p class="tquote">
				"Working with David was a real pleasure. Quick to respond, very accommodating — always
				trusted to deliver."
			</p>
			<div class="tauthor">
				<span class="tname">Mira Lumière</span>
				<span class="trole">Director, Yoimira Entertainment</span>
			</div>
		</div>
		<div class="tcard">
			<p class="tquote">
				"David is a great addition to my team. He knows his way around 3D graphics and isn’t afraid
				to take on complex technical challenges. He communicates really well, so working with him is
				always a breeze. Plus, he's reliable and always delivers his work on time, which I truly
				appreciate. I really enjoy working with him, and I know he'll keep playing a big part in our
				projects' success."
			</p>
			<div class="tauthor">
				<span class="tname">Krystof Jezek</span>
				<span class="trole">Motion Director</span>
			</div>
		</div>
	</div>
</div>

<div class="nav-sections">
	<a href="/commercial" class="ns">
		<span class="ns-num sec-label">01</span>
		<h3 class="ns-title">Commercial</h3>
		<p class="ns-desc">Client projects and professional studio work</p>
		<span class="ns-arr">→</span>
	</a>
	<a href="/personal" class="ns">
		<span class="ns-num sec-label">02</span>
		<h3 class="ns-title">Personal</h3>
		<p class="ns-desc">Creative exploration and artistic expression</p>
		<span class="ns-arr">→</span>
	</a>
	<a href="/retro" class="ns">
		<span class="ns-num sec-label">03</span>
		<h3 class="ns-title">Retro</h3>
		<p class="ns-desc">PSX-era low-poly characters and environments</p>
		<span class="ns-arr">→</span>
	</a>
</div>

<style>
	.intro {
		position: fixed;
		inset: 0;
		background: #0a0a0a;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		transition: opacity 0.8s ease;
	}
	.intro.fade-out {
		opacity: 0;
	}
	.intro-text {
		font-size: 18px;
		font-weight: 500;
		color: #f0f0f0;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	.hero {
		border-bottom: 1px solid #282828;
		padding: 80px 40px 64px;
	}
	.hero-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: end;
		max-width: 1600px;
		margin: 0 auto;
	}
	.hero-label {
		margin-bottom: 22px;
	}
	.hero-title {
		font-size: clamp(38px, 5vw, 58px);
		font-weight: 600;
		letter-spacing: -0.04em;
		color: #f0f0f0;
		line-height: 1;
	}
	.hero-right {
		display: flex;
		flex-direction: column;
		gap: 28px;
		justify-content: flex-end;
	}
	.hero-desc {
		font-size: 13px;
		color: #aaa;
		line-height: 1.8;
		max-width: 300px;
	}
	.hero-ctas {
		display: flex;
		gap: 10px;
	}
	.btn-primary {
		font-size: 11px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 13px 24px;
		background: #e8e8e8;
		color: #0a0a0a;
		font-weight: 500;
		transition: background 0.2s;
	}
	.btn-primary:hover {
		background: #fff;
	}
	.btn-secondary {
		font-size: 11px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 13px 24px;
		background: transparent;
		color: #e8e8e8;
		border: 1px solid #282828;
		transition: border-color 0.2s;
	}
	.btn-secondary:hover {
		border-color: #777;
	}

	.work-section {
		border-bottom: 1px solid #282828;
	}
	.work-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 40px;
		border-bottom: 1px solid #282828;
	}
	.work-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1px;
		background: #282828;
	}
	.work-cell {
		background: #0a0a0a;
		aspect-ratio: 4/3;
		position: relative;
		overflow: hidden;
		display: block;
	}
	.work-cell img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
		opacity: 0.7;
	}
	.work-cell:hover img {
		transform: scale(1.04);
		opacity: 1;
	}
	.work-num {
		position: absolute;
		top: 14px;
		right: 16px;
	}
	.work-overlay {
		position: absolute;
		inset: 0;
		background: rgba(10, 10, 10, 0.88);
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		opacity: 0;
		transition: opacity 0.2s;
	}
	.work-cell:hover .work-overlay {
		opacity: 1;
	}
	.wo-title {
		font-size: 14px;
		font-weight: 500;
		color: #f0f0f0;
		margin-bottom: 4px;
	}
	.wo-sub {
		font-size: 11px;
		color: #888;
		letter-spacing: 0.08em;
	}

	.clients {
		padding: 28px 40px;
		border-bottom: 1px solid #282828;
		display: flex;
		align-items: center;
		gap: 44px;
	}
	.clients-label {
		white-space: nowrap;
	}
	.client-logos {
		display: flex;
		align-items: center;
		gap: 44px;
		flex-wrap: wrap;
	}
	.client-logos img {
		height: 40px;
		width: auto;
		opacity: 0.35;
		filter: grayscale(1) brightness(2);
		transition: opacity 0.2s;
		display: block;
	}
	.client-logos img:hover {
		opacity: 0.7;
	}
	/* keep dead rule from old selector to avoid breaking responsive block below */
	.client-names span {
		font-size: 11px;
		color: #999;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid #282828;
	}
	.split-col {
		padding: 52px 40px;
	}
	.split-col:first-child {
		border-right: 1px solid #282828;
	}
	.split-title {
		font-size: clamp(22px, 2.5vw, 30px);
		font-weight: 500;
		color: #f0f0f0;
		line-height: 1.2;
		letter-spacing: -0.02em;
		margin-bottom: 16px;
	}
	.split-body {
		font-size: 13px;
		color: #aaa;
		line-height: 1.8;
	}
	.tags-row {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
		margin-top: 24px;
	}

	.tcard {
		background: #111;
		border: 1px solid #282828;
		padding: 24px;
		margin-bottom: 10px;
	}
	.tcard:last-child {
		margin-bottom: 0;
	}
	.tquote {
		font-size: 13px;
		color: #aaa;
		line-height: 1.8;
		font-style: italic;
		margin-bottom: 18px;
	}
	.tauthor {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}
	.tname {
		font-size: 12px;
		color: #ccc;
		font-weight: 500;
	}
	.trole {
		font-size: 11px;
		color: #666;
	}

	.nav-sections {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-bottom: 1px solid #282828;
	}
	.ns {
		padding: 44px 40px;
		border-right: 1px solid #282828;
		display: flex;
		flex-direction: column;
		transition: background 0.15s;
	}
	.ns:last-child {
		border-right: none;
	}
	.ns:hover {
		background: rgba(255, 255, 255, 0.018);
	}
	.ns-num {
		margin-bottom: 16px;
	}
	.ns-title {
		font-size: 22px;
		font-weight: 500;
		color: #f0f0f0;
		margin-bottom: 8px;
	}
	.ns-desc {
		font-size: 12px;
		color: #999;
		line-height: 1.6;
	}
	.ns-arr {
		margin-top: 24px;
		font-size: 18px;
		color: #777;
		transition:
			color 0.15s,
			transform 0.15s;
	}
	.ns:hover .ns-arr {
		color: #aaa;
		transform: translateX(4px);
	}

	@media (max-width: 1024px) {
		.hero-inner {
			grid-template-columns: 1fr;
			gap: 36px;
		}
		.hero-right {
			justify-content: flex-start;
		}
		.hero-desc {
			max-width: 100%;
		}
		.work-grid {
			grid-template-columns: 1fr 1fr;
		}
		.nav-sections {
			grid-template-columns: 1fr;
		}
		.ns {
			border-right: none;
			border-bottom: 1px solid #282828;
		}
		.ns:last-child {
			border-bottom: none;
		}
	}

	@media (max-width: 768px) {
		.hero {
			padding: 48px 20px 40px;
		}
		.hero-title {
			font-size: 36px;
		}
		.work-header {
			padding: 16px 20px;
		}
		.work-grid {
			grid-template-columns: 1fr;
		}
		.clients {
			padding: 20px;
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}
		.client-logos {
			gap: 24px;
		}
		.client-logos img {
			height: 22px;
		}
		.split {
			grid-template-columns: 1fr;
		}
		.split-col {
			padding: 36px 20px;
		}
		.split-col:first-child {
			border-right: none;
			border-bottom: 1px solid #282828;
		}
		.ns {
			padding: 32px 20px;
		}
	}
</style>
