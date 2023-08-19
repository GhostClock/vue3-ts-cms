import { defineStore } from 'pinia'
import { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

import { IAccount } from '@/service/login/types'
import type { IUserInfoResult, IUserMenus } from '@/service/login/types'

export const useLoginStore = defineStore('login', {
  state: (): ILoginState => {
    return {
      token: '',
      userInfo: <IUserInfoResult>{},
      userMenus: [<IUserMenus>{}]
    }
  },
  actions: {
    async accountLoginAction(payload: IAccount) {
      // 1、实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.json.data
      if (token) {
        this.token = token
        localCache.setCache('token', token)
        console.log('登录成功')
      }

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.json.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)

      // 3、请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.json.data
      this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)

      // 4、跳转到首页
      router.push('/main')

      // 5、登录完毕后初始化菜单
      this.initialMenus(userMenus)
    },
    // 登录成功后初始化store里面的登录信息
    loadLocalLoginInfo() {
      const token = localCache.getCache('token')
      if (token) {
        this.token = token
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        this.userInfo = userInfo
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        this.userMenus = userMenus
      }
      if (!userMenus) return
      // 已经完成登录后，初始化菜单
      this.initialMenus(userMenus)
    },

    // 初始化菜单
    initialMenus(userMenus: IUserMenus[]) {
      // useMenus映射到router
      const routes = mapMenusToRoutes(userMenus)
      // 将router添加到router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    },

    phoneLoginAction(payload: object) {
      console.log('执行phoneLoginAction', payload)
    }
  },
  getters: {}
})

// 登录成功后初始化store里面的数据
export function setupStore() {
  const loginStore = useLoginStore()
  loginStore.loadLocalLoginInfo()
}
