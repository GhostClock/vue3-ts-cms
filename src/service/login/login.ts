import Request from '../index'
import { IDataBaseType } from '../types/base-types'
import { IAccount, ILoginResult, IUserInfoResult, IUserMenus } from './types'
import { LoginAPI } from '../urls'

export function accountLoginRequest(account: IAccount) {
  return Request.post<IDataBaseType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: {
      ...account
    }
  })
}

export function requestUserInfoById(id: number) {
  return Request.post<IDataBaseType<IUserInfoResult>>({
    url: LoginAPI.UserInfo,
    // 模拟登录信息
    data: {
      id
    },
    showLoading: false
  })
}

export function requestUserMenusByRoleId(roleId: number) {
  return Request.post<IDataBaseType<[IUserMenus]>>({
    url: LoginAPI.UserMenus,
    // 模拟数据请求
    data: {
      roleId
    },
    showLoading: false
  })
}
