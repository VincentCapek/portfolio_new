<template>
    <div ref="root" class="relome-preloader" aria-hidden="true">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path ref="pathEl" id="loader" :d="endShape" />
        </svg>

        <div class="loader-container">
            <div class="loaded">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'

const root = ref<HTMLElement | null>(null)
const pathEl = ref<SVGPathElement | null>(null)

let tl: gsap.core.Timeline | null = null

// Shapes Relome (copiées de ton fichier)
const startShape = 'M0 502S175 272 500 272s500 230 500 230V0H0Z'
const endShape = 'M0 2S175 1 500 1s500 1 500 1V0H0Z'

onMounted(() => {
    if (!root.value || !pathEl.value) return

    // Optionnel : assure l’état initial
    gsap.set(root.value, { y: 0, display: 'flex', zIndex: 99999 })
    gsap.set('.loader-container .loaded', { opacity: 1, y: 0 })

    tl = gsap.timeline()

    tl.to('.loader-container .loaded', {
        delay: 1.2,
        y: -50,
        opacity: 0,
        duration: 0.6,
    })
        .to(pathEl.value, {
            duration: 0.6,
            attr: { d: startShape },
            ease: 'power1.in',
        })
        .to(pathEl.value, {
            duration: 0.6,
            attr: { d: endShape },
            ease: 'power1.out',
        })
        .to(root.value, {
            y: -1000,
            duration: 0.8,
        })
        .set(root.value, {
            zIndex: -1,
            display: 'none',
        })
})

onBeforeUnmount(() => {
    tl?.kill()
    tl = null
})
</script>

<style lang="scss" scoped>
.relome-preloader {
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    overflow: hidden;
    z-index: 99999;

    svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 110vh;
        width: 100vw;
        fill: var(--primary-bg-color);
    }

    .loader-container {
        position: relative;
        z-index: 2;
    }

    .loaded {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--white-color);
        text-transform: uppercase;
        letter-spacing: 8px;
    }

    /* (Optionnel) animation des lettres — si tu veux l’effet “pulsing” */
    .loaded span {
        display: inline-block;
        animation: loader-animation 1s infinite alternate;
    }

    .loaded span:nth-child(1) {
        animation-delay: 0s;
    }

    .loaded span:nth-child(2) {
        animation-delay: 0.1s;
    }

    .loaded span:nth-child(3) {
        animation-delay: 0.2s;
    }

    .loaded span:nth-child(4) {
        animation-delay: 0.3s;
    }

    .loaded span:nth-child(5) {
        animation-delay: 0.4s;
    }

    .loaded span:nth-child(6) {
        animation-delay: 0.5s;
    }

    .loaded span:nth-child(7) {
        animation-delay: 0.6s;
    }
}

@keyframes loader-animation {
    from {
        opacity: 0.3;
        transform: translateY(0);
    }

    to {
        opacity: 1;
        transform: translateY(-2px);
    }
}
</style>