<script setup lang="ts">
/**
 * Hero copy aligned with Vincent's current profile:
 * - Full-stack developer, primarily Laravel/PHP, also Vue 3 / TypeScript
 * - Actively looking for a new job opportunity (not freelance missions)
 * - Clear CTAs toward the CV and contact
 */

const cvFilename = 'CV-Vincent-Capek-Developpeur-Full-Stack.pdf'
const cvPath = `/documents/${cvFilename}`
</script>

<template>
    <section id="hero" class="hero-section">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-md-9">
                    <div class="hero-content text-center">
                        <img class="hero-thumb" src="/assets/images/freelancer-thumbnail-v.jpeg" alt="Vincent Capek" />

                        <div class="tl-widget heading mt-3">
                            <h2 class="title mb-0">
                                <span class="title-before">Full-Stack Developer —</span>
                                Laravel / PHP, Vue 3 & TypeScript.
                            </h2>
                        </div>

                        <h5 class="bio">
                            Hi, I’m Vincent — a full-stack developer with a strong Laravel/PHP backend focus and a
                            solid range across Vue 3, TypeScript, SQL, Docker and Python. Currently looking for a
                            new opportunity to join a team and ship real-world web projects.
                        </h5>

                        <div class="hero-button mt-3 mt-md-5 d-flex flex-wrap justify-content-center gap-3">
                            <a :href="cvPath" target="_blank" rel="noopener noreferrer"
                                class="tl-widget button swap-icon">
                                View my CV
                                <span class="icon">
                                    <svg class="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="arrow-right" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </span>
                            </a>

                            <a href="#portfolio" class="tl-widget button swap-icon smooth-anchor">
                                See my projects
                            </a>
                        </div>

                        <p class="mt-3 mb-0" style="opacity: 0.7">
                            Open to new opportunities — backend, full-stack, or product-focused roles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
