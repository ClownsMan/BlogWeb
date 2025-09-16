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

// 控制下方内容区域的显示/隐藏状态
const isContentVisible = ref(true)

// 切换内容区域的显示/隐藏
const toggleContentVisibility = () => {
  isContentVisible.value = !isContentVisible.value
}

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
      <section class="bg-gradient-to-r from-blue-50 to-indigo-50 banner_view relative">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center gap-12 justify-center">
            <div class="md:w-1/2 lg:w-full space-y-6 flex flex-col justify-center items-center">
              <div class="w-full text-4xl md:text-5xl font-bold text-gray-900 leading-tight welcome_title text-center">
                Welcome
              </div>
              <div class="w-full text-lg text-gray-600 text-center website_name">
                FrontEnd TechBlog
              </div>
            </div>
          </div>
        
        </div>
        
        <!-- 收缩/展开控制按钮 -->
        <div class="flex justify-center -mb-12 absolute bottom-20 left-1/2 -translate-x-1/2 toggle_btn" @click="toggleContentVisibility">
          <el-icon>
            <ArrowUpBold v-if="isContentVisible" />
            <ArrowDownBold v-else />
          </el-icon>
        </div>
      </section>

      <!-- 统计数据区域 -->
      <section 
        class="py-12 bg-white transition-all duration-500 ease-in-out"
        :class="{ 'hidden': !isContentVisible }"
      >
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
      <section 
        class="py-12 bg-gray-50 transition-all duration-500 ease-in-out"
      >
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
  background-image: url('https://pingtou-1257997645.cos.ap-shanghai.myqcloud.com/static/web-bg.jpg');
  height: 50vh;
  background-size: cover;
  background-position: center;
  padding: 130px 0 40px;
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
  margin-bottom: 18px;
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
.toggle_btn {
  width: 80px;
  height: 25px;
  background-color: #fff;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 48px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle_btn::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.toggle_btn svg {
  position: relative;
  z-index: 1;
}
</style>