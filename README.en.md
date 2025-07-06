<p>
  <a href="https://github.com/f1084/NuxtNotion" target="_blank">
    <img src="./public/LOGO.svg" width="120" alt="NuxtNotion Logo">
    <br>
    <span>NuxtNotion</span>
  </a>
</p>

# NuxtNotion - Modern Blog Platform

A Nuxt 3 blog platform with Notion API, Vue 3, Tailwind CSS, and Gitalk for comment system.

## ✨ Features

- 🚀 **Modern Tech Stack** - Built with Nuxt3 + Vue3 + Tailwind CSS
- 📝 **Notion Content Management** - Use Notion as CMS with rich text content support
- 🎨 **Responsive Design** - Perfect adaptation for desktop and mobile
- 🌙 **Dark Theme** - Support for light/dark theme switching
- 📱 **Mobile Optimization** - Elegant mobile interaction experience
- 🔍 **Article Search** - Quick search through article content
- 📖 **Article Outline** - Smart generation of article navigation
- 💬 **Comment System** - Integrated Gitalk commenting functionality
- ⚡ **Static Generation** - Support for SSG static site generation
- 🎯 **SEO Optimization** - Complete SEO metadata configuration

## 🛠️ Tech Stack

### Frontend Framework
- **Nuxt3** - Vue.js full-stack framework
- **Vue3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework

### Content Management
- **Notion API** - Content management system
- **@notionhq/client** - Official Notion SDK

### Comment System
- **Gitalk** - GitHub Issues-based comment system

### Build Tools
- **Vite** - Next generation frontend build tool
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS auto-prefixer

## 📦 Installation

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install

# Using yarn
yarn install
```

## ⚙️ Environment Configuration

1. Copy environment configuration file:
```bash
cp .env.example .env
```

2. Configure Notion API:
```env
NOTION_API_KEY=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
NOTION_PAGE_ID=your_notion_page_id
```

3. Configure Gitalk comment system (optional):
```bash
cp .env.gitalk.example .env
```

Fill in GitHub OAuth application information:
```env
GITALK_CLIENT_ID=your_github_app_client_id
GITALK_CLIENT_SECRET=your_github_app_client_secret
GITALK_REPO=your_repo_name
GITALK_OWNER=your_github_username
GITALK_ADMIN=your_github_username
```

## 🚀 Development Server

Start the development server (default port 3000):

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

## 🏗️ Build & Deploy

### Generate Static Data

```bash
# Fetch latest data from Notion
npm run generate:data
```

### Build for Production

```bash
# SPA mode build
npm run build

# Static site generation (SSG)
npm run build:static

# Full build (including data generation)
npm run build:full
```

### Local Preview

```bash
# Preview build result
npm run preview

# Preview static site
npm run serve:static
```

## 🌐 Deployment

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Automatic deployment

### Netlify Deployment

1. Use `netlify.toml` configuration file
2. Set build command: `npm run build:full`
3. Set publish directory: `.output/public`

### Static Hosting

```bash
# Generate static files
npm run build:static

# Deploy .output/public directory to any static hosting service
```

## 📁 Project Structure

```
├── components/          # Vue components
│   ├── GitalkComment.vue    # Gitalk comment component
│   ├── NotionContent.vue    # Notion content renderer
│   └── ...
├── composables/         # Composable functions
│   ├── useNotionData.js     # Notion data fetching
│   └── useStaticData.js     # Static data processing
├── pages/              # Page routes
│   ├── index.vue           # Homepage
│   ├── articles.vue        # Article list
│   └── post/[id].vue       # Article detail
├── server/             # Server-side API
├── static/data/        # Static data files
├── scripts/            # Build scripts
└── assets/             # Static assets
```

## 📝 Usage Guide

1. **Configure Notion**: Create Notion integration and database
2. **Create Content**: Write articles in Notion
3. **Sync Data**: Run `npm run generate:data` to sync content
4. **Local Development**: Use `npm run dev` to start development server
5. **Deploy**: Build and deploy to hosting platform

## 📋 Future Development

### 🎯 Planned Features

- [ ] **Multi-language Support** - Internationalization (i18n) support, Chinese/English switching
- [ ] **Tag System** - Article tag classification and filtering
- [ ] **Full-text Search** - Advanced search based on Algolia or Elasticsearch
- [ ] **Reading Analytics** - Article view count and user behavior analysis
- [ ] **RSS Feed** - Auto-generated RSS/Atom subscription feed
- [ ] **Article Recommendations** - Content similarity-based related articles
- [ ] **Social Sharing** - One-click sharing to social media platforms
- [ ] **Offline Reading** - PWA support with offline article caching
- [ ] **Code Highlighting** - Rich code syntax highlighting themes
- [ ] **Image Optimization** - Auto compression and WebP format conversion

### 🔧 Technical Optimization

- [ ] **Performance Optimization** - Image lazy loading, code splitting, caching strategies
- [ ] **SEO Enhancement** - Structured data, Open Graph optimization
- [ ] **Monitoring & Alerts** - Error monitoring and performance monitoring integration
- [ ] **Automated Testing** - Unit testing and E2E testing coverage
- [ ] **CI/CD Optimization** - Automated deployment and version management
- [ ] **Security Hardening** - CSP policies, XSS protection and other security measures

### 🎨 User Experience

- [ ] **Personalization Settings** - User preference settings (font size, reading mode, etc.)
- [ ] **Keyboard Shortcuts** - Keyboard navigation and shortcut operations
- [ ] **Accessibility Optimization** - ARIA labels and screen reader support
- [ ] **Animation Effects** - Page transition and interaction animation optimization
- [ ] **Mobile Gestures** - Swipe navigation and gesture operations

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve the project!

### How to Contribute

1. **Fork** this repository
2. **Create** feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Create** Pull Request

### Development Guidelines

- Follow Vue.js and Nuxt.js best practices
- Use ESLint and Prettier to maintain consistent code style
- Write clear commit messages
- Add corresponding documentation for new features

## 📄 License

MIT License

---

For more information, please check the [Nuxt official documentation](https://nuxt.com/docs).