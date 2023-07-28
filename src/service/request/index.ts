import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { GCInterceptors, GCRequestConfig } from './types'

import { ElLoading } from 'element-plus'

const DEFAULT_LODING = true
class GCRequest {
  instance: AxiosInstance
  interceptors?: GCInterceptors
  showLoading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loading?: any // TODO 这个类型暂时找不到，用any代替

  // 扩展config，用于传递拦截器，让调用者自己控制是否需要对应的拦截器
  constructor(config: GCRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LODING
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)',
            fullscreen: true
          })
        }

        console.log('当前请求的Url: ', config.url)
        console.log('全局拦截器: 请求成功拦截器')
        return config
      },
      (err) => {
        console.log('全局拦截器: 请求失败拦截器')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        console.log('全局拦截器: 响应成功拦截器')
        console.log('响应的数据: ', response.data)
        const data = response.data
        if (data === '-1001') {
          console.log('响应失败')
          return null
        }
        this.loading?.close()
        this.showLoading = DEFAULT_LODING
        return data // 在全局拦截器里面得到真实的网络数据
      },
      (error) => {
        console.log('全局拦截器: 响应失败拦截器')
        if (error.response.state === 404) {
          console.log('404错误')
        }
        this.loading?.close()
        this.showLoading = DEFAULT_LODING
        return error
      }
    )
  }

  request(config: GCRequestConfig) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(
        config as InternalAxiosRequestConfig // 强制类型转换，把父类型转为子类型
      )
    }
    // 使用传入的值
    if (config.showLoading === false) {
      this.showLoading = false
    }
    this.instance.request(config).then((response) => {
      if (config.interceptors?.responseInterceptor) {
        response = config.interceptors.responseInterceptor(response)
      }
      // 最终得到的数据
      console.log(response)
      // 把showLoading设置为初始值,这样就不会影响下一次的请求
      this.showLoading = DEFAULT_LODING
    })
  }
}

export default GCRequest
