import { defineStore } from 'pinia'
import { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

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
