<script lang="ts">
	let modalOpen = false;
	let modalType: 'image' | 'video' = 'image';
	let modalSrc = '';
	let modalAlt = '';

	function openImage(src: string, alt: string) {
		modalType = 'image';
		modalSrc = src;
		modalAlt = alt;
		modalOpen = true;
		if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
	}

	function openVideo(src: string) {
		modalType = 'video';
		modalSrc = src;
		modalOpen = true;
		if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modalOpen = false;
		if (typeof document !== 'undefined') document.body.style.overflow = '';
	}

	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Escape') closeModal();
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
			desc: 'An environment created for a short animation. Modeled the entire scene in Blender with key components and close-ups textured in Substance Painter. The finished environment provided the grounds for the final animation.',
			tags: ['Blender', 'Substance Painter', 'Environment'],
			video: '/images/vidz/netgear.mp4',
			images: [
				{ src: '/images/vidz/netgear.png', alt: 'Server environment render' }
			]
		},
		{
			num: '03',
			title: 'Bottle Destruction & Smoke Sim',
			client: 'Krystof Jezek',
			desc: 'A Houdini-made ground destruction with a VDB smoke simulation. A reusable node setup allowed rapid iteration between crashes. The finished RBDs and VDBs were then composited in Blender.',
			tags: ['Houdini', 'RBD', 'VDB', 'Simulation'],
			video: '/images/vidz/pivko.mp4'
		},
		{
			num: '04',
			title: 'A Witch Cries, So Comes the End',
			client: 'Yoimira Entertainment · Mira Lumière',
			desc: 'Background renders for a visual novel trailer — compositions designed to maintain stylized realism while keeping focus on the foreground characters. Includes the full character animation produced for the same project.',
			tags: ['Blender', 'Environment', 'Animation', 'Lighting'],
			video: '/images/vidz/witch.mp4',
			images: [
				{ src: '/images/commercial/mira/mansionpost.png', alt: 'Side view of the mansion from outside the gate' },
				{ src: '/images/commercial/mira/frontmansion2.png', alt: 'Mansion front view' },
				{ src: '/images/commercial/mira/rooftopFinal.png', alt: 'Rooftops during thunderstorm' },
				{ src: '/images/commercial/mira/street.png', alt: 'Abandoned streets' }
			]
		},
		{
			num: '05',
			title: 'KRAJÁČ',
			client: 'Vladimir Dykast',
			desc: 'Logo creation, 3D assets and transitions for the hockey video series KRAJÁČ. A hockey puck transition and logo built around the show\'s aesthetic — both were very well received.',
			tags: ['Blender', 'Motion Graphics', 'Logo', 'Visual Identity'],
			video: '/images/vidz/krajac.mp4',
			images: [
				{ src: '/images/commercial/krajac/logo_main.png', alt: 'Krajac logo' },
				{ src: '/images/commercial/krajac/transition.gif', alt: 'Transition animation' }
			]
		},
		{
			num: '06',
			title: 'Tweezers Close Up',
			client: 'Krystof Jezek',
			desc: 'A hero close-up model of tweezers for a jewellery shot. Modeled from real-world reference with boolean grates, textured in Substance Painter, then rigged and animated to enhance the realness of the final shot.',
			tags: ['Blender', 'Substance Painter', 'Product', 'Rigging'],
			video: '/images/vidz/tweezers.mp4'
		},
		{
			num: '07',
			title: 'Growth Simulation',
			client: 'Krystof Jezek',
			desc: 'A geometry node setup for the growth of flowers, grass and ferns. A robust system controlled by invisible objects allowed full artistic direction over where and how quickly the vegetation would grow.',
			tags: ['Blender', 'Geometry Nodes', 'Simulation'],
			video: '/images/vidz/spojka.mp4'
		},
		{
			num: '08',
			title: 'Antarctica Scene',
			client: 'Apparently Studios',
			desc: 'An arctic environment for a jewellery commercial. Built using sculpting, heightmaps and Z-value-based texturing to create a realistic environment that added depth while keeping the focus on the jewellery.',
			tags: ['Blender', 'Environment', 'VFX'],
			video: 'https://s3.amazonaws.com/webflow-prod-assets/5d626c045bf4d84a1c256e90/6952875461ca8c9f99315d92_cgi_antartcica-web2.mp4',
			images: [
				{ src: '/images/commercial/antarctic/antarctica-bts.gif', alt: 'Antarctica BTS' }
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
		<p class="ph-meta">8 projects · 2023–2025<br />Blender · Houdini · Substance</p>
	</div>
</div>

{#each projects as project, i}
	<div class="proj-row" class:rev={i % 2 !== 0}>
		<div class="proj-media">
			{#if project.video}
				<div class="media-video" role="button" tabindex="0"
					on:click={() => openVideo(project.video!)}
					on:keydown={(e) => e.key === 'Enter' && openVideo(project.video!)}
				>
					<video src={project.video} autoplay muted loop playsinline></video>
					<div class="vid-overlay"><span class="expand-hint">↗</span></div>
				</div>
				{#if project.images?.length}
					<div class="thumb-strip">
						{#each project.images as img}
							<div class="thumb" role="button" tabindex="0"
								on:click={() => openImage(img.src, img.alt)}
								on:keydown={(e) => e.key === 'Enter' && openImage(img.src, img.alt)}
							>
								<img src={img.src} alt={img.alt} loading="lazy" />
							</div>
						{/each}
					</div>
				{/if}
			{:else if project.images?.length}
				<div class="media-img" role="button" tabindex="0"
					on:click={() => openImage(project.images![0].src, project.images![0].alt)}
					on:keydown={(e) => e.key === 'Enter' && openImage(project.images![0].src, project.images![0].alt)}
				>
					<img src={project.images![0].src} alt={project.images![0].alt} loading="lazy" />
					<div class="vid-overlay"><span class="expand-hint">↗</span></div>
				</div>
				{#if project.images.length > 1}
					<div class="thumb-strip">
						{#each project.images.slice(1) as img}
							<div class="thumb" role="button" tabindex="0"
								on:click={() => openImage(img.src, img.alt)}
								on:keydown={(e) => e.key === 'Enter' && openImage(img.src, img.alt)}
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

<!-- Modal: images + videos -->
{#if modalOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal" on:click={closeModal} role="dialog" aria-modal="true" tabindex="-1">
		<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
		<div class="modal-inner" on:click|stopPropagation role="document">
			{#if modalType === 'image'}
				<img src={modalSrc} alt={modalAlt} />
			{:else}
				<!-- svelte-ignore a11y-media-has-caption -->
				<video src={modalSrc} controls autoplay></video>
			{/if}
			<button class="modal-close" on:click={closeModal} aria-label="Close">×</button>
		</div>
	</div>
{/if}

<style>
	.pg-header {
		padding: 64px 40px 48px;
		border-bottom: 1px solid #282828;
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
	.ph-meta { font-size: 13px; color: #999; line-height: 2; }

	/* ── Row layout ─────────────────────────────────── */
	.proj-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid #282828;
	}
	.proj-row.rev .proj-media {
		order: 2;
		border-left: 1px solid #282828;
		border-right: none;
	}
	.proj-row.rev .proj-body { order: 1; }

	/* ── Media column ───────────────────────────────── */
	.proj-media {
		border-right: 1px solid #282828;
		background: #0a0a0a;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	/* Primary video */
	.media-video {
		position: relative;
		overflow: hidden;
		cursor: none;
	}
	.media-video video {
		width: 100%;
		height: auto;
		display: block;
		opacity: 0.85;
		transition: opacity 0.3s;
	}
	.proj-row:hover .media-video video { opacity: 1; }

	/* Primary image (image-only projects) */
	.media-img {
		position: relative;
		overflow: hidden;
		cursor: none;
	}
	.media-img img {
		width: 100%;
		height: auto;
		display: block;
		opacity: 0.85;
		transition: opacity 0.3s;
	}
	.proj-row:hover .media-img img { opacity: 1; }

	/* Expand overlay */
	.vid-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		padding: 14px;
		opacity: 0;
		transition: opacity 0.2s;
	}
	.media-video:hover .vid-overlay,
	.media-img:hover .vid-overlay { opacity: 1; }
	.expand-hint { font-size: 14px; color: #ccc; }

	/* Thumbnail strip */
	.thumb-strip {
		display: flex;
		border-top: 1px solid #282828;
		overflow-x: auto;
		scrollbar-width: none;
	}
	.thumb-strip::-webkit-scrollbar { display: none; }
	.thumb {
		flex: 0 0 180px;
		height: 140px;
		overflow: hidden;
		border-right: 1px solid #282828;
		cursor: none;
		position: relative;
		flex-shrink: 0;
	}
	.thumb:last-child { border-right: none; }
	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.72;
		transition: opacity 0.2s, transform 0.3s ease;
	}
	.thumb:hover img { opacity: 1; transform: scale(1.06); }

	/* Empty fallback */
	.media-empty {
		min-height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.empty-label {
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #2a2a2a;
	}

	/* ── Text column ─────────────────────────────────── */
	.proj-body {
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		min-width: 0;
		position: sticky;
		top: 60px;
		align-self: flex-start;
	}
	.p-num { margin-bottom: 8px; }
	.p-client {
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #888;
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
	.p-desc { font-size: 14px; color: #aaa; line-height: 1.8; }
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

	/* ── Modal ──────────────────────────────────────── */
	.modal {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.94);
		z-index: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
	}
	.modal-inner {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal-inner img {
		max-width: 100%;
		max-height: 90vh;
		object-fit: contain;
	}
	.modal-inner video {
		max-width: 90vw;
		max-height: 90vh;
		width: 80vw;
	}
	.modal-close {
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
	.modal-close:hover { color: #fff; }

	/* ── Responsive ─────────────────────────────────── */
	@media (max-width: 1024px) {
		.pg-header {
			padding: 48px 20px 36px;
			flex-direction: column;
			align-items: flex-start;
			gap: 16px;
		}
		.ph-right { text-align: left; }
		.proj-row { grid-template-columns: 1fr; }
		.proj-row.rev .proj-media {
			order: 0;
			border-left: none;
			border-right: none;
			border-bottom: 1px solid #282828;
		}
		.proj-row.rev .proj-body { order: 0; }
		.proj-media { border-right: none; border-bottom: 1px solid #282828; }
		.proj-body { padding: 28px 20px; }
	}
</style>
