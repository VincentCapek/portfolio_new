<template>
    <a class="scroll-to-top" :class="{ 'active-progress': active }" href="#" aria-label="Scroll to top"
        @click.prevent="scrollToTop">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102" aria-hidden="true">
            <path ref="pathEl" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </a>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const pathEl = ref<SVGPathElement | null>(null)
const active = ref(false)

let pathLength = 0

function updateProgress() {
    if (!pathEl.value) return

    const scroll = window.scrollY || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - window.innerHeight

    // Same formula as Relome
    const progress = height > 0 ? pathLength - (scroll * pathLength) / height : pathLength
    pathEl.value.style.strokeDashoffset = String(progress)

    // Same toggle threshold as Relome: offset = 50
    active.value = scroll > 50
}

function scrollToTop() {
    const { $lenis } = useNuxtApp() as any

    // If Lenis is available, use it (matches your smooth-scroll setup)
    if ($lenis?.scrollTo) {
        $lenis.scrollTo(0, { duration: 0.55 })
        return
    }

    // Fallback to native smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    if (!pathEl.value) return

    // Same initialization steps as Relome
    pathLength = pathEl.value.getTotalLength()

    pathEl.value.style.transition = 'none'
    pathEl.value.style.strokeDasharray = `${pathLength} ${pathLength}`
    pathEl.value.style.strokeDashoffset = String(pathLength)

    // Force layout (same idea as getBoundingClientRect in Relome)
    pathEl.value.getBoundingClientRect()

    pathEl.value.style.transition = 'stroke-dashoffset 10ms linear'

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateProgress)
})
</script>

<style lang="scss" scoped>
.scroll-to-top {
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: block;
    height: 3rem;
    width: 3rem;
    border-radius: 50px;
    box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--neutral-color) 15%, transparent);
    opacity: 0;
    cursor: pointer;
    visibility: hidden;
    transform: translateY(15px);
    -webkit-transition: all var(--transition-function) var(--transition-duration);
    transition: all var(--transition-function) var(--transition-duration);

    &.active-progress {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    &::before {
        position: absolute;
        content: "\f145";
        top: 0;
        left: 0;
        z-index: 2;
        display: block;
        height: 3rem;
        width: 3rem;
        background: var(--primary-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
        font-family: bootstrap-icons !important;
        font-size: 1.5em;
        line-height: 3rem;
        text-align: center;
        opacity: 0;
        -webkit-transition: all var(--transition-function) var(--transition-duration);
        transition: all var(--transition-function) var(--transition-duration);
    }

    &::after {
        position: absolute;
        content: "\f145";
        top: 0;
        left: 0;
        z-index: 1;
        display: block;
        height: 3rem;
        width: 3rem;
        cursor: pointer;
        font-family: bootstrap-icons !important;
        font-size: 1.5em;
        line-height: 3rem;
        color: color-mix(in srgb, var(--neutral-color) 75%, transparent);
        text-align: center;
        -webkit-transition: all var(--transition-function) var(--transition-duration);
        transition: all var(--transition-function) var(--transition-duration);
    }

    svg path {
        fill: none;
    }

    svg.progress-circle path {
        stroke: color-mix(in srgb, var(--neutral-color) 75%, transparent);
        stroke-width: 4;
        box-sizing: border-box;
        -webkit-transition: all var(--transition-function) var(--transition-duration);
        transition: all var(--transition-function) var(--transition-duration);
    }
}
</style>