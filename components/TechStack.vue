<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 transition-colors duration-300">
          {{ title }}
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
          {{ description }}
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <TechStackItem
          v-for="tech in technologies"
          :key="tech.name"
          :name="tech.name"
          :description="tech.description"
          :icon="tech.icon"
          :color="tech.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '强大的技术栈'
  },
  description: {
    type: String,
    default: '基于现代化的技术栈构建，为您提供最佳的开发体验和性能表现。'
  },
  technologies: {
    type: Array,
    default: () => [
      {
        name: 'Vue.js',
        description: '渐进式 JavaScript 框架',
        icon: 'vue',
        color: 'green'
      },
      {
        name: 'Nuxt.js',
        description: 'Vue.js 全栈框架',
        icon: 'nuxt',
        color: 'blue'
      },
      {
        name: 'Tailwind CSS',
        description: '实用优先的 CSS 框架',
        icon: 'tailwind',
        color: 'cyan'
      },
      {
        name: 'Notion API',
        description: '强大的内容管理',
        icon: 'notion',
        color: 'gray'
      }
    ]
  }
})
</script>