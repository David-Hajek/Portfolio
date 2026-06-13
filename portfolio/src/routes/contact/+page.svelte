<script>
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let submitted = false;
	let error = '';

	function handleSubmit() {
		if (!name || !email || !message) {
			error = 'Please fill in all required fields.';
			return;
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			error = 'Please enter a valid email address.';
			return;
		}
		error = '';
		submitted = true;
		setTimeout(() => {
			submitted = false;
			name = '';
			email = '';
			subject = '';
			message = '';
		}, 5000);
	}
</script>

<svelte:head>
	<title>Contact — David Hajek</title>
</svelte:head>

<div class="contact-grid">
	<div class="col-left">
		<p class="sec-label col-lbl">Get in touch</p>
		<h1 class="c-head">Let's work<br />together.</h1>
		<a href="mailto:david.mhaace@gmail.com" class="c-email">david.mhaace@gmail.com</a>

		<div class="info-rows">
			<div class="info-row">
				<span class="info-key sec-label">Location</span>
				<span class="info-val">Czech Republic · Near Prague</span>
			</div>
			<div class="info-row">
				<span class="info-key sec-label">Availability</span>
				<span class="info-val status">Open to work ●</span>
			</div>
			<div class="info-row">
				<span class="info-key sec-label">Response time</span>
				<span class="info-val">Usually within 24 hours</span>
			</div>
			<div class="info-row">
				<span class="info-key sec-label">Preferred contact</span>
				<span class="info-val">Email or LinkedIn</span>
			</div>
		</div>

		<div class="soc-row">
			<a href="https://www.linkedin.com/in/david-h%C3%A1jek-98901b292/" target="_blank" rel="noopener" class="soc-btn">LinkedIn</a>
			<a href="https://www.artstation.com/naden" target="_blank" rel="noopener" class="soc-btn">ArtStation</a>
			<a href="https://www.instagram.com/dejvid.hajek/" target="_blank" rel="noopener" class="soc-btn">Instagram</a>
		</div>
	</div>

	<div class="col-right">
		<p class="sec-label col-lbl">Send a message</p>

		{#if submitted}
			<div class="success">
				<p class="success-title">Message sent.</p>
				<p class="success-body">Thanks for reaching out — I'll get back to you as soon as possible.</p>
			</div>
		{:else}
			<form
				action="https://api.web3forms.com/submit"
				method="POST"
				on:submit|preventDefault={handleSubmit}
			>
				<input type="hidden" name="access_key" value="f137eaa0-a7d6-46b3-8abb-3e3d55cd79da" />

				{#if error}
					<p class="form-error">{error}</p>
				{/if}

				<div class="field">
					<label class="f-label sec-label" for="name">Name *</label>
					<input
						id="name"
						name="name"
						type="text"
						class="f-input"
						placeholder="Your name"
						bind:value={name}
						required
					/>
				</div>
				<div class="field">
					<label class="f-label sec-label" for="email">Email *</label>
					<input
						id="email"
						name="email"
						type="email"
						class="f-input"
						placeholder="your@email.com"
						bind:value={email}
						required
					/>
				</div>
				<div class="field">
					<label class="f-label sec-label" for="subject">Subject</label>
					<input
						id="subject"
						name="subject"
						type="text"
						class="f-input"
						placeholder="What's this about?"
						bind:value={subject}
					/>
				</div>
				<div class="field">
					<label class="f-label sec-label" for="message">Message *</label>
					<textarea
						id="message"
						name="message"
						class="f-textarea"
						placeholder="Tell me about your project — scope, timeline, budget..."
						bind:value={message}
						required
					></textarea>
				</div>

				<button type="submit" class="f-submit">Send message</button>
			</form>
		{/if}
	</div>
</div>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 80vh;
	}

	.col-left {
		padding: 60px 40px;
		border-right: 1px solid #282828;
		display: flex;
		flex-direction: column;
	}
	.col-right { padding: 60px 40px; }

	.col-lbl { margin-bottom: 20px; }

	.c-head {
		font-size: clamp(36px, 4vw, 46px);
		font-weight: 600;
		letter-spacing: -0.04em;
		color: #f0f0f0;
		line-height: 1.05;
		margin-bottom: 28px;
	}

	.c-email {
		font-size: 14px;
		color: #aaa;
		margin-bottom: 32px;
		padding-bottom: 28px;
		border-bottom: 1px solid #282828;
		transition: color 0.15s;
		display: block;
	}
	.c-email:hover { color: #f0f0f0; }

	.info-rows { flex: 1; }
	.info-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 13px 0;
		border-bottom: 1px solid #1e1e1e;
		gap: 16px;
	}
	.info-key { flex-shrink: 0; }
	.info-val { font-size: 12px; color: #aaa; text-align: right; }
	.status { color: #3a7a3a !important; }

	.soc-row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 32px;
	}
	.soc-btn {
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 9px 14px;
		border: 1px solid #1e1e1e;
		color: #999;
		transition: border-color 0.15s, color 0.15s;
	}
	.soc-btn:hover { border-color: #888; color: #ccc; }

	.field { margin-bottom: 18px; }
	.f-label { display: block; margin-bottom: 8px; }
	.f-input {
		width: 100%;
		background: #111;
		border: 1px solid #1e1e1e;
		border-top: 1px solid #252525;
		padding: 13px 15px;
		font-size: 13px;
		color: #ccc;
		font-family: inherit;
		outline: none;
		transition: border-color 0.15s;
	}
	.f-input::placeholder { color: #2a2a2a; }
	.f-input:focus { border-color: #333; }
	.f-textarea {
		width: 100%;
		background: #111;
		border: 1px solid #1e1e1e;
		border-top: 1px solid #252525;
		padding: 13px 15px;
		font-size: 13px;
		color: #ccc;
		font-family: inherit;
		height: 140px;
		resize: vertical;
		outline: none;
		transition: border-color 0.15s;
	}
	.f-textarea::placeholder { color: #2a2a2a; }
	.f-textarea:focus { border-color: #333; }

	.f-submit {
		width: 100%;
		padding: 15px;
		background: #e8e8e8;
		color: #0a0a0a;
		border: none;
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-family: inherit;
		cursor: none;
		transition: background 0.2s;
		margin-top: 4px;
	}
	.f-submit:hover { background: #fff; }

	.form-error {
		font-size: 12px;
		color: #884444;
		margin-bottom: 16px;
		padding: 12px;
		border: 1px solid #441c1c;
		background: #1a0e0e;
	}

	.success {
		padding: 32px;
		border: 1px solid #282828;
		background: #111;
	}
	.success-title {
		font-size: 18px;
		font-weight: 500;
		color: #f0f0f0;
		margin-bottom: 10px;
	}
	.success-body { font-size: 13px; color: #aaa; line-height: 1.7; }

	@media (max-width: 1024px) {
		.contact-grid { grid-template-columns: 1fr; }
		.col-left { border-right: none; border-bottom: 1px solid #282828; padding: 48px 20px; }
		.col-right { padding: 48px 20px; }
	}
</style>
