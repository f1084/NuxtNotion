<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
    <!-- 英雄区域 -->
    <div class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50">
      <div class="container mx-auto px-4 py-20">
        <div class="text-center relative overflow-hidden">
          
          <!-- 主标题 -->
          <div class="relative group">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-8 tracking-tight leading-tight transform transition-all duration-700 group-hover:scale-105">
              <span class="inline-block animate-fade-in" style="animation-delay: 0.1s;">关</span>
              <span class="inline-block animate-fade-in" style="animation-delay: 0.2s;">于</span>
              <span class="inline-block animate-fade-in" style="animation-delay: 0.3s;">Nuxt</span>
              <span class="inline-block animate-fade-in" style="animation-delay: 0.4s;">Notion</span>
            </h1>
          </div>
          
          <!-- 副标题 -->
          <div class="relative">
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in" style="animation-delay: 0.6s;">
              <span class="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                了解更多关于NuxtNotion的内容
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <!-- 博客介绍 -->
        <section class="relative mb-16 animate-fade-in" style="animation-delay: 0.8s;">
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl border border-white/20 dark:border-gray-700/30 p-8 md:p-12 transition-all duration-500 group">
            <div class="flex items-center mb-8">
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">关于NuxtNotion</h2>
            </div>
            <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              <p class="mb-6 text-lg">
                欢迎来到我们的技术博客！这是一个基于 <span class="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Nuxt3</span> 和 <span class="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Notion API</span> 构建的现代化博客平台。
                我们致力于分享最新的技术见解、开发经验和创新想法。
              </p>
              <p class="mb-6 text-lg">
                这个博客采用了最新的 Web 技术栈，包括 Nuxt3 框架、Tailwind CSS 样式系统，
                以及 Notion 作为内容管理系统。这种组合为我们提供了强大的性能、优雅的设计和便捷的内容阅读体验。
              </p>
              <p class="text-lg">
                无论您是开发者、设计师还是技术爱好者，我们希望这里的内容能够为您带来价值和启发。
              </p>
            </div>
          </div>
        </section>

        <!-- 技术栈 -->
        <section class="relative mb-16 animate-fade-in" style="animation-delay: 1.0s;">
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl border border-white/20 dark:border-gray-700/30 p-8 md:p-12 transition-all duration-500 group">
            <div class="flex items-center mb-10">
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">技术栈</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Nuxt 3 -->
              <div class="group/card relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-green-200/50 dark:border-green-700/30 hover:scale-105">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:rotate-12 transition-transform duration-300">
                    <span class="text-white font-bold text-lg">N3</span>
                  </div>
                  <h3 class="font-bold text-gray-800 dark:text-gray-200 text-lg">Nuxt 3</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400">现代 Vue.js 框架</p>
                <div class="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- Tailwind CSS -->
              <div class="group/card relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-200/50 dark:border-blue-700/30 hover:scale-105">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:rotate-12 transition-transform duration-300">
                    <span class="text-white font-bold text-sm">TW</span>
                  </div>
                  <h3 class="font-bold text-gray-800 dark:text-gray-200 text-lg">Tailwind CSS</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400">实用优先的 CSS 框架</p>
                <div class="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- Notion API -->
              <div class="group/card relative bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/30 hover:scale-105">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:rotate-12 transition-transform duration-300">
                    <span class="text-white font-bold text-lg">N</span>
                  </div>
                  <h3 class="font-bold text-gray-800 dark:text-gray-200 text-lg">Notion API</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400">内容管理系统</p>
                <div class="absolute top-2 right-2 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- JavaScript -->
              <div class="group/card relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-yellow-200/50 dark:border-yellow-700/30 hover:scale-105">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:rotate-12 transition-transform duration-300">
                    <span class="text-white font-bold text-sm">JS</span>
                  </div>
                  <h3 class="font-bold text-gray-800 dark:text-gray-200 text-lg">JavaScript</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400">现代 JavaScript</p>
                <div class="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- Vercel -->
              <div class="group/card relative bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-purple-200/50 dark:border-purple-700/30 hover:scale-105">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:rotate-12 transition-transform duration-300">
                    <span class="text-white font-bold text-lg">V</span>
                  </div>
                  <h3 class="font-bold text-gray-800 dark:text-gray-200 text-lg">Vercel</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400">部署平台</p>
                <div class="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- Git -->
              <div class="group/card relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-orange-200/50 dark:border-orange-700/30 hover:scale-105">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/card:rotate-12 transition-transform duration-300">
                    <span class="text-white font-bold text-xs">Git</span>
                  </div>
                  <h3 class="font-bold text-gray-800 dark:text-gray-200 text-lg">Git</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-400">版本控制</p>
                <div class="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- 核心特性 -->
        <section class="relative mb-16 animate-fade-in" style="animation-delay: 1.2s;">
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl border border-white/20 dark:border-gray-700/30 p-8 md:p-12 transition-all duration-500 group">
            <div class="flex items-center mb-10">
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">核心特性</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- 响应式设计 -->
              <div class="group/feature relative bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200/30 dark:border-green-700/20">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-transform duration-300">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover/feature:text-green-600 dark:group-hover/feature:text-green-400 transition-colors duration-300">响应式设计</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">完美适配桌面、平板和移动设备，提供一致的用户体验。</p>
                  </div>
                </div>
                <div class="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- 快速加载 -->
              <div class="group/feature relative bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200/30 dark:border-blue-700/20">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-transform duration-300">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover/feature:text-blue-600 dark:group-hover/feature:text-blue-400 transition-colors duration-300">快速加载</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">基于 Nuxt3 的服务端渲染和静态生成，确保极速访问体验。</p>
                  </div>
                </div>
                <div class="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- SEO 优化 -->
              <div class="group/feature relative bg-gradient-to-br from-purple-50/50 to-violet-50/50 dark:from-purple-900/10 dark:to-violet-900/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200/30 dark:border-purple-700/20">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-transform duration-300">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover/feature:text-purple-600 dark:group-hover/feature:text-purple-400 transition-colors duration-300">SEO 优化</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">搜索引擎友好的页面结构和元数据，提升内容可发现性。</p>
                  </div>
                </div>
                <div class="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              
              <!-- 易于管理 -->
              <div class="group/feature relative bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-yellow-200/30 dark:border-yellow-700/20">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-transform duration-300">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover/feature:text-yellow-600 dark:group-hover/feature:text-yellow-400 transition-colors duration-300">易于管理</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">使用 Notion 作为内容管理系统，让内容创作变得简单直观。</p>
                  </div>
                </div>
                <div class="absolute top-3 right-3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- 联系信息 -->
        <section class="relative animate-fade-in" style="animation-delay: 1.4s;">
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl border border-white/20 dark:border-gray-700/30 p-8 md:p-12 transition-all duration-500 group">
            <div class="flex items-center mb-10">
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">联系我们</h2>
            </div>
            <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p class="mb-8 text-lg leading-relaxed">
                如果您有任何问题、建议或想要合作，欢迎随时与我们联系。我们很乐意听到您的声音！
              </p>
              <div class="flex flex-col sm:flex-row gap-6 mt-8">
                <!-- 邮件联系 -->
                <a href="mailto:uno.ceojimmy@gmail.com" class="group/contact relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover/contact:blur-2xl transition-all duration-300"></div>
                  <svg class="w-6 h-6 mr-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="font-semibold text-lg relative z-10">发送邮件</span>
                  <div class="absolute top-1 right-1 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                </a>
                
                <!-- GitHub 链接 -->
                <a href="https://github.com" target="_blank" class="group/contact relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 text-white rounded-2xl hover:from-gray-800 hover:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-2xl blur-xl group-hover/contact:blur-2xl transition-all duration-300"></div>
                  <svg class="w-6 h-6 mr-3 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="font-semibold text-lg relative z-10">GitHub</span>
                  <div class="absolute top-1 right-1 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO 元数据
useHead({
  title: '关于我们 - NotionBlog',
  meta: [
    {
      name: 'description',
      content: '了解更多关于我们的技术博客，基于 Nuxt3 和 Notion API 构建的现代化博客平台。'
    },
    {
      name: 'keywords',
      content: 'Nuxt3, Notion API, 技术博客, Vue.js, Tailwind CSS'
    }
  ]
})
</script>