<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo和描述 -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="/logo.svg" alt="NuxtNotion Logo" class="w-8 h-8" />
            <h3 class="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              NuxtNotion</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            基于 Nuxt3 和 Notion API 构建的现代化博客系统，提供优雅的阅读体验。
          </p>
        </div>

        <!-- 快速链接 -->
        <div class="space-y-4">
          <h4 class="font-semibold text-gray-900 dark:text-gray-100">快速链接</h4>
          <ul class="flex space-x-4">
            <li class="inline">
              <NuxtLink to="/" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">
                首页
              </NuxtLink>
            </li>

            <li class="inline">
              <NuxtLink to="/guide" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">
                指南
              </NuxtLink>
            </li>

            <li class="inline">
              <NuxtLink to="/articles" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">
                文章
              </NuxtLink>
            </li>
            <li class="inline">
              <NuxtLink to="/about" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">
                关于
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 技术栈 -->
        <div class="space-y-4">
          <h4 class="font-semibold text-gray-900 dark:text-gray-100">技术栈</h4>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full transition-colors duration-300">Nuxt3</span>
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full transition-colors duration-300">Vue3</span>
            <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full transition-colors duration-300">Tailwind CSS</span>
            <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded-full transition-colors duration-300">Notion API</span>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {{ currentYear }} NuxtNotion. 保留所有权利。
          </p>
          <div class="flex items-center space-x-4">
            <!-- GitHub按钮 -->
            <a href="https://github.com/f1084/NuxtNotion" target="_blank" rel="noopener noreferrer"
              class="flex w-10 h-10 items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              title="查看GitHub仓库">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>