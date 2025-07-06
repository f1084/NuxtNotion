# NuxtNotion 静态部署指南

本项目已重构为支持静态部署的前端应用，可以部署到 Netlify、Vercel、GitHub Pages 等静态托管平台。

## 🚀 快速开始

### 1. 环境变量配置

在项目根目录创建 `.env` 文件：

```bash
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

### 2. 本地开发

```bash
# 安装依赖
npm install

# 开发模式（使用 API）
npm run dev

# 生成静态数据
npm run generate:data

# 构建静态站点
npm run build:static

# 预览静态站点
npm run serve:static
```

### 3. 完整静态部署流程

```bash
# 一键部署（生成数据 + 构建 + 预览）
npm run deploy:static
```

## 📁 项目结构

```
├── .github/workflows/     # GitHub Actions 工作流
├── composables/
│   ├── useNotionData.js   # 原始数据获取（已弃用）
│   └── useStaticData.js   # 静态数据获取
├── scripts/
│   └── generate-static-data.js  # 构建时数据生成
├── static/data/           # 生成的静态数据文件
├── netlify.toml          # Netlify 配置
├── vercel.json           # Vercel 配置
└── .output/public/       # 构建输出目录
```

## 🌐 部署平台配置

### Netlify 部署

1. 连接 GitHub 仓库
2. 设置环境变量：
   - `NOTION_TOKEN`
   - `NOTION_DATABASE_ID`
3. 构建设置会自动从 `netlify.toml` 读取

### Vercel 部署

1. 连接 GitHub 仓库
2. 设置环境变量：
   - `NOTION_TOKEN`
   - `NOTION_DATABASE_ID`
3. 构建设置会自动从 `vercel.json` 读取

### GitHub Pages 部署

1. 在仓库设置中启用 GitHub Pages
2. 设置 Secrets：
   - `NOTION_TOKEN`
   - `NOTION_DATABASE_ID`
3. 推送到 `main` 分支会自动触发部署

## 🔧 Notion 数据库配置

确保你的 Notion 数据库包含以下字段：

### 必需字段
- **Name/Title/title** (标题类型) - 文章标题
- **created_time** (创建时间) - 自动字段

### 推荐字段
- **Summary/Excerpt/Description** (富文本类型) - 文章摘要
- **Tags** (多选类型) - 文章标签
- **Category/Type** (选择类型) - 文章分类
- **Cover/Image/Thumbnail** (文件类型) - 封面图片

## 📊 数据获取策略

### 开发环境
- 使用 `/api/posts` 和 `/api/posts/[id]` API 端点
- 实时从 Notion 获取数据

### 生产环境（静态）
- 使用预生成的 JSON 文件
- 从 `/data/posts.json` 和 `/data/post-{id}.json` 读取

## 🔄 内容更新

静态站点的内容更新需要重新构建：

1. **自动更新**：推送代码到仓库会触发重新构建
2. **手动更新**：在部署平台手动触发重新构建
3. **定时更新**：可以设置 GitHub Actions 定时任务

## 🛠️ 自定义配置

### 修改数据生成脚本

编辑 `scripts/generate-static-data.js` 来自定义数据获取逻辑。

### 修改构建配置

编辑 `nuxt.config.js` 中的 `generatePostRoutes` 函数来自定义路由生成。

### 添加新的数据源

在 `composables/useStaticData.js` 中添加新的数据获取函数。

## 🚨 注意事项

1. **API 限制**：Notion API 有速率限制，构建时会添加延迟
2. **数据大小**：大量文章可能导致构建时间较长
3. **图片优化**：建议使用 CDN 或图片压缩服务
4. **缓存策略**：静态文件会被缓存，内容更新需要重新构建

## 🔍 故障排除

### 构建失败
- 检查环境变量是否正确设置
- 确认 Notion 集成权限
- 查看构建日志中的错误信息

### 数据不显示
- 检查 Notion 数据库字段名称
- 确认数据库权限设置
- 验证生成的 JSON 文件格式

### 路由问题
- 确保所有文章路由都在 `nuxt.config.js` 中生成
- 检查部署平台的重定向规则

## 📈 性能优化

1. **图片优化**：使用 WebP 格式和适当尺寸
2. **代码分割**：Nuxt 自动处理
3. **缓存策略**：配置适当的 HTTP 缓存头
4. **CDN**：使用 CDN 加速静态资源

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！