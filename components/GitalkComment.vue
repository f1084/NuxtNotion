<template>
  <ClientOnly>
    <div id="gitalk-container" class="mt-8"></div>
    <template #fallback>
      <div class="animate-pulse">
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
        <div class="h-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    </template>
  </ClientOnly>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

// Gitalk配置
const gitalkConfig = {
  clientID: process.env.GITALK_CLIENT_ID || 'your-github-app-client-id',
  clientSecret: process.env.GITALK_CLIENT_SECRET || 'your-github-app-client-secret',
  repo: process.env.GITALK_REPO || 'your-repo-name', // 存储评论的仓库名
  owner: process.env.GITALK_OWNER || 'your-github-username', // GitHub用户名
  admin: [process.env.GITALK_ADMIN || 'your-github-username'], // 管理员用户名数组
  id: props.id, // 页面的唯一标识
  title: props.title, // 页面标题
  distractionFreeMode: false, // 无干扰模式
  language: 'zh-CN', // 语言
  perPage: 10, // 每页评论数
  pagerDirection: 'last', // 分页方向
  createIssueManually: false, // 手动创建Issue
  proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token', // 代理地址
}

onMounted(async () => {
  try {
    // 动态加载Gitalk CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css'
    document.head.appendChild(link)
    
    // 动态加载Gitalk JS
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js'
    script.onload = () => {
      // 初始化Gitalk
      const gitalk = new window.Gitalk(gitalkConfig)
      gitalk.render('gitalk-container')
    }
    document.head.appendChild(script)
  } catch (error) {
    console.error('Gitalk加载失败:', error)
  }
})
</script>

<style scoped>
/* 自定义Gitalk样式 */
:deep(.gt-container) {
  @apply font-sans;
}

:deep(.gt-header-textarea) {
  @apply rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400;
}

:deep(.gt-btn) {
  @apply bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200;
}

:deep(.gt-btn-preview) {
  @apply bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300;
}

:deep(.gt-comment-content) {
  @apply bg-gray-50 dark:bg-gray-800 rounded-lg;
}

:deep(.gt-comment-header) {
  @apply border-b border-gray-200 dark:border-gray-700;
}

:deep(.gt-header-textarea) {
  @apply bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ;
}
:deep(.gt-header-textarea:focus) {
  @apply bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ;
}
:deep(.gt-header-textarea:hover) {
  @apply bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ;
}
</style>