<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="!to ? handleClick : undefined"
  >
    <!-- 加载状态 -->
    <div v-if="loading" class="flex items-center space-x-2">
      <div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      <span v-if="loadingText">{{ loadingText }}</span>
    </div>
    
    <!-- 正常状态 -->
    <div v-else class="flex items-center space-x-2">
      <!-- 左侧图标 -->
      <svg v-if="iconLeft" class="w-4 h-4" :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconLeft"></path>
      </svg>
      
      <!-- 按钮文本 -->
      <span><slot /></span>
      
      <!-- 右侧图标 -->
      <svg v-if="iconRight" class="w-4 h-4" :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconRight"></path>
      </svg>
    </div>
  </component>
</template>

<script setup>
const props = defineProps({
  // 按钮类型
  variant: {
    type: String,
    default: 'primary', // primary, secondary, outline, ghost, danger
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
  },
  
  // 按钮大小
  size: {
    type: String,
    default: 'medium', // small, medium, large
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  
  // 是否为块级按钮
  block: {
    type: Boolean,
    default: false
  },
  
  // 是否圆角
  rounded: {
    type: Boolean,
    default: false
  },
  
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  
  // 加载状态
  loading: {
    type: Boolean,
    default: false
  },
  
  // 加载文本
  loadingText: {
    type: String,
    default: ''
  },
  
  // 左侧图标路径
  iconLeft: {
    type: String,
    default: ''
  },
  
  // 右侧图标路径
  iconRight: {
    type: String,
    default: ''
  },
  
  // 链接地址（用于 NuxtLink）
  to: {
    type: [String, Object],
    default: null
  },
  
  // 外部链接地址
  href: {
    type: String,
    default: null
  },
  
  // 按钮类型（用于 button 元素）
  type: {
    type: String,
    default: 'button'
  }
})

const emit = defineEmits(['click'])

// 确定使用的标签
const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

// 按钮样式类
const buttonClasses = computed(() => {
  const classes = [
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50'
  ]
  
  // 大小样式
  switch (props.size) {
    case 'small':
      classes.push('px-3 py-1.5 text-sm')
      break
    case 'large':
      classes.push('px-8 py-3 text-lg')
      break
    default:
      classes.push('px-6 py-2 text-base')
  }
  
  // 圆角样式
  if (props.rounded) {
    classes.push('rounded-full')
  } else {
    classes.push('rounded-lg')
  }
  
  // 块级样式
  if (props.block) {
    classes.push('w-full')
  }
  
  // 变体样式
  switch (props.variant) {
    case 'primary':
      classes.push(
        'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        'disabled:bg-blue-300 disabled:cursor-not-allowed'
      )
      break
    case 'secondary':
      classes.push(
        'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        'disabled:bg-gray-300 disabled:cursor-not-allowed'
      )
      break
    case 'outline':
      classes.push(
        'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
        'disabled:border-blue-300 disabled:text-blue-300 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-blue-300'
      )
      break
    case 'ghost':
      classes.push(
        'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        'disabled:text-blue-300 disabled:cursor-not-allowed disabled:hover:bg-transparent'
      )
      break
    case 'danger':
      classes.push(
        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        'disabled:bg-red-300 disabled:cursor-not-allowed'
      )
      break
  }
  
  return classes.join(' ')
})

// 图标样式类
const iconClass = computed(() => {
  return props.size === 'small' ? 'w-3 h-3' : props.size === 'large' ? 'w-5 h-5' : 'w-4 h-4'
})

// 点击处理
const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    // 如果有 to 属性，让 NuxtLink 处理路由跳转
    if (props.to) {
      // 不阻止默认行为，让 NuxtLink 正常工作
      emit('click', event)
      return
    }
    emit('click', event)
  }
}
</script>