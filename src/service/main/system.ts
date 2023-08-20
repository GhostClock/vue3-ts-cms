import Request from '../index'
import { IDataType, ISystemUserType } from './types'
import { UserListData } from '../mock/main'
import { SystemPageListUrl } from './systemUrls'

export function getPageListData(url: SystemPageListUrl, queryInfo: any) {
  // TODO： 模拟请求
  switch (url) {
    case SystemPageListUrl.userList:
      // TODO 进行接口替换
      url = SystemPageListUrl.rootUrl
      break
    default:
      break
  }
  return Request.post<IDataType<ISystemUserType>>({
    url,
    data: {
      ...queryInfo,
      code: 0,
      data: { ...UserListData }
    }
  })
}
