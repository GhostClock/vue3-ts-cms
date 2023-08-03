import Request from '../index'
import {
  IAccount,
  IDataType,
  ILoginResult,
  IUserInfoResult,
  IUserMenus
} from './types'

enum LoginAPI {
  AccountLogin = '/post',
  UserInfo = '/post',
  UserMenus = '/post'
}

export function accountLoginRequest(account: IAccount) {
  return Request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    // 模拟登录信息
    data: {
      ...account,
      code: 0,
      data: {
        id: 1,
        name: 'GhostClock',
        token: '这是token信息'
      }
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
      data: {
        cellphone: '18812345678',
        createAt: '2023-08-01',
        department: {
          id: 1,
          name: '总裁办',
          parent: null,
          createAt: '2023-08-01',
          updateAt: '2023-08-01'
        },
        enable: true,
        id: 1,
        realname: 'GhostClock',
        role: {
          id: 1,
          name: '超级管理员',
          intor: '所有权限',
          createAt: '2023-08-01',
          updateAt: '2023-08-01'
        },
        updateAt: '2023-08-01'
      }
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
      data: [
        {
          id: 38,
          name: '系统总揽',
          type: 1,
          url: '/main/analysis',
          icon: 'el-icon-monior',
          sort: 1
        },
        {
          id: 1,
          name: '系统管理',
          type: 1,
          url: '/main/system',
          icon: 'el-icon-setting',
          sort: 2
        },
        {
          id: 9,
          name: '商品中心',
          type: 1,
          url: '/main/product',
          icon: 'el-icon-goods',
          sort: 3
        },
        {
          id: 41,
          name: '随便聊聊',
          type: 1,
          url: '/main/story',
          icon: 'el-icon-chat-line-round',
          sort: 4
        }
      ]
    },
    showLoading: false
  })
}
