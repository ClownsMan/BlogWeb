import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || '', // 从环境变量中获取基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么，比如添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    
    // 根据后端返回的数据格式进行统一处理
    // 这里假设后端返回的格式是 { code: number, message: string, data: any }
    if (data.code === 200) {
      return data
    } else {
      // 显示错误信息
      ElMessage.error(data.message || '请求失败')
      return Promise.reject(new Error(data.message || '请求失败'))
    }
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      // 服务器返回错误
      switch (error.response.status) {
        case 401:
          ElMessage.error('未授权，请重新登录')
          // 可以跳转到登录页面
          break
        case 403:
          ElMessage.error('拒绝访问')
          break
        case 404:
          ElMessage.error('请求地址不存在')
          break
        case 500:
          ElMessage.error('服务器内部错误')
          break
        default:
          ElMessage.error('请求失败')
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      ElMessage.error('网络错误，请检查网络连接')
    } else {
      // 设置请求时发生错误
      ElMessage.error('请求配置错误')
    }
    return Promise.reject(error)
  }
)

export default service