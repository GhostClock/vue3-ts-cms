import { defineStore } from 'pinia'
import { IMainState } from './types'

export const useMainStore = defineStore('main', {
  state: (): IMainState => {
    return {
      name: '123',
      age: 18
    }
  }
})
