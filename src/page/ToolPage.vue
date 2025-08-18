<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import { ElCard, ElRow, ElCol, ElInput, ElSelect, ElOption, ElButton, ElTabs, ElTabPane } from 'element-plus'
// 图标已在main.ts中全局注册，无需单独导入

// 工具数据接口定义 - 触发重新编译
interface Tool {
  id: string
  name: string
  description: string
  icon: string
  category: string
  popular: boolean
}

// 模拟工具数据
const tools = ref<Tool[]>([
  {
    id: 'json-formatter',
    name: 'JSON格式化',
    description: '格式化和压缩JSON数据',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zm5.414 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l1.293-1.293-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>',
    category: '格式化',
    popular: true
  },
  {
    id: 'base64',
    name: 'Base64编码',
    description: 'Base64编码解码',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2h.01a1 1 0 100 2H10zm-3.01-3a1 1 0 100-2h.01a1 1 0 100 2H7zm3.01-3a1 1 0 100-2h.01a1 1 0 100 2H10zm-3.01-3a1 1 0 100-2h.01a1 1 0 100 2H7zm3.01-3a1 1 0 100-2h.01a1 1 0 100 2H10z"/></svg>',
    category: '编码解码',
    popular: true
  },
  {
    id: 'color-converter',
    name: '颜色转换',
    description: 'HEX/RGB/HSL转换',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>',
    category: '实用工具',
    popular: true
  },
  {
    id: 'password-generator',
    name: '密码生成',
    description: '生成安全密码',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>',
    category: '生成工具',
    popular: true
  },
  {
    id: 'url-encoder',
    name: 'URL编码',
    description: 'URL编码解码',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.586 1.586a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-2.829 2.829a2 2 0 01-2.828-2.828V1.586zM11.414 1.586a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-2.829 2.829a2 2 0 01-2.828-2.828V1.586zM4.586 10.586a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-2.829 2.829a2 2 0 01-2.828-2.828v-2.829zM11.414 10.586a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-2.829 2.829a2 2 0 01-2.828-2.828v-2.829z" clip-rule="evenodd"/></svg>',
    category: '编码解码',
    popular: false
  },
  {
    id: 'regex-tester',
    name: '正则测试',
    description: '正则表达式测试',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/></svg>',
    category: '测试工具',
    popular: false
  },
  {
    id: 'uuid-generator',
    name: 'UUID生成',
    description: '生成UUID标识符',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>',
    category: '生成工具',
    popular: false
  },
  {
    id: 'time-converter',
    name: '时间戳转换',
    description: '时间戳日期转换',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cyan-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>',
    category: '实用工具',
    popular: false
  },
  {
    id: 'hash-calculator',
    name: '哈希计算',
    description: 'MD5/SHA256计算',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>',
    category: '编码解码',
    popular: false
  },
  {
    id: 'qr-code',
    name: '二维码生成',
    description: '文本转二维码',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 4a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm12 0a1 1 0 011 1v1a1 1 0 11-2 0V5a1 1 0 011-1zm0 4a1 1 0 011 1v1a1 1 0 11-2 0V9a1 1 0 011-1zm0 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-8 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-4a1 1 0 011 1v1a1 1 0 11-2 0V9a1 1 0 011-1zm0-4a1 1 0 011 1v1a1 1 0 11-2 0V5a1 1 0 011-1z"/></svg>',
    category: '生成工具',
    popular: false
  },
  {
    id: 'markdown-preview',
    name: 'Markdown预览',
    description: 'Markdown格式化',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>',
    category: '格式化',
    popular: false
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum',
    description: '生成占位文本',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/></svg>',
    category: '生成工具',
    popular: false
  },
])

// 获取所有分类
const categories = ref<string[]>(['全部工具', ...Array.from(new Set(tools.value.map(tool => tool.category)))])

// 状态管理
const selectedTool = ref<Tool | null>(tools.value[0])
const searchQuery = ref('')
const selectedCategory = ref('全部工具')
const copied = ref(false)
const inputText = ref('{\'name\': \'example\', \'value\': 123}')
const outputText = ref('')

// 筛选工具
const filteredTools = computed(() => {
  return tools.value.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === '全部工具' || tool.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

// 选择工具
const selectTool = (tool: Tool) => {
  selectedTool.value = tool
  // 重置输入输出
  inputText.value = tool.id === 'json-formatter' ? '{\'name\': \'example\', \'value\': 123}' : ''
  outputText.value = ''
  copied.value = false
}

// 处理工具操作
const handleToolAction = () => {
  if (!selectedTool.value) return

  switch(selectedTool.value.id) {
    case 'json-formatter':
      try {
        // 格式化JSON
        const parsed = JSON.parse(inputText.value.replace(/'/g, '"'))
        outputText.value = JSON.stringify(parsed, null, 2)
      } catch (e) {
        outputText.value = '无效的JSON格式'
      }
      break
    case 'base64':
      // Base64编码
      outputText.value = btoa(unescape(encodeURIComponent(inputText.value)))
      break
    case 'url-encoder':
      // URL编码
      outputText.value = encodeURIComponent(inputText.value)
      break
    // 其他工具的实现...
    default:
      outputText.value = '工具功能正在开发中'
  }
}

// 复制到剪贴板
const copyToClipboard = () => {
  navigator.clipboard.writeText(outputText.value)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

// 初始化选择第一个工具
onMounted(() => {
  if (tools.value.length > 0) {
    selectedTool.value = tools.value[0]
  }
})
</script>

<template>
  <div class="tool-container flex flex-col min-h-screen bg-white">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- 页面标题 -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">开发者工具箱</h1>
        <p class="text-gray-600">集成常用开发工具，提升工作效率。点击工具卡片开始使用。</p>
      </div>

      <!-- 搜索和筛选 -->
      <div class="flex flex-col sm:flex-row gap-4 mb-8">
        <div class="relative flex-grow">
          <!-- <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="18" /> -->
          <ElInput
            v-model="searchQuery"
            placeholder="搜索工具..."
            prefix-icon=""
            class="pl-10"
          />
        </div>
        <ElSelect v-model="selectedCategory" class="w-full sm:w-auto">
          <ElOption v-for="category in categories" :key="category" :label="category" :value="category" />
        </ElSelect>
      </div>

      <!-- 热门工具标签 -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <span class="w-1 h-6 bg-orange-500 mr-2"></span>热门工具
        </h2>
        <div class="flex flex-wrap gap-2">
          <button v-for="tool in tools" :key="tool.id" v-if="tool && tool.popular"
                  class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  @click="selectTool(tool)">
            {{ tool.name }}
          </button>
        </div>
      </div>

      <!-- 工具卡片网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        <ElCard v-for="tool in filteredTools" :key="tool.id"
                :class="selectedTool?.id === tool.id ? 'border-blue-500 shadow-md' : 'border-gray-200'"
                class="cursor-pointer transition-all duration-300"
                @click="selectTool(tool)">
          <div class="flex flex-col items-center p-4 text-center">
            <div class="mb-3" v-html="tool.icon"></div>
            <h3 class="text-lg font-medium text-gray-900 mb-1">{{ tool.name }}</h3>
            <p class="text-sm text-gray-500">{{ tool.description }}</p>
          </div>
        </ElCard>
      </div>

      <!-- 工具详情区域 -->
      <div v-if="selectedTool" class="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-900 flex items-center">
            <span class="mr-2" v-html="selectedTool.icon"></span>
            {{ selectedTool.name }}
            <span class="ml-2 px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded-full">{{ selectedTool.category }}</span>
          </h2>
          <ElButton type="primary" size="small" @click="copyToClipboard" :loading="copied">
            <template #icon v-if="copied">
              <Check size="16" />
            </template>
            <template #icon v-else>
              <Copy size="16" />
            </template>
            {{ copied ? '已复制' : '复制结果' }}
          </ElButton>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 输入区域 -->
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">输入</h3>
            <ElInput
              v-model="inputText"
              type="textarea"
              :rows="8"
              placeholder="请输入内容..."
            />
            <div class="mt-3 flex gap-2">
              <ElButton type="primary" @click="handleToolAction">处理</ElButton>
              <ElButton @click="inputText = ''">清空</ElButton>
            </div>
          </div>

          <!-- 输出区域 -->
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">输出结果</h3>
            <ElInput
              v-model="outputText"
              type="textarea"
              :rows="8"
              readonly
            />
          </div>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<style scoped>
.tool-container {
  background-color: #ffffff;
}

/* 工具卡片样式 */
.el-card {
  transition: all 0.3s ease;
}

.el-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .grid-cols-1.sm\:grid-cols-2.md\:grid-cols-3.lg\:grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .grid-cols-1.sm\:grid-cols-2.md\:grid-cols-3.lg\:grid-cols-4 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>