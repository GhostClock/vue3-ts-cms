import Request from '../index'
import { IDataBaseType } from '../types/base-types'
import { ISystemUserType } from './types'

// 查询用户数据
export function getPageListData(url: string, queryInfo: any) {
  return Request.post<IDataBaseType<ISystemUserType>>({
    url,
    data: {
      ...queryInfo
    }
  })
}

// 删除用户 url: /user/id
export function deletePageData(url: string, info: any) {
  return Request.delete<IDataBaseType>({ url, data: { ...info } })
}

// 新建用户
export function createPageData(url: string, newData: any) {
  return Request.post<IDataBaseType>({ url, data: newData })
}

// 编辑用户
export function editPageData(url: string, id: string, editData: any) {
  return Request.patch<IDataBaseType>({ url, data: { id, editData } })
}
