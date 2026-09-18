<template>
  <!-- Sections - Section Hero -->
  <HeroSection />

  <!-- ***** Fun Facts Area Start ***** -->
  <FunFactsSection />

  <!-- Sections - Section Services -->
  <ServicesSection />

  <!-- Sections - Section Expertise -->
  <ExpertiseSection />

  <!-- Sections - Section Portfolio -->
  <PortfolioSection />

  <!-- Sections - Section Skills -->
  <SkillsSection />

  <!-- Sections - Section Approch -->
  <ApproachSection />

  <!-- Sections - Section CV -->
  <CvSection />

  <!-- Sections - Section Contact -->
  <ContactSection />
</template>

<script setup>
import HeroSection from '@components/sections/HeroSection.vue';
import FunFactsSection from '@components/sections/FunFactsSection.vue';
import ExpertiseSection from '@components/sections/ExpertiseSection.vue';
import ServicesSection from '@components/sections/ServicesSection.vue';
import PortfolioSection from '@components/sections/PortfolioSection.vue';
import SkillsSection from '@components/sections/SkillsSection.vue';
import ApproachSection from '@components/sections/ApproachSection.vue';
import CvSection from '@components/sections/CvSection.vue';
import ContactSection from '@components/sections/ContactSection.vue';

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const title = 'Vincent Capek — Full-Stack Developer (Laravel & Vue)'
const description =
  'Portfolio of Vincent Capek, a full-stack developer based in Manosque specializing in Laravel/PHP, Vue 3 and TypeScript, currently looking for a new job opportunity.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>