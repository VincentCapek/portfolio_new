<template>
    <header>
        <nav class="navbar p-navbar navbar-expand aos-init aos-animate" :class="{
            // When true, CSS transitions hide the navbar (Relome: fadeOut on scroll down)
            'is-hidden': navbarHidden,

            // When true, the navbar becomes fixed/sticky (Relome: add 'navbar-sticky')
            'navbar-sticky': navbarSticky,
        }">
            <div class="container header">
                <NuxtLink to="/" class="navbar-brand site-title">
                    <img src="/favicon.ico" alt="Vincent" width="32" height="32" />
                </NuxtLink>

                <div class="ms-auto ms-md-0"></div>

                <!-- Desktop navigation -->
                <ul id="primary" class="navbar-nav items d-none d-lg-flex">
                    <li v-for="(item, idx) in navItems" :key="idx" class="nav-item">
                        <!-- Simple link -->
                        <NuxtLink v-if="'to' in item" :to="item.to" class="nav-link"
                            @click="handleLinkClick($event, item.to)">
                            {{ item.label }}
                        </NuxtLink>

                        <!-- Desktop dropdown (only if you have children items) -->
                        <template v-else>
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                {{ item.label }}
                            </a>
                            <ul class="dropdown-menu">
                                <li v-for="(c, cidx) in item.children" :key="cidx">
                                    <NuxtLink class="dropdown-item" :to="c.to" @click="handleLinkClick($event, c.to)">
                                        {{ c.label }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>

                <!-- Mobile toggle (opens the Bootstrap modal menu) -->
                <ul class="navbar-nav toggle d-lg-none">
                    <li class="nav-item">
                        <button type="button" class="nav-link pe-0 btn btn-link" data-bs-toggle="modal"
                            data-bs-target="#menu" aria-label="Open menu">
                            <i class="icon-menu m-0"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Mobile menu (modal) -->
        <MenuModal :items="navItems" />
    </header>
</template>

<script setup lang="ts">
import { navItems } from '@/data/nav'
import { useNavigation } from '@/composables/useNavigation'

// States provided by the composable (Relome "4. Navigation" behavior)
const { navbarHidden, navbarSticky } = useNavigation()

// Smooth anchor navigation (Relome-like):
// - If the link contains a hash (#section), we handle scrolling ourselves
// - If we're not on the homepage, redirect to "/#section"
const route = useRoute()
const router = useRouter()
const nuxtApp = useNuxtApp() as any

async function handleLinkClick(e: MouseEvent, to: string) {
    // Only intercept hash links (anchors)
    if (!to.includes('#')) return

    // Prevent NuxtLink default navigation to avoid double navigation / jump
    e.preventDefault()

    // Extract the hash part (e.g. "#services")
    const hash = to.slice(to.indexOf('#'))

    // If we're not on the homepage, navigate to home with the hash
    if (route.path !== '/') {
        await router.push({ path: '/', hash })
        return
    }

    // If we're already on the homepage, scroll to the target section
    const el = document.querySelector(hash)
    if (!el) return

    // Use Lenis if available, otherwise fallback to native smooth scrolling
    if (nuxtApp.$lenis?.scrollTo) {
        nuxtApp.$lenis.scrollTo(el, { duration: 0.5 })
    } else {
        el.scrollIntoView({ behavior: 'smooth' })
    }

    // Update the URL hash without adding a new history entry
    history.replaceState(null, '', hash)
}
</script>