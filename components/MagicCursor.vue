<template>
    <div id="magic-cursor">
        <div id="cursor" ref="cursorEl"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'

const cursorEl = ref<HTMLDivElement | null>(null)

let onMove: ((e: MouseEvent) => void) | null = null
let cleanups: Array<() => void> = []

const animateCursor = (props: Record<string, any>) => {
    const el = cursorEl.value
    if (!el) return

    const { duration = 0.3, ease = 'power2.out', ...rest } = props
    gsap.to(el, { ...rest, duration, ease })
}

onMounted(() => {
    const cursor = cursorEl.value
    if (!cursor) return

    // Optionnel : évite le curseur custom sur mobile/coarse pointer
    const finePointer = window.matchMedia?.('(pointer: fine)')?.matches
    if (!finePointer) return

    // Position: suit la souris
    onMove = (e: MouseEvent) => {
        animateCursor({ x: e.clientX, y: e.clientY, opacity: 1 })
    }
    document.addEventListener('mousemove', onMove)

    // Hover effects : Relome cible seulement les <a>
    const hoverElements = Array.from(document.querySelectorAll('a'))

    hoverElements.forEach((el) => {
        const enter = () => {
            cursor.classList.add('hovered')
            // Dans leur code, ils passent "ease: 0.1" (probable intention: plus rapide)
            animateCursor({ scale: 2, opacity: 0, duration: 0.1 })
        }

        const leave = () => {
            cursor.classList.remove('hovered')
            animateCursor({ scale: 1, opacity: 1 })
        }

        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)

        cleanups.push(() => {
            el.removeEventListener('mouseenter', enter)
            el.removeEventListener('mouseleave', leave)
        })
    })
})

onBeforeUnmount(() => {
    if (onMove) document.removeEventListener('mousemove', onMove)
    cleanups.forEach((fn) => fn)
    cleanups = []
})
</script>

<style lang="scss" scoped>
#magic-cursor {
    position: fixed;
    /* important: fixed, sinon ça décale avec le scroll */
    inset: 0;
    z-index: 10000;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out 0.5s;
}

#magic-cursor #cursor {
    position: fixed;
    left: 0;
    /* important pour que x/y GSAP se basent sur (0,0) */
    top: 0;
    /* idem */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
    box-sizing: border-box;
    border: 2px solid var(--secondary-p-color);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;

    will-change: transform, opacity;
}
</style>