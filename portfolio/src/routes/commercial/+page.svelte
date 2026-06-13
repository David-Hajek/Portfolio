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

	interface Img { src: string; alt: string }
	interface Project {
		num: string;
		title: string;
		client: string;
		desc: string;
		tags: string[];
		video?: string;
		images?: Img[];
		href?: string;
	}

	const projects: Project[] = [
		{
			num: '01',
			title: 'The Mag Wrap 2025',
			client: 'The Mag · Krystof Jezek',
			desc: 'Garment simulations and crowd dynamics developed for The Mag Wrap 2025 under the creative direction of Krystof Jezek. Reusable simulation setups allowed fast iteration across multiple shots.',
			tags: ['Garment Sim', 'Crowd Sim', 'Blender'],
			video: '/images/vidz/magwrap.mp4',
			images: [
				{ src: '/images/projects/wrap/thumbnail.webp', alt: 'The Mag Wrap 2025 thumbnail' },
				{ src: '/images/projects/wrap/static.webp', alt: 'Final garment render' },
				{ src: '/images/projects/wrap/box.webp', alt: 'Model showcase' },
				{ src: '/images/projects/wrap/bts2.webp', alt: 'Behind the scenes' },
				{ src: '/images/projects/wrap/runbts.gif', alt: 'Crowd simulation preview' }
			],
			href: '/project/visualization'
		},
		{
			num: '02',
			title: 'Server Environment Creation',
			client: 'Krystof Jezek',
			desc: 'Full server room environment modeled in Blender and textured in Substance Painter for a short animation directed by Krystof Jezek. Key components and close-ups were carefully crafted to hold up under camera.',
			tags: ['Blender', 'Substance Painter', 'Environment'],
			video: '/images/vidz/netgear.mp4',
			images: [
				{ src: '/images/vidz/netgear.png', alt: 'Server environment render' }
			]
		},
		{
			num: '03',
			title: 'Bottle Destruction & Smoke Simulation',
			client: 'Krystof Jezek',
			desc: 'Ground destruction and VDB smoke simulation built in Houdini with a reusable node setup for rapid iteration between shots. Final assets were composited in Blender by Krystof Jezek.',
			tags: ['Houdini', 'RBD', 'VDB', 'Simulation'],
			video: '/images/vidz/pivko.mp4'
		},
		{
			num: '04',
			title: 'Mira Lumière — Scene Design',
			client: 'Yoimira Entertainment',
			desc: 'A series of environment renders and scene designs created for Mira Lumière and Yoimira Entertainment. From mansion interiors to rooftop vistas and street scenes — each piece built to a specific mood and aesthetic.',
			tags: ['Blender', 'Environment', 'Rendering', 'Lighting'],
			images: [
				{ src: '/images/commercial/mira/frontmansion2.png', alt: 'Mansion front exterior' },
				{ src: '/images/commercial/mira/rooftopFinal.png', alt: 'Rooftop vista' },
				{ src: '/images/commercial/mira/street.png', alt: 'Street scene' },
				{ src: '/images/commercial/mira/mansionpost.png', alt: 'Mansion post render' }
			]
		},
		{
			num: '05',
			title: 'Witch Animation',
			client: 'Yoimira Entertainment',
			desc: 'Character animation piece produced for Yoimira Entertainment. Full character motion and environment lighting developed in Blender.',
			tags: ['Blender', 'Animation', 'Character'],
			video: '/images/vidz/witch.mp4'
		},
		{
			num: '06',
			title: 'Krajac',
			client: 'Krajac',
			desc: 'Motion graphics and animation work produced for Krajac. Logo animations, transitions and promotional content developed across multiple Blender renders.',
			tags: ['Blender', 'Motion Graphics', 'Animation'],
			video: '/images/vidz/krajac.mp4',
			images: [
				{ src: '/images/commercial/krajac/logo_main.png', alt: 'Krajac logo main' },
				{ src: '/images/commercial/krajac/transition.gif', alt: 'Transition animation' }
			]
		},
		{
			num: '07',
			title: 'Tweezers — Product Animation',
			client: 'Commercial',
			desc: 'Product animation and visualisation for a tweezers commercial. Photorealistic product rendering with carefully art-directed lighting and materials.',
			tags: ['Blender', 'Product Animation', 'Rendering'],
			video: '/images/vidz/tweezers.mp4'
		},
		{
			num: '08',
			title: 'Spojka',
			client: 'Commercial',
			desc: 'Short commercial animation piece. Full scene setup, lighting and render pipeline developed in Blender for the final deliverable.',
			tags: ['Blender', 'Animation', 'Commercial'],
			video: '/images/vidz/spojka.mp4'
		},
		{
			num: '09',
			title: 'Antarctic — Behind the Scenes',
			client: 'Apparently Studios',
			desc: 'Environment and scene work produced for Apparently Studios. The Antarctic BTS captures the scale of the production environment built for the project.',
			tags: ['Blender', 'Environment', 'VFX'],
			images: [
				{ src: '/images/commercial/antarctic/antarctica-bts.gif', alt: 'Antarctic BTS animation' }
			]
		}
	];
</script>

<svelte:head>
	<title>Commercial — David Hajek</title>
</svelte:head>

<svelte:window on:keydown={handleKey} />

<div class="pg-header">
	<div class="ph-left">
		<p class="sec-label ph-idx">01 — Commercial work</p>
		<h1 class="ph-title">Client<br />Projects</h1>
	</div>
	<div class="ph-right">
		<p class="ph-meta">9 projects · 2023–2025<br />Blender · Houdini · Substance</p>
	</div>
</div>

{#each projects as project, i}
	<div class="proj-row" class:rev={i % 2 !== 0}>
		<div class="proj-media">
			{#if project.video}
				<div class="media-video">
					<video src={project.video} autoplay muted loop playsinline></video>
				</div>
				{#if project.images && project.images.length}
					<div class="thumb-strip">
						{#each project.images as img}
							<div class="thumb" role="button" tabindex="0"
								on:click={() => openLightbox(img.src, img.alt)}
								on:keydown={(e) => e.key === 'Enter' && openLightbox(img.src, img.alt)}
							>
								<img src={img.src} alt={img.alt} loading="lazy" />
							</div>
						{/each}
					</div>
				{/if}
			{:else if project.images && project.images.length}
				<div class="media-primary" role="button" tabindex="0"
					on:click={() => openLightbox(project.images[0].src, project.images[0].alt)}
					on:keydown={(e) => e.key === 'Enter' && openLightbox(project.images[0].src, project.images[0].alt)}
				>
					<img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" />
					<div class="media-expand">↗</div>
				</div>
				{#if project.images.length > 1}
					<div class="thumb-strip">
						{#each project.images.slice(1) as img}
							<div class="thumb" role="button" tabindex="0"
								on:click={() => openLightbox(img.src, img.alt)}
								on:keydown={(e) => e.key === 'Enter' && openLightbox(img.src, img.alt)}
							>
								<img src={img.src} alt={img.alt} loading="lazy" />
							</div>
						{/each}
					</div>
				{/if}
			{:else}
				<div class="media-empty">
					<span class="empty-label">Visual coming soon</span>
				</div>
			{/if}
		</div>

		<div class="proj-body">
			<div>
				<p class="p-num sec-label">{project.num}</p>
				<p class="p-client">{project.client}</p>
				<h2 class="p-title">{project.title}</h2>
				<p class="p-desc">{project.desc}</p>
				<div class="p-tags">
					{#each project.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</div>
			{#if project.href}
				<a href={project.href} class="p-cta">View case study</a>
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

	/* Video as primary */
	.media-video {
		aspect-ratio: 16/9;
		overflow: hidden;
	}
	.media-video video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.85;
		transition: opacity 0.3s;
	}
	.proj-row:hover .media-video video { opacity: 1; }

	/* Image as primary */
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
		font-size: 14px;
		color: #555;
		transition: color 0.15s;
		pointer-events: none;
	}
	.media-primary:hover .media-expand { color: #ccc; }

	/* Thumbnail strip */
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
	}
	.thumb:last-child { border-right: none; }
	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.6;
		transition: opacity 0.2s, transform 0.3s ease;
	}
	.thumb:hover img { opacity: 1; transform: scale(1.08); }

	/* Empty state */
	.media-empty {
		aspect-ratio: 16/9;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #090909;
	}
	.empty-label {
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #333;
	}

	/* Project body */
	.proj-body {
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 240px;
	}
	.p-num { margin-bottom: 8px; }
	.p-client {
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #555;
		margin-bottom: 10px;
	}
	.p-title {
		font-size: 22px;
		font-weight: 500;
		color: #f0f0f0;
		margin-bottom: 14px;
		letter-spacing: -0.01em;
		line-height: 1.25;
	}
	.p-desc {
		font-size: 14px;
		color: #aaa;
		line-height: 1.8;
	}
	.p-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 20px;
	}
	.p-cta {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		margin-top: 28px;
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #666;
		transition: color 0.15s;
		width: fit-content;
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
	.p-cta:hover::after { width: 48px; }

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
		.pg-header { padding: 48px 20px 36px; flex-direction: column; align-items: flex-start; gap: 16px; }
		.ph-right { text-align: left; }
		.proj-row { grid-template-columns: 1fr; }
		.proj-row.rev .proj-media { order: 0; border-left: none; border-right: none; border-bottom: 1px solid #181818; }
		.proj-row.rev .proj-body { order: 0; }
		.proj-media { border-right: none; border-bottom: 1px solid #181818; }
		.proj-body { padding: 28px 20px; min-height: unset; }
	}
</style>
