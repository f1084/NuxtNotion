<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- 页面头部 -->
    <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            NuxtNotion 开发指南
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            了解如何使用 Notion API 构建现代化的博客系统，从基础概念到高级功能的完整指南
          </p>
        </div>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- 左侧：主要内容 -->
          <div class="flex-1 lg:w-3/4">
            <!-- 内容区域 -->
        <div class="space-y-12">
          <!-- Notion API 概述 -->
          <section id="overview" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Notion API 概述</h2>
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Notion 的 REST API 为开发者提供了与 Notion 工作区直接交互的能力。通过 API，您可以构建强大的集成应用，实现数据同步、内容管理和工作流自动化。
              </p>
              
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">核心功能包括：</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li class="flex items-start space-x-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span><strong>页面管理：</strong>创建、更新和检索页面内容</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span><strong>数据库操作：</strong>管理数据库、属性、条目和架构</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span><strong>用户管理：</strong>访问用户配置文件和权限</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span><strong>评论系统：</strong>处理页面和内联评论</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span><strong>内容搜索：</strong>在工作区内容中进行搜索</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span><strong>身份验证：</strong>使用 OAuth 2.0 保护集成安全</span>
                </li>
              </ul>
            </div>
          </section>

          <!-- 快速开始 -->
          <section id="getting-started" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">快速开始</h2>
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. 创建 Notion 集成</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                首先，您需要在 Notion 开发者平台创建一个集成应用，获取 API 密钥。
              </p>
              
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. 安装依赖</h3>
              <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <code class="text-sm text-gray-800 dark:text-gray-200">
                  npm install @notionhq/client
                </code>
              </div>
              
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. 基础配置</h3>
              <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})</code></pre>
              </div>
            </div>
          </section>

          <!-- 集成类型 -->
          <section id="integrations" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">集成类型</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">内部集成</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• 仅限单个工作区使用</li>
                  <li>• 适用于自定义工作流和自动化</li>
                  <li>• 工作区成员显式授权访问</li>
                  <li>• 无需 OAuth 流程</li>
                </ul>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3">公共集成</h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• 可在多个工作区使用</li>
                  <li>• 适用于广泛的用例</li>
                  <li>• 使用 OAuth 2.0 协议</li>
                  <li>• 需要 Notion 安全审查</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- 核心功能 -->
          <section id="core-features" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">核心功能</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">页面管理</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">创建、读取、更新页面内容和属性</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">数据库操作</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">查询、过滤、排序数据库记录</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">内容搜索</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm">在工作区中搜索页面和数据库</p>
              </div>
            </div>
          </section>

          <!-- 项目结构 -->
          <section id="project-structure" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">NuxtNotion 项目结构</h2>
            <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
              <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto"><code>NuxtNotion/
├── components/          # Vue 组件
│   ├── AppNavbar.vue   # 导航栏组件
│   ├── BlogPostCard.vue # 博客卡片组件
│   └── NotionContent.vue # Notion 内容渲染
├── pages/              # 页面路由
│   ├── index.vue       # 首页
│   ├── articles.vue    # 文章列表
│   ├── guide.vue       # 指南页面
│   └── post/[id].vue   # 文章详情
├── server/             # 服务端 API
│   ├── api/
│   │   ├── posts.js    # 文章 API
│   │   └── posts/latest.js # 最新文章 API
│   └── plugins/
│       └── notion.js   # Notion 客户端配置
├── composables/        # 组合式函数
│   └── useNotionData.js # Notion 数据处理
└── nuxt.config.js      # Nuxt 配置文件</code></pre>
            </div>
          </section>

          <!-- API 使用示例 -->
          <section id="api-usage" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">API 使用示例</h2>
            
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. 查询数据库</h3>
            <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
              <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto"><code>// server/api/posts.js
const response = await notion.databases.query({
  database_id: process.env.NOTION_DATABASE_ID,
  sorts: [
    {
      property: 'Created',
      direction: 'descending'
    }
  ],
  page_size: 6
})</code></pre>
            </div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. 获取页面内容</h3>
            <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
              <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto"><code>// 获取页面详情
const page = await notion.pages.retrieve({
  page_id: pageId
})

// 获取页面块内容
const blocks = await notion.blocks.children.list({
  block_id: pageId
})</code></pre>
            </div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. 数据处理</h3>
            <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto"><code>// composables/useNotionData.js
export function extractPlainText(richText) {
  return richText?.map(text => text.plain_text).join('') || ''
}

export function formatNotionDate(dateString) {
  return new Date(dateString).toLocaleDateString('zh-CN')
}</code></pre>
            </div>
          </section>

          <!-- 最佳实践 -->
          <section id="best-practices" class="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">最佳实践</h2>
            <div class="space-y-6">
              <div class="border-l-4 border-blue-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔒 安全性</h3>
                <ul class="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• 将 API 密钥存储在环境变量中</li>
                  <li>• 使用服务端 API 路由保护敏感操作</li>
                  <li>• 实施适当的错误处理和日志记录</li>
                </ul>
              </div>
              
              <div class="border-l-4 border-green-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">⚡ 性能优化</h3>
                <ul class="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• 使用分页减少单次请求的数据量</li>
                  <li>• 实施缓存策略减少 API 调用</li>
                  <li>• 使用 Nuxt 的 SSR 功能提升首屏加载速度</li>
                </ul>
              </div>
              
              <div class="border-l-4 border-purple-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">🎨 用户体验</h3>
                <ul class="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• 提供加载状态和错误处理</li>
                  <li>• 实现响应式设计适配各种设备</li>
                  <li>• 使用渐进式加载提升用户体验</li>
                </ul>
              </div>
            </div>
          </section>
            </div>

            <!-- 底部 CTA -->
            <div class="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
              <h2 class="text-2xl font-bold mb-4">开始构建您的 Notion 集成</h2>
              <p class="text-blue-100 mb-6">探索更多功能，创建属于您的个性化博客系统</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink 
                  to="/articles" 
                  class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  查看文章示例
                </NuxtLink>
                <a 
                  href="https://developers.notion.com/docs/getting-started" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  官方文档
                </a>
              </div>
            </div>
          </div>

          <!-- 右侧：目录导航 -->
          <div class="lg:w-1/4">
            <div class="sticky top-24">
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">目录</h2>
                <nav class="space-y-3">
                  <a href="#overview" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3">1. Notion API 概述</a>
                  <a href="#getting-started" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3">2. 快速开始</a>
                  <a href="#integrations" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3">3. 集成类型</a>
                  <a href="#core-features" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3">4. 核心功能</a>
                  <a href="#project-structure" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3">5. 项目结构</a>
                  <a href="#api-usage" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3">6. API 使用示例</a>
                  <a href="#best-practices" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1 border-l-2 border-transparent hover:border-blue-500 pl-3">7. 最佳实践</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: 'NuxtNotion 开发指南',
  meta: [
    {
      name: 'description',
      content: '了解如何使用 Notion API 构建现代化的博客系统，从基础概念到高级功能的完整指南'
    }
  ]
})
</script>

<style scoped>
/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 代码块样式优化 */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* 链接悬停效果 */
a[href^="#"] {
  scroll-margin-top: 100px;
}
</style>