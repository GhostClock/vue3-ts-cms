import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { GCInterceptors, GCRequestConfig } from './types'

class GCRequest {
  instance: AxiosInstance
  interceptors?: GCInterceptors

  // 扩展config，用于传递拦截器，让调用者自己控制是否需要对应的拦截器
  constructor(config: GCRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应实例的拦截器 - 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // tips: 后添加的先执行
    // 添加所有实例都有的拦截器 - 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局拦截器: 请求成功拦截器')
        return config
      },
      (err) => {
        console.log('全局拦截器: 请求失败拦截器')
        return err
      }
    ),
      this.instance.interceptors.response.use(
        (config) => {
          console.log('全局拦截器: 响应成功拦截器')
          return config
        },
        (error) => {
          console.log('全局拦截器: 响应失败拦截器')
          return error
        }
      )
  }

  request(config: GCRequestConfig) {
    this.instance.request(config).then((response) => {
      console.log(response.data)
    })
  }
}

export default GCRequest
