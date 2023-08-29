import Request from '../index'
import { IDataBaseType } from '../types/base-types'
import { ISystemUserType } from './types'
import { SystemPageListUrl } from '../urls'

export function getPageListData(url: SystemPageListUrl, queryInfo: any) {
  return Request.post<IDataBaseType<ISystemUserType>>({
    url,
    data: {
      ...queryInfo
    }
  })
}
