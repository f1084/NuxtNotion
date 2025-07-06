<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div class="text-center space-y-4">
      <!-- 加载动画 -->
      <div class="relative">
        <div class="w-12 h-12 mx-auto">
          <!-- 简单的旋转圆圈 -->
          <div class="w-full h-full border-4 border-gray-200 dark:border-gray-700 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      </div>
      
      <!-- 加载文本 -->
      <div class="space-y-2">
        <p class="text-gray-600 dark:text-gray-300 font-medium">{{ message }}</p>
        <div v-if="showProgress" class="w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            class="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300 ease-out"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    default: '加载中...'
  },
  size: {
    type: String,
    default: 'medium', // small, medium, large
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  fullScreen: {
    type: Boolean,
    default: false
  },
  showProgress: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  }
})

const containerClass = computed(() => {
  const classes = []
  
  if (props.fullScreen) {
    classes.push('min-h-screen')
  } else {
    switch (props.size) {
      case 'small':
        classes.push('py-8')
        break
      case 'large':
        classes.push('py-24')
        break
      default:
        classes.push('py-16')
    }
  }
  
  return classes.join(' ')
})
</script>