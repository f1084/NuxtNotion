export default defineEventHandler(async (event) => {
  try {
    // 获取 Notion 客户端
    const notion = event.context.notion
    if (!notion) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Notion client not configured'
      })
    }

    // 获取文章 ID
    const postId = getRouterParam(event, 'id')
    if (!postId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Post ID is required'
      })
    }

    console.log('Fetching post with ID:', postId)

    // 从 Notion 获取页面信息
    const page = await notion.pages.retrieve({
      page_id: postId
    })

    if (!page) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Post not found'
      })
    }

    // 获取页面内容块（可选，用于渲染文章内容）
    let blocks = []
    try {
      const blocksResponse = await notion.blocks.children.list({
        block_id: postId,
        page_size: 100
      })
      blocks = blocksResponse.results
    } catch (blocksError) {
      console.warn('Failed to fetch page blocks:', blocksError.message)
      // 即使获取内容块失败，也返回页面基本信息
    }

    // 返回页面信息和内容块
    return {
      ...page,
      blocks: blocks
    }

  } catch (error) {
    console.error('Error fetching post:', error)
    
    // 处理 Notion API 错误
    if (error.code === 'object_not_found') {
      throw createError({
        statusCode: 404,
        statusMessage: 'Post not found'
      })
    }
    
    if (error.code === 'unauthorized') {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized access to Notion'
      })
    }
    
    if (error.code === 'restricted_resource') {
      throw createError({
        statusCode: 403,
        statusMessage: 'Access to this post is restricted'
      })
    }

    // 如果是我们自己抛出的错误，直接重新抛出
    if (error.statusCode) {
      throw error
    }

    // 其他未知错误
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to fetch post: ${error.message}`
    })
  }
})