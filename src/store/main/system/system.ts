import { defineStore } from 'pinia'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system'

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    // 查询页面列表数据
    async getPageListAction(payload: any) {
      // 1、发起网络请求
      const result = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = result.json.data
      this.userList = list
      this.userCount = totalCount
    }
  }
})
