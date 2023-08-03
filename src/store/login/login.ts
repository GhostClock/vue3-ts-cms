import { defineStore } from 'pinia'
import { ILoginState } from './types'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import localCache from '@/utils/cache'

export const useLoginStore = defineStore('login', {
  state: (): ILoginState => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    async accountLoginAction(payload: IAccount) {
      // 1、实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { token } = loginResult.json.data
      if (token) {
        this.token = token
        localCache.setCache('token', token)
        console.log('登录成功')
      }
    },
    phoneLoginAction(payload: object) {
      console.log('执行phoneLoginAction', payload)
    }
  },
  getters: {}
})
