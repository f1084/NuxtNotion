<template>
  <div class="text-center group">
    <div :class="iconBgClass" class="w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-4 sm:mb-5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl">
      <!-- Vue.js Icon -->
      <svg v-if="icon === 'vue'" :class="iconClass" class="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
      </svg>
      
      <!-- Nuxt.js Icon - Simple N -->
      <div v-else-if="icon === 'nuxt'" :class="iconClass" class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-bold text-xl sm:text-2xl">
        N
      </div>
      
      <!-- Tailwind CSS Icon -->
      <svg v-else-if="icon === 'tailwind'" :class="iconClass" class="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
      
      <!-- Notion Icon -->
      <svg v-else-if="icon === 'notion'" :class="iconClass" class="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    </div>
    <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2 transition-colors duration-300">{{ name }}</h3>
    <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{{ description }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true,
    validator: (value) => ['vue', 'nuxt', 'tailwind', 'notion'].includes(value)
  },
  color: {
    type: String,
    default: 'blue',
    validator: (value) => ['green', 'blue', 'cyan', 'gray'].includes(value)
  }
})

const iconBgClass = computed(() => {
  const colorMap = {
    green: 'bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900/40 dark:to-green-800/40 group-hover:from-emerald-200 group-hover:to-green-300 dark:group-hover:from-emerald-800/60 dark:group-hover:to-green-700/60',
    blue: 'bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/40 dark:to-indigo-800/40 group-hover:from-blue-200 group-hover:to-indigo-300 dark:group-hover:from-blue-800/60 dark:group-hover:to-indigo-700/60',
    cyan: 'bg-gradient-to-br from-cyan-100 to-teal-200 dark:from-cyan-900/40 dark:to-teal-800/40 group-hover:from-cyan-200 group-hover:to-teal-300 dark:group-hover:from-cyan-800/60 dark:group-hover:to-teal-700/60',
    gray: 'bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800/40 dark:to-slate-700/40 group-hover:from-gray-200 group-hover:to-slate-300 dark:group-hover:from-gray-700/60 dark:group-hover:to-slate-600/60'
  }
  return colorMap[props.color] || colorMap.blue
})

const iconClass = computed(() => {
  const colorMap = {
    green: 'text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300',
    blue: 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300',
    cyan: 'text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300',
    gray: 'text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
  }
  return `${colorMap[props.color] || colorMap.blue} transition-all duration-300`
})
</script>