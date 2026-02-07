import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()

    // Same behavior as Relome
    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time: number) => {
        lenis.raf(time * 1000)
    }

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    // Refresh after page navigation (Nuxt-specific)
    nuxtApp.hook('page:finish', () => {
        requestAnimationFrame(() => {
            // @ts-ignore depending on Lenis version
            lenis.resize?.()
            ScrollTrigger.refresh()
        })
    })

    // Optional: remove ticker on HMR / dispose
    nuxtApp.hook('app:unmounted', () => {
        gsap.ticker.remove(onTick)
    })

    nuxtApp.provide('lenis', lenis)
})
