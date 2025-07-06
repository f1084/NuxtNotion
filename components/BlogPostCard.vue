<template>
  <article 
    class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
    @click="$emit('click', post.id)"
  >
    <!-- 文章封面 -->
    <div class="h-56 relative overflow-hidden">
      <!-- 如果有封面图片则显示，否则显示渐变背景 -->
      <img 
        v-if="getPostCover(post)"
        :src="getPostCover(post)"
        :alt="getPostTitle(post)"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        @error="handleImageError"
      />
      <div 
        v-else
        class="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative"
      >
        <!-- 装饰性图案 -->
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-4 left-4 w-16 h-16 bg-white rounded-full opacity-30"></div>
          <div class="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full opacity-20"></div>
          <div class="absolute top-1/2 right-1/4 w-8 h-8 bg-white rounded-full opacity-25"></div>
        </div>
      </div>
      
      <!-- 渐变遮罩层 -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
      
      <!-- 日期和阅读时间标签 -->
      <div class="absolute top-4 left-4">
        <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-lg">
          {{ formatDate(post.created_time) }}
        </div>
      </div>
      
      <!-- 标签预览 -->
      <div class="absolute top-4 right-4">
        <div v-if="getPostTags(post).length > 0" class="bg-blue-500/90 backdrop-blur-md rounded-xl px-3 py-2 text-xs font-medium text-white shadow-lg">
          {{ getPostTags(post)[0] }}
        </div>
      </div>
    </div>
    
    <!-- 文章内容 -->
    <div class="p-6 relative">
      <!-- 背景装饰 -->
      <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
      
      <div class="relative z-10">
        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
          {{ getPostTitle(post) }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {{ getPostExcerpt(post) }}
        </p>
        
        <!-- 文章标签 -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span 
            v-for="(tag, index) in getPostTags(post).slice(0, 3)" 
            :key="tag"
            :class="[
              'px-3 py-1 text-xs font-medium rounded-full transition-all duration-300',
              index === 0 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
              index === 1 ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' :
              'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
            ]"
          >
            {{ tag }}
          </span>
          <span v-if="getPostTags(post).length > 3" class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
            +{{ getPostTags(post).length - 3 }}
          </span>
        </div>
        
        <!-- 阅读更多按钮 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
            <span>{{ readMoreText }}</span>
            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
          
          <!-- 阅读时间估算 -->
          <div class="text-xs text-gray-500 dark:text-gray-500 flex items-center">
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ getReadingTime(post) }} 分钟
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  readMoreText: {
    type: String,
    default: '阅读更多'
  }
})

defineEmits(['click'])

// 安全地获取文章标题的函数
const getPostTitle = (post) => {
  try {
    // 尝试多种可能的标题字段
    if (post.properties?.Name?.title?.[0]?.plain_text) {
      return post.properties.Name.title[0].plain_text
    }
    if (post.properties?.Title?.title?.[0]?.plain_text) {
      return post.properties.Title.title[0].plain_text
    }
    if (post.properties?.title?.title?.[0]?.plain_text) {
      return post.properties.title.title[0].plain_text
    }
    // 如果都没有，返回默认标题
    return '无标题文章'
  } catch (e) {
    console.error('Error getting post title:', e)
    return '无标题文章'
  }
}

// 获取文章摘要
const getPostExcerpt = (post) => {
  try {
    // 尝试从不同字段获取摘要
    if (post.properties?.Summary?.rich_text?.[0]?.plain_text) {
      return post.properties.Summary.rich_text[0].plain_text
    }
    if (post.properties?.Excerpt?.rich_text?.[0]?.plain_text) {
      return post.properties.Excerpt.rich_text[0].plain_text
    }
    if (post.properties?.Description?.rich_text?.[0]?.plain_text) {
      return post.properties.Description.rich_text[0].plain_text
    }
    // 默认摘要
    return '这是一篇精彩的文章，点击阅读更多内容...'
  } catch (e) {
    return '这是一篇精彩的文章，点击阅读更多内容...'
  }
}

// 获取文章封面图片
const getPostCover = (post) => {
  try {
    // 尝试从不同字段获取封面图片
    if (post.properties?.Cover?.url) {
      return post.properties.Cover.url
    }
    if (post.properties?.Cover?.files?.[0]?.external?.url) {
      return post.properties.Cover.files[0].external.url
    }
    if (post.properties?.Image?.files?.[0]?.file?.url) {
      return post.properties.Image.files[0].file.url
    }
    if (post.properties?.Image?.files?.[0]?.external?.url) {
      return post.properties.Image.files[0].external.url
    }
    if (post.properties?.Thumbnail?.files?.[0]?.file?.url) {
      return post.properties.Thumbnail.files[0].file.url
    }
    if (post.properties?.Thumbnail?.files?.[0]?.external?.url) {
      return post.properties.Thumbnail.files[0].external.url
    }
    // 如果没有找到图片，返回null
    return null
  } catch (e) {
    console.error('Error getting post cover:', e)
    return null
  }
}

// 处理图片加载错误
const handleImageError = (event) => {
  console.warn('Failed to load cover image:', event.target.src)
  // 可以在这里设置默认图片或隐藏图片
  event.target.style.display = 'none'
}

// 获取文章标签
const getPostTags = (post) => {
  try {
    // 尝试从不同字段获取标签
    if (post.properties?.Tags?.multi_select) {
      return post.properties.Tags.multi_select.map(tag => tag.name)
    }
    if (post.properties?.Category?.select?.name) {
      return [post.properties.Category.select.name]
    }
    if (post.properties?.Type?.select?.name) {
      return [post.properties.Type.select.name]
    }
    return []
  } catch (e) {
    return []
  }
}

// 格式化日期
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric'
    })
  } catch (e) {
    return '未知日期'
  }
}

// 估算阅读时间
const getReadingTime = (post) => {
  try {
    const content = getPostExcerpt(post)
    const wordsPerMinute = 200 // 中文阅读速度约200字/分钟
    const wordCount = content.length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)
    return Math.max(1, readingTime) // 最少1分钟
  } catch (e) {
    return 3 // 默认3分钟
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>