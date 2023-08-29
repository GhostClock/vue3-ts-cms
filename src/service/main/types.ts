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
