<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCategories, getPopularPosts, getTags } from '../../api/home'

const init = async () => {
  getCategories().then(res => {
    if (res.code === 200) {
      categories.value = (res.data || []).map((item:any) => ({
        id: item.id,
        name: item.name,
        count: item.count,
      }))
    }
  })
  getPopularPosts().then(res => {
    if (res.code === 200) {
      popularPosts.value = (res.data || []).map((item:any) => ({
        id: item.id,
        title: item.title,
        views: item.views,
      }))
    }
  })
  getTags().then(res => {
    if (res.code === 200) {
      tags.value = (res.data || []).map((item:any) => ({
        id: item.id,
        name: item.name,
        count: item.count,
      }))
    }
  })
}

const categories = ref([]) // 分类数据
const popularPosts = ref([]) // 热门文章数据
const tags = ref([]) // 标签

onMounted(() => {
  init()
})
</script>

<template>
  <aside class="sidebar-container">
    <div class="sidebar-card mb-6">
      <div class="sidebar-header flex items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
        <Folder class="mr-2 text-blue-500" />
        <h3 class="font-medium text-gray-700">文章分类</h3>
      </div>
      <div class="divide-y divide-gray-200">
        <div v-for="category in categories" :key="category.id">
          <a href="#" class="flex justify-between items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
            <span class="text-gray-700">{{ category.name }}</span>
            <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs">{{ category.count }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="sidebar-card mb-6">
      <div class="sidebar-header flex items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
        <Fire class="mr-2 text-orange-500" />
        <h3 class="font-medium text-gray-700">热门文章</h3>
      </div>
      <div class="divide-y divide-gray-200">
        <div v-for="post in popularPosts" :key="post.id">
          <a href="#" class="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
            <span class="text-gray-700 line-clamp-1">{{ post.title }}</span>
            <span class="ml-auto flex items-center text-gray-500 text-xs">
              <View class="mr-1" /> {{ post.views }}
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="sidebar-card">
      <div class="sidebar-header flex items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
        <Tags class="mr-2 text-purple-500" />
        <h3 class="font-medium text-gray-700">标签云</h3>
      </div>
      <div class="p-4 flex flex-wrap gap-2">
        <a v-for="tag in tags" :key="tag.id" href="#" class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors duration-150">{{ tag.name }}</a>
        <!-- <a href="#" class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm hover:bg-purple-100 transition-colors duration-150">TypeScript</a>
        <a href="#" class="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm hover:bg-orange-100 transition-colors duration-150">Node.js</a>
        <a href="#" class="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm hover:bg-red-100 transition-colors duration-150">HTML</a>
        <a href="#" class="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm hover:bg-yellow-100 transition-colors duration-150">CSS</a>
        <a href="#" class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm hover:bg-indigo-100 transition-colors duration-150">Docker</a>
        <a href="#" class="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm hover:bg-pink-100 transition-colors duration-150">Kubernetes</a> -->
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-container {
  width: 100%;
  max-width: 300px;
}

.sidebar-card {
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  overflow: hidden;
}

.sidebar-header {
  font-size: 16px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .sidebar-container {
    max-width: 100%;
    margin-bottom: 20px;
  }
}
</style>