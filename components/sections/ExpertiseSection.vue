<script setup lang="ts">
type IconName = string

type ExperienceItem = {
  icon: IconName
  title: string
  description: string
}

type EducationItem = {
  icon: IconName
  badge: string
  title: string
  description: string
}

const experienceItems: ExperienceItem[] = [
  {
    icon: 'bi-asterisk',
    title: 'Full-Stack Web Development',
    description:
      'Building complete web applications end-to-end: backend APIs, database design, authentication, and frontend integration with a focus on clean, maintainable code.',
  },
  {
    icon: 'bi-lightning',
    title: 'Backend & Integrations',
    description:
      'Laravel/PHP backends with real-world integrations: payments, emails, queues, third-party APIs, and real-time features when needed.',
  },
  {
    icon: 'bi-bezier2',
    title: 'Frontend Integration (Figma to Code)',
    description:
      'Integrating provided designs into responsive pages and reusable components (Vue/Nuxt), ensuring consistent layout, performance, and accessibility basics.',
  },
]

const educationItems: EducationItem[] = [
  {
    icon: 'bi-award',
    badge: 'Self-learning (7+ years)',
    title: 'Hands-on Projects & Real Deliveries',
    description:
      'Learning by building: personal projects, experiments, and production-grade features across different stacks and use cases.',
  },
  {
    icon: 'bi-broadcast-pin',
    badge: 'Continuous learning',
    title: 'Documentation & Best Practices',
    description:
      'Staying sharp through official docs, code reviews, refactoring, and building reusable patterns for long-term maintainability.',
  },
  {
    icon: 'bi-patch-check',
    badge: 'Practical focus',
    title: 'Tools, Testing & Deployment',
    description:
      'Improving delivery quality with version control, CI basics, debugging, and deployment workflows that keep projects reliable.',
  },
]
</script>

<template>
  <section id="expertise" class="expertise p-0">
    <div class="container">
      <div class="row">
        <!-- Work experience -->
        <div class="col-12 col-md-6">
          <div class="tl-widget heading mb-4">
            <h3 class="title m-0">
              <span class="title-before">My work</span>
              experience
            </h3>
          </div>

          <div class="row items">
            <div v-for="item in experienceItems" :key="item.title" class="tl-widget icon-box left-aligned item">
              <div class="icon-wrapper icon-animation">
                <span class="icon-group stacked shape-circle">
                  <i class="icon" :class="item.icon"></i>
                </span>
              </div>

              <div class="content">
                <h4 class="title">{{ item.title }}</h4>
                <p class="description m-0">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="col-12 col-md-6">
          <div class="tl-widget heading mb-4">
            <h3 class="title m-md-0">
              <span class="title-before">My</span> education
            </h3>
          </div>

          <div class="row items">
            <div v-for="item in educationItems" :key="item.title" class="tl-widget icon-box left-aligned item">
              <div class="icon-wrapper icon-animation">
                <span class="icon-group stacked shape-circle">
                  <i class="icon" :class="item.icon"></i>
                </span>
              </div>

              <div class="content">
                <div class="tl-widget badge">{{ item.badge }}</div>
                <h4 class="title mt-3">{{ item.title }}</h4>
                <p class="description m-0">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- /Education -->
      </div>
    </div>
  </section>
</template>