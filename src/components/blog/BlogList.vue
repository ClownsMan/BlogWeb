<script setup lang="ts">
import { ref } from 'vue'
import { ElCard, ElRow, ElCol } from 'element-plus'
import { View } from '@element-plus/icons-vue'

// 博客数据接口定义
interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  tags: string[]
  readTime: number
  coverImage: string
  category: string
}

// 模拟博客数据
const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'React 19 新特性深度解析：并发渲染与服务器组件',
    excerpt: '探索 React 19 的革命性变化，包括并发渲染机制、服务器组件的实现原理，以及它们将如何改变我们构建现代Web应用的方式。',
    author: 'A Tech Blogger',
    date: '2024-01-15',
    tags: ['React', 'SSR', '性能优化'],
    readTime: 8,
    coverImage: 'https://picsum.photos/seed/react19/600/400',
    category: 'React'
  },
  {
    id: 2,
    title: 'TypeScript 5.0 高级类型系统：从入门到精通',
    excerpt: '深入学习 TypeScript 5.0 的高级类型特性，包括模板字面量类型、条件类型、映射类型等，帮你写出更加类型安全的代码。',
    author: 'A Tech Blogger',
    date: '2024-01-12',
    tags: ['TypeScript', '类型系统', '前端'],
    readTime: 12,
    coverImage: 'https://picsum.photos/seed/ts5/600/400',
    category: 'TypeScript'
  },
  {
    id: 3,
    title: 'Next.js 14 App Router 完整实践指南',
    excerpt: '通过实际项目学习 Next.js 14 的 App Router，包括路由系统、数据获取、服务端组件和客户端组件的最佳实践。',
    author: 'A Tech Blogger',
    date: '2024-01-10',
    tags: ['Next.js', 'App Router', '全栈'],
    readTime: 15,
    coverImage: 'https://picsum.photos/seed/next14/600/400',
    category: 'Next.js'
  },
  {
    id: 4,
    title: '前端性能优化终极指南：从理论到实践',
    excerpt: '全面覆盖前端性能优化的各个方面，从代码分割、懒加载到图片优化、CDN配置，让你的网站飞起来。',
    author: 'A Tech Blogger',
    date: '2024-01-08',
    tags: ['性能优化', 'WebPack', 'CDN'],
    readTime: 10,
    coverImage: 'https://picsum.photos/seed/performance/600/400',
    category: '性能优化'
  },
  {
    id: 5,
    title: 'Vue 3 Composition API 实现原理与模式总结',
    excerpt: '探索 Vue Composition API 的核心功能，通过源码分析学习如何构建更加模块化和可维护的Vue应用。',
    author: 'A Tech Blogger',
    date: '2024-01-05',
    tags: ['Vue3', 'Composition API', '模式设计'],
    readTime: 9,
    coverImage: 'https://picsum.photos/seed/vue3/600/400',
    category: 'Vue'
  },
  {
    id: 6,
    title: 'Node.js 微服务架构设计与实现',
    excerpt: '学习如何使用 Node.js 构建可扩展的微服务架构，包括服务发现、API网关、消息队列等核心概念。',
    author: 'A Tech Blogger',
    date: '2024-01-03',
    tags: ['Node.js', '微服务', '架构设计'],
    readTime: 14,
    coverImage: 'https://picsum.photos/seed/microservice/600/400',
    category: 'Node.js'
  }
])

// 查看博客详情
const viewBlog = (id: number) => {
  console.log('查看博客:', id)
  // 这里可以添加路由跳转逻辑
}
</script>

<template>
  <div class="md:px-6 bg-gray-50 min-h-screen">
    <div class="text-2xl md:text-3xl font-bold mb-8 text-gray-800">最新文章</div>
    <p class="text-gray-600 mb-8">探索最新的技术趋势和开发实践</p>
    <ElRow :gutter="24">
      <ElCol :xs="24" :sm="24" :md="12" :lg="8" v-for="post in blogPosts" :key="post.id">
        <ElCard class="h-full flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-none">
          <!-- 博客封面图 -->
          <div class="relative h-48 overflow-hidden">
            <img :src="post.coverImage" alt="{{ post.title }}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
            <div class="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {{ post.category }}
            </div>
          </div>

          <div class="p-5 flex flex-col flex-1">
            <!-- 博客标题 -->
            <h3 class="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer" @click="viewBlog(post.id)">
              {{ post.title }}
            </h3>

            <!-- 博客摘要 -->
            <p class="text-gray-600 mb-4 flex-1 line-clamp-3 leading-relaxed">{{ post.excerpt }}</p>

            <!-- 博客标签 -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in post.tags" :key="tag" class="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">{{ tag }}</span>
            </div>

            <!-- 作者信息和阅读时间 -->
            <div class="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <span>{{ post.author }}</span>
                <span class="text-gray-300">•</span>
                <span>{{ post.date }}</span>
              </div>
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span>{{ post.readTime }} 分钟</span>
              </div>
            </div>
          </div>
        </ElCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<style scoped>
/* 保留一些无法被UnoCSS完全替代的样式 */

/* 移动端适配的媒体查询 */
@media (max-width: 768px) {
  .text-2xl.md\:text-3xl {
    font-size: 1.5rem;
  }

  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>