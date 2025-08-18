<script setup lang="ts"></script>

<template>
  <footer class="footer-container bg-white border-t border-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 博客信息 -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center mb-4">
            <div class="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-2">
              <span class="font-bold">T</span>
            </div>
            <h2 class="text-xl font-bold text-blue-600">TechBlog</h2>
          </div>
          <p class="text-gray-600 text-sm mb-4">专注于现代Web开发技术分享，探索前沿技术趋势，与开发者共同成长。</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">快速链接</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">技术分享</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">项目展示</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">文章归档</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">关于博主</a></li>
          </ul>
        </div>

        <!-- 技术栈 -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">技术栈</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">React & Next.js</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">TypeScript</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Node.js</a></li>
            <li><a href="#" class="text-gray-600 hover:text-blue-600 transition-colors duration-200">Python</a></li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">联系方式</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>邮箱: hello@techblog.com</li>
            <li>微信: TechBlogger</li>
            <li>位置: 中国·深圳</li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm mb-4 md:mb-0">© 2024 TechBlog. 保留所有权利.</p>
        <p class="text-gray-400 text-sm">Made with ❤️ by Tech Blogger</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: white;
  border-top: 1px solid #f0f0f0;
  margin-top: auto;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .footer-container {
    padding: 20px 15px;
  }
  .grid-cols-1.md\:grid-cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>