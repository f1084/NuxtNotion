// 构建时数据生成脚本
// 用于在构建过程中从 Notion 获取数据并生成静态 JSON 文件

import dotenv from 'dotenv'
import { Client } from '@notionhq/client'
import fs from 'fs'
import path from 'path'

// 加载环境变量
dotenv.config()

// 初始化 Notion 客户端
const notion = new Client({
  auth: process.env.NOTION_TOKEN || process.env.NOTION_API_KEY
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID

// 确保输出目录存在
const outputDir = path.join(process.cwd(), 'static', 'data')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// 获取所有文章
async function fetchAllPosts() {
  try {
    console.log('正在从 Notion 获取文章数据...')
    
    const response = await notion.databases.query({
      database_id: DATABASE_ID
      // 移除排序，因为created_time可能不存在
    })
    
    console.log(`获取到 ${response.results.length} 篇文章`)
    
    // 保存文章列表
    fs.writeFileSync(
      path.join(outputDir, 'posts.json'),
      JSON.stringify(response.results, null, 2)
    )
    
    return response.results
  } catch (error) {
    console.error('获取文章列表失败:', error)
    return []
  }
}

// 获取单篇文章详情
async function fetchPostDetail(postId) {
  try {
    console.log(`正在获取文章详情: ${postId}`)
    
    // 获取页面信息
    const page = await notion.pages.retrieve({ page_id: postId })
    
    // 获取页面内容块
    const blocks = await notion.blocks.children.list({
      block_id: postId
    })
    
    const postDetail = {
      ...page,
      blocks: blocks.results
    }
    
    // 保存单篇文章详情
    fs.writeFileSync(
      path.join(outputDir, `post-${postId}.json`),
      JSON.stringify(postDetail, null, 2)
    )
    
    return postDetail
  } catch (error) {
    console.error(`获取文章详情失败 (${postId}):`, error)
    return null
  }
}

// 主函数
async function generateStaticData() {
  console.log('开始生成静态数据...')
  
  // 检查环境变量
  const notionToken = process.env.NOTION_TOKEN || process.env.NOTION_API_KEY
  if (!notionToken || !process.env.NOTION_DATABASE_ID) {
    console.error('缺少必要的环境变量: NOTION_TOKEN/NOTION_API_KEY 或 NOTION_DATABASE_ID')
    process.exit(1)
  }
  
  try {
    // 获取所有文章
    const posts = await fetchAllPosts()
    
    // 获取每篇文章的详情
    const postDetails = []
    for (const post of posts) {
      const detail = await fetchPostDetail(post.id)
      if (detail) {
        postDetails.push(detail)
      }
      // 添加延迟以避免 API 限制
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    console.log(`成功生成 ${posts.length} 篇文章的静态数据`)
    console.log('静态数据生成完成！')
    
  } catch (error) {
    console.error('生成静态数据失败:', error)
    process.exit(1)
  }
}

// 如果直接运行此脚本
if (import.meta.url === new URL(process.argv[1], 'file://').href) {
  generateStaticData()
}

// 兼容性处理：如果是直接运行脚本
if (process.argv[1] && process.argv[1].endsWith('generate-static-data.js')) {
  generateStaticData()
}

export { generateStaticData, fetchAllPosts, fetchPostDetail }