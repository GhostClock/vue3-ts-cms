// 返回的最外层数据类型
export interface IDataType<T = any> {
  // 模拟数据响应
  json: {
    code: number
    data: T
  }
}

export interface ISystemUserType {
  list: ISystemUserItemType[]
  totalCount: number
}

export interface ISystemUserItemType {
  id: number
  name: string
  realname: string
  cellphone: 18812345678
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
