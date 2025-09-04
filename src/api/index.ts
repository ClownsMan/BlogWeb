import axios from './axios'
import type { AxiosRequestConfig } from 'axios'

// 创建API模块，支持通过$api调用
const api = {
  // GET请求方法
  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return axios.get(url, { params, ...config })
  },
  
  // POST请求方法
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axios.post(url, data, config)
  },
  
  // PUT请求方法
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axios.put(url, data, config)
  },
  
  // DELETE请求方法
  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return axios.delete(url, { params, ...config })
  },
  
  // PATCH请求方法
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axios.patch(url, data, config)
  },
  
  // 原始axios实例，可用于特殊配置
  request: axios
}

export default api