let BASE_URL = ''
let BASE_NAME = ''

// 配置环境方式一：
// 根据process.env.NODE_ENV来区分环境
// 开发环境: development
// 生产环境: production
// 测试环境: test
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  BASE_URL = '/develop'
  BASE_NAME = '开发环境'
} else if (process.env.NODE_ENV === 'production') {
  // 生产环境
  BASE_URL = '/prod'
  BASE_NAME = '生产环境'
} else {
  // 测试环境
  BASE_URL = '/test'
  BASE_NAME = '测试环境'
}

export { BASE_URL, BASE_NAME }
