<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCategories, getPopularPosts, getTags } from '../../api/home'
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const searchName = ref('')
const categories = ref([]);
const popularTags = ref([]);
const popularPosts = ref([]);

const init = async () => {
  getCategoriesList()
  getPopularPosts().then(res => {
    if (res.code === 200) {
      popularPosts.value = (res.data || [])
    }
  })
  getTags().then(res => {
    if (res.code === 200) {
      popularTags.value = (res.data || []).map((item:any) => ({
        id: item.id,
        name: item.name,
        count: item.count,
      }))
    }
  })
}

const getCategoriesList = async () => {
  const _p:any = {}
  if (searchName.value) _p.name = searchName.value
  getCategories(_p).then(res => {
    if (res.code === 200) {
      categories.value = (res.data || []).map((item:any) => ({
        id: item.id,
        name: item.name,
        count: item.count,
      }))
    }
  })
}

const handleSearch = (e:any) => {
  getCategoriesList()
}
// 查看博客详情
const viewBlog = (id: number) => {
  router.push(`/blog/${id}`)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">技术分类</h1>
      <p class="text-gray-600 mb-8">按技术栈和领域浏览文章，快速找到你感兴趣的内容</p>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 左侧分类筛选 -->
        <div class="lg:w-1/4">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-gray-900">分类筛选</h2>
              <button class="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div class="mb-4 py-2 px-3 bg-gray-900 text-white rounded-md font-medium">全部分类</div>

            <ul class="space-y-2">
              <li v-for="category in categories" :key="category.id" class="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer transition-colors duration-200">
                <span>{{ category.name }}</span>
                <span class="text-gray-500 text-sm">{{ category.count }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 右侧主内容 -->
        <div class="lg:w-3/4">
          <!-- 分类搜索 -->
          <div class="bg-white rounded-lg shadow-sm p-4 mb-6 box-border relative">
            <input
              type="text"
              placeholder="搜索分类或标签..."
              class="w-[200px] py-2 px-4 pr-10 rounded-md border border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              v-model="searchName"
            >
            <button class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600" @click="handleSearch">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <!-- 分类卡片 -->
          <h2 class="text-xl font-bold text-gray-900 mb-4">所有分类</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div v-for="category in categories" :key="category.id" class="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <div :class="`${category.color} w-3 h-3 rounded-full mr-2`"></div>
                  <h3 class="font-semibold text-gray-900">{{ category.name }}</h3>
                </div>
                <p class="text-gray-600 text-sm mb-4">{{ category.description }}</p>
                <div class="flex justify-between items-center">
                  <!-- <span class="text-gray-500 text-sm">{{ category.count }} 篇文章</span> -->
                  <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">点击查看 →</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 热门标签 -->
          <h2 class="text-xl font-bold text-gray-900 mb-4">热门标签</h2>
          <div class="bg-white rounded-lg shadow-sm p-6 mb-10">
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in popularTags" :key="tag.id" class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-200">{{ tag.name }}</span>
            </div>
          </div>

          <!-- 最新文章 -->
          <h2 class="text-xl font-bold text-gray-900 mb-4">最新文章</h2>
          <div class="space-y-6">
            <div v-for="article in popularPosts" :key="article.id" class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3">
                  <img :src="article.cover_url" alt="文章封面" class="w-full h-full object-cover">
                </div>
                <div class="md:w-2/3 p-6">
                  <h3 class="font-bold text-lg text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-200" @click="viewBlog(article.id)">{{ article.title }}</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ article.title }}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span v-for="tag in article.tags" :key="tag" class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{{ tag }}</span>
                  </div>
                  <div class="flex justify-between items-center text-xs text-gray-500">
                    <span>{{ article.authorName }} • {{ article.created_at }}</span>
                    <span>{{ article.readTime }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* 自定义样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>