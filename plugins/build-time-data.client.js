// 构建时数据获取插件
// 仅在客户端运行，用于处理静态生成后的数据

export default defineNuxtPlugin(() => {
  // 如果是静态生成模式，确保数据正确加载
  if (process.client && process.env.NODE_ENV === 'production') {
    // 可以在这里添加客户端特定的数据处理逻辑
    console.log('Static site loaded successfully')
  }
})