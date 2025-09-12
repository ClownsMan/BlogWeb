<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import BlogList from '@/components/blog/BlogList.vue'
import { ref, onMounted } from 'vue'
import { getPosts } from '@/api/home'
import { useRouter } from 'vue-router'

// 创建router实例
const router = useRouter()

const info = ref({
  postNum: 99,
})

const init = async () => {
  getPosts().then(res => {
    if (res.code === 200) {
      info.value.postNum = res.data.total
    }
  })
}

// 查看博客详情
const viewBlog = () => {
  router.push(`/tech-share`)
}

// 查看关于博主
const viewAbout = () => {
  router.push(`/about`)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="home-container flex flex-col min-h-screen w-full overflow-hidden">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="flex-grow">
      <!-- 英雄区域 -->
      <section class="bg-gradient-to-r from-blue-50 to-indigo-50 banner_view">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center gap-12 justify-center">
            <div class="md:w-1/2 lg:w-full space-y-6 flex flex-col justify-center items-center">
              <div class="w-full text-4xl md:text-5xl font-bold text-gray-900 leading-tight welcome_title text-center">
                Welcome
              </div>
              <div class="w-full text-lg text-gray-600 text-center website_name">
                FrontEnd TechBlog
              </div>
              <!-- <div class="flex flex-wrap gap-4">
                <button class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2" @click="viewBlog">
                  阅读最新文章
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <button class="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300" @click="viewAbout">
                  关于博主
                </button>
              </div> -->
            </div>
            <!-- <div class="md:w-1/2 relative">
              <div class="w-full h-64 md:h-80 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <img src="https://picsum.photos/800/600" alt="代码编辑器" class="w-full h-full object-cover"/>
              </div>
              <div class="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm font-medium">持续更新</span>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <!-- 统计数据区域 -->
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-3 gap-8 text-center">
            <div class="space-y-2">
              <div class="text-3xl md:text-4xl font-bold text-blue-600">{{ info.postNum  }}</div>
              <div class="text-gray-600">技术文章</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl md:text-4xl font-bold text-blue-600">1000</div>
              <div class="text-gray-600">月访问量</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl md:text-4xl font-bold text-blue-600">8</div>
              <div class="text-gray-600">年经验</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 主要内容区域 -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- 博客列表区域 -->
            <div class="flex-grow">
              <!-- <div class="mb-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">最新文章</h2>
                <div class="h-1 w-20 bg-blue-500"></div>
              </div> -->
              <BlogList />
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
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
.home-container {
  background-color: #f5f7fa;
}

.banner_view {
  background-image: url('https://pingtou-1257997645.cos.ap-shanghai.myqcloud.com/static/pexels-ithalu-907485.jpg');
  height: 40vh;
  background-size: cover;
  background-position: center;
  padding: 160px 0 40px;
}

.welcome_title {
  font-family: 'Pacifico', 'Dancing Script', cursive;
  font-size: 6rem;
  color: #ff69b4; /* 粉红色 */
  background: linear-gradient(135deg, #ffcccb, #ff425e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  font-weight: normal;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.website_name {
  font-family: 'Inter', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: 5rem;
  letter-spacing: 0.5px;
  color: #333;
  line-height: 30px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  main {
    padding: 15px;
  }

  .mb-6 h2 {
    font-size: 20px;
  }
}
</style>