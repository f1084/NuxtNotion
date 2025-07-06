<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
    </div>
    
    <!-- 页面头部 -->
    <div class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
      <div class="container mx-auto px-4 py-20">
        <div class="text-center relative overflow-hidden">
        
          
          <!-- 主标题 -->
          <div class="relative group">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-8 tracking-tight leading-tight transform transition-all duration-700 group-hover:scale-105">
              <span class="inline-block animate-fade-in" style="animation-delay: 0.1s;">精</span>
              <span class="inline-block animate-fade-in" style="animation-delay: 0.2s;">选</span>
              <span class="inline-block animate-fade-in" style="animation-delay: 0.3s;">文</span>
              <span class="inline-block animate-fade-in" style="animation-delay: 0.4s;">章</span>
            </h1>
          </div>
          
          <!-- 副标题 -->
          <div class="relative">
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in" style="animation-delay: 0.6s;">
              <span class="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                探索前沿技术，分享开发智慧
              </span>
              <br class="hidden sm:block" />
              <span class="text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-2 block">
                与您一起成长的技术之旅
              </span>
            </p>
          </div>
          
          <!-- 搜索框 -->
          <SearchBox
             v-model="searchQuery"
             placeholder="搜索文章标题、内容或标签..."
             :show-stats="!!searchQuery"
             :result-count="filteredPosts.length"
             stats-prefix="找到"
             stats-suffix="篇文章"
           />
          

        </div>
      </div>
    </div>

    <!-- 文章列表 -->
    <div class="relative container mx-auto px-4 py-20">
      <!-- 加载状态 -->
      <AppLoading v-if="pending" />
      
      <!-- 错误状态 -->
      <AppError 
        v-else-if="error" 
        :message="error.message || '加载文章失败'"
        @retry="refresh()"
      />
      
      <!-- 文章列表内容 -->
      <div v-else>


        <!-- 文章网格 -->
        <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          <BlogPostCard
            v-for="(post, index) in displayedPosts"
            :key="post.id"
            :post="post"
            @click="navigateToPost(post.id)"
            class="cursor-pointer transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          />
        </div>

        <!-- 无文章状态 -->
        <div v-else class="text-center py-16">
          <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">暂无文章</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6">{{ searchQuery ? '没有找到匹配的文章' : '还没有发布任何文章' }}</p>
          <AppButton 
            v-if="searchQuery"
            @click="clearSearch"
            variant="outline"
          >
            清除搜索
          </AppButton>
        </div>

        <!-- 加载更多按钮 -->
        <div v-if="filteredPosts.length > 0" class="mt-16 flex flex-col items-center space-y-4">
          <!-- 加载更多按钮 -->
          <div v-if="hasMoreToLoad" class="text-center">
            <AppButton
              @click="loadMore"
              :disabled="isLoadingMore"
              variant="primary"
              size="large"
              class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div v-if="isLoadingMore" class="flex items-center space-x-2">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>加载中...</span>
              </div>
              <div v-else class="flex items-center space-x-2">
                <span>加载更多</span>
                <span class="text-sm opacity-80">(还有 {{ remainingCount }} 篇)</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </AppButton>
          </div>
          
          <!-- 全部加载完成提示 -->
          <div v-else-if="allPostsLoaded && displayedPosts.length > postsPerPage" class="text-center py-8">
            <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 max-w-md mx-auto">
              <div class="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="font-medium">已加载全部文章</span>
              </div>
              <p class="text-sm text-green-500 dark:text-green-300 mt-2">
                共 {{ filteredPosts.length }} 篇文章
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBox from '~/components/SearchBox.vue'

// 页面元数据
useHead({
  title: '文章列表 - NotionBlog',
  meta: [
    { name: 'description', content: '浏览我们的技术文章，了解最新的开发技术和最佳实践' }
  ]
})

// 响应式数据
const searchQuery = ref('')
const currentPage = ref(1)
const postsPerPage = 6
const loadedPosts = ref([])
const isLoadingMore = ref(false)
const hasMorePosts = ref(true)
const allPostsLoaded = ref(false)

// 获取文章数据 - 支持静态生成
const { data: posts, pending, error, refresh } = await useNotionPosts()

// 计算属性
const filteredPosts = computed(() => {
  if (!posts.value) return []
  
  if (!searchQuery.value) {
    return posts.value
  }
  
  const query = searchQuery.value.toLowerCase()
  return posts.value.filter(post => {
    const title = post.properties?.title?.title?.[0]?.plain_text || ''
    const content = post.properties?.content?.rich_text?.[0]?.plain_text || ''
    const tags = post.properties?.tags?.multi_select?.map(tag => tag.name).join(' ') || ''
    
    return title.toLowerCase().includes(query) ||
           content.toLowerCase().includes(query) ||
           tags.toLowerCase().includes(query)
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage)
})

const displayedPosts = computed(() => {
  if (!filteredPosts.value) return []
  const totalToShow = currentPage.value * postsPerPage
  return filteredPosts.value.slice(0, totalToShow)
})

const hasMoreToLoad = computed(() => {
  if (!filteredPosts.value) return false
  return displayedPosts.value.length < filteredPosts.value.length
})

const remainingCount = computed(() => {
  if (!filteredPosts.value) return 0
  return filteredPosts.value.length - displayedPosts.value.length
})

// 方法
const navigateToPost = (postId) => {
  navigateTo(`/post/${postId}`)
}

const loadMore = async () => {
  if (isLoadingMore.value || !hasMoreToLoad.value) return
  
  isLoadingMore.value = true
  
  // 模拟加载延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  
  currentPage.value++
  isLoadingMore.value = false
  
  // 检查是否已加载完所有文章
  if (!hasMoreToLoad.value) {
    allPostsLoaded.value = true
  }
}

const clearSearch = () => {
  searchQuery.value = ''
}

// 监听搜索变化，重置页码
watch(searchQuery, () => {
  currentPage.value = 1
  allPostsLoaded.value = false
})
</script>

<style scoped>
/* 自定义样式 */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

/* 背景装饰动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* 渐变背景动画 */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>