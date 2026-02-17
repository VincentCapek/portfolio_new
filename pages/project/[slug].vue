<template>
    <section v-if="project" class="tl-single-portfolio">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-12 col-lg-5">
                    <ul class="tl-widget post-info list-unstyled layout-inline flex-row has-separator">
                        <li>
                            <span v-for="(t, i) in project.tags" :key="t">
                                <NuxtLink to="/project" @click.prevent>{{ t }}</NuxtLink>
                                <span v-if="i < project.tags.length - 1">, </span>
                            </span>
                        </li>

                        <li v-if="project.date">{{ project.date }}</li>
                    </ul>

                    <h2 class="post-title">{{ project.title }}</h2>

                    <p v-if="project.description" v-html="project.description"></p>
                    <p v-else>{{ project.excerpt }}</p>
                </div>

                <div class="col-12 col-lg-6">
                    <h6 v-if="project.taskTitle || project.task" class="title mb-3">
                        {{ project.taskTitle || 'Task' }}
                    </h6>
                    <p v-if="project.task" class="mt-2 mb-3">
                        {{ project.task }}
                    </p>

                    <ul class="portfolio-info list-group list-group-horizontal list-unstyled">
                        <li v-if="project.role?.length">
                            <h6 class="title mt-0 mb-3">Role/Services</h6>
                            <ul class="tl-widget post-info list-unstyled layout-inline flex-row has-separator">
                                <li>
                                    <span v-for="(r, i) in project.role" :key="r">
                                        <a href="#" @click.prevent>{{ r }}</a>
                                        <span v-if="i < project.role.length - 1">, </span>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li v-if="project.stack?.length">
                            <h6 class="title mt-0 mb-3">Stack</h6>
                            <ul class="tl-widget post-info list-unstyled layout-inline flex-row has-separator">
                                <li>
                                    <span v-for="(s, i) in project.stack" :key="s">
                                        <a href="#" @click.prevent>{{ s }}</a>
                                        <span v-if="i < project.stack.length - 1">, </span>
                                    </span>
                                </li>
                            </ul>
                        </li>

                        <li v-if="project.client">
                            <h6 class="title mt-0 mb-3">Client</h6>
                            <ul class="tl-widget post-info list-unstyled layout-inline flex-row has-separator">
                                <li>{{ project.client }}</li>
                            </ul>
                        </li>
                    </ul>

                    <div class="d-flex align-items-center flex-wrap justify-content-end gap-2 mt-3">
                        <div class="contact">
                            <div class="tl-widget social-icons icon-box justify-content-start gap-0">
                                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                                    rel="noopener noreferrer" class="icon-group stacked shape-circle social-icon"
                                    aria-label="GitHub" title="GitHub">
                                    <span class="icon icon-animated">
                                        <i class="fa-brands fa-github" aria-hidden="true" />
                                    </span>
                                    <span class="icon icon-animated">
                                        <i class="fa-brands fa-github" aria-hidden="true" />
                                    </span>
                                </a>

                                <a v-if="project.gitlabUrl" :href="project.gitlabUrl" target="_blank"
                                    rel="noopener noreferrer" class="icon-group stacked shape-circle social-icon"
                                    aria-label="GitLab" title="GitLab">
                                    <span class="icon icon-animated">
                                        <i class="fa-brands fa-gitlab" aria-hidden="true" />
                                    </span>
                                    <span class="icon icon-animated">
                                        <i class="fa-brands fa-gitlab" aria-hidden="true" />
                                    </span>
                                </a>

                                <a v-if="project.youtubeUrl" :href="project.youtubeUrl" target="_blank"
                                    rel="noopener noreferrer" class="icon-group stacked shape-circle social-icon"
                                    aria-label="YouTube" title="YouTube">
                                    <span class="icon icon-animated">
                                        <i class="fa-brands fa-youtube" aria-hidden="true" />
                                    </span>
                                    <span class="icon icon-animated">
                                        <i class="fa-brands fa-youtube" aria-hidden="true" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="galleryImages.length" class="row mt-4 mt-md-5">
                <div class="col-12">
                    <ul class="tl-gallery list-unstyled">
                        <li v-for="(img, i) in galleryImages" :key="img + i" class="gallery-item">
                            <img :src="img" :alt="`${project.title} - ${i + 1}`" loading="lazy" decoding="async" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section v-else class="tl-single-portfolio">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="post-title">Project not found</h2>
                    <p class="mb-0">The project you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/data/projects'

const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const slug = computed(() => String(route.params.slug || ''))

const project = computed(() => projects.find((p) => p.slug === slug.value) || null)

const galleryImages = computed(() => {
    if (!project.value) return []
    // Fallback: if you don't have a gallery, reuse the cover image.
    return project.value.gallery?.length ? project.value.gallery : [project.value.image].filter(Boolean)
})


const canonical = computed(() => new URL(route.fullPath as string, siteUrl as string).toString())

function stripHtml(input: string) {
    return input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

watchEffect(() => {
    const p = project.value

    // Fallback SEO if not found
    if (!p) {
        const notFoundTitle = 'Project not found · Vincent Capek'
        const notFoundDesc = 'This project does not exist. Browse the portfolio to discover other projects.'

        useSeoMeta({
            title: notFoundTitle,
            description: notFoundDesc,
            ogTitle: notFoundTitle,
            ogDescription: notFoundDesc,
            ogType: 'website',
            ogUrl: canonical.value,
            twitterCard: 'summary_large_image',
            twitterTitle: notFoundTitle,
            twitterDescription: notFoundDesc,
        })

        useHead({
            link: [{ rel: 'canonical', href: canonical.value }],
            meta: [{ name: 'robots', content: 'noindex, follow' }],
        })

        return
    }

    // Build dynamic SEO from project data
    const title = `${p.title} · Project · Vincent Capek`

    const rawDesc = p.description ? stripHtml(p.description) : p.excerpt
    const description = rawDesc.length > 160 ? `${rawDesc.slice(0, 157)}…` : rawDesc

    // Use first gallery image if possible, otherwise cover image
    const ogImage = (galleryImages.value?.[0] || p.image || '').trim()

    useSeoMeta({
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogType: 'article',
        ogUrl: canonical.value,
        ...(ogImage
            ? {
                ogImage,
                twitterImage: ogImage,
            }
            : {}),
        twitterCard: 'summary_large_image',
        twitterTitle: title,
        twitterDescription: description,
    })

    useHead({
        link: [{ rel: 'canonical', href: canonical.value }],
    })
})
</script>