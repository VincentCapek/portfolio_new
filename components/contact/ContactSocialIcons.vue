<template>
    <div class="tl-widget social-icons icon-box justify-content-start gap-0">
        <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener noreferrer"
            class="icon-group stacked shape-circle social-icon" :aria-label="s.name" :title="s.name">
            <span class="icon icon-animated">
                <i :class="s.iconClass" aria-hidden="true" />
            </span>

            <span class="icon icon-animated">
                <i :class="s.iconClass" aria-hidden="true" />
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">
type Social = {
    name: string
    url: string
    iconClass: string
}

const socials: Social[] = [
    {
        name: 'X (Twitter)',
        url: 'https://x.com/vincentdevb',
        iconClass: 'fa-brands fa-x-twitter',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vincent-capek-482077252/',
        iconClass: 'fa-brands fa-linkedin-in',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/VincentCapek',
        iconClass: 'fa-brands fa-github',
    },
    {
        name: 'DEV Community',
        url: 'https://dev.to/blamsa0mine',
        iconClass: 'fa-brands fa-dev',
    },
]
</script>