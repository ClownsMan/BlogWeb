<script setup lang="ts">
import { ref } from 'vue'
import { ElCard, ElRow, ElCol, ElButton, ElIcon } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

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
  <div class="blog-list-container">
    <h2 class="blog-list-title">博客列表</h2>
    <ElRow :gutter="{ xs: 16, sm: 24, md: 32, lg: 48 }">
      <ElCol :xs="24" :sm="12" :md="8" v-for="post in blogPosts" :key="post.id">
        <ElCard class="blog-card">
          <template #header>
            <div class="card-header">
              <span>{{ post.title }}</span>
            </div>
          </template>
          <div class="blog-meta">
            <span class="author">作者: {{ post.author }}</span>
            <span class="date">日期: {{ post.date }}</span>
          </div>
          <div class="blog-excerpt">{{ post.excerpt }}</div>
          <div class="blog-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="blog-actions">
            <ElButton type="primary" size="small" @click="viewBlog(post.id)" :icon="ElementPlusIconsVue.Eye">查看</ElButton>
            <ElButton type="success" size="small" @click="editBlog(post.id)" :icon="ElementPlusIconsVue.Edit">编辑</ElButton>
            <ElButton type="danger" size="small" @click="deleteBlog(post.id)" :icon="ElementPlusIconsVue.Delete">删除</ElButton>
          </div>
        </ElCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<style scoped>
.blog-list-container {
  padding: 20px;
}

.blog-list-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.blog-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  color: #666;
  font-size: 14px;
}

.blog-excerpt {
  flex: 1;
  margin-bottom: 15px;
  line-height: 1.6;
}

.blog-tags {
  margin-bottom: 15px;
}

.tag {
  display: inline-block;
  background-color: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 5px;
  font-size: 12px;
}

.blog-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .blog-list-container {
    padding: 10px;
  }

  .blog-list-title {
    font-size: 20px;
  }

  .blog-meta {
    flex-direction: column;
    gap: 5px;
  }

  .blog-actions {
    flex-direction: column;
    gap: 8px;
  }
}
</style>