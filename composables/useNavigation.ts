/**
 * useNavigation.ts
 *
 * Reproduces Relome's "4. Navigation" behavior:
 * - When scrolling down:
 *   - On desktop: hide the navbar
 *   - On mobile: keep it sticky
 * - When scrolling up:
 *   - Show the navbar
 *   - Toggle sticky depending on scroll position
 *
 * Thresholds match the theme script:
 * - Sticky threshold: 76px
 * - Desktop breakpoint: 767px
 */
import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useNavigation() {
    // Navbar visibility state (equivalent to jQuery fadeOut/slideDown)
    const navbarHidden = ref(false)

    // Sticky state (equivalent to `.navbar-sticky`)
    const navbarSticky = ref(false)

    // Last known scroll position (used to detect scroll direction)
    let lastScroll = 0

    // Same thresholds as the Relome script
    const STICKY_THRESHOLD = 76
    const DESKTOP_MIN = 767

    /**
     * Updates navbar state based on:
     * - current scroll position
     * - scroll direction (up/down)
     * - viewport width (desktop/mobile behavior differs)
     */
    const updateNavState = () => {
        const y = window.scrollY || 0
        const goingDown = y > lastScroll
        const isDesktop = window.innerWidth >= DESKTOP_MIN

        if (goingDown) {
            // Scrolling down:
            // - Desktop: hide the navbar
            // - Mobile: enable sticky navbar
            if (isDesktop) {
                navbarHidden.value = true
            } else {
                navbarSticky.value = true
            }
        } else {
            // Scrolling up:
            // - Always show the navbar
            // - Sticky only after a small scroll threshold
            navbarHidden.value = false
            navbarSticky.value = y >= STICKY_THRESHOLD
        }

        lastScroll = y
    }

    onMounted(() => {
        // Initialize the scroll position on mount
        lastScroll = window.scrollY || 0

        // Listen to scroll events (passive for better performance)
        window.addEventListener('scroll', updateNavState, { passive: true })
    })

    onBeforeUnmount(() => {
        // Cleanup listener when the composable owner is destroyed
        window.removeEventListener('scroll', updateNavState)
    })

    return {
        navbarHidden,
        navbarSticky,
    }
}
