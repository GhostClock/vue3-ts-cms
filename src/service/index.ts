// service的统一出口
import GCRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const Request = new GCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('实例拦截器：请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('实例拦截器：请求失败的拦截', error)
      return error
    },
    responseInterceptor: (response) => {
      console.log('实例拦截器：响应成功的拦截')
      return response.data
    },
    responseInterceptorCatch: (error) => {
      console.log('实例拦截器：请求失败的拦截', error)
      return error
    }
  }
})

export default Request
