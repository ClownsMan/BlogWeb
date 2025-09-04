<template>
  <div class="api-example">
    <h2>API调用示例</h2>
    <el-button type="primary" @click="testGetApi">测试GET请求</el-button>
    <el-button type="success" @click="testPostApi">测试POST请求</el-button>
    <el-divider />
    <div v-if="responseData" class="response-data">
      <h3>响应数据：</h3>
      <pre>{{ responseData }}</pre>
    </div>
    <div v-if="errorMessage" class="error-message">
      <el-alert :message="errorMessage" type="error" show-icon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

// 获取组件实例
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
// 通过实例获取$api
const $api = instance?.proxy?.$api

// 响应数据
const responseData = ref<any>(null)
// 错误信息
const errorMessage = ref<string>('')

// 测试GET请求
const testGetApi = async () => {
  if (!$api) {
    ElMessage.warning('$api未正确挂载')
    return
  }
  
  try {
    errorMessage.value = ''
    // 这里使用一个模拟的API地址，实际项目中替换为真实的API地址
    const data = await $api.get('/test', { id: 1 })
    responseData.value = JSON.stringify(data, null, 2)
    ElMessage.success('GET请求成功')
  } catch (error) {
    console.error('GET请求失败:', error)
    errorMessage.value = 'GET请求失败：' + (error instanceof Error ? error.message : String(error))
  }
}

// 测试POST请求
const testPostApi = async () => {
  if (!$api) {
    ElMessage.warning('$api未正确挂载')
    return
  }
  
  try {
    errorMessage.value = ''
    // 这里使用一个模拟的API地址，实际项目中替换为真实的API地址
    const data = await $api.post('/test', { name: '测试', value: '123' })
    responseData.value = JSON.stringify(data, null, 2)
    ElMessage.success('POST请求成功')
  } catch (error) {
    console.error('POST请求失败:', error)
    errorMessage.value = 'POST请求失败：' + (error instanceof Error ? error.message : String(error))
  }
}
</script>

<style scoped>
.api-example {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.response-data {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
}

.response-data pre {
  white-space: pre-wrap;
  word-break: break-all;
}

.error-message {
  margin-top: 20px;
}

.el-button {
  margin-right: 10px;
}
</style>