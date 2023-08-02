import { defineStore } from 'pinia'
import { ILoginState } from './types'

export const useLoginStore = defineStore('login', {
  state: (): ILoginState => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    accountLoginAction(payload: object) {
      console.log('执行accountLoginAction', payload)
    },
    phoneLoginAction(payload: object) {
      console.log('执行phoneLoginAction', payload)
    }
  },
  getters: {}
})
