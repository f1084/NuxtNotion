<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <!-- 英雄区域 -->
    <HeroSection @primary-action="scrollToSection('blog')" @secondary-action="scrollToSection('features')" />

    <!-- 特色功能区域 -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
            开始构建博客网站所需的一切</h2>
          <p class="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Nuxt 3 提供了最佳的开发体验，集成了最先进的工具和创新功能。
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard title="自带框架" description="使用您自己的框架构建。预设 Web 组件，或者直接使用 HTML + JavaScript。" icon="code"
            color="blue" />
          <FeatureCard title="100% 静态 HTML，无 JS" description="Nuxt 渲染器将页面转换为静态 HTML，从您的最终构建中默认删除所有 JavaScript。"
            icon="lightning" color="green" />
          <FeatureCard title="按需组件" description="需要一些 JS？Nuxt 可以自动为您的交互式组件生成 JavaScript。" icon="component"
            color="purple" />
          <FeatureCard title="广泛集成" description="Nuxt 支持 TypeScript、Scoped CSS、CSS 模块、Sass、Tailwind、Markdown 等。"
            icon="heart" color="red" />
          <FeatureCard title="SEO 优化" description="自动站点地图、RSS 源、分页和集合让 SEO 变得简单，只需一行代码。" icon="lightbulb"
            color="yellow" />
          <FeatureCard title="社区" description="Nuxt 是一个开源项目，由数百名贡献者推动，使数千个创新项目成为可能。" icon="users" color="indigo" />
        </div>
      </div>
    </section>

    <!-- 技术栈展示 -->
    <TechStack />

    <!-- 博客文章区域 -->
    <section id="blog" class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">最新文章</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">分享技术见解、生活感悟和创意想法</p>
        </div>

        <!-- 加载状态 -->
        <div v-if="pending" class="flex justify-center items-center py-16">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
          <span class="ml-3 text-gray-600 dark:text-gray-300">正在加载文章...</span>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="text-center py-16">
          <div
            class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
            <svg class="w-12 h-12 text-red-500 dark:text-red-400 mx-auto mb-4" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">加载失败</h3>
            <p class="text-red-600 dark:text-red-300">{{ error.message }}</p>
          </div>
        </div>

        <!-- 文章列表 -->
        <div v-else-if="posts && posts.length > 0">
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard v-for="post in posts" :key="post.id" :post="post" @click="navigateToPost" />
          </div>

          <!-- 分页或加载更多按钮 -->
          <div class="text-center mt-12">
            <AppButton variant="primary" size="large" class="shadow-md hover:shadow-lg" @click="navigateToArticles">
              更多文章
            </AppButton>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-16">
          <svg class="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
            </path>
          </svg>
          <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">暂无文章</h3>
          <p class="text-gray-500 dark:text-gray-400">还没有发布任何文章，请稍后再来查看。</p>
        </div>
      </div>
    </section>

    <!-- CTA 区域 -->
    <CTASection title="准备好开始您的博客之旅了吗？" description="使用 NuxtNotion，让您的博客网站用户体验更加友好。" primary-button-text="浏览文章"
      secondary-button-text="了解更多" @primary-click="scrollToSection('blog')" @secondary-click="() => { }" />
  </div>
</template>

<script setup>
const { data: posts, pending, error } = await useFetch('/api/posts/latest')

const navigateToPost = (postId) => {
  navigateTo(`/post/${postId}`)
}

const navigateToArticles = () => {
  navigateTo('/articles')
}

// 平滑滚动到指定区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>