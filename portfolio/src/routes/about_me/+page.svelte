<svelte:head>
	<title>About — David Hajek</title>
</svelte:head>

<div class="about-grid">
	<div class="col-left">
		<div class="avatar">
			<img src="/images/face.gif" alt="David Hajek" />
		</div>
		<p class="sec-label col-lbl">About me</p>
		<h1 class="a-name">David<br />Hájek</h1>
		<p class="a-bio">
			Self-taught 3D artist from the Czech Republic, currently pursuing a bachelor's degree in
			Ireland. Deeply passionate about storytelling through visuals — immersive scenes, expressive
			characters, and work that genuinely connects with the viewer.
		</p>
		<div class="a-rows">
			<div class="a-row">
				<span class="a-key sec-label">Location</span>
				<span class="a-val">Czech Republic, near Prague</span>
			</div>
			<div class="a-row">
				<span class="a-key sec-label">Education</span>
				<span class="a-val">Bachelor's degree, Ireland</span>
			</div>
			<div class="a-row">
				<span class="a-key sec-label">Speciality</span>
				<span class="a-val">3D Art · VFX · Simulation</span>
			</div>
			<div class="a-row">
				<span class="a-key sec-label">Status</span>
				<span class="a-val status">Open to work</span>
			</div>
		</div>
		<div class="soc-row">
			<a href="https://www.linkedin.com/in/david-h%C3%A1jek-98901b292/" target="_blank" rel="noopener" class="soc-btn">LinkedIn</a>
			<a href="https://www.artstation.com/naden" target="_blank" rel="noopener" class="soc-btn">ArtStation</a>
			<a href="https://mhaace.itch.io/" target="_blank" rel="noopener" class="soc-btn">Itch.io</a>
			<a href="https://www.instagram.com/dejvid.hajek/" target="_blank" rel="noopener" class="soc-btn">Instagram</a>
		</div>
	</div>

	<div class="col-right">
		<p class="sec-label col-lbl">Worked with</p>
		<div class="ww-list">
			<div class="ww-row">
				<span class="ww-name">Krystof Jezek</span>
				<span class="ww-arr">→</span>
			</div>
			<div class="ww-row">
				<span class="ww-name">Apparently Studios</span>
				<span class="ww-arr">→</span>
			</div>
			<div class="ww-row">
				<span class="ww-name">Mira Lumière / Yoimira Entertainment</span>
				<span class="ww-arr">→</span>
			</div>
			<div class="ww-row">
				<span class="ww-name">Dyky</span>
				<span class="ww-arr">→</span>
			</div>
			<div class="ww-row">
				<span class="ww-name">Devomi</span>
				<span class="ww-arr">→</span>
			</div>
		</div>

		<div class="skill-block">
			<p class="sec-label col-lbl">Skills</p>
			<div class="pill-row">
				<span class="tag">3D Modeling</span>
				<span class="tag">Texturing</span>
				<span class="tag">Simulations</span>
				<span class="tag">Animation</span>
				<span class="tag">UV Mapping</span>
				<span class="tag">Rendering</span>
				<span class="tag">Lighting</span>
				<span class="tag">Sculpting</span>
				<span class="tag">Geometry Nodes</span>
				<span class="tag">Rigging</span>
			</div>
		</div>

		<div class="skill-block">
			<p class="sec-label col-lbl">Tools</p>
			<div class="pill-row">
				<span class="tag">Blender</span>
				<span class="tag">Houdini</span>
				<span class="tag">ZBrush</span>
				<span class="tag">Substance Painter</span>
				<span class="tag">Substance Designer</span>
				<span class="tag">3DCoat</span>
				<span class="tag">Photoshop</span>
				<span class="tag">Illustrator</span>
				<span class="tag">After Effects</span>
				<span class="tag">DaVinci Resolve</span>
				<span class="tag">Figma</span>
				<span class="tag">Svelte</span>
			</div>
		</div>
	</div>
</div>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 80vh;
	}

	.col-left {
		padding: 60px 40px;
		border-right: 1px solid #181818;
	}
	.col-right { padding: 60px 40px; }

	.avatar {
		width: 72px;
		height: 72px;
		border: 1px solid #1e1e1e;
		overflow: hidden;
		margin-bottom: 28px;
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.col-lbl { margin-bottom: 16px; }

	.a-name {
		font-size: clamp(36px, 4vw, 46px);
		font-weight: 600;
		letter-spacing: -0.04em;
		color: #f0f0f0;
		line-height: 1.05;
		margin-bottom: 22px;
	}
	.a-bio {
		font-size: 13px;
		color: #aaa;
		line-height: 1.85;
		max-width: 360px;
	}

	.a-rows {
		margin-top: 32px;
		border-top: 1px solid #181818;
	}
	.a-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 0;
		border-bottom: 1px solid #141414;
		gap: 16px;
	}
	.a-key { flex-shrink: 0; }
	.a-val { font-size: 12px; color: #aaa; text-align: right; }
	.status { color: #3a7a3a !important; }

	.soc-row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 28px;
	}
	.soc-btn {
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 9px 14px;
		border: 1px solid #1e1e1e;
		color: #777;
		transition: border-color 0.15s, color 0.15s;
	}
	.soc-btn:hover { border-color: #555; color: #ccc; }

	.ww-list { border-top: 1px solid #181818; }
	.ww-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14px 0;
		border-bottom: 1px solid #141414;
	}
	.ww-name { font-size: 13px; color: #aaa; }
	.ww-arr { font-size: 13px; color: #444; }

	.skill-block { margin-top: 40px; }
	.pill-row {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 4px;
	}

	@media (max-width: 1024px) {
		.about-grid { grid-template-columns: 1fr; }
		.col-left { border-right: none; border-bottom: 1px solid #181818; padding: 48px 20px; }
		.col-right { padding: 48px 20px; }
		.a-bio { max-width: 100%; }
	}
</style>
