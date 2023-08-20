import Request from '../index'
import { AccountData, UserInfoData, UserMenus } from '../mock/login'
import {
  IAccount,
  IDataType,
  ILoginResult,
  IUserInfoResult,
  IUserMenus
} from './types'

enum LoginAPI {
  // 登录
  AccountLogin = '/post',
  // 用户信息
  UserInfo = '/post',
  // 菜单信息
  UserMenus = '/post'
}

export function accountLoginRequest(account: IAccount) {
  return Request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    // 模拟登录信息
    data: {
      ...account,
      code: 0,
      data: { ...AccountData }
    }
  })
}

export function requestUserInfoById(id: number) {
  return Request.post<IDataType<IUserInfoResult>>({
    url: LoginAPI.UserInfo,
    // 模拟登录信息
    data: {
      id,
      code: 0,
      data: { ...UserInfoData }
    },
    showLoading: false
  })
}

export function requestUserMenusByRoleId(roleId: number) {
  return Request.post<IDataType<[IUserMenus]>>({
    url: LoginAPI.UserMenus,
    // 模拟数据请求
    data: {
      roleId,
      code: 0,
      data: UserMenus
    },
    showLoading: false
  })
}
