<template>
  <div class="mt-12 max-w-2xl mx-auto">
    <!-- 搜索框容器 -->
    <div class="relative p-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20 rounded-3xl  hover:shadow-3xl transition-all duration-500 group">
      <div class="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-gray-700/30 overflow-hidden">
        <!-- 搜索图标 -->
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <div class="p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 group-hover:from-blue-500/20 group-hover:to-purple-500/20 dark:group-hover:from-blue-400/30 dark:group-hover:to-purple-400/30 transition-all duration-300">
            <svg class="h-5 w-5 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        <!-- 输入框 -->
        <input
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          type="text"
          :placeholder="placeholder"
          class="w-full pl-16 pr-16 py-4 text-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 font-medium"
        />
        
        <!-- 清除按钮 -->
        <button
          v-if="modelValue"
          @click="$emit('update:modelValue', '')"
          class="absolute inset-y-0 right-0 pr-6 flex items-center group/clear"
        >
          <div class="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 group-hover/clear:scale-110">
            <svg class="h-5 w-5 text-gray-400 group-hover/clear:text-red-500 dark:group-hover/clear:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </button>
        
        <!-- 聚焦时的光晕效果 -->
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
    
    <!-- 搜索结果统计 -->
    <div v-if="showStats" class="mt-6 text-center animate-fade-in">
      <div class="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 px-6 py-3 rounded-2xl border border-blue-200/30 dark:border-blue-700/30 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 group/stats">
        <div class="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-md group-hover/stats:scale-110 transition-transform duration-300">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ statsPrefix }}</span>
        <div class="flex items-center justify-center min-w-[2rem] h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl px-3 shadow-md">
          <span class="font-bold text-white text-sm">{{ resultCount }}</span>
        </div>
        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ statsSuffix }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 定义组件属性
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '搜索...'
  },
  showStats: {
    type: Boolean,
    default: true
  },
  resultCount: {
    type: Number,
    default: 0
  },
  statsPrefix: {
    type: String,
    default: '找到'
  },
  statsSuffix: {
    type: String,
    default: '个结果'
  }
})

// 定义事件
defineEmits(['update:modelValue'])
</script>

<style scoped>
/* 组件特定样式可以在这里添加 */
</style>