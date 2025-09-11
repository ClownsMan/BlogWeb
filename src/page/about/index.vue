<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="about-container flex flex-col min-h-screen">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="flex-grow bg-gray-50 py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 个人介绍区域 -->
        <section class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 p-8 flex flex-col items-center justify-center text-center">
              <div class="w-32 h-32 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-4xl font-bold">
                TB
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Tech Blogger</h2>
              <p class="text-gray-600 mb-4">全栈开发工程师 & 技术讲师</p>
              <p class="text-gray-500 text-sm mb-4">深圳，中国 | 5年经验</p>
              <div class="flex space-x-3">
                <a href="https://github.com/techblogger" class="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://twitter.com/techblogger" class="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="mailto:hello@techblogger.dev" class="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="md:w-2/3 p-8 bg-blue-50">
              <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                  关于我
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  你好！我是Tech Blogger，一名充满热情的全栈开发工程师。我专注于现代Web开发技术，特别是React生态系统、Node.js后端开发，以及云原生技术。
                </p>
                <p class="text-gray-700 leading-relaxed mt-3">
                  在过去的5年里，我参与了多个大型项目的开发，从初创公司的快速迭代到大型企业的稳定系统，我积累了丰富的经验。我相信技术的力量可以改变世界，所以我热衷于分享知识，帮助其他开发者成长。
                </p>
                <p class="text-gray-700 leading-relaxed mt-3">
                  除了编程，我还喜欢写作技术博客、参与开源项目、在技术会议上分享经验。我的目标是建立一个活跃的技术社区，让每个人都能在技术的道路上不断前进。
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                  <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    开源贡献者
                  </h3>
                  <p class="text-gray-700">维护多个开源项目，总计1000+ stars</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                  <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    技术讲师
                  </h3>
                  <p class="text-gray-700">在多个技术会议中分享经验</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                  <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    技术写作
                  </h3>
                  <p class="text-gray-700">发表技术文章150+ 篇</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                  <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                    全栈开发
                  </h3>
                  <p class="text-gray-700">5年全栈开发经验</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 技术栈区域 -->
        <section class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">技术栈</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      JavaScript
                    </span>
                    <span class="text-sm font-medium text-gray-700">95%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      React
                    </span>
                    <span class="text-sm font-medium text-gray-700">92%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 92%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Vue.js
                    </span>
                    <span class="text-sm font-medium text-gray-700">82%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-green-500 h-2.5 rounded-full" style="width: 82%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10c0 3.042-1.135 5.824-3 7.938m0-7.938a4 4 0 100-5.656 4 4 0 000 5.656zm0 5.656v10.938h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Python
                    </span>
                    <span class="text-sm font-medium text-gray-700">78%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-400 h-2.5 rounded-full" style="width: 78%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      AWS
                    </span>
                    <span class="text-sm font-medium text-gray-700">70%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-orange-500 h-2.5 rounded-full" style="width: 70%"></div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-700 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      TypeScript
                    </span>
                    <span class="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-700 h-2.5 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-800 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Next.js
                    </span>
                    <span class="text-sm font-medium text-gray-700">88%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-gray-800 h-2.5 rounded-full" style="width: 88%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Node.js
                    </span>
                    <span class="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-green-600 h-2.5 rounded-full" style="width: 85%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Docker
                    </span>
                    <span class="text-sm font-medium text-gray-700">75%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-500 h-2.5 rounded-full" style="width: 75%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-800 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                      PostgreSQL
                    </span>
                    <span class="text-sm font-medium text-gray-700">80%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-800 h-2.5 rounded-full" style="width: 80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 工作经历区域 -->
        <section class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">工作经历</h2>
            <div class="space-y-6">
              <div class="border-l-4 border-blue-500 pl-4 py-1">
                <div class="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 class="text-lg font-bold text-gray-900">高级前端工程师</h3>
                  <span class="text-sm font-medium text-gray-500 mt-1 md:mt-0">2022 - 至今</span>
                </div>
                <p class="text-sm font-medium text-gray-600 mb-2">科技独角兽公司</p>
                <p class="text-gray-700">负责核心产品前端架构设计与开发，团队技术方案确定。</p>
              </div>
              <div class="border-l-4 border-blue-500 pl-4 py-1">
                <div class="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 class="text-lg font-bold text-gray-900">全栈工程师</h3>
                  <span class="text-sm font-medium text-gray-500 mt-1 md:mt-0">2020 - 2022</span>
                </div>
                <p class="text-sm font-medium text-gray-600 mb-2">互联网初创公司</p>
                <p class="text-gray-700">从0到1搭建产品技术栈，负责前后端开发与部署。</p>
              </div>
              <div class="border-l-4 border-blue-500 pl-4 py-1">
                <div class="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 class="text-lg font-bold text-gray-900">前端开发工程师</h3>
                  <span class="text-sm font-medium text-gray-500 mt-1 md:mt-0">2019 - 2020</span>
                </div>
                <p class="text-sm font-medium text-gray-600 mb-2">传统软件公司</p>
                <p class="text-gray-700">企业级应用开发，参与多个大型项目的前端重构。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 联系区域 -->
        <section class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">联系我</h2>
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-2/3">
                <p class="text-gray-700 mb-4">如果你想和我交流技术、合作项目，或者只是聊聊天，欢迎通过以下方式联系我：</p>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@techblogger.dev
                  </li>
                  <li class="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    github.com/techblogger
                  </li>
                  <li class="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    @techblogger
                  </li>
                </ul>
              </div>
              <div class="md:w-1/3 w-full max-w-xs">
                <div class="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
                  <img src="https://picsum.photos/600/400" alt="我的工作台" class="w-full h-full object-cover"/>
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p class="text-white text-sm">我的工作台</p>
                    <p class="text-gray-300 text-xs">整洁高效的编程环境</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<style scoped>
.about-container {
  background-color: #f5f7fa;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>