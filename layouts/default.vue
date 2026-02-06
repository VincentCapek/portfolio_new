<template>
    <div class="main">
        <Navbar />
        <div class="maint-wrapper">
            <NuxtPage />
        </div>
        <!-- Footer -->
        <Footer />
        <!--====== Scroll To Top ======-->
    </div>
</template>

<script setup>
import Navbar from '@components/layout/Navbar.vue';
import Footer from '@components/layout/Footer.vue';
</script>