<script lang="ts">
	const projects = [
		{
			num: '01',
			title: 'Server Environment Creation',
			desc: 'Full server room environment modeled in Blender and textured in Substance Painter for a short animation directed by Krystof Jezek. Key components and close-ups were carefully crafted to hold up under camera.',
			tags: ['Blender', 'Substance Painter', 'Environment'],
			img: '/images/vidz/netgear.png',
			alt: 'Server environment render',
			href: null
		},
		{
			num: '02',
			title: 'Bottle Destruction & Smoke Sim',
			desc: 'Ground destruction and VDB smoke simulation built in Houdini with a reusable node setup for rapid iteration between shots. Final assets were composited in Blender by Krystof Jezek.',
			tags: ['Houdini', 'RBD', 'VDB', 'Simulation'],
			img: null,
			alt: 'Bottle destruction simulation',
			href: null
		},
		{
			num: '03',
			title: 'The Mag Wrap 2025',
			desc: 'Garment simulations and crowd dynamics developed for The Mag Wrap 2025 under the creative direction of Krystof Jezek. The final series can be watched on YouTube.',
			tags: ['Garment Sim', 'Crowd Sim', 'Blender'],
			img: '/images/projects/wrap/thumbnail.webp',
			alt: 'The Mag Wrap 2025 garment simulation',
			href: '/project/visualization'
		}
	];
</script>

<svelte:head>
	<title>Commercial — David Hajek</title>
</svelte:head>

<div class="pg-header">
	<div class="ph-left">
		<p class="sec-label ph-idx">01 — Commercial work</p>
		<h1 class="ph-title">Client<br />Projects</h1>
	</div>
	<div class="ph-right">
		<p class="sec-label ph-meta">3 projects<br />2023 – 2025<br />Blender · Houdini</p>
	</div>
</div>

{#each projects as project, i}
	<div class="proj-row" class:rev={i % 2 !== 0}>
		<div class="proj-img">
			{#if project.img}
				<img src={project.img} alt={project.alt} />
			{:else}
				<div class="img-placeholder"></div>
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
			{#if project.href}
				<a href={project.href} class="p-cta">View project</a>
			{:else}
				<span class="p-cta-disabled">Project details coming soon</span>
			{/if}
		</div>
	</div>
{/each}

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
	.ph-meta { line-height: 2.2; }

	.proj-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px solid #181818;
	}
	.proj-row.rev .proj-img { order: 2; border-left: 1px solid #181818; border-right: none; }
	.proj-row.rev .proj-body { order: 1; }

	.proj-img {
		border-right: 1px solid #181818;
		aspect-ratio: 16/9;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #0d0d0d;
	}
	.proj-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.75;
		transition: opacity 0.3s;
	}
	.proj-row:hover .proj-img img { opacity: 1; }
	.img-placeholder { width: 100%; height: 100%; background: #0d0d10; }

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
	.p-desc { font-size: 13px; color: #666; line-height: 1.8; }
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
		color: #383838;
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
	.p-cta-disabled {
		display: inline-block;
		margin-top: 24px;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #2a2a2a;
	}

	@media (max-width: 1024px) {
		.pg-header { padding: 48px 20px 36px; }
		.proj-row { grid-template-columns: 1fr; }
		.proj-row.rev .proj-img { order: 0; border-left: none; border-right: none; border-bottom: 1px solid #181818; }
		.proj-row.rev .proj-body { order: 0; }
		.proj-img { border-right: none; border-bottom: 1px solid #181818; aspect-ratio: 16/7; }
		.proj-body { padding: 28px 20px; min-height: unset; }
	}
</style>
