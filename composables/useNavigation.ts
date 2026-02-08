import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useNavigation() {
    const navbarHidden = ref(false)
    const navbarSticky = ref(false)

    let lastScroll = 0
    let ticking = false

    // Relome values
    const DESKTOP_MIN = 767

    // Avoid jitter around the threshold: sticky turns ON later, OFF earlier
    const STICKY_ON = 90
    const STICKY_OFF = 60

    // Ignore tiny scroll deltas (trackpads / smooth scrolling)
    const MIN_DELTA = 6

    const compute = () => {
        const y = window.scrollY || 0
        const delta = y - lastScroll

        // Ignore micro movements to prevent rapid toggling
        if (Math.abs(delta) < MIN_DELTA) return

        const goingDown = delta > 0
        const isDesktop = window.innerWidth >= DESKTOP_MIN

        // Sticky with hysteresis
        if (!navbarSticky.value && y >= STICKY_ON) navbarSticky.value = true
        if (navbarSticky.value && y <= STICKY_OFF) navbarSticky.value = false

        // Hide/show logic (Relome-like)
        if (isDesktop) {
            // Always show near the very top
            if (y <= STICKY_OFF) {
                navbarHidden.value = false
            } else if (goingDown) {
                navbarHidden.value = true
            } else {
                navbarHidden.value = false
            }
        } else {
            // Mobile: never hide, keep sticky after threshold
            navbarHidden.value = false
            if (y >= STICKY_ON) navbarSticky.value = true
        }

        lastScroll = y
    }

    const update = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
            compute()
            ticking = false
        })
    }

    onMounted(() => {
        lastScroll = window.scrollY || 0
        compute()

        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update, { passive: true })
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', update)
        window.removeEventListener('resize', update)
    })

    return { navbarHidden, navbarSticky }
}
