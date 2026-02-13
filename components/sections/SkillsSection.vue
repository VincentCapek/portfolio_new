<template>
    <section id="skills" class="skills p-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-7">
                    <div class="intro text-center">
                        <div class="tl-widget heading">
                            <h3 class="title mb-0">
                                <span class="title-before">My</span>
                                skills
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row gap-4">
                <div v-for="s in skills" :key="s.name" class="col item filter-grayscale">
                    <img :src="s.img" :alt="s.name" />
                    <div class="content mt-3">
                        <span class="percentage counter" data-suffix="%">{{ s.percent }}</span>
                        <div class="title">{{ s.name }}</div>
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
 * Top 6 primary skills (Nuxt/Vue + PHP/Laravel focus)
 */
const skills = [
    { name: 'PHP', percent: 95, img: '/assets/images/content/php-skills.svg' },
    { name: 'Laravel', percent: 92, img: '/assets/images/content/laravel-skills.svg' },
    { name: 'Vue.js', percent: 90, img: '/assets/images/content/vue-skills.svg' },
    { name: 'Nuxt', percent: 85, img: '/assets/images/content/nuxt-skills.svg' },
    { name: 'TypeScript', percent: 85, img: '/assets/images/content/typescript-skills.svg' },
    { name: 'PostgreSQL', percent: 85, img: '/assets/images/content/postgresql-skills.svg' },
] as const

let io: IntersectionObserver | null = null

onMounted(() => {
    const counters = document.querySelectorAll<HTMLElement>('.counter')
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

<style scoped lang="scss">
.percentage.counter[data-suffix]::after {
    content: attr(data-suffix);
}
</style>