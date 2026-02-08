<template>
    <MagicCursor />
    <div class="main">
        <Navbar />
        <div class="maint-wrapper">
            <NuxtPage />
        </div>
        <!-- Footer -->
        <Footer />
        <!--====== Scroll To Top ======-->
        <ScrollToTop />
    </div>
</template>

<script setup>
import Navbar from '@components/layout/Navbar.vue';
import Footer from '@components/layout/Footer.vue';
import MagicCursor from '@components/MagicCursor.vue';
import ScrollToTop from '@components/layout/ScrollToTop.vue';
</script>