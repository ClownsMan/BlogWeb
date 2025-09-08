<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElCard, ElRow, ElCol } from 'element-plus'
import { useRouter } from 'vue-router'
import { getPosts } from '../../api/home'
import { convertISOToDateTime } from '../../utils/index'

// 创建router实例
const router = useRouter()

const init = async () => {
  getPosts().then(res => {
    if (res.code === 200) {
      blogPosts.value = (res.data.data || []).map((item:any) => ({
        ...item,
        tags: item.tags.map((n:any) => n.name),
        category: item.category.name,
        author: item.author.username,
        date: convertISOToDateTime(item.createdAt, 'date'),
        readTime: item.readTime || 88,
        excerpt: item.excerpt || '暂无简介',
        coverImage: item.coverImage || 'https://picsum.photos/seed/react19/600/400',
      }))
    }
  })
}

onMounted(() => {
  init()
})

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
const blogPosts = ref<BlogPost[]>([])

// 查看博客详情
const viewBlog = (id: number) => {
  router.push(`/blog/${id}`)
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
                <span>{{ post.readTime }} min</span>
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