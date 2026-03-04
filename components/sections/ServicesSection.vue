<script setup lang="ts">
type ServiceItem = {
    title: string
    description: string
    iconSrc: string
    iconAlt: string
    href?: string
}

const services: ServiceItem[] = [
    {
        title: 'Mockup Integration',
        description: 'I can integrate your Figma (or any design) into a responsive, pixel-clean website with reusable components and clean HTML/CSS.',
        iconSrc: '/assets/images/content/icon-1.webp',
        iconAlt: 'UX & UI',
        href: '#',
    },
    {
        title: 'Web & Mobile App',
        description: 'Building responsive web apps and mobile-first experiences with clean, maintainable code.',
        iconSrc: '/assets/images/content/icon-2.webp',
        iconAlt: 'Web & Mobile App',
        href: '#',
    },
    {
        title: 'Design & Creative',
        description: 'Creating strong visuals, layouts, and motion that elevate your product and brand.',
        iconSrc: '/assets/images/content/icon-3.webp',
        iconAlt: 'Design & Creative',
        href: '#',
    },
    {
        title: 'Development',
        description: 'Developing robust features and integrations with a focus on performance and reliability.',
        iconSrc: '/assets/images/content/icon-4.png',
        iconAlt: 'Development',
        href: '#',
    },
]
</script>

<template>
    <section class="services" id="services">
        <div class="container">
            <div class="row justify-content-center align-items-center intro text-center">
                <div class="col-12 col-md-7">
                    <div class="tl-widget heading">
                        <span class="title-before">Colleborate with brand and agencies to create</span>
                        impactful results
                    </div>
                </div>
            </div>

            <div class="row tl-widget items">
                <div v-for="s in services" :key="s.title" class="col-12 col-md-6 col-lg-3">
                    <div class="service-item image-box">
                        <div class="service-image">
                            <img :src="s.iconSrc" :alt="s.iconAlt" />
                        </div>

                        <div class="card-content">
                            <div class="heading">
                                <a :href="s.href || '#'">
                                    <h5 class="title">{{ s.title }}</h5>
                                </a>
                                <p>{{ s.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
