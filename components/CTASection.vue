<template>
  <section class="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 overflow-hidden transition-colors duration-300">
    <div class="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-40"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center text-white">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">{{ title }}</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto opacity-90 dark:opacity-95 drop-shadow-md">
          {{ description }}
        </p>
        <NuxtLink 
          to="/guide"
          class="bg-transparent px-6 py-3 rounded-md text-white border border-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
    <!-- 装饰性元素 -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 dark:bg-opacity-15 rounded-full animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 dark:bg-opacity-10 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 dark:bg-opacity-15 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '构建更快的网站。'
  },
  description: {
    type: String,
    default: '从任何地方提取内容，并使用 Nuxt 的下一代岛屿架构快速提供服务。'
  },
  buttonText: {
    type: String,
    default: '开始使用'
  }
})

defineEmits(['action'])
</script>