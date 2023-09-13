import Request from '../index'
import { IDataBaseType } from '../types/base-types'
import { ISystemUserType } from './types'

export function getPageListData(url: string, queryInfo: any) {
  return Request.post<IDataBaseType<ISystemUserType>>({
    url,
    data: {
      ...queryInfo
    }
  })
}
