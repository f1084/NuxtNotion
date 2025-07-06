import { Client } from '@notionhq/client'

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()
  
  if (!config.notionApiKey) {
    console.error('NOTION_API_KEY not found in runtime config')
    return
  }
  
  const client = new Client({ auth: config.notionApiKey })
  
  // 设置到nitroApp和hooks中，确保在所有请求中都能访问
  nitroApp.notion = client
  
  // 添加到每个请求的context中
  nitroApp.hooks.hook('request', (event) => {
    event.context.notion = client
  })
  
  console.log('Notion client initialized successfully')
})