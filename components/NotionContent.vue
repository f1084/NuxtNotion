<template>
  <div class="notion-content">
      <div v-for="block in blocks" :key="block.id" class="notion-block">
      <!-- 段落 -->
      <p v-if="block.type === 'paragraph'" class="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
        <NotionRichText :rich-text="block.paragraph?.rich_text || []" />
      </p>
      
      <!-- 标题 1 -->
      <h1 v-else-if="block.type === 'heading_1'" :id="`heading-${block.id}`" class="text-3xl font-bold mb-6 mt-8 text-gray-900 dark:text-gray-100">
        <NotionRichText :rich-text="block.heading_1?.rich_text || []" />
      </h1>
      
      <!-- 标题 2 -->
      <h2 v-else-if="block.type === 'heading_2'" :id="`heading-${block.id}`" class="text-2xl font-bold mb-4 mt-6 text-gray-900 dark:text-gray-100">
        <NotionRichText :rich-text="block.heading_2?.rich_text || []" />
      </h2>
      
      <!-- 标题 3 -->
      <h3 v-else-if="block.type === 'heading_3'" :id="`heading-${block.id}`" class="text-xl font-bold mb-3 mt-5 text-gray-900 dark:text-gray-100">
        <NotionRichText :rich-text="block.heading_3?.rich_text || []" />
      </h3>
      
      <!-- 无序列表 -->
      <ul v-else-if="block.type === 'bulleted_list_item'" class="list-disc list-inside mb-2 ml-4 text-gray-700 dark:text-gray-300">
        <li class="mb-1">
          <NotionRichText :rich-text="block.bulleted_list_item?.rich_text || []" />
        </li>
      </ul>
      
      <!-- 有序列表 -->
      <ol v-else-if="block.type === 'numbered_list_item'" class="list-decimal list-inside mb-2 ml-4 text-gray-700 dark:text-gray-300">
        <li class="mb-1">
          <NotionRichText :rich-text="block.numbered_list_item?.rich_text || []" />
        </li>
      </ol>
      
      <!-- 引用 -->
      <blockquote v-else-if="block.type === 'quote'" class="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic text-gray-600 dark:text-gray-300 my-4 bg-gray-50 dark:bg-gray-800 py-2">
        <NotionRichText :rich-text="block.quote?.rich_text || []" />
      </blockquote>
      
      <!-- 代码块 -->
      <pre v-else-if="block.type === 'code'" class="bg-gray-900 dark:bg-gray-950 text-white p-4 rounded-lg overflow-x-auto my-4 border dark:border-gray-700">
        <code :class="`language-${block.code?.language || 'text'}`">
          <NotionRichText :rich-text="block.code?.rich_text || []" />
        </code>
      </pre>
      
      <!-- 分割线 -->
      <hr v-else-if="block.type === 'divider'" class="my-8 border-gray-300 dark:border-gray-600" />
      
      <!-- 图片 -->
      <div v-else-if="block.type === 'image'" class="my-6">
        <img 
          :src="getImageUrl(block.image)"
          :alt="getImageCaption(block.image)"
          class="max-w-full h-auto rounded-lg shadow-sm"
        />
        <p v-if="getImageCaption(block.image)" class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
          {{ getImageCaption(block.image) }}
        </p>
      </div>
      
      <!-- 视频 -->
      <div v-else-if="block.type === 'video'" class="my-6">
        <div class="aspect-w-16 aspect-h-9">
          <iframe 
            :src="getVideoUrl(block.video)"
            sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation allow-popups-to-escape-sandbox"
            class="w-full h-64 rounded-lg"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      
      <!-- 嵌入内容 -->
      <div v-else-if="block.type === 'embed'" class="my-6">
        <div class="aspect-w-16 aspect-h-9">
          <iframe 
            :src="block.embed?.url"
            sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation allow-popups-to-escape-sandbox"
            class="w-full h-64 rounded-lg border border-gray-300 dark:border-gray-600"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      
      <!-- 待办事项 -->
      <div v-else-if="block.type === 'to_do'" class="flex items-start mb-2">
        <input 
          type="checkbox" 
          :checked="block.to_do?.checked || false"
          disabled
          class="mt-1 mr-3 rounded"
        />
        <div class="flex-1 text-gray-700 dark:text-gray-300" :class="{ 'line-through text-gray-500 dark:text-gray-500': block.to_do?.checked }">
          <NotionRichText :rich-text="block.to_do?.rich_text || []" />
        </div>
      </div>
      
      <!-- 切换块 -->
      <details v-else-if="block.type === 'toggle'" class="mb-4">
        <summary class="cursor-pointer font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
          <NotionRichText :rich-text="block.toggle?.rich_text || []" />
        </summary>
        <div class="mt-2 ml-4">
          <NotionContent :blocks="block.children || []" v-if="block.children" />
        </div>
      </details>
      
      <!-- 标注/高亮 -->
      <div v-else-if="block.type === 'callout'" class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 my-4">
        <div class="flex items-start">
          <span v-if="block.callout?.icon" class="text-2xl mr-3 mt-1">
            {{ getCalloutIcon(block.callout.icon) }}
          </span>
          <div class="flex-1 text-gray-700 dark:text-gray-300">
            <NotionRichText :rich-text="block.callout?.rich_text || []" />
          </div>
        </div>
      </div>
      
      <!-- 表格 -->
      <div v-else-if="block.type === 'table'" class="my-6 overflow-x-auto">
        <table class="min-w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
          <NotionContent :blocks="block.children || []" v-if="block.children" />
        </table>
      </div>
      
      <!-- 表格行 -->
      <tr v-else-if="block.type === 'table_row'" class="border-b border-gray-200 dark:border-gray-600">
        <td 
          v-for="(cell, index) in block.table_row?.cells || []"
          :key="index"
          class="px-4 py-2 border-r border-gray-200 dark:border-gray-600 last:border-r-0 text-gray-700 dark:text-gray-300"
        >
          <NotionRichText :rich-text="cell" />
        </td>
      </tr>
      
      <!-- 子页面引用 -->
      <div v-else-if="block.type === 'child_page'" class="my-4">
        <NuxtLink 
          :to="`/post/${block.id}`"
          class="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700 rounded-lg hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/40 dark:hover:to-indigo-800/40 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 group"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                📄
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  {{ block.child_page?.title || '未命名页面' }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  点击查看详细内容
                </p>
              </div>
            </div>
            <div class="text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
      
      <!-- 未知块类型 -->
      <div v-else class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded p-3 my-2 text-sm text-gray-600 dark:text-gray-400">
        <p class="font-medium">未支持的块类型: {{ block.type }}</p>
        <pre class="mt-2 text-xs overflow-x-auto text-gray-500 dark:text-gray-500">{{ JSON.stringify(block, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blocks: {
    type: Array,
    default: () => []
  }
})



// 获取图片URL
const getImageUrl = (image) => {
  if (image?.external?.url) {
    return image.external.url
  }
  if (image?.file?.url) {
    return image.file.url
  }
  return ''
}

// 获取图片说明
const getImageCaption = (image) => {
  if (image?.caption && image.caption.length > 0) {
    return image.caption.map(item => item.plain_text).join('')
  }
  return ''
}

// 获取视频URL
const getVideoUrl = (video) => {
  if (video?.external?.url) {
    return video.external.url
  }
  if (video?.file?.url) {
    return video.file.url
  }
  return ''
}

// 获取标注图标
const getCalloutIcon = (icon) => {
  if (icon?.emoji) {
    return icon.emoji
  }
  if (icon?.external?.url) {
    return '📝' // 默认图标
  }
  return '💡' // 默认图标
}
</script>

<style scoped>
.notion-content {
  @apply text-gray-700 dark:text-gray-300 leading-relaxed max-w-none;
}

.notion-block {
  @apply break-words;
}

/* 表格样式 */
table {
  @apply border-collapse;
}

/* 代码块样式 */
pre code {
  @apply font-mono text-sm;
}

/* 列表嵌套 */
.notion-content ul ul,
.notion-content ol ol,
.notion-content ul ol,
.notion-content ol ul {
  @apply mt-1 mb-1;
}


</style>