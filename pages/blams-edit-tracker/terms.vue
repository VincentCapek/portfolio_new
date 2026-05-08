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

					<h2 class="post-title">Terms of Service</h2>
				</div>
			</div>

			<div class="row mt-4 mt-md-5">
				<div class="col-12 col-lg-7">
					<p>
						Blams Edit Tracker is a personal analytics dashboard used to track and analyze
						short-form video statistics from TikTok and YouTube Shorts.
					</p>
					<p>
						By using this application, you agree that the app may access authorized data from
						your connected accounts through official platform APIs, including video statistics
						such as views, likes, comments, shares, publication dates, and basic account
						information.
					</p>
					<p>
						The application is intended for personal analytics and content performance tracking
						only. It does not publish content, modify videos, or perform actions on your behalf
						unless explicitly implemented and authorized.
					</p>
					<p>
						Users are responsible for using the application in compliance with TikTok, YouTube,
						and other platform terms.
					</p>
					<p>
						This application is provided as-is without any guarantee of uninterrupted access,
						accuracy, or availability.
					</p>
					<p>
						For questions, contact:
						<a href="mailto:contact@vincent.capek.fr">contact@vincent.capek.fr</a>
					</p>
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
	title: 'Terms of Service — Blams Edit Tracker',
	description: 'Terms of Service for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
	ogTitle: 'Terms of Service — Blams Edit Tracker',
	ogDescription: 'Terms of Service for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
})
</script>
