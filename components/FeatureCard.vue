<template>
  <div class="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
    <div :class="iconBgClass" class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl">
      <svg :class="iconClass" class="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="icon === 'code'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        <path v-else-if="icon === 'lightning'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        <path v-else-if="icon === 'component'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
        <path v-else-if="icon === 'heart'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        <path v-else-if="icon === 'lightbulb'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        <path v-else-if="icon === 'users'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    </div>
    <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 transition-colors duration-300">{{ title }}</h3>
    <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
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
    validator: (value) => ['code', 'lightning', 'component', 'heart', 'lightbulb', 'users'].includes(value)
  },
  color: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'green', 'purple', 'red', 'yellow', 'indigo'].includes(value)
  }
})

const iconBgClass = computed(() => {
  const colorMap = {
    blue: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/30 dark:to-blue-900/30 group-hover:from-blue-200 group-hover:to-blue-300 dark:group-hover:from-blue-700/40 dark:group-hover:to-blue-800/40',
    green: 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/30 dark:to-green-900/30 group-hover:from-green-200 group-hover:to-green-300 dark:group-hover:from-green-700/40 dark:group-hover:to-green-800/40',
    purple: 'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800/30 dark:to-purple-900/30 group-hover:from-purple-200 group-hover:to-purple-300 dark:group-hover:from-purple-700/40 dark:group-hover:to-purple-800/40',
    red: 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800/30 dark:to-red-900/30 group-hover:from-red-200 group-hover:to-red-300 dark:group-hover:from-red-700/40 dark:group-hover:to-red-800/40',
    yellow: 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800/30 dark:to-yellow-900/30 group-hover:from-yellow-200 group-hover:to-yellow-300 dark:group-hover:from-yellow-700/40 dark:group-hover:to-yellow-800/40',
    indigo: 'bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800/30 dark:to-indigo-900/30 group-hover:from-indigo-200 group-hover:to-indigo-300 dark:group-hover:from-indigo-700/40 dark:group-hover:to-indigo-800/40'
  }
  return colorMap[props.color] || colorMap.blue
})

const iconClass = computed(() => {
  const colorMap = {
    blue: 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300',
    green: 'text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300',
    purple: 'text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300',
    red: 'text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300',
    yellow: 'text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300',
    indigo: 'text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300'
  }
  return `${colorMap[props.color] || colorMap.blue} transition-all duration-300`
})
</script>