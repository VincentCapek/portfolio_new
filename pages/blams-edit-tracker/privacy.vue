<template>
	<section class="tl-single-portfolio">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<ul class="tl-widget post-info list-unstyled layout-inline flex-row has-separator">
						<li>Legal</li>
						<li>Blams Edit Tracker</li>
						<li>May 2026</li>
					</ul>

					<h2 class="post-title">Privacy Policy</h2>
				</div>
			</div>

			<div class="row mt-4 mt-md-5">
				<div class="col-12 col-lg-7">
					<p>
						Blams Edit Tracker is a personal analytics dashboard used to analyze TikTok and
						YouTube Shorts video performance.
					</p>
					<p>
						When you connect a TikTok or YouTube account, the application may collect and store
						authorized data provided through official APIs, including:
					</p>
					<ul>
						<li>basic account information;</li>
						<li>video titles and URLs;</li>
						<li>publication dates;</li>
						<li>view counts;</li>
						<li>like counts;</li>
						<li>comment counts;</li>
						<li>share counts when available.</li>
					</ul>
					<p>
						This data is used only to display analytics, compare video performance, generate
						internal insights, and improve content tracking.
					</p>
					<p>The application does not sell your data.</p>
					<p>The application does not share your data with advertisers.</p>
					<p>The application does not access your account password.</p>
					<p>
						OAuth access tokens and refresh tokens are stored securely on the server and are not
						exposed publicly.
					</p>
					<p>
						You may request deletion of your connected account data by contacting:
						<a href="mailto:contact@vincent.capek.fr">contact@vincent.capek.fr</a>
					</p>
					<p>This policy may be updated when the application evolves.</p>
				</div>
			</div>

			<div class="row mt-4">
				<div class="col-12">
					<NuxtLink to="/" class="tl-widget button swap-icon">
						← Back to portfolio
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Privacy Policy — Blams Edit Tracker',
	description: 'Privacy Policy for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
	ogTitle: 'Privacy Policy — Blams Edit Tracker',
	ogDescription: 'Privacy Policy for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
})
</script>
