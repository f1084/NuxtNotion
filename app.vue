<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <!-- 导航栏组件 -->
    <AppNavbar />

    <!-- 主要内容区域 -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- 页脚组件 -->
    <AppFooter />
  </div>
</template>

<script setup>
// 页面级别的逻辑可以在这里添加
</script>

<style>
/* 移除全局背景，让各页面自己控制背景 */
</style>
