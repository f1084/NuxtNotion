// 静态数据读取 composable
// 用于在静态生成模式下从本地 JSON 文件读取数据

// 获取所有文章的静态数据
export const useStaticPosts = () => {
  return useLazyFetch('/data/posts.json', {
    key: 'static-posts',
    server: true,
    default: () => [],
    transform: (data) => {
      // 如果是字符串，解析为 JSON
      if (typeof data === 'string') {
        try {
          return JSON.parse(data)
        } catch (e) {
          console.error('解析文章数据失败:', e)
          return []
        }
      }
      return data || []
    }
  })
}

// 获取单篇文章的静态数据
export const useStaticPost = (postId) => {
  return useLazyFetch(`/data/post-${postId}.json`, {
    key: `static-post-${postId}`,
    server: true,
    default: () => null,
    transform: (data) => {
      // 如果是字符串，解析为 JSON
      if (typeof data === 'string') {
        try {
          return JSON.parse(data)
        } catch (e) {
          console.error('解析文章详情失败:', e)
          return null
        }
      }
      return data
    }
  })
}

// 检测是否为静态模式
export const isStaticMode = () => {
  return process.env.NODE_ENV === 'production' && process.static
}

// 统一的数据获取接口
export const useNotionPosts = () => {
  // 在生产环境下优先使用静态数据
  if (process.client && process.env.NODE_ENV === 'production') {
    return useStaticPosts()
  }
  
  // 开发环境使用 API
  return useLazyFetch('/api/posts', {
    key: 'posts',
    server: true,
    default: () => []
  })
}

export const useNotionPost = (postId) => {
  // 在生产环境下优先使用静态数据
  if (process.client && process.env.NODE_ENV === 'production') {
    return useStaticPost(postId)
  }
  
  // 开发环境使用 API
  return useLazyFetch(`/api/posts/${postId}`, {
    key: `post-${postId}`,
    server: true,
    default: () => null
  })
}