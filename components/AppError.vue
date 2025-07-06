<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div class="max-w-md mx-auto text-center space-y-6">
      <!-- 错误图标 -->
      <div class="flex justify-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
      </div>
      
      <!-- 错误信息 -->
      <div class="space-y-3">
        <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
        <p class="text-gray-600 leading-relaxed">{{ message }}</p>
        
        <!-- 错误详情（可选） -->
        <div v-if="details" class="mt-4">
          <details class="text-left">
            <summary class="cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors">
              查看详细信息
            </summary>
            <div class="mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 font-mono whitespace-pre-wrap">
              {{ details }}
            </div>
          </details>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <button 
          v-if="showRetry"
          @click="$emit('retry')"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          重试
        </button>
        
        <button 
          v-if="showHome"
          @click="$router.push('/')"
          class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          返回首页
        </button>
        
        <button 
          v-if="showBack"
          @click="$router.back()"
          class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          返回上页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '出现错误'
  },
  message: {
    type: String,
    default: '抱歉，发生了一些错误，请稍后重试。'
  },
  details: {
    type: String,
    default: ''
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
  showRetry: {
    type: Boolean,
    default: true
  },
  showHome: {
    type: Boolean,
    default: true
  },
  showBack: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['retry'])

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