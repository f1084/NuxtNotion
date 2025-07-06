<p align="center">
  <a href="https://github.com/f1084/NuxtNotion" target="_blank">
    <img src="./public/LOGO.svg" width="180" alt="NuxtNotion Logo">
  </a>
</p>

使用 Nuxt 3、Tailwind CSS 和 Notion API 构建的现代化博客网站。

## ✨ 功能特性

- 🚀 **现代化技术栈** - 基于 Nuxt3 + Vue3 + Tailwind CSS
- 📝 **Notion 内容管理** - 使用 Notion 作为 CMS，支持富文本内容
- 🎨 **响应式设计** - 完美适配桌面端和移动端
- 🌙 **暗色主题** - 支持明暗主题切换
- 📱 **移动端优化** - 优雅的移动端交互体验
- 🔍 **文章搜索** - 快速搜索文章内容
- 📖 **文章大纲** - 智能生成文章目录导航
- 💬 **评论系统** - 集成 Gitalk 评论功能
- ⚡ **静态生成** - 支持 SSG 静态站点生成
- 🎯 **SEO 优化** - 完善的 SEO 元数据配置

## 🛠️ 技术栈

### 前端框架
- **Nuxt3** - Vue.js 全栈框架
- **Vue3** - 渐进式 JavaScript 框架
- **Tailwind CSS** - 实用优先的 CSS 框架

### 内容管理
- **Notion API** - 内容管理系统
- **@notionhq/client** - Notion 官方 SDK

### 评论系统
- **Gitalk** - 基于 GitHub Issues 的评论系统

### 构建工具
- **Vite** - 下一代前端构建工具
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - CSS 自动前缀

## 📦 安装依赖

```bash
# 使用 npm
npm install

# 使用 pnpm (推荐)
pnpm install

# 使用 yarn
yarn install
```

## ⚙️ 环境配置

1. 复制环境变量配置文件：
```bash
cp .env.example .env
```

2. 配置 Notion API：
```env
NOTION_API_KEY=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
NOTION_PAGE_ID=your_notion_page_id
```

3. 配置 Gitalk 评论系统（可选）：
```bash
cp .env.gitalk.example .env
```

填入 GitHub OAuth 应用信息：
```env
GITALK_CLIENT_ID=your_github_app_client_id
GITALK_CLIENT_SECRET=your_github_app_client_secret
GITALK_REPO=your_repo_name
GITALK_OWNER=your_github_username
GITALK_ADMIN=your_github_username
```

## 🚀 开发服务器

启动开发服务器（默认端口 3000）：

```bash
npm run dev
```

访问 `http://localhost:3000` 查看应用。

## 🏗️ 构建部署

### 生成静态数据

```bash
# 从 Notion 获取最新数据
npm run generate:data
```

### 构建生产版本

```bash
# SPA 模式构建
npm run build

# 静态站点生成 (SSG)
npm run build:static

# 完整构建（包含数据生成）
npm run build:full
```

### 本地预览

```bash
# 预览构建结果
npm run preview

# 预览静态站点
npm run serve:static
```

## 🌐 部署发布

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量
3. 自动部署

### Netlify 部署

1. 使用 `netlify.toml` 配置文件
2. 设置构建命令：`npm run build:full`
3. 设置发布目录：`.output/public`

### 静态托管

```bash
# 生成静态文件
npm run build:static

# 部署 .output/public 目录到任意静态托管服务
```

## 📁 项目结构

```
├── components/          # Vue 组件
│   ├── GitalkComment.vue    # Gitalk 评论组件
│   ├── NotionContent.vue    # Notion 内容渲染
│   └── ...
├── composables/         # 组合式函数
│   ├── useNotionData.js     # Notion 数据获取
│   └── useStaticData.js     # 静态数据处理
├── pages/              # 页面路由
│   ├── index.vue           # 首页
│   ├── articles.vue        # 文章列表
│   └── post/[id].vue       # 文章详情
├── server/             # 服务端 API
├── static/data/        # 静态数据文件
├── scripts/            # 构建脚本
└── assets/             # 静态资源
```

## 📝 使用说明

1. **配置 Notion**：创建 Notion 集成和数据库
2. **内容创建**：在 Notion 中编写文章
3. **数据同步**：运行 `npm run generate:data` 同步内容
4. **本地开发**：使用 `npm run dev` 启动开发服务器
5. **部署发布**：构建并部署到托管平台

## 📋 后续功能开发

### 🎯 计划中的功能

- [ ] **多语言支持** - 国际化 (i18n) 支持，支持中英文切换
- [ ] **标签系统** - 文章标签分类和筛选功能
- [ ] **全文搜索** - 基于 Algolia 或 Elasticsearch 的高级搜索
- [ ] **阅读统计** - 文章阅读量和用户行为分析
- [ ] **RSS 订阅** - 自动生成 RSS/Atom 订阅源
- [ ] **文章推荐** - 基于内容相似度的相关文章推荐
- [ ] **社交分享** - 一键分享到社交媒体平台
- [ ] **离线阅读** - PWA 支持，离线缓存文章内容
- [ ] **代码高亮** - 更丰富的代码语法高亮主题
- [ ] **图片优化** - 自动压缩和 WebP 格式转换

### 🔧 技术优化

- [ ] **性能优化** - 图片懒加载、代码分割、缓存策略
- [ ] **SEO 增强** - 结构化数据、Open Graph 优化
- [ ] **监控告警** - 错误监控和性能监控集成
- [ ] **自动化测试** - 单元测试和 E2E 测试覆盖
- [ ] **CI/CD 优化** - 自动化部署和版本管理
- [ ] **安全加固** - CSP 策略、XSS 防护等安全措施

### 🎨 用户体验

- [ ] **个性化设置** - 用户偏好设置（字体大小、阅读模式等）
- [ ] **快捷键支持** - 键盘导航和快捷操作
- [ ] **无障碍优化** - ARIA 标签和屏幕阅读器支持
- [ ] **动画效果** - 页面切换和交互动画优化
- [ ] **移动端手势** - 滑动导航和手势操作

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目！

### 如何贡献

1. **Fork** 本仓库
2. **创建** 功能分支 (`git checkout -b feature/AmazingFeature`)
3. **提交** 更改 (`git commit -m 'Add some AmazingFeature'`)
4. **推送** 到分支 (`git push origin feature/AmazingFeature`)
5. **创建** Pull Request

### 开发规范

- 遵循 Vue.js 和 Nuxt.js 最佳实践
- 使用 ESLint 和 Prettier 保持代码风格一致
- 编写清晰的提交信息
- 为新功能添加相应的文档说明

## 📄 许可证

MIT License

---

更多信息请查看 [Nuxt 官方文档](https://nuxt.com/docs)。
