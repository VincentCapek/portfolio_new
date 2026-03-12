<template>
    <!-- Breadcrumb / Header -->
    <section id="slider" class="p0 bg-odd">
        <div class="swiper-container no-slider slider-h-auto">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide-center">
                    <div class="slide-content row text-center">
                        <div class="col-12 mx-auto inner">
                            <h1 class="aos-init aos-animate">Portfolio</h1>

                            <div class="aos-init aos-animate">
                                <div class="breadcrumb">
                                    <nav class="relome-breadcrumbs" aria-label="breadcru mb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
                                                <NuxtLink to="/" rel="nofollow">Home</NuxtLink>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio -->
    <section id="portfolio" class="tl-widget portfolio">
        <div class="container">
            <!-- Filters -->
            <div class="row justify-content-center text-center mb-4">
                <div class="col-12">
                    <div class="btn-group filter-menu" role="group" aria-label="Portfolio filters">
                        <div v-for="f in filters" :key="f.value" class="input-item d-flex">
                            <div class="content">
                                <input type="radio" class="btn-check filter-btn-1" :name="radioName"
                                    :id="`filter-${uid}-${f.value}`" :value="f.value" v-model="selected" />
                                <label class="btn" :for="`filter-${uid}-${f.value}`">{{ f.label }}</label>
                            </div>
                            <span class="count">{{ String(f.count).padStart(2, '0') }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Items (keep ALL projects in DOM so Shuffle can animate) -->
            <div ref="gridEl" class="row items inner filter-items-1 shuffle">
                <div v-for="p in projects" :key="p.slug"
                    class="col-12 col-md-6 col-lg-4 item filter-item-1 shuffle-item" :data-slug="p.slug"
                    :data-groups="JSON.stringify(p.groups)">
                    <div class="card-item portfolio-item scale overlay metro">
                        <NuxtLink :to="`/project/${p.slug}`">
                            <div class="image-holder">
                                <div class="card-thumb">
                                    <img decoding="async" :src="p.image" class="card-img-top wp-post-image"
                                        :alt="p.title" />
                                </div>
                            </div>
                        </NuxtLink>

                        <div class="card-content mt-3">
                            <div class="heading">
                                <h5 class="title m-0">{{ p.title }}</h5>

                                <div class="show-project">
                                    <div class="post-holder-tags mt-2">
                                        <span v-for="(t, i) in p.tags" :key="t">
                                            <a href="#" @click.prevent>{{ t }}</a>
                                            <span v-if="i < p.tags.length - 1">, </span>
                                        </span>
                                    </div>

                                    <div class="project-link">
                                        <NuxtLink :to="`/project/${p.slug}`">Show Project</NuxtLink>
                                    </div>
                                </div>

                                <p class="mt-2 mb-0" style="opacity: 0.8">{{ p.excerpt }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination (Relome-like markup) -->
            <div v-if="totalPages > 1" class="row">
                <div class="col-12">
                    <nav aria-label="Portfolio pagination">
                        <ul class="page-numbers">
                            <li v-for="n in totalPages" :key="n">
                                <span v-if="n === page" aria-current="page" class="page-numbers current">{{ n }}</span>
                                <a v-else class="page-numbers" href="#" @click.prevent="goToPage(n)">{{ n }}</a>
                            </li>

                            <li>
                                <a class="next page-numbers" href="#" :aria-disabled="page >= totalPages"
                                    :style="page >= totalPages ? 'pointer-events:none;opacity:.5;' : ''"
                                    @click.prevent="goToPage(page + 1)" aria-label="Next page">
                                    <i class="icon-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { projects } from '@/data/projects'
import { portfolioFilterDefs } from '@/data/projects'
import type { ProjectGroup } from '@/data/projects'

const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const canonical = computed(() => new URL(route.fullPath as string, siteUrl as string).toString())

const title = 'Portfolio — Projects · Vincent Capek'
const description =
    'Explore my projects: full-stack web apps, dashboards, real-time features, e-commerce integrations, and more — built with Laravel, Vue/Nuxt and TypeScript.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonical,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
})

useHead({
    link: [{ rel: 'canonical', href: canonical }],
})

const PER_PAGE = 6 // 3 columns layout looks good with 6 per page (2 rows)

const selected = ref<'all' | 'frontend' | 'backend'>('all')
const page = ref(1)

const uid = Math.random().toString(36).slice(2)
const radioName = `shuffle-filter-${uid}`

/**
 * Adds "count" to each filter definition based on the project groups.
 * Keeps your HTML intact: same structure, just swaps the v-for source.
 */
const filters = computed(() => {
    return portfolioFilterDefs.map((f) => {
        const count =
            f.value === 'all'
                ? projects.length
                : projects.filter((p) => p.groups.includes(f.value as ProjectGroup)).length

        return { ...f, count }
    })
})

const filteredProjects = computed(() => {
    if (selected.value === 'all') return projects
    return projects.filter((p) => p.groups.includes(selected.value))
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProjects.value.length / PER_PAGE)))

const paginatedProjects = computed(() => {
    const start = (page.value - 1) * PER_PAGE
    return filteredProjects.value.slice(start, start + PER_PAGE)
})

const visibleSlugs = computed(() => new Set(paginatedProjects.value.map((p) => p.slug)))

function goToPage(n: number) {
    page.value = Math.min(Math.max(1, n), totalPages.value)
}

watch(selected, () => {
    page.value = 1
})

const gridEl = ref<HTMLElement | null>(null)
let shuffle: any = null

function applyShuffleFilter() {
    if (!shuffle) return

    const slugs = visibleSlugs.value
    const group = selected.value

    shuffle.filter((el: Element) => {
        const h = el as HTMLElement
        const slug = h.dataset.slug
        if (!slug || !slugs.has(slug)) return false

        if (group === 'all') return true

        const groupsRaw = h.dataset.groups || '[]'
        const groups = JSON.parse(groupsRaw) as string[]
        return groups.includes(group)
    })
}

onMounted(async () => {
    if (!gridEl.value) return

    const { default: Shuffle } = await import('shufflejs')
    await nextTick()

    shuffle = new Shuffle(gridEl.value, {
        itemSelector: '.filter-item-1',
        buffer: 1,
        speed: 450,
        easing: 'ease',
    })

    await nextTick()
    shuffle.update?.()
    applyShuffleFilter()
})

watch([selected, page], async () => {
    await nextTick()
    shuffle?.update?.()
    applyShuffleFilter()
})

onBeforeUnmount(() => {
    shuffle?.destroy?.()
    shuffle = null
})
</script>