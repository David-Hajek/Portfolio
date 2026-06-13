<script lang="ts">
	const projects = [
		{
			num: '01',
			title: 'Untitled Game Project',
			desc: 'PSX-style character and environment models built with a friend for an indie game. Developed a full reusable pipeline for low-poly assets — characters, environments, and in-game props — that made iteration fast.',
			tags: ['PSX', 'Game Art', 'Pipeline', 'Blender'],
			img: '/images/retro/untitled/bgtest.webp',
			alt: 'Untitled game project background',
			video: 'https://www.youtube.com/embed/RJHFx1jc5Oc'
		},
		{
			num: '02',
			title: 'University Modeling Practice',
			desc: 'Rigged and textured knight created for a university assignment. Accompanied by a somber medieval forest environment with a towering castle in the background — built to atmosphere over realism.',
			tags: ['Blender', 'Rigging', 'Environment', 'Low-poly'],
			img: '/images/retro/proj2/bg.jpg',
			alt: 'Medieval forest environment',
			video: null
		},
		{
			num: '03',
			title: 'Backstreets',
			desc: 'Started as a quick PSX environment render. A character appeared, then it got animated, then edited in DaVinci Resolve. What was meant to be a quick test became a fully realised short piece.',
			tags: ['PSX', 'Animation', 'DaVinci Resolve'],
			img: '/images/retro/to-add/main.webp',
			alt: 'Backstreets PSX closeup render',
			video: 'https://www.youtube.com/embed/ECQ7oTGyaNY'
		},
		{
			num: '04',
			title: 'UYUU — Stream Background',
			desc: "PSX-style 3D avatar model and intermission stage designed for a friend's live streams. Both the model and the environment came together into something cohesive and characterful.",
			tags: ['PSX', 'Character', 'Vtuber', 'Environment'],
			img: '/images/retro/uyuy/uyuu-main.webp',
			alt: 'UYUU stream background',
			video: null
		}
	];
</script>

<svelte:head>
	<title>Retro — David Hajek</title>
</svelte:head>

<div class="pg-header">
	<div class="ph-left">
		<p class="sec-label ph-idx">03 — Retro</p>
		<h1 class="ph-title">PSX Era<br />Work</h1>
	</div>
	<div class="ph-right">
		<p class="sec-label ph-meta">4 projects<br />Low-poly · Game art<br />PSX aesthetic</p>
	</div>
</div>

{#each projects as project, i}
	<div class="proj-row" class:rev={i % 2 !== 0}>
		<div class="proj-img">
			{#if project.img}
				<img src={project.img} alt={project.alt} />
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

	@media (max-width: 1024px) {
		.pg-header { padding: 48px 20px 36px; }
		.proj-row { grid-template-columns: 1fr; }
		.proj-row.rev .proj-img { order: 0; border-left: none; border-right: none; border-bottom: 1px solid #181818; }
		.proj-row.rev .proj-body { order: 0; }
		.proj-img { border-right: none; border-bottom: 1px solid #181818; aspect-ratio: 16/7; }
		.proj-body { padding: 28px 20px; min-height: unset; }
	}
</style>
