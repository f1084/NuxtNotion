<template>
  <section class="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 sm:py-16 lg:py-32 overflow-hidden transition-colors duration-300">
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <!-- 左侧内容 -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight transition-colors duration-300">
            <span class="block">{{ title }}</span>
            <span class="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-2">{{ subtitle }}</span>
          </h1>
          <p class="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
            {{ description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <AppButton 
              variant="primary"
              size="large"
              @click="$emit('primaryAction')"
              class="w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {{ primaryButtonText }}
            </AppButton>
            <AppButton 
              variant="outline"
              size="large"
              @click="$emit('secondaryAction')"
              class="w-full sm:w-auto"
            >
              {{ secondaryButtonText }}
            </AppButton>
          </div>
        </div>
        
        <!-- 右侧插图 -->
        <div class="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <div class="relative max-w-md mx-auto lg:max-w-none">
            <div class="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div class="absolute inset-3 sm:inset-4 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center transition-colors duration-300">
                <svg class="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-blue-500 dark:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
            </div>
            <!-- 浮动元素 - 在移动端缩小 -->
            <div class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '现代化博客网站'
  },
  subtitle: {
    type: String,
    default: '基于 Nuxt 3'
  },
  description: {
    type: String,
    default: '使用 Nuxt 3、Tailwind CSS 和 Notion API 构建的现代化博客网站。'
  },
  primaryButtonText: {
    type: String,
    default: '开始阅读'
  },
  secondaryButtonText: {
    type: String,
    default: '了解更多'
  }
})

defineEmits(['primaryAction', 'secondaryAction'])
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>