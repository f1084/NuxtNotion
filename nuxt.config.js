// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'NuxtNotion - 现代化博客平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '基于 Nuxt3 和 Notion API 构建的现代化博客平台，探索前沿技术，分享开发智慧' },
        { name: 'theme-color', content: '#3B82F6' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/logo.svg' }
      ]
    }
  },
  
  // 启用静态生成
  nitro: {
    prerender: {
      routes: ['/articles']
    }
  },
  
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/custom.css'
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  runtimeConfig: {
    // 构建时环境变量
    notionApiKey: process.env.NOTION_API_KEY,
    notionDatabaseId: process.env.NOTION_DATABASE_ID,
    public: {
      // 如果需要在客户端访问某些配置
    }
  }
})
