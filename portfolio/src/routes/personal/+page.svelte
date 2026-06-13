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
		desc: string;
		tags: string[];
		images: Img[];
		video?: string;
	}

	const projects: Project[] = [
		{
			num: '01',
			title: 'Echo of Iron',
			desc: "Done in between commercial work, I wanted to explore my sculpting, modeling and texturing capabilities again. A combination of Blender, Substance Painter and Photoshop to really bring the shapes out. I would have done a few things differently, but it turned out super nice in the end.",
			tags: ['Blender', 'Substance Painter', 'Photoshop', 'Character'],
			images: [
				{ src: 'https://cdnb.artstation.com/p/assets/images/images/089/160/183/large/david-hajek-shot1-final.jpg?1750195007', alt: 'Echo of Iron key shot' },
				{ src: 'https://cdna.artstation.com/p/assets/images/images/089/160/186/large/david-hajek-shot2-fnal.jpg?1750195018', alt: 'Echo of Iron key shot 2' },
				{ src: 'https://cdnb.artstation.com/p/assets/images/images/089/160/191/large/david-hajek-shot3-final.jpg?1750195026', alt: 'Echo of Iron shot 3' },
				{ src: 'https://cdnb.artstation.com/p/assets/images/images/089/160/193/large/david-hajek-shot4-final.jpg?1750195032', alt: 'Echo of Iron shot 4' },
				{ src: 'https://cdnb.artstation.com/p/assets/images/images/089/160/197/large/david-hajek-shot5-final.jpg?1750195039', alt: 'Echo of Iron shot 5' },
				{ src: 'https://cdnb.artstation.com/p/assets/images/images/089/160/199/original/david-hajek-process.gif?1750195046', alt: 'Process gif' }
			]
		},
		{
			num: '02',
			title: 'The Fated Return',
			desc: 'A small series of renders testing new tools — Gaea for the environment, Megascans for scattered assets, Houdini for the VDB beam and smoke, and Blender to put it all together. Edited in Lightroom and Photoshop.',
			tags: ['Blender', 'Houdini', 'Gaea', 'Environment', 'VDB'],
			images: [
				{ src: '/images/fatedreturn/david-hajek-field-rend1.webp', alt: 'Fated Return wide shot' },
				{ src: '/images/fatedreturn/david-hajek-field-rend2.webp', alt: 'Fated Return close-up' },
				{ src: '/images/fatedreturn/david-hajek-field-rend3.webp', alt: 'Fated Return alternate angle' },
				{ src: '/images/fatedreturn/david-hajek-process-gif.gif', alt: 'Process gif' }
			]
		},
		{
			num: '03',
			title: 'Convenience Store',
			desc: 'A set of renders where I went out of my comfort zone — no character, just the environment. I loved the outcome of this one, it has quickly became my favorite CG creation honestly.',
			tags: ['Blender', 'Environment', 'Architectural'],
			images: [
				{ src: '/images/convenience/david-hajek-front-final.jpg', alt: 'Convenience wide-shot' },
				{ src: '/images/convenience/david-hajek-side-final-really.jpg', alt: 'Convenience close-up' },
				{ src: '/images/convenience/david-hajek-makro.jpg', alt: 'Convenience macro detail' }
			]
		},
		{
			num: '04',
			title: 'Slave Knight Dominic Redesign',
			desc: 'Dominic started as a Matura project for my end of High School assignment. I wanted to challenge myself to recreate him with my current skillset, staying true to the original design while pushing the execution far beyond what I could do back then.',
			tags: ['Blender', 'ZBrush', 'Character', 'Rigging', 'Fantasy'],
			images: [
				{ src: '/images/dominic/domca1.jpg', alt: 'Knight money shot' },
				{ src: '/images/dominic/domca2.jpg', alt: 'Knight model showcase' },
				{ src: '/images/dominic/domca3.jpg', alt: 'Helmet close-up' },
				{ src: '/images/dominic/domca4.jpg', alt: 'Gauntlet detail' },
				{ src: '/images/dominic/domca5.jpg', alt: 'Recreation of a previous render' },
				{ src: '/images/dominic/domca6.jpg', alt: 'Previous poster render' }
			],
			video: 'https://www.youtube.com/embed/rO3igdcBTb4?si=sXuv0ssdbTR-aseE'
		},
		{
			num: '05',
			title: 'Unclaimed Territory',
			desc: 'Always fascinated with nature, I wanted to create something bright and hopeful. A very fun and challenging piece — balancing performance with quality and light, mostly solved using Blender\'s native light nodes.',
			tags: ['Blender', 'Environment', 'Nature', 'Lighting'],
			images: [
				{ src: '/images/enviroknight/david-hajek-forestfinal.jpg', alt: 'Forest scene with knight' },
				{ src: '/images/enviroknight/david-hajek-ezgif-com-animated-gif-maker.gif', alt: 'Behind the scenes process' }
			]
		},
		{
			num: '06',
			title: 'Hwei — Bust Sculpt',
			desc: 'A personal challenge to get into sculpting. Initially wanted to sculpt the full character, but settled on the bust due to time constraints. This was a deep dive into 3DCoat and ZBrush.',
			tags: ['ZBrush', '3DCoat', 'Sculpting', 'Character'],
			images: [
				{ src: '/images/hwei/david-hajek-hweisidefinal.jpg', alt: 'Hwei money shot' },
				{ src: '/images/hwei/david-hajek-frontbase.jpg', alt: 'Flat shaded base model' }
			]
		},
		{
			num: '07',
			title: 'Legarde — Sculpt',
			desc: 'Creating Legarde from Fear and Hunger was a personal challenge in realism. Many reference photos were mandatory for the textures to work. The sword was provided by my friend Tomas Dite.',
			tags: ['ZBrush', 'Blender', 'Sculpting', 'Realism'],
			images: [
				{ src: '/images/legarde/david-hajek-legardcinema.jpg', alt: 'Legarde money shot' },
				{ src: '/images/legarde/david-hajek-wireframe.jpg', alt: 'Topology and behind the scenes' }
			]
		},
		{
			num: '08',
			title: 'Environment & Character Renders',
			desc: 'A set of renders created as lighting and editing practice. Started with just a character render, then branched into a story-like environment piece.',
			tags: ['Blender', 'Lighting', 'Environment', 'Character'],
			images: [
				{ src: '/images/bms/david-hajek-bms-final.jpg', alt: 'Main money shot' },
				{ src: '/images/bms/david-hajek-topviewrend-final.jpg', alt: 'Top view of the scene' },
				{ src: '/images/bms/david-hajek-bms22-final.jpg', alt: 'Third person view from above' },
				{ src: '/images/bms/david-hajek-bms222-final.jpg', alt: 'Ground shot' }
			]
		},
		{
			num: '09',
			title: 'Game Ready Model Practice',
			desc: 'A TF2 Steam Workshop item for Pyro — glasses that give him a permanent "work stare" after a grueling day at the office. Modeled in Blender and made compatible with the Steam Workshop pipeline.',
			tags: ['Blender', 'Game-ready', 'Steam Workshop', 'TF2'],
			images: [
				{ src: '/images/pyro/david-hajek-workshopart.jpg', alt: 'TF2 Pyro item showcase' },
				{ src: '/images/pyro/david-hajek-pyrophoto.jpg', alt: 'Headshot showcasing item' },
				{ src: '/images/pyro/david-hajek-ws2.jpg', alt: 'Promo material' },
				{ src: '/images/pyro/david-hajek-workshop.jpg', alt: 'Workshop promo' }
			]
		},
		{
			num: '10',
			title: 'Sunshower',
			desc: 'A fanmade passion project — Heathcliff from Limbus Company. Experimented with After Effects for post-production. A very fun experience, and one I\'ll definitely revisit.',
			tags: ['Blender', 'After Effects', 'Fan Art', 'Character'],
			images: [
				{ src: '/images/sunshower/david-hajek-heahtcliff-sunshower-min-1.jpg', alt: 'Sunshower main shot' },
				{ src: '/images/sunshower/david-hajek-basemesh-min.jpg', alt: 'Flat shaded base model' }
			],
			video: 'https://www.youtube.com/embed/3Got7Yyc-Dc?si=vjT0wip0BYxzIL9c'
		}
	];
</script>

<svelte:head>
	<title>Personal — David Hajek</title>
</svelte:head>

<svelte:window on:keydown={handleKey} />

<div class="pg-header">
	<div class="ph-left">
		<p class="sec-label ph-idx">02 — Personal</p>
		<h1 class="ph-title">Personal<br />Projects</h1>
	</div>
	<div class="ph-right">
		<p class="ph-meta">10 projects · 2021–2025<br />Blender · ZBrush · Houdini</p>
	</div>
</div>

{#each projects as project, i}
	<div class="proj-row" class:rev={i % 2 !== 0}>
		<div class="proj-media">
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
	.ph-meta {
		font-size: 13px;
		color: #999;
		line-height: 2;
	}

	.proj-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid #282828;
	}
	.proj-row.rev .proj-media { order: 2; border-left: 1px solid #282828; border-right: none; }
	.proj-row.rev .proj-body { order: 1; }

	.proj-media {
		border-right: 1px solid #282828;
		background: #0f0f0f;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.media-primary {
		position: relative;
		overflow: hidden;
		cursor: none;
	}
	.media-primary img {
		width: 100%;
		height: auto;
		display: block;
		opacity: 0.9;
		transition: opacity 0.3s;
	}
	.proj-row:hover .media-primary img { opacity: 1; }

	.media-expand {
		position: absolute;
		top: 12px;
		right: 14px;
		font-size: 13px;
		color: #888;
		transition: color 0.15s;
		pointer-events: none;
	}
	.media-primary:hover .media-expand { color: #ccc; }

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
		.pg-header { padding: 48px 20px 36px; }
		.proj-row { grid-template-columns: 1fr; }
		.proj-row.rev .proj-media { order: 0; border-left: none; border-right: none; border-bottom: 1px solid #282828; }
		.proj-row.rev .proj-body { order: 0; }
		.proj-media { border-right: none; border-bottom: 1px solid #282828; }
		.proj-body { padding: 28px 20px; min-height: unset; }
		.thumb { min-width: calc(100% / 4); }
	}
</style>
