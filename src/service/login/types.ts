export interface IAccount {
  account: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  // 模拟数据响应
  json: {
    code: number
    data: T
  }
}
