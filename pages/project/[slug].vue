<template>
    <section v-if="project" class="tl-single-portfolio">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-12 col-lg-5">
                    <ul class="tl-widget post-info list-unstyled layout-inline flex-row has-separator">
                        <li>
                            <span v-for="(t, i) in project.tags" :key="t">
                                <a href="#" @click.prevent>{{ t }}</a>
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

                    <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                        class="tl-widget button swap-icon text text-decoration-none mt-3">
                        Live Site
                        <span class="icon">
                            <i class="icon-arrow-right"></i>
                        </span>
                    </a>
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

const slug = computed(() => String(route.params.slug || ''))

const project = computed(() => projects.find((p) => p.slug === slug.value) || null)

const galleryImages = computed(() => {
    if (!project.value) return []
    // Fallback: if you don't have a gallery, reuse the cover image.
    return project.value.gallery?.length ? project.value.gallery : [project.value.image].filter(Boolean)
})
</script>