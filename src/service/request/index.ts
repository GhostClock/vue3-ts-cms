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

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: GCRequestConfig) {
    this.instance.request(config).then((response) => {
      console.log(response.data)
    })
  }
}

export default GCRequest
