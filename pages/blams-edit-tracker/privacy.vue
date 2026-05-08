<template>
	<div class="legal-page container py-5">
		<div class="row justify-content-center">
			<div class="col-12 col-md-8 col-lg-7">
				<h1 class="legal-title mb-2">Privacy Policy</h1>
				<p class="legal-app mb-4">Blams Edit Tracker</p>
				<p class="legal-date mb-5">Last updated: May 2026</p>

				<section class="legal-section">
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
	title: 'Privacy Policy — Blams Edit Tracker',
	description: 'Privacy Policy for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
	ogTitle: 'Privacy Policy — Blams Edit Tracker',
	ogDescription: 'Privacy Policy for Blams Edit Tracker, a personal analytics dashboard for TikTok and YouTube Shorts statistics.',
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

.legal-section p,
.legal-section li {
	line-height: 1.75;
	color: var(--bs-body-color, #374151);
}

.legal-section p {
	margin-bottom: 1.25rem;
}

.legal-section ul {
	margin-bottom: 1.25rem;
	padding-left: 1.5rem;

	li {
		margin-bottom: 0.4rem;
	}
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
