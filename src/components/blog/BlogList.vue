<script setup lang="ts">
import { ref } from 'vue'
import { ElCard, ElRow, ElCol, ElButton } from 'element-plus'
import { View, Edit, Delete } from '@element-plus/icons-vue'

// 博客数据接口定义
interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  tags: string[]
}

// 模拟博客数据
const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Vue3 + Vite 开发体验',
    excerpt: '探索 Vue3 和 Vite 带来的开发效率提升和新特性...',
    author: '张小明',
    date: '2023-10-15',
    tags: ['Vue3', 'Vite', '前端']
  },
  {
    id: 2,
    title: 'Element Plus 组件库使用指南',
    excerpt: '详细介绍 Element Plus 组件库的使用方法和最佳实践...',
    author: '李华',
    date: '2023-10-10',
    tags: ['Element Plus', 'UI组件', 'Vue3']
  },
  {
    id: 3,
    title: '移动端适配技巧总结',
    excerpt: '分享几种常用的移动端适配方案和实现细节...',
    author: '王小红',
    date: '2023-10-05',
    tags: ['移动端', '适配', 'CSS']
  }
])

// 查看博客详情
const viewBlog = (id: number) => {
  console.log('查看博客:', id)
  // 这里可以添加路由跳转逻辑
}

// 编辑博客
const editBlog = (id: number) => {
  console.log('编辑博客:', id)
  // 这里可以添加编辑逻辑
}

// 删除博客
const deleteBlog = (id: number) => {
  blogPosts.value = blogPosts.value.filter(post => post.id !== id)
}
</script>

<template>
  <div class="py-5 px-4 md:px-6 bg-gray-50 min-h-screen">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">博客列表</h2>
    <ElRow :gutter="16">
      <ElCol :xs="24" :sm="12" :md="8" v-for="post in blogPosts" :key="post.id">
        <ElCard class="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
          <template #header>
            <div class="card-header">
              <span>{{ post.title }}</span>
            </div>
          </template>
          <div class="flex justify-between text-sm text-gray-600 mt-3 mb-2 flex-col sm:flex-row gap-2">
            <span class="font-medium">作者: {{ post.author }}</span>
            <span>日期: {{ post.date }}</span>
          </div>
          <div class="flex-1 mb-4 line-clamp-3 text-gray-700 leading-relaxed">{{ post.excerpt }}</div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in post.tags" :key="tag" class="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">{{ tag }}</span>
          </div>
          <div class="flex justify-between mt-3 gap-2">
            <ElButton type="primary" size="small" @click="viewBlog(post.id)" :icon="View" class="flex-1 bg-blue-500 hover:bg-blue-600">查看</ElButton>
            <ElButton type="success" size="small" @click="editBlog(post.id)" :icon="Edit" class="flex-1 bg-green-500 hover:bg-green-600">编辑</ElButton>
            <ElButton type="danger" size="small" @click="deleteBlog(post.id)" :icon="Delete" class="flex-1 bg-red-500 hover:bg-red-600">删除</ElButton>
          </div>
        </ElCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<style scoped>
/* 保留一些无法被UnoCSS完全替代的样式 */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 移动端适配的媒体查询可以保留，或者在需要时通过UnoCSS的响应式工具类替代 */
@media (max-width: 768px) {
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>