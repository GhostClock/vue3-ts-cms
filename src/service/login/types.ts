// 帐号信息
export interface IAccount {
  account: string
  password: string
}

// 返回的最外层数据类型
export interface IDataType<T = any> {
  // 模拟数据响应
  json: {
    code: number
    data: T
  }
}

// token信息数据
export interface ILoginResult {
  id: number
  name: string
  token: string
}

// 用信息数据
export interface IUserInfoResult {
  cellphone: string
  createAt: string
  department: {
    id: number
    name: string
    parent: string
    createAt: string
    updateAt: string
  }
  enable: boolean
  id: number
  realname: string
  role: {
    id: number
    name: string
    intor: string
    createAt: string
    updateAt: string
  }
  updateAt: string
}

// 菜单信息
export interface IUserMenus {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: [IUserSubMenus]
}

// 二级菜单信息
export interface IUserSubMenus {
  id: number
  name: string
  parentId: number
  type: number
  url: string
  sort: number
  icon: string
  children: [IUserSubMenus]
}
