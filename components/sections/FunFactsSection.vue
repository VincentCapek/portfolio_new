<template>
    <section class="fun-facts p-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-11">
                    <div class="row items content">
                        <div class="col">
                            <div class="tl-counter">
                                <div class="tl-counter-title">Years of Experience</div>
                                <div class="tl-counter-number-wrapper">
                                    <h2 class="tl-counter-number counter">{{ stats.years }}</h2>
                                    <span class="tl-counter-number-suffix"></span>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="tl-counter">
                                <div class="tl-counter-title">Public Repositories</div>
                                <div class="tl-counter-number-wrapper">
                                    <h2 class="tl-counter-number counter">{{ stats.publicRepos }}</h2>
                                    <span class="tl-counter-number-suffix">+</span>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="tl-counter">
                                <div class="tl-counter-title">Key Technologies</div>
                                <div class="tl-counter-number-wrapper">
                                    <h2 class="tl-counter-number counter">{{ stats.keyTechnologies }}</h2>
                                    <span class="tl-counter-number-suffix">+</span>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="tl-counter">
                                <div class="tl-counter-title">Main Tech Stack</div>
                                <div class="tl-counter-number-wrapper">
                                    <h2 class="tl-counter-number counter">{{ stats.mainStack }}</h2>
                                    <span class="tl-counter-number-suffix">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import counterUp from 'counterup2'

/**
 * FunFactsSection
 * Same counterUp pattern as SkillsSection.
 * Runs once when counters become visible.
 */
const stats = {
    years: 7,
    publicRepos: 75,        // GitHub shows "Repositories 75"
    keyTechnologies: 10,    // Languages visible in GitHub filter: Vue, TS, Blade, HTML, Python, PHP, JS, Svelte, Java, Ruby
    mainStack: 6,           // Your main stack (offer-focused): PHP, Laravel, Vue, Nuxt, TypeScript, MySQL
} as const

let io: IntersectionObserver | null = null

onMounted(() => {
    const counters = document.querySelectorAll<HTMLElement>('.fun-facts .counter')
    if (!counters.length) return

    const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            const el = entry.target as HTMLElement
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, { duration: 1000, delay: 10 })
                el.classList.add('is-visible')
            }
        })
    }

    io = new IntersectionObserver(callback, { threshold: 1 })
    counters.forEach((c) => io?.observe(c))
})

onBeforeUnmount(() => {
    io?.disconnect()
    io = null
})
</script>