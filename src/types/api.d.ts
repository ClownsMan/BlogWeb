import 'vue'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

// 定义API接口类型
export interface ApiInstance {
  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  request: AxiosInstance
}

// 扩展Vue应用实例类型
declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ApiInstance
  }
}