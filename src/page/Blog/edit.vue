<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { getPostById } from '@/api/home'
// 如需使用marked库，请先安装：npm install marked @types/marked --save
import { marked } from 'marked';
import { convertISOToDateTime } from '@/utils/index'

// 获取路由信息
const route = useRoute()
const postId = route.params.id as string

// 博客文章数据
const blogPost = ref<any>(null)
const isLoading = ref(true)

// 获取博客详情
const fetchBlogDetail = async () => {
  try {
    isLoading.value = true;
    // 尝试从API获取数据
    const res = await getPostById({ id: postId });
    
    if (res.code === 200) {
      // 格式化API返回的数据
      blogPost.value = {
        ...res.data,
        tags: res.data.tags.map((tag: any) => tag.name),
        category: res.data.category.name,
        author: {
          name: res.data.author.username,
          avatar: res.data.author.avatar || 'https://picsum.photos/seed/author/100/100',
          bio: res.data.author.bio || '资深技术博主'
        },
        date: convertISOToDateTime(res.data.createdAt),
        readTime: res.data.readTime || 10,
        views: res.data.views || 0,
        likes: res.data.likes || 0,
        comments: res.data.comments || 0
      };
    } else {
      // 如果API失败，使用模拟数据
      blogPost.value = {};
      ElMessage.warning('使用模拟数据，API请求失败');
    }
  } catch (error) {
    console.error('获取博客详情失败:', error);
    // 出错时使用模拟数据
    blogPost.value = {};
    ElMessage.warning('使用模拟数据，获取博客详情失败');
  } finally {
    isLoading.value = false;
  }
};

// 点赞功能
const handleLike = () => {
  if (blogPost.value) {
    blogPost.value.likes += 1;
    ElMessage.success('点赞成功');
  }
};

// 收藏功能
const handleFavorite = () => {
  ElMessage.success('收藏成功');
};

// 分享功能
const handleShare = () => {
  ElMessage.success('分享链接已复制到剪贴板');
};

// 计算属性：处理Markdown内容渲染
const renderedContent = computed(() => {
  if (!blogPost.value?.content) return '';
  
  // 方案1：如果内容已经是HTML，直接返回
  if (blogPost.value.content.startsWith('<')) {
    return blogPost.value.content;
  }
  
  // 方案2：使用marked库将Markdown转换为HTML（推荐）
  try {
    return marked.parse(blogPost.value.content) as string;
  } catch (error) {
    console.error('Markdown解析失败:', error);
    return blogPost.value.content;
  }
  
  // 为了避免依赖，这里我们简单地将Markdown转换为HTML（实际项目中建议使用marked库）
  let content = blogPost.value.content;
  // 简单的Markdown语法转换
  content = content
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$2</h2>')
    .replace(/^### (.*$)/gm, '<h3>$3</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/^(?!<h|```|\s).*$/gm, '<p>$&</p>');
    
  return content;
});

// 页面加载时获取博客详情
onMounted(() => {
  fetchBlogDetail();
});
</script>

<template>
  <div class="blog-detail-container flex flex-col min-h-screen">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="flex-grow">
      <!-- 博客文章详情 -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- 博客内容区域 -->
            <div class="flex-grow">
              <!-- 加载状态 -->
              <div v-if="isLoading" class="p-8 bg-white rounded-lg shadow-sm">
                <div class="animate-pulse space-y-4">
                  <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div class="h-48 bg-gray-200 rounded"></div>
                </div>
              </div>

              <!-- 博客文章 -->
              <div v-else-if="blogPost" class="bg-white rounded-lg shadow-sm overflow-hidden">
                <!-- 博客封面 -->
                <div class="relative w-full h-64 md:h-80 overflow-hidden">
                  <img :src="blogPost.main_url" :alt="blogPost.title" class="w-full h-full object-cover" />
                  <div class="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {{ blogPost.category }}
                  </div>
                </div>

                <!-- 博客内容 -->
                <div class="p-6 md:p-8">
                  <!-- 博客标题 -->
                  <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {{ blogPost.title }}
                  </h1>

                  <!-- 作者信息 -->
                  <div class="flex flex-wrap items-center gap-4 mb-8 pt-4 border-t border-gray-100">
                    <div class="flex items-center gap-3">
                      <img :src="blogPost.author.avatar" :alt="blogPost.author.name" class="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div class="font-medium text-gray-900">{{ blogPost.author.name }}</div>
                        <div class="text-sm text-gray-500">{{ blogPost.author.bio }}</div>
                      </div>
                    </div>
                    <div class="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ blogPost.date }}
                    </div>
                    <!-- <div class="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                      </svg>
                      {{ blogPost.readTime }} 分钟
                    </div> -->
                    <div class="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                      </svg>
                      {{ blogPost.views }} 阅读
                    </div>
                  </div>

                  <!-- 文章内容 -->
                  <div class="prose prose-blue max-w-none mb-8">
                    <!-- 方案1：继续使用v-html（当前实现） -->
                    <!-- <div v-html="blogPost.content" class="markdown-content"></div> -->
                    
                    <!-- 方案2：使用计算属性处理Markdown（推荐） -->
                    <div v-html="renderedContent" class="markdown-content"></div>
                  </div>

                  <!-- 文章标签 -->
                  <div class="flex flex-wrap gap-2 mb-8">
                    <span class="text-gray-500 mr-2">标签：</span>
                    <a v-for="tag in blogPost.tags" :key="tag" href="#" class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors duration-150">
                      {{ tag }}
                    </a>
                  </div>

                  <!-- 操作按钮 -->
                  <div class="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                    <button @click="handleLike" class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>
                      <span>点赞 ({{ blogPost.likes }})</span>
                    </button>
                    <button @click="handleFavorite" class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-7-3.5L5 18V4z" clip-rule="evenodd" />
                      </svg>
                      <span>收藏</span>
                    </button>
                    <button @click="handleShare" class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0l-3-3a2 2 0 112.828-2.828L10 7.172V15a2 2 0 002 2h2a2 2 0 002-2V7.172l1.414-1.414z" clip-rule="evenodd" />
                      </svg>
                      <span>分享</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 侧边栏 -->
            <div class="hidden md:block w-64 flex-shrink-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<style scoped>
/* 自定义markdown内容样式 */
.markdown-content {
  font-size: 16px;
  line-height: 1.7;
  overflow-wrap: break-word;
  word-break: break-word;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #111827;
}

.markdown-content h1 {
  font-size: 1.875rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.markdown-content h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.3rem;
}

.markdown-content p {
  margin-bottom: 1rem;
}

.markdown-content ul,
.markdown-content ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.markdown-content li {
  margin-bottom: 0.5rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .markdown-content {
    font-size: 15px;
  }
}
</style>
