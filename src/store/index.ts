import { defineStore } from 'pinia'
import { IRootState } from './types'

export const useRootStore = defineStore('root', {
  state: (): IRootState => {
    return {
      id: 0
    }
  },
  actions: {},
  getters: {}
})
