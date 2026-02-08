<template>
    <section id="skills" class="skills p-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-7">
                    <!-- Intro -->
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
                <!-- Item -->
                <div v-for="s in skills" :key="s.name" class="col item filter-grayscale">
                    <img :src="s.img" :alt="s.name" />
                    <div class="content mt-3">
                        <!-- The counterUp library reads the final value from the element text -->
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
 * Relome "6. counterUp"
 * - Select all elements with ".counter"
 * - Use IntersectionObserver to start counting when visible
 * - Prevent re-running by adding "is-visible" class
 */

const skills = [
    { name: 'HTML', percent: 99, img: '/assets/images/content/skill-1.png' },
    { name: 'CSS', percent: 95, img: '/assets/images/content/skill-2.png' },
    { name: 'JavaScript', percent: 92, img: '/assets/images/content/skill-3.png' },
    { name: 'Vue.js', percent: 90, img: '/assets/images/content/skill-4.png' },
    { name: 'Nuxt', percent: 88, img: '/assets/images/content/skill-5.png' },
    { name: 'PHP', percent: 93, img: '/assets/images/content/skill-6.png' },
] as const

let io: IntersectionObserver | null = null

onMounted(() => {
    const counters = document.querySelectorAll<HTMLElement>('.counter')
    if (!counters.length) return

    const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            const el = entry.target as HTMLElement

            // Match Relome behavior: run once when the element becomes visible
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 1000, // Relome: 1000
                    delay: 10,      // Relome: 10
                })
                el.classList.add('is-visible')
            }
        })
    }

    // Relome uses threshold: 1 (fully visible). If it doesn't trigger in your layout, lower it to 0.7 or 0.5.
    io = new IntersectionObserver(callback, { threshold: 1 })

    counters.forEach((c) => io?.observe(c))
})

onBeforeUnmount(() => {
    io?.disconnect()
    io = null
})
</script>

<style scoped lang="scss">
/* Keep the "%" visible without relying on innerText during the animation */
.percentage.counter[data-suffix]::after {
    content: attr(data-suffix);
}
</style>