<template>
  <section
    class="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 sm:py-24 lg:py-40 overflow-hidden transition-colors duration-300">
    <!-- 网格背景 -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

    <!-- 荧光装饰元素 -->
    <div
      class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-glow-pulse">
    </div>
    <div
      class="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-xl opacity-20 animate-glow-pulse animation-delay-1000">
    </div>
    <div
      class="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-xl opacity-20 animate-glow-pulse animation-delay-2000">
    </div>
    <div
      class="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-20 animate-glow-pulse animation-delay-3000">
    </div>

    <!-- 浮动粒子 -->
    <div class="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400 rounded-full animate-float-slow opacity-60"></div>
    <div class="absolute top-1/3 right-1/5 w-1 h-1 bg-purple-400 rounded-full animate-float-medium opacity-60"></div>
    <div class="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-fast opacity-60"></div>
    <div class="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float-slow opacity-60"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- 居中内容区域 -->
      <div class="max-w-4xl mx-auto text-center">
        <!-- 技术栈图标环绕标题 -->
        <div class="relative mb-8">
          <!-- Notion 图标 - 右上 -->
          <div
            @click="handleTechIconClick('notion')"
            class="absolute -top-8 right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 glassmorphism-card notion-glow flex items-center justify-center animate-tech-float animation-delay-0 hover:scale-110 transition-all duration-300 cursor-pointer">
            <svg class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="notionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path fill="url(#notionGradient)"
                d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.747.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
            </svg>
          </div>

          <!-- 主标题 -->
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight transition-colors duration-300">
            <span class="block">{{ title }}</span>
            <span
              class="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mt-2 animate-gradient-x">{{
              subtitle }}</span>
          </h1>
          <!-- 描述文字 -->
          <p
            class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
            {{ description }}
          </p>
          <!-- 按钮组 -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <AppButton variant="primary" size="large" @click="handlePrimaryAction"
              class="w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              {{ primaryButtonText }}
            </AppButton>
            <AppButton variant="outline" size="large" @click="handleSecondaryAction"
              class="w-full sm:w-auto hover:scale-105 transition-all duration-300">
              {{ secondaryButtonText }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 引入 Microsoft Clarity composable
const { trackEvent } = useClarity()

defineProps({
  title: {
    type: String,
    default: '现代化博客网站'
  },
  subtitle: {
    type: String,
    default: '基于 Nuxt 3'
  },
  description: {
    type: String,
    default: '使用 Nuxt 3、Tailwind CSS 和 Notion API 构建的现代化博客网站。'
  },
  primaryButtonText: {
    type: String,
    default: '开始阅读'
  },
  secondaryButtonText: {
    type: String,
    default: '了解更多'
  }
})

const emit = defineEmits(['primaryAction', 'secondaryAction'])

// 处理主要按钮点击
const handlePrimaryAction = () => {
  // 跟踪 Clarity 事件
  trackEvent('hero_primary_button_click', {
    button_text: '开始阅读',
    section: 'hero'
  })
  
  emit('primaryAction')
}

// 处理次要按钮点击
const handleSecondaryAction = () => {
  // 跟踪 Clarity 事件
  trackEvent('hero_secondary_button_click', {
    button_text: '了解更多',
    section: 'hero'
  })
  
  emit('secondaryAction')
}

// 处理技术图标点击
const handleTechIconClick = (techName) => {
  // 跟踪 Clarity 事件
  trackEvent('tech_icon_click', {
    technology: techName,
    section: 'hero'
  })
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
  background-size: 20px 20px;
}

/* 毛玻璃效果基础样式 */
.glassmorphism-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(30px) saturate(200%) brightness(110%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    inset 0 -1px 0 rgba(255, 255, 255, 0.02);
}

/* Notion 图标发光效果 */
.notion-glow {
  background: rgba(255, 255, 255, 0.01);
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.08),
    0 0 40px rgba(255, 255, 255, 0.03),
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.02);
}

.notion-glow:hover {
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    0 0 30px rgba(255, 255, 255, 0.12),
    0 0 60px rgba(255, 255, 255, 0.06),
    0 12px 40px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 0 30px rgba(255, 255, 255, 0.04);
  transform: translateY(-2px);
}

/* Tailwind 图标发光效果 */
.tailwind-glow {
  background: rgba(6, 182, 212, 0.01);
  box-shadow:
    0 0 20px rgba(6, 182, 212, 0.15),
    0 0 40px rgba(6, 182, 212, 0.08),
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(6, 182, 212, 0.02);
}

.tailwind-glow:hover {
  background: rgba(6, 182, 212, 0.04);
  box-shadow:
    0 0 30px rgba(6, 182, 212, 0.25),
    0 0 60px rgba(6, 182, 212, 0.12),
    0 12px 40px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 0 30px rgba(6, 182, 212, 0.04);
  transform: translateY(-2px);
}

/* GitHub 图标发光效果 */
.github-glow {
  background: rgba(88, 166, 255, 0.01);
  box-shadow:
    0 0 20px rgba(88, 166, 255, 0.15),
    0 0 40px rgba(88, 166, 255, 0.08),
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(88, 166, 255, 0.02);
}

.github-glow:hover {
  background: rgba(88, 166, 255, 0.04);
  box-shadow:
    0 0 30px rgba(88, 166, 255, 0.25),
    0 0 60px rgba(88, 166, 255, 0.12),
    0 12px 40px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 0 30px rgba(88, 166, 255, 0.04);
  transform: translateY(-2px);
}

/* 荧光脉冲动画 */
@keyframes glow-pulse {

  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }

  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}

/* 技术图标浮动动画 */
@keyframes tech-float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  33% {
    transform: translateY(-10px) rotate(1deg);
  }

  66% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

.animate-tech-float {
  animation: tech-float 6s ease-in-out infinite;
}

/* 浮动粒子动画 */
@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-medium {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-fast {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

/* 渐变文字动画 */
@keyframes gradient-x {

  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }

  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* 动画延迟类 */
.animation-delay-0 {
  animation-delay: 0s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}
</style>