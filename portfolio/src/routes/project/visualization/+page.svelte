<script lang="ts">
	let lightboxSrc = '';
	let lightboxAlt = '';
	let lightboxOpen = false;

	function openLightbox(src: string, alt: string) {
		lightboxSrc = src;
		lightboxAlt = alt;
		lightboxOpen = true;
		if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		lightboxOpen = false;
		if (typeof document !== 'undefined') document.body.style.overflow = '';
	}

	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Escape') closeLightbox();
	}

	const mediaItems = [
		{
			type: 'image',
			src: '/images/projects/wrap/static.webp',
			alt: 'Final Garment Render',
			caption: 'Final Garment Render'
		},
		{
			type: 'image',
			src: '/images/projects/wrap/box.webp',
			alt: 'Model showcase',
			caption: 'Model Showcase'
		},
		{
			type: 'image',
			src: '/images/projects/wrap/bts2.webp',
			alt: 'Behind the scenes',
			caption: 'Behind the Scenes'
		},
		{
			type: 'image',
			src: '/images/projects/wrap/runbts.gif',
			alt: 'Crowd Simulation Demo',
			caption: 'Crowd Simulation'
		},
		{
			type: 'video',
			src: '/images/projects/wrap/bts.mp4',
			poster: '/images/projects/wrap/poster.webp',
			alt: 'Garment Simulation Demo',
			caption: 'Garment Simulation Demo'
		}
	];
</script>

<svelte:head>
	<title>The Mag Wrap 2025 — David Hajek</title>
</svelte:head>

<svelte:window on:keydown={handleKey} />

<div class="pg-header">
	<div class="ph-left">
		<p class="sec-label ph-idx">Commercial · 2025</p>
		<h1 class="ph-title">The Mag<br />Wrap 2025</h1>
	</div>
	<div class="ph-right">
		<p class="ph-meta">Garment & Crowd Simulation<br />Client: The Mag / Krystof Jezek<br />Duration: 6 weeks</p>
	</div>
</div>

<div class="hero-row">
	<div class="hero-info">
		<div class="meta-rows">
			<div class="meta-row">
				<span class="sec-label meta-key">Role</span>
				<span class="meta-val">Simulation Developer</span>
			</div>
			<div class="meta-row">
				<span class="sec-label meta-key">Software</span>
				<span class="meta-val">Blender · Houdini</span>
			</div>
			<div class="meta-row">
				<span class="sec-label meta-key">Year</span>
				<span class="meta-val">2025</span>
			</div>
			<div class="meta-row">
				<span class="sec-label meta-key">Director</span>
				<span class="meta-val">Krystof Jezek</span>
			</div>
		</div>
		<p class="proj-desc">
			I had the opportunity to contribute to The Mag Wrap 2025 under the direction of Krystof Jezek. My role focused on developing realistic garment simulations and implementing crowd dynamics for the series.
		</p>
		<a
			href="https://www.youtube.com/watch?v=bCpYQCTLIRs&t"
			target="_blank"
			rel="noopener"
			class="watch-cta"
		>Watch the full series</a>
	</div>
	<div class="hero-video">
		<video
			src="/images/vidz/magwrap.mp4"
			autoplay
			muted
			loop
			playsinline
		></video>
	</div>
</div>

<div class="gallery-header">
	<span class="sec-label">Project gallery</span>
	<span class="sec-label gallery-count">{mediaItems.length} items</span>
</div>

<div class="gallery-grid">
	{#each mediaItems as item, i}
		<div
			class="gallery-cell"
			class:wide={item.type === 'video'}
			role={item.type === 'image' ? 'button' : undefined}
			tabindex={item.type === 'image' ? 0 : undefined}
			on:click={() => item.type === 'image' && openLightbox(item.src, item.alt)}
			on:keydown={(e) => item.type === 'image' && e.key === 'Enter' && openLightbox(item.src, item.alt)}
		>
			{#if item.type === 'video'}
				<video src={item.src} poster={item.poster} autoplay muted loop playsinline></video>
			{:else}
				<img src={item.src} alt={item.alt} loading="lazy" />
				<div class="cell-expand">↗</div>
			{/if}
			{#if item.caption}
				<div class="cell-caption">{item.caption}</div>
			{/if}
		</div>
	{/each}
</div>

{#if lightboxOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="lightbox" on:click={closeLightbox} role="dialog" aria-modal="true">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="lb-inner" on:click|stopPropagation>
			<img src={lightboxSrc} alt={lightboxAlt} />
			<button class="lb-close" on:click={closeLightbox} aria-label="Close">×</button>
		</div>
	</div>
{/if}

<style>
	.pg-header {
		padding: 64px 40px 48px;
		border-bottom: 1px solid #181818;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.ph-idx { margin-bottom: 14px; }
	.ph-title {
		font-size: clamp(38px, 5vw, 52px);
		font-weight: 600;
		letter-spacing: -0.04em;
		color: #f0f0f0;
		line-height: 1.0;
	}
	.ph-right { text-align: right; }
	.ph-meta {
		font-size: 13px;
		color: #777;
		line-height: 2;
	}

	.hero-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid #181818;
	}

	.hero-info {
		padding: 48px 40px;
		border-right: 1px solid #181818;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.meta-rows { border-top: 1px solid #181818; }
	.meta-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 13px 0;
		border-bottom: 1px solid #141414;
		gap: 16px;
	}
	.meta-key { flex-shrink: 0; }
	.meta-val { font-size: 12px; color: #aaa; text-align: right; }

	.proj-desc {
		font-size: 13px;
		color: #aaa;
		line-height: 1.85;
	}

	.watch-cta {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #666;
		transition: color 0.15s;
		width: fit-content;
	}
	.watch-cta::after {
		content: '';
		display: inline-block;
		width: 28px;
		height: 1px;
		background: currentColor;
		transition: width 0.2s;
	}
	.watch-cta:hover { color: #f0f0f0; }
	.watch-cta:hover::after { width: 44px; }

	.hero-video {
		background: #080808;
		overflow: hidden;
	}
	.hero-video video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.85;
		display: block;
	}

	.gallery-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 40px;
		border-bottom: 1px solid #181818;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: #141414;
		border-bottom: 1px solid #181818;
	}

	.gallery-cell {
		background: #0a0a0a;
		position: relative;
		overflow: hidden;
		cursor: none;
	}
	.gallery-cell.wide {
		grid-column: span 3;
		cursor: default;
	}

	.gallery-cell img {
		width: 100%;
		aspect-ratio: 4/3;
		object-fit: cover;
		opacity: 0.8;
		transition: opacity 0.3s, transform 0.4s ease;
		display: block;
	}
	.gallery-cell:not(.wide):hover img { opacity: 1; transform: scale(1.03); }

	.gallery-cell video {
		width: 100%;
		aspect-ratio: 16/9;
		object-fit: cover;
		display: block;
	}

	.cell-expand {
		position: absolute;
		top: 12px;
		right: 14px;
		font-size: 13px;
		color: #444;
		transition: color 0.15s;
		pointer-events: none;
	}
	.gallery-cell:hover .cell-expand { color: #ccc; }

	.cell-caption {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10px 14px;
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #555;
		background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
		opacity: 0;
		transition: opacity 0.2s;
	}
	.gallery-cell:hover .cell-caption { opacity: 1; }

	/* Lightbox */
	.lightbox {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.94);
		z-index: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
	}
	.lb-inner {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
	}
	.lb-inner img {
		max-width: 100%;
		max-height: 90vh;
		object-fit: contain;
	}
	.lb-close {
		position: absolute;
		top: -40px;
		right: -8px;
		background: none;
		border: none;
		color: #aaa;
		font-size: 28px;
		line-height: 1;
		padding: 4px 8px;
		transition: color 0.15s;
		cursor: none;
	}
	.lb-close:hover { color: #fff; }

	@media (max-width: 1024px) {
		.pg-header { padding: 48px 20px 36px; flex-direction: column; align-items: flex-start; gap: 24px; }
		.ph-right { text-align: left; }
		.hero-row { grid-template-columns: 1fr; }
		.hero-info { border-right: none; border-bottom: 1px solid #181818; padding: 36px 20px; }
		.gallery-grid { grid-template-columns: repeat(2, 1fr); }
		.gallery-cell.wide { grid-column: span 2; }
		.gallery-header { padding: 16px 20px; }
	}

	@media (max-width: 640px) {
		.gallery-grid { grid-template-columns: 1fr; }
		.gallery-cell.wide { grid-column: span 1; }
	}
</style>
