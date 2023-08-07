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
          icon: 'Monitor',
          sort: 1,
          children: [
            {
              id: 39,
              name: '核心技术',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            }
          ]
        },
        {
          id: 1,
          name: '系统管理',
          type: 1,
          url: '/main/system',
          icon: 'Setting',
          sort: 2,
          children: [
            {
              id: 39,
              name: '用户管理',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            },
            {
              id: 39,
              name: '部门管理',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            },
            {
              id: 39,
              name: '菜单管理',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            },
            {
              id: 39,
              name: '角色管理',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            }
          ]
        },
        {
          id: 9,
          name: '商品中心',
          type: 1,
          url: '/main/product',
          icon: 'Goods',
          sort: 3,
          children: [
            {
              id: 39,
              name: '商品类别',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            },
            {
              id: 39,
              name: '商品信息',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            }
          ]
        },
        {
          id: 41,
          name: '随便聊聊',
          type: 1,
          url: '/main/story',
          icon: 'ChatDotRound',
          sort: 4,
          children: [
            {
              id: 39,
              name: '你的故事',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            },
            {
              id: 39,
              name: '故事列表',
              parentId: 38,
              type: 2,
              sort: 2,
              url: '/main/analysis/overview',
              children: null
            }
          ]
        }
      ]
    },
    showLoading: false
  })
}
