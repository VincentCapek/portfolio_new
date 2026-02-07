<template>
    <div class="modal fade menu" id="menu" tabindex="-1" aria-hidden="true" ref="modalEl">
        <div class="modal-dialog modal-dialog-end">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>

                <div class="modal-body">
                    <ul class="navbar-nav items">
                        <li v-for="(item, idx) in items" :key="idx" class="nav-item">
                            <!-- Lien simple -->
                            <NuxtLink v-if="'to' in item" class="nav-link" :to="item.to"
                                @click="closeIfAnchor(item.to)">
                                {{ item.label }}
                            </NuxtLink>

                            <!-- Dropdown (menu mobile) -->
                            <template v-else>
                                <a href="#" class="nav-link prevent d-flex align-items-center justify-content-between"
                                    @click.prevent="toggle(idx)">
                                    <span>{{ item.label }}</span>
                                    <i class="icon-arrow-down" :class="{ 'rotate-arrow': openIndex === idx }"></i>
                                </a>

                                <ul class="dropdown-menu show" v-show="openIndex === idx"
                                    :class="`children-${item.children.length}`">
                                    <li v-for="(c, cidx) in item.children" :key="cidx" class="dropdown">
                                        <NuxtLink class="dropdown-item" :to="c.to" @click="closeIfAnchor(c.to)">
                                            {{ c.label }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { NavItem } from '@/data/nav'

defineProps<{ items: NavItem[] }>()

const openIndex = ref<number | null>(null)
const modalEl = ref<HTMLElement | null>(null)

let modalInstance: any = null

function toggle(idx: number) {
    openIndex.value = openIndex.value === idx ? null : idx
}

async function ensureModal() {
    if (!modalEl.value) return
    const mod = await import('bootstrap/js/dist/modal')
    const Modal = mod.default
    modalInstance = Modal.getOrCreateInstance(modalEl.value)
}

function closeModal() {
    modalInstance?.hide?.()
}

// Le thème ferme surtout si c’est un "smooth-anchor" (ancres).
// Ici : si tu cliques un lien avec "#", on ferme.
function closeIfAnchor(to: string) {
    if (to.includes('#')) closeModal()
}

onMounted(async () => {
    await ensureModal()
})
</script>

<style scoped>
/* Optionnel: pour l'effet rotate-arrow */
.rotate-arrow {
    transform: rotate(180deg);
    transition: transform 200ms ease;
}
</style>