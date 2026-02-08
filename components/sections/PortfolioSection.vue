<template>
    <section id="portfolio" class="tl-widget portfolio">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-7">
                    <div class="intro text-center">
                        <div class="tl-widget heading">
                            <h3 class="title mb-0">
                                <span class="title-before">A small selection of</span>
                                recent projects
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Filter Menu -->
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

            <!-- Filter Items (IMPORTANT: keep ALL projects in the DOM for Shuffle animations) -->
            <div ref="gridEl" class="row items inner filter-items-1 shuffle">
                <div v-for="p in projects" :key="p.slug" class="col-12 col-md-6 item filter-item-1 shuffle-item"
                    :data-slug="p.slug" :data-groups="JSON.stringify(p.groups)">
                    <div class="card-item portfolio-item scale">
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

const PER_PAGE = 4

const selected = ref<'all' | 'frontend' | 'backend'>('all')
const page = ref(1)

const uid = Math.random().toString(36).slice(2)
const radioName = `shuffle-filter-${uid}`

const filters = computed(() => {
    const total = projects.length
    const frontend = projects.filter((p) => p.groups.includes('frontend')).length
    const backend = projects.filter((p) => p.groups.includes('backend')).length

    return [
        { value: 'all', label: 'All', count: total },
        { value: 'frontend', label: 'Frontend', count: frontend },
        { value: 'backend', label: 'Backend', count: backend },
    ]
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
        const slug = (el as HTMLElement).dataset.slug
        if (!slug || !slugs.has(slug)) return false

        if (group === 'all') return true

        const groupsRaw = (el as HTMLElement).dataset.groups || '[]'
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