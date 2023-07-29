import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

export interface GCInterceptors<T = AxiosResponse> {
  // 这里的类型已经不是AxiosRequestConfig了，是InternalAxiosRequestConfig
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  // 这个error的类型是any，仅在这一行消除any类型警告
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (response: T) => T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseInterceptorCatch?: (error: any) => any
}

export interface GCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GCInterceptors<T>
  showLoading?: boolean
}
