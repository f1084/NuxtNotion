<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-all duration-500">
    <!-- 背景装饰 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 dark:from-blue-600/5 dark:to-purple-600/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <!-- 返回按钮 -->
      <div class="mb-6 sm:mb-8 animate-fade-in-up">
        <button 
          @click="$router.back()" 
          class="group flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:bg-blue-50/80 dark:hover:bg-blue-900/30 px-4 py-3 rounded-xl backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-sm sm:text-base font-medium">返回文章列表</span>
        </button>
      </div>

      <!-- 加载状态 -->
      <AppLoading v-if="pending" message="正在加载文章..." size="large" />

      <!-- 错误状态 -->
      <AppError 
        v-else-if="error" 
        title="文章加载失败"
        :message="error.message || '抱歉，无法加载文章内容，请稍后重试。'"
        :details="error.stack"
        size="large"
        @retry="refresh()"
      />

      <!-- 文章内容区域 -->
      <div v-else-if="post" class="flex gap-8 animate-fade-in-up" style="animation-delay: 0.2s;">
        <!-- 主文章内容 -->
        <article class="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl dark:shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
        <!-- 文章头部 -->
        <header class="mb-6 sm:mb-8">
          <!-- 文章封面 -->
          <div class="h-48 sm:h-64 md:h-80 lg:h-96 relative overflow-hidden rounded-t-2xl group">
            <!-- 有封面图片时显示图片 -->
            <div v-if="getPostCover(post)" class="absolute inset-0">
              <img 
                :src="getPostCover(post)" 
                :alt="getPostTitle(post)"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                @error="onImageError"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
            <!-- 没有封面图片时显示渐变背景 -->
            <div v-else class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
            
            <!-- 标题覆盖层 -->
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <div class="text-center space-y-4">
                <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl animate-fade-in-up" style="animation-delay: 0.5s;">
                  {{ getPostTitle(post) }}
                </h1>
              </div>
            </div>
          </div>

          <div class="p-4 sm:p-6 lg:p-8">
            <!-- 文章元信息 -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 animate-fade-in-up" style="animation-delay: 0.9s;">
              <div class="flex items-center group">
                <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span class="text-sm sm:text-base font-medium">{{ formatDate(post.created_time) }}</span>
              </div>
              <div class="flex items-center group">
                <div class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 transition-colors duration-300">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span class="text-sm sm:text-base font-medium">约 {{ estimatedReadTime }} 分钟阅读</span>
              </div>
            </div>

            <!-- 文章标签 -->
            <div class="flex flex-wrap gap-3 mb-6 sm:mb-8 animate-fade-in-up" style="animation-delay: 1.1s;">
              <span 
                v-for="(tag, index) in getPostTags(post)" 
                :key="tag"
                class="group relative px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm rounded-full border border-blue-200/50 dark:border-blue-600/30 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
                :style="`animation-delay: ${1.2 + index * 0.1}s;`"
              >
                <span class="relative z-10 font-medium">{{ tag }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </div>
          </div>
        </header>

        <!-- 文章正文 -->
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="prose prose-lg sm:prose-xl lg:prose-2xl max-w-none dark:prose-invert animate-fade-in-up reading-optimized text-left" style="animation-delay: 1.3s;">
            <!-- 渲染 Notion 页面内容 -->
            <NotionContent :blocks="post.blocks || []" v-if="post.blocks && post.blocks.length > 0" />
            
            <!-- 如果没有内容块，显示摘要或占位内容 -->
            <div v-else class="space-y-8">
              <!-- 显示摘要（如果有） -->
              <div v-if="getPostExcerpt(post) !== '这是一篇精彩的文章...'" class="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm animate-fade-in-up" style="animation-delay: 1.5s;">
                <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div class="flex items-center mb-4">
                  <div class="p-2 bg-blue-500/10 dark:bg-blue-400/20 rounded-lg mr-3">
                    <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">文章摘要</h3>
                </div>
                <p class="text-blue-700 dark:text-blue-300 leading-relaxed text-base">{{ getPostExcerpt(post) }}</p>
              </div>
              
              <!-- 占位内容 -->
              <div class="relative bg-gradient-to-br from-gray-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/20 border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm animate-fade-in-up" style="animation-delay: 1.7s;">
                <div class="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div class="relative">
                  <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-400/20 to-blue-400/20 dark:from-gray-600/20 dark:to-blue-600/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                    <svg class="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-300 mb-3">文章内容</h3>
                  <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6">此文章暂无详细内容</p>
                  <div class="text-xs sm:text-sm text-gray-400 dark:text-gray-500 space-y-2 mb-6">
                    <p>您可以在 Notion 中为此页面添加内容</p>
                    <p>添加内容后重新生成数据即可显示</p>
                  </div>
                  <a 
                    :href="post.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  >
                    <svg class="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    在 Notion 中查看
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 文章底部 -->
        <footer class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/50 dark:border-gray-700/50 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          <!-- Gitalk评论组件 -->
          <div class="max-w-4xl mx-auto">
            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                评论讨论
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                欢迎在下方留言讨论，分享你的想法和见解
              </p>
            </div>
            <GitalkComment 
              v-if="post" 
              :id="route.params.id" 
              :title="post.title" 
            />
          </div>
        </footer>
        </article>

        <!-- 右侧大纲 -->
        <aside class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-24">
            <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl dark:shadow-2xl border border-white/20 dark:border-gray-700/50 p-6">
              <div class="flex items-center mb-4">
                <div class="p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">文章大纲</h3>
              </div>
              
              <nav v-if="headings.length > 0" class="space-y-2">
                <a 
                  v-for="heading in headings" 
                  :key="heading.id"
                  @click="scrollToHeading(heading.id)"
                  class="block py-2 px-3 text-sm rounded-lg transition-all duration-200 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-l-4 hover:border-blue-500 dark:hover:border-blue-400"
                  :class="{
                    'text-gray-700 dark:text-gray-300': heading.level === 1,
                    'text-gray-600 dark:text-gray-400 ml-4': heading.level === 2,
                    'text-gray-500 dark:text-gray-500 ml-8': heading.level === 3
                  }"
                >
                  {{ heading.text }}
                </a>
              </nav>
              
              <div v-else class="text-center py-8 animate-fade-in-up">
                <div class="w-12 h-12 bg-gradient-to-br from-gray-400/20 to-blue-400/20 dark:from-gray-600/20 dark:to-blue-600/20 rounded-xl mx-auto mb-3 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default">
                  <svg class="w-6 h-6 text-gray-400 dark:text-gray-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up" style="animation-delay: 0.1s;">暂无标题</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <!-- 文章不存在 -->
      <div v-else-if="!post && !pending && !error" class="text-center py-16 animate-fade-in-up">
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl dark:shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 sm:p-12 max-w-md mx-auto">
          <div class="w-20 h-20 bg-gradient-to-br from-red-400/20 to-pink-400/20 dark:from-red-500/20 dark:to-pink-500/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg class="w-10 h-10 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">文章不存在</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">抱歉，您访问的文章不存在或已被删除。</p>
          <button 
            @click="$router.back()"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            返回上一页
          </button>
        </div>
      </div>

      <!-- 浮动操作按钮组 -->
      <div v-show="!showOutline" class="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        

        <!-- 分享按钮 -->
        <button 
          @click="toggleSharePanel"
          class="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="分享文章"
        >
          <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-45': showSharePanel }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
          </svg>
        </button>

        <!-- 移动端大纲按钮 -->
        <button 
          @click="toggleOutline"
          class="lg:hidden w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="文章大纲"
        >
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
          </svg>
        </button>

        <!-- 返回顶部按钮 -->
        <button 
          @click="scrollToTop"
          class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="返回顶部"
        >
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>

      <!-- 移动端大纲悬浮面板 -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-250 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="showOutline"
          class="lg:hidden fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
          @click="toggleOutline"
        >
          <Transition
            enter-active-class="transition-all duration-400 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 translate-y-full scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-full scale-95"
          >
            <div 
              v-if="showOutline"
              class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl shadow-2xl max-h-[70vh] overflow-hidden transform"
              @click.stop
            >
          <!-- 拖拽指示器 -->
            <div class="flex justify-center pt-3 pb-2">
              <div class="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-200"></div>
            </div>
            
            <div class="px-6 pb-6">
              <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <div class="p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">文章大纲</h3>
              </div>
              <button 
                @click="toggleOutline"
                class="p-2 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 hover:rotate-90"
              >
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div class="max-h-96 overflow-y-auto">
              <nav v-if="headings.length > 0" class="space-y-2 animate-fade-in-up" style="animation-delay: 0.2s;">
                <a 
                  v-for="heading in headings" 
                  :key="heading.id"
                  @click="scrollToHeading(heading.id); toggleOutline()"
                  class="block py-3 px-4 text-sm rounded-lg transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:border-l-4 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transform"
                  :class="{
                    'text-gray-700 dark:text-gray-300 font-medium hover:text-blue-700 dark:hover:text-blue-300': heading.level === 1,
                    'text-gray-600 dark:text-gray-400 ml-4 hover:text-blue-600 dark:hover:text-blue-400': heading.level === 2,
                    'text-gray-500 dark:text-gray-500 ml-8 hover:text-blue-500 dark:hover:text-blue-500': heading.level === 3
                  }"
                >
                  <span class="transition-all duration-200 hover:translate-x-1">{{ heading.text }}</span>
                </a>
              </nav>
              
              <div v-else class="text-center py-8">
                <div class="w-12 h-12 bg-gradient-to-br from-gray-400/20 to-blue-400/20 dark:from-gray-600/20 dark:to-blue-600/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400">暂无标题</p>
              </div>
            </div>
            </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  </div>

  <!-- 分享面板遮罩 -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="showSharePanel"
      @click="closeSharePanel"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <!-- 分享面板 -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-4"
      >
        <div 
          v-if="showSharePanel"
          @click.stop
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden transform"
        >
          <!-- 面板头部 -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">分享文章</h3>
            <button 
              @click="closeSharePanel"
              class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors transform hover:scale-110 active:scale-95"
            >
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- 面板内容滚动区域 -->
          <div class="max-h-[calc(80vh-80px)] overflow-y-auto">
            <!-- 文章信息 -->
      <div class="p-6">
        <div class="flex space-x-4">
          <!-- 文章封面 -->
          <div class="flex-shrink-0">
            <img 
              v-if="getPostCover(post)"
              :src="getPostCover(post)"
              :alt="getPostTitle(post)"
              class="w-16 h-16 object-cover rounded-lg"
              @error="onImageError"
            >
            <div 
              v-else
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
          </div>
          
          <!-- 文章信息 -->
          <div class="flex-1 min-w-0">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
              {{ getPostTitle(post) }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {{ getPostExcerpt(post) }}
            </p>
          </div>
        </div>
      </div>

      <!-- 链接复制区域 -->
      <div class="p-6 border-b border-gray-200 dark:border-gray-700">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          文章链接
        </label>
        <div class="flex space-x-2">
          <input 
            ref="linkInput"
            :value="currentUrl"
            readonly
            class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <button 
             @click="copyLinkFromPanel"
             class="px-4 py-2 text-white rounded-lg text-sm font-medium flex items-center space-x-1 transition-all duration-200 transform hover:scale-105 active:scale-95"
             :class="copySuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'"
           >
             <svg v-if="!copySuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
             </svg>
             <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
             </svg>
             <span>{{ copySuccess ? '已复制' : '复制' }}</span>
           </button>
        </div>
        <p v-if="copySuccess" class="text-sm text-green-600 dark:text-green-400 mt-2">
          ✓ 链接已复制到剪贴板
        </p>
      </div>

            <!-- 社交媒体分享按钮 -->
            <div class="p-6">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                分享到社交平台
              </label>
              <div class="grid grid-cols-2 gap-3">
                <button 
                   @click="shareToTwitter"
                   class="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                 >
                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                   </svg>
                   <span class="text-sm font-medium">Twitter</span>
                 </button>
                
                <button 
                   @click="shareToFacebook"
                   class="flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                 >
                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                   </svg>
                   <span class="text-sm font-medium">Facebook</span>
                 </button>
                 
               </div>
             </div>
           </div>
         </div>
       </Transition>
     </div>
   </Transition>
</template>

<script setup>
const route = useRoute()
const postId = route.params.id

// 获取文章详情 - 支持静态生成
const { data: post, pending, error } = await useNotionPost(postId)

// 估算阅读时间（基于字数）
const estimatedReadTime = computed(() => {
  if (!post.value) return 0
  // 假设平均阅读速度为每分钟 200 字
  const wordCount = getPostTitle(post.value).length + getPostExcerpt(post.value).length
  return Math.max(1, Math.ceil(wordCount / 200))
})

// 提取文章标题用于大纲
const headings = computed(() => {
  if (!post.value?.blocks) return []
  
  return post.value.blocks
    .filter(block => ['heading_1', 'heading_2', 'heading_3'].includes(block.type))
    .map(block => {
      const level = parseInt(block.type.split('_')[1])
      const text = block[block.type]?.rich_text?.[0]?.plain_text || '无标题'
      return {
        id: `heading-${block.id}`,
        level,
        text,
        type: block.type
      }
    })
})

// 滚动到指定标题
const scrollToHeading = (headingId) => {
  const element = document.getElementById(headingId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 复用的辅助函数
const getPostTitle = (post) => {
  try {
    if (post.properties?.Name?.title?.[0]?.plain_text) {
      return post.properties.Name.title[0].plain_text
    }
    if (post.properties?.Title?.title?.[0]?.plain_text) {
      return post.properties.Title.title[0].plain_text
    }
    if (post.properties?.title?.title?.[0]?.plain_text) {
      return post.properties.title.title[0].plain_text
    }
    return '无标题文章'
  } catch (e) {
    return '无标题文章'
  }
}

const getPostExcerpt = (post) => {
  try {
    if (post.properties?.Summary?.rich_text?.[0]?.plain_text) {
      return post.properties.Summary.rich_text[0].plain_text
    }
    if (post.properties?.Excerpt?.rich_text?.[0]?.plain_text) {
      return post.properties.Excerpt.rich_text[0].plain_text
    }
    if (post.properties?.Description?.rich_text?.[0]?.plain_text) {
      return post.properties.Description.rich_text[0].plain_text
    }
    return '这是一篇精彩的文章...'
  } catch (e) {
    return '这是一篇精彩的文章...'
  }
}

const getPostTags = (post) => {
  try {
    if (post.properties?.Tags?.multi_select) {
      return post.properties.Tags.multi_select.map(tag => tag.name)
    }
    if (post.properties?.Category?.select?.name) {
      return [post.properties.Category.select.name]
    }
    if (post.properties?.Type?.select?.name) {
      return [post.properties.Type.select.name]
    }
    return ['技术']
  } catch (e) {
    return ['技术']
  }
}

const getPostCover = (post) => {
  try {
    // 优先使用 properties.Cover.url
    if (post.properties?.Cover?.url) {
      return post.properties.Cover.url
    }
    // 其次使用 cover 字段
    if (post.cover?.external?.url) {
      return post.cover.external.url
    }
    if (post.cover?.file?.url) {
      return post.cover.file.url
    }
    return null
  } catch (e) {
    return null
  }
}

// 图片加载错误处理
const onImageError = (event) => {
  console.warn('封面图片加载失败:', event.target.src)
  // 隐藏图片容器，显示渐变背景
  event.target.parentElement.style.display = 'none'
}

const formatDate = (dateString) => {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (e) {
    return '未知日期'
  }
}

// 分享功能
const shareToTwitter = () => {
  if (!post.value) return
  const title = getPostTitle(post.value)
  const url = window.location.href
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  window.open(twitterUrl, '_blank')
  closeSharePanel()
}

const shareToFacebook = () => {
  if (!post.value) return
  const url = window.location.href
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  window.open(facebookUrl, '_blank')
  closeSharePanel()
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    // 这里可以添加一个提示消息
    alert('链接已复制到剪贴板！')
  } catch (err) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = window.location.href
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('链接已复制到剪贴板！')
  }
}

// 浮动按钮状态
const showSharePanel = ref(false)
const showOutline = ref(false)
const copySuccess = ref(false)
const currentUrl = ref('')

// 切换分享面板
const toggleSharePanel = () => {
  showSharePanel.value = !showSharePanel.value
  if (showSharePanel.value) {
    showOutline.value = false
    // 设置当前URL
    currentUrl.value = window.location.href
  }
}

// 关闭分享面板
const closeSharePanel = () => {
  showSharePanel.value = false
  copySuccess.value = false
}

// 切换大纲面板
const toggleOutline = () => {
  showOutline.value = !showOutline.value
  if (showOutline.value) {
    showSharePanel.value = false
  }
}

// 从面板复制链接
const copyLinkFromPanel = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 3000)
  } catch (err) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = currentUrl.value
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 3000)
  }
}

// 分享到微博
const shareToWeibo = () => {
  if (!post.value) return
  const title = getPostTitle(post.value)
  const url = window.location.href
  const weiboUrl = `https://service.weibo.com/share/share.php?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  window.open(weiboUrl, '_blank')
  closeSharePanel()
}

// 分享到QQ空间
const shareToQQ = () => {
  if (!post.value) return
  const title = getPostTitle(post.value)
  const url = window.location.href
  const summary = getPostExcerpt(post.value)
  const qqUrl = `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`
  window.open(qqUrl, '_blank')
  closeSharePanel()
}

// 返回顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 初始化当前URL和键盘事件监听
onMounted(() => {
  currentUrl.value = window.location.href
  
  // 添加键盘事件监听
  const handleKeydown = (event) => {
    if (event.key === 'Escape' && showSharePanel.value) {
      closeSharePanel()
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})

// SEO 元数据
useHead({
  title: computed(() => post.value ? getPostTitle(post.value) : '文章详情'),
  meta: [
    {
      name: 'description',
      content: computed(() => post.value ? getPostExcerpt(post.value) : '博客文章详情页面')
    }
  ]
})

// 监听滚动事件，自动关闭分享面板
if (process.client) {
  onMounted(() => {
    const handleScroll = () => {
      if (showSharePanel.value) {
        showSharePanel.value = false
      }
    }
    window.addEventListener('scroll', handleScroll)
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  })
}
</script>

<style scoped>
/* 动画定义 */
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

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
  background-size: 200% 200%;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* 阅读优化样式 */
.reading-optimized {
  font-family: 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  line-height: 1.8;
  letter-spacing: 0.01em;
}

/* Prose 样式 - 优化阅读体验 */
.prose {
  @apply text-gray-800;
  line-height: 1.8;
  font-size: 1.125rem;
  max-width: 75ch;
  margin: 0 auto;
}

.dark .prose {
  @apply text-gray-100;
}

/* 标题样式 */
.prose h1 {
  @apply text-gray-900 font-bold text-3xl sm:text-4xl mb-8 mt-12;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.dark .prose h1 {
  @apply text-white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.prose h2 {
  @apply text-gray-900 font-bold text-2xl sm:text-3xl mb-6 mt-10;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.dark .prose h2 {
  @apply text-gray-50;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.prose h3 {
  @apply text-gray-900 font-semibold text-xl sm:text-2xl mb-5 mt-8;
  line-height: 1.4;
}

.dark .prose h3 {
  @apply text-gray-100;
}

.prose h4 {
  @apply text-gray-900 font-semibold text-lg sm:text-xl mb-4 mt-6;
  line-height: 1.4;
}

.dark .prose h4 {
  @apply text-gray-100;
}

.prose h5,
.prose h6 {
  @apply text-gray-900 font-semibold text-base sm:text-lg mb-3 mt-5;
  line-height: 1.5;
}

.dark .prose h5,
.dark .prose h6 {
  @apply text-gray-100;
}

/* 段落样式 */
.prose p {
  @apply mb-6 text-gray-800;
  line-height: 1.8;
  text-align: justify;
  text-justify: inter-ideograph;
}

.dark .prose p {
  @apply text-gray-100;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 链接样式 */
.prose a {
  @apply text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300;
  text-decoration: underline;
  text-decoration-color: rgba(59, 130, 246, 0.3);
  text-underline-offset: 3px;
  transition: all 0.2s ease;
}

.prose a:hover {
  text-decoration-color: currentColor;
  text-decoration-thickness: 2px;
}

/* 列表样式 */
.prose ul,
.prose ol {
  @apply ml-6 mb-6 space-y-2;
}

.prose li {
  @apply text-gray-800;
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.dark .prose li {
  @apply text-gray-100;
}

.prose ul > li {
  position: relative;
}

.prose ul > li::before {
  content: '';
  position: absolute;
  left: -1.5rem;
  top: 0.7rem;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
}

/* 引用样式 */
.prose blockquote {
  @apply border-l-4 border-blue-500 pl-6 pr-4 py-4 my-8;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  border-radius: 0 8px 8px 0;
  font-style: italic;
  font-size: 1.1em;
  line-height: 1.7;
  color: rgb(75, 85, 99);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.dark .prose blockquote {
  @apply border-l-4 border-blue-300;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6));
  color: rgb(226, 232, 240);
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 代码样式 */
.prose code {
  @apply bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md;
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.9em;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark .prose code {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.prose pre {
  @apply bg-gray-900 dark:bg-gray-950 text-white p-6 rounded-xl overflow-x-auto my-8;
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.95em;
  line-height: 1.6;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.prose pre code {
  @apply bg-transparent border-0 p-0 text-inherit;
}

/* 图片样式 */
.prose img {
  @apply rounded-xl shadow-2xl my-8 mx-auto;
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.prose img:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* 表格样式 */
.prose table {
  @apply border-collapse my-8 w-full;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.prose th,
.prose td {
  @apply border-0 px-6 py-4 text-left;
}

.prose th {
  @apply bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 font-semibold text-gray-900 dark:text-gray-100;
  font-size: 0.95em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.prose td {
  @apply bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700;
  line-height: 1.6;
}

.prose tbody tr:hover td {
  @apply bg-gray-50 dark:bg-gray-800;
}

/* 强调文本样式 */
.prose strong {
  @apply text-gray-900 font-semibold;
  font-weight: 600;
}

.dark .prose strong {
  @apply text-white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.prose em {
  @apply text-gray-700;
  font-style: italic;
}

.dark .prose em {
  @apply text-gray-200;
}

/* 分隔线样式 */
.prose hr {
  @apply border-0 my-12;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

.dark .prose hr {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
}

/* 首字母大写效果 */
.prose p:first-of-type::first-letter {
  @apply text-4xl font-bold text-blue-600 dark:text-blue-400 float-left mr-2 mt-1;
  line-height: 1;
}

/* 选中文本样式 */
.prose ::selection {
  background: rgba(59, 130, 246, 0.2);
  color: inherit;
}

/* 焦点样式 */
.prose a:focus,
.prose button:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
  border-radius: 4px;
}

/* 响应式优化 */
@media (max-width: 640px) {
  .animate-fade-in-up {
    animation-duration: 0.6s;
  }
  
  .prose {
    font-size: 1rem;
    line-height: 1.7;
    max-width: 100%;
  }
  
  .prose h1 {
    @apply text-2xl mb-6 mt-8;
  }
  
  .prose h2 {
    @apply text-xl mb-5 mt-7;
  }
  
  .prose h3 {
    @apply text-lg mb-4 mt-6;
  }
  
  .prose p {
    @apply mb-5;
    text-align: left;
  }
  
  .prose blockquote {
    @apply pl-4 pr-3 py-3 my-6;
    font-size: 1em;
  }
  
  .prose pre {
    @apply p-4 my-6;
    font-size: 0.85em;
  }
  
  .prose img {
    @apply my-6;
  }
  
  .prose table {
    font-size: 0.9em;
  }
  
  .prose th,
  .prose td {
    @apply px-3 py-2;
  }
  
  /* 移动端禁用首字母大写效果 */
  .prose p:first-of-type::first-letter {
    @apply text-base font-normal float-none mr-0 mt-0;
    line-height: inherit;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .prose {
    font-size: 1.0625rem;
    max-width: 70ch;
  }
}

@media (min-width: 1025px) {
  .prose {
    font-size: 1.125rem;
    max-width: 75ch;
  }
}

/* 打印样式优化 */
@media print {
  .prose {
    font-size: 12pt;
    line-height: 1.6;
    color: black;
  }
  
  .prose h1,
  .prose h2,
  .prose h3,
  .prose h4,
  .prose h5,
  .prose h6 {
    color: black;
    page-break-after: avoid;
  }
  
  .prose p {
    orphans: 3;
    widows: 3;
  }
  
  .prose blockquote {
    page-break-inside: avoid;
  }
  
  .prose pre {
    page-break-inside: avoid;
    white-space: pre-wrap;
  }
  
  .prose img {
    max-width: 100%;
    page-break-inside: avoid;
  }
  
  .prose table {
    page-break-inside: avoid;
  }
}

/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  .prose {
    @apply text-black dark:text-white;
  }
  
  .prose a {
    @apply text-blue-700 dark:text-blue-300;
    text-decoration-thickness: 2px;
  }
  
  .prose code {
    @apply bg-gray-200 dark:bg-gray-700 border-2 border-gray-400 dark:border-gray-500;
  }
}

/* 减少动画偏好支持 */
@media (prefers-reduced-motion: reduce) {
  .prose img {
    transition: none;
  }
  
  .prose img:hover {
    transform: none;
  }
  
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
  }
}

/* 强制文章内容左对齐 */
.prose {
  text-align: left !important;
}

.prose p,
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6,
.prose li,
.prose blockquote {
  text-align: left !important;
}

/* 隐藏移动端大纲面板滚动条 */
.max-h-96.overflow-y-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.max-h-96.overflow-y-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* 文本截断样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 分享面板动画 */
.share-panel-enter-active,
.share-panel-leave-active {
  transition: all 0.3s ease;
}

.share-panel-enter-from,
.share-panel-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* 渐变动画 */
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* 弹性动画 */
@keyframes bounce-in {
  0% {
    transform: scale(0.3) translateY(100%);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) translateY(-10%);
  }
  70% {
    transform: scale(0.9) translateY(0%);
  }
  100% {
    transform: scale(1) translateY(0%);
    opacity: 1;
  }
}

.animate-bounce-in {
  animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 响应式布局优化 */
@media (max-width: 1024px) {
  .flex.gap-8 {
    @apply flex-col gap-4;
  }
  
  .w-64.flex-shrink-0 {
    @apply w-full;
  }
}
</style>