<template>
	<div class="legal-page container py-5">
		<div class="row justify-content-center">
			<div class="col-12 col-md-8 col-lg-7">
				<h1 class="legal-title mb-2">Terms of Service</h1>
				<p class="legal-app mb-4">Blams Edit Tracker</p>
				<p class="legal-date mb-5">Last updated: May 2026</p>

				<section class="legal-section">
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
				</section>

				<div class="legal-back mt-5">
					<NuxtLink to="/">← Back to portfolio</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Terms of Service — Blams Edit Tracker',
	description: 'Terms of Service for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
	ogTitle: 'Terms of Service — Blams Edit Tracker',
	ogDescription: 'Terms of Service for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
})
</script>

<style scoped lang="scss">
.legal-page {
	min-height: 80vh;
}

.legal-title {
	font-size: 2rem;
	font-weight: 700;
	color: var(--bs-body-color, #1a1a2e);
}

.legal-app {
	font-size: 1.1rem;
	font-weight: 500;
	color: var(--bs-primary, #6366f1);
	letter-spacing: 0.02em;
}

.legal-date {
	font-size: 0.875rem;
	color: var(--bs-secondary-color, #6c757d);
}

.legal-section p {
	line-height: 1.75;
	margin-bottom: 1.25rem;
	color: var(--bs-body-color, #374151);
}

.legal-section a {
	color: var(--bs-primary, #6366f1);
	text-decoration: underline;
	text-underline-offset: 3px;
}

.legal-back a {
	font-size: 0.9rem;
	color: var(--bs-secondary-color, #6c757d);
	text-decoration: none;

	&:hover {
		color: var(--bs-primary, #6366f1);
	}
}
</style>
