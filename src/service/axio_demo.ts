import axios from 'axios'

// axios的实例对象
// axios基本使用
axios.get('http://123.207.32.32:8000/home/multidata').then((response) => {
  console.log(response.data)
})

axios
  .get('https://httpbin.org/get', {
    params: {
      name: 'Ghost',
      age: 18
    }
  })
  .then((response) => {
    console.log(response.data)
  })

axios
  .post('https://httpbin.org/post', {
    data: {
      name: 'GhostClock',
      age: 20
    }
  })
  .then((response) => {
    console.log(response.data)
  })

// axios的配置选项
axios.defaults.baseURL = 'https://httpbin.org/'
// axios.defaults.timeout = 15000
// axios.defaults.headers = { key1: '' }

// axios.all -> 多个请求，一个返回
axios
  .all([
    axios.get('/get', { params: { name: 'Ghost', age: 18 } }),
    axios.post('/post', { data: { name: 'Clock', age: 20 } })
  ])
  .then((response) => {
    console.log(response[0].data)
    console.log(response[1].data)
  })

// 请求拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的操作
    // 1、给请求添加token
    // 2、加上loading动画
    // ...
    console.log('请求成功的拦截')
    return config
  },
  (error) => {
    console.log('请求发生错误')
    return error
  }
)
// 响应拦截器
// fn1: 数据响应成功会执行的函数
// fn2: 数据响应失败会执行的函数
axios.interceptors.response.use(
  (response) => {
    console.log('数据响应成功的拦截')
    return response
  },
  (error) => {
    console.log('服务器响应失败')
    return error
  }
)
