export interface ISystemUserType {
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

export interface ISystemState {
  userList: ISystemUserType[]
  userCount: number

  roleList: any[]
  roleCount: number

  goodsList: any[]
  goodsCount: number

  menuList: any[]
  menuCount: number
}
