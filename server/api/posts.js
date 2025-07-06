export default defineEventHandler(async (event) => {
  const notion = event.context.notion || event.context.nitro?.notion
  const config = useRuntimeConfig()
  const databaseId = config.notionDatabaseId

  // 检查必要的配置
  if (!notion) {
    console.error('Notion client not initialized')
    return { error: 'Notion client not initialized' }
  }

  if (!databaseId) {
    console.error('NOTION_DATABASE_ID not configured')
    return { error: 'Database ID not configured' }
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Created',
          direction: 'descending'
        }
      ]
    })
    
    // 调试：打印第一个结果的结构
    if (response.results && response.results.length > 0) {
      console.log('First post structure:', JSON.stringify(response.results[0], null, 2))
    }
    
    return response.results
  } catch (error) {
    console.error('Notion API error:', error)
    return {
      error: 'Failed to fetch posts from Notion: ' + error.message
    }
  }
})