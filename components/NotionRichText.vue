<template>
  <span>
    <template v-for="(text, index) in richText" :key="index">
      <!-- 链接 -->
      <a 
        v-if="text.href"
        :href="text.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:text-blue-700 underline"
        :class="getTextClasses(text.annotations)"
      >
        {{ text.plain_text }}
      </a>
      
      <!-- 普通文本 -->
      <span 
        v-else
        :class="getTextClasses(text.annotations)"
      >
        {{ text.plain_text }}
      </span>
    </template>
  </span>
</template>

<script setup>
defineProps({
  richText: {
    type: Array,
    default: () => []
  }
})

// 根据注释生成CSS类
const getTextClasses = (annotations) => {
  if (!annotations) return ''
  
  const classes = []
  
  if (annotations.bold) {
    classes.push('font-bold')
  }
  
  if (annotations.italic) {
    classes.push('italic')
  }
  
  if (annotations.strikethrough) {
    classes.push('line-through')
  }
  
  if (annotations.underline) {
    classes.push('underline')
  }
  
  if (annotations.code) {
    classes.push('bg-gray-100', 'px-1', 'py-0.5', 'rounded', 'text-sm', 'font-mono')
  }
  
  // 颜色处理
  if (annotations.color && annotations.color !== 'default') {
    const colorClass = getColorClass(annotations.color)
    if (colorClass) {
      classes.push(colorClass)
    }
  }
  
  return classes.join(' ')
}

// 颜色映射
const getColorClass = (color) => {
  const colorMap = {
    'gray': 'text-gray-600',
    'brown': 'text-yellow-800',
    'orange': 'text-orange-600',
    'yellow': 'text-yellow-600',
    'green': 'text-green-600',
    'blue': 'text-blue-600',
    'purple': 'text-purple-600',
    'pink': 'text-pink-600',
    'red': 'text-red-600',
    'gray_background': 'bg-gray-100 px-1 rounded',
    'brown_background': 'bg-yellow-100 px-1 rounded',
    'orange_background': 'bg-orange-100 px-1 rounded',
    'yellow_background': 'bg-yellow-100 px-1 rounded',
    'green_background': 'bg-green-100 px-1 rounded',
    'blue_background': 'bg-blue-100 px-1 rounded',
    'purple_background': 'bg-purple-100 px-1 rounded',
    'pink_background': 'bg-pink-100 px-1 rounded',
    'red_background': 'bg-red-100 px-1 rounded'
  }
  
  return colorMap[color] || ''
}
</script>

<style scoped>
/* 确保内联代码的样式正确 */
.font-mono {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}
</style>