<script setup lang="ts">
const cvFilename = 'CV-Vincent-Capek-Developpeur-Full-Stack.pdf'
const cvPath = `/documents/${cvFilename}`
</script>

<template>
    <section id="cv" class="tl-widget cv-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8">
                    <div class="cv-card text-center">
                        <div class="tl-widget heading">
                            <h3 class="title m-0">
                                <span class="title-before">My</span>
                                CV
                            </h3>
                            <p class="mt-3 mb-0">
                                Find my background, technical skills, and key experience in a single document.
                            </p>
                        </div>

                        <div class="cv-actions d-flex flex-wrap justify-content-center gap-3 mt-4">
                            <a :href="cvPath" target="_blank" rel="noopener noreferrer"
                                class="tl-widget button swap-icon">
                                <span class="icon me-2">
                                    <i class="bi bi-eye" aria-hidden="true"></i>
                                </span>
                                View CV
                            </a>

                            <a :href="cvPath" :download="cvFilename" class="tl-widget button swap-icon">
                                <span class="icon me-2">
                                    <i class="bi bi-download" aria-hidden="true"></i>
                                </span>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
