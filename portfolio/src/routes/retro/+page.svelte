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

	const projects = [
		{
			num: '01',
			title: 'Untitled Game Project',
			desc: 'PSX-style character and environment models built with a friend for an indie game. Developed a full reusable pipeline for low-poly assets — characters, environments, and in-game props — that made iteration fast.',
			tags: ['PSX', 'Game Art', 'Pipeline', 'Blender'],
			images: [
				{ src: '/images/retro/untitled/bgtest.webp', alt: 'Background test render' },
				{ src: '/images/retro/untitled/preview.webp', alt: 'Character preview' },
				{ src: '/images/retro/untitled/concept.webp', alt: 'Concept art' },
				{ src: '/images/retro/untitled/rendertest.webp', alt: 'Render test' },
				{ src: '/images/retro/untitled/tank.webp', alt: 'Tank model' }
			],
			video: 'https://www.youtube.com/embed/RJHFx1jc5Oc'
		},
		{
			num: '02',
			title: 'University Modeling Practice',
			desc: 'Rigged and textured knight created for a university assignment. Accompanied by a somber medieval forest environment with a towering castle in the background — built to atmosphere over realism.',
			tags: ['Blender', 'Rigging', 'Environment', 'Low-poly'],
			images: [
				{ src: '/images/retro/proj2/bg.jpg', alt: 'Medieval forest environment' },
				{ src: '/images/retro/proj2/gifmaker_me.gif', alt: 'Animation preview' }
			],
			video: null
		},
		{
			num: '03',
			title: 'Backstreets',
			desc: 'Started as a quick PSX environment render. A character appeared, then it got animated, then edited in DaVinci Resolve. What was meant to be a quick test became a fully realised short piece.',
			tags: ['PSX', 'Animation', 'DaVinci Resolve'],
			images: [
				{ src: '/images/retro/to-add/main.webp', alt: 'Backstreets PSX closeup render' },
				{ src: '/images/retro/to-add/background.webp', alt: 'Backstreets environment' }
			],
			video: 'https://www.youtube.com/embed/ECQ7oTGyaNY'
		},
		{
			num: '04',
			title: 'UYUU — Stream Background',
			desc: "PSX-style 3D avatar model and intermission stage designed for a friend's live streams. Both the model and the environment came together into something cohesive and characterful.",
			tags: ['PSX', 'Character', 'Vtuber', 'Environment'],
			images: [
				{ src: '/images/retro/uyuy/uyuu-main.webp', alt: 'UYUU stream background' },
				{ src: '/images/retro/uyuy/uyuu-model.webp', alt: 'UYUU character model' },
				{ src: '/images/retro/uyuy/ujuj-stream.webp', alt: 'Stream scene preview' }
			],
			video: null
		}
	];
</script>

<svelte:head>
	<title>Retro — David Hajek</title>
</svelte:head>

<svelte:window on:keydown={handleKey} />

<div class="pg-header">
	<div class="ph-left">
		<p class="sec-label ph-idx">03 — Retro</p>
		<h1 class="ph-title">PSX Era<br />Work</h1>
	</div>
	<div class="ph-right">
		<p class="ph-meta">4 projects · Low-poly · PSX</p>
	</div>
</div>

{#each projects as project, i}
	<div class="proj-row" class:rev={i % 2 !== 0}>
		<div class="proj-media">
			<div class="media-primary" role="button" tabindex="0"
				on:click={() => openLightbox(project.images[0].src, project.images[0].alt)}
				on:keydown={(e) => e.key === 'Enter' && openLightbox(project.images[0].src, project.images[0].alt)}
			>
				<img src={project.images[0].src} alt={project.images[0].alt} />
				<div class="media-expand">↗</div>
			</div>
			{#if project.images.length > 1}
				<div class="thumb-strip">
					{#each project.images.slice(1) as img}
						<div class="thumb" role="button" tabindex="0"
							on:click={() => openLightbox(img.src, img.alt)}
							on:keydown={(e) => e.key === 'Enter' && openLightbox(img.src, img.alt)}
						>
							<img src={img.src} alt={img.alt} />
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="proj-body">
			<div>
				<p class="sec-label p-num">{project.num}</p>
				<h2 class="p-title">{project.title}</h2>
				<p class="p-desc">{project.desc}</p>
				<div class="p-tags">
					{#each project.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</div>
			{#if project.video}
				<a href={project.video} target="_blank" rel="noopener" class="p-cta">Watch on YouTube</a>
			{/if}
		</div>
	</div>
{/each}

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

	.proj-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid #181818;
	}
	.proj-row.rev .proj-media { order: 2; border-left: 1px solid #181818; border-right: none; }
	.proj-row.rev .proj-body { order: 1; }

	.proj-media {
		border-right: 1px solid #181818;
		background: #0d0d0d;
		display: flex;
		flex-direction: column;
	}

	.media-primary {
		position: relative;
		overflow: hidden;
		aspect-ratio: 16/9;
		cursor: none;
	}
	.media-primary img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.8;
		transition: opacity 0.3s, transform 0.4s ease;
	}
	.proj-row:hover .media-primary img { opacity: 1; transform: scale(1.02); }

	.media-expand {
		position: absolute;
		top: 12px;
		right: 14px;
		font-size: 13px;
		color: #555;
		transition: color 0.15s;
		pointer-events: none;
	}
	.media-primary:hover .media-expand { color: #ccc; }

	.thumb-strip {
		display: flex;
		border-top: 1px solid #181818;
	}
	.thumb {
		flex: 1;
		aspect-ratio: 1;
		overflow: hidden;
		border-right: 1px solid #181818;
		cursor: none;
		position: relative;
	}
	.thumb:last-child { border-right: none; }
	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.6;
		transition: opacity 0.2s, transform 0.3s ease;
	}
	.thumb:hover img { opacity: 1; transform: scale(1.06); }

	.proj-body {
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 240px;
	}
	.p-num { margin-bottom: 14px; }
	.p-title {
		font-size: 20px;
		font-weight: 500;
		color: #f0f0f0;
		margin-bottom: 12px;
		letter-spacing: -0.01em;
		line-height: 1.25;
	}
	.p-desc { font-size: 14px; color: #aaa; line-height: 1.8; }
	.p-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 18px;
	}
	.p-cta {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		margin-top: 24px;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #666;
		transition: color 0.15s;
	}
	.p-cta::after {
		content: '';
		display: inline-block;
		width: 28px;
		height: 1px;
		background: currentColor;
		transition: width 0.2s;
	}
	.p-cta:hover { color: #f0f0f0; }
	.p-cta:hover::after { width: 44px; }

	/* Lightbox */
	.lightbox {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.92);
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
	}
	.lb-close:hover { color: #fff; }

	@media (max-width: 1024px) {
		.pg-header { padding: 48px 20px 36px; }
		.proj-row { grid-template-columns: 1fr; }
		.proj-row.rev .proj-media { order: 0; border-left: none; border-right: none; border-bottom: 1px solid #181818; }
		.proj-row.rev .proj-body { order: 0; }
		.proj-media { border-right: none; border-bottom: 1px solid #181818; }
		.proj-body { padding: 28px 20px; min-height: unset; }
	}
</style>
