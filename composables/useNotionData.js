// 构建时获取Notion数据的composables

// 构建时获取所有文章数据
export const useStaticPosts = async () => {
  // 在构建时，这些数据会被预取并静态化
  try {
    const { data: posts } = await $fetch('/api/posts')
    return posts
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return []
  }
}

// 构建时获取单篇文章数据
export const useStaticPost = async (id) => {
  try {
    const { data: post } = await $fetch(`/api/posts/${id}`)
    return post
  } catch (error) {
    console.error('Failed to fetch post:', error)
    return null
  }
}

// 客户端数据获取的备用方案
export const useNotionClient = () => {
  const fetchPosts = async () => {
    try {
      // 优先使用静态数据，如果失败则尝试API
      const response = await $fetch('/api/posts')
      return response
    } catch (error) {
      console.warn('Failed to fetch posts from API:', error)
      return []
    }
  }
  
  const fetchPost = async (id) => {
    try {
      const response = await $fetch(`/api/posts/${id}`)
      return response
    } catch (error) {
      console.warn('Failed to fetch post from API:', error)
      return null
    }
  }
  
  return { fetchPosts, fetchPost }
}

// 通用的数据获取函数，支持静态和动态模式
export const useNotionData = () => {
  const isStatic = process.env.NODE_ENV === 'production'
  
  const getPosts = async () => {
    if (isStatic) {
      return await useStaticPosts()
    } else {
      const { fetchPosts } = useNotionClient()
      return await fetchPosts()
    }
  }
  
  const getPost = async (id) => {
    if (isStatic) {
      return await useStaticPost(id)
    } else {
      const { fetchPost } = useNotionClient()
      return await fetchPost(id)
    }
  }
  
  return { getPosts, getPost }
}