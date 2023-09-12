import { defineStore } from 'pinia'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system'
import { SystemPageListUrl, PageNameType } from '@/service/urls'

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  actions: {
    // 查询页面列表数据
    async getPageListAction(payload: any) {
      // 1、获取pageUrl
      const pageName: PageNameType = payload.pageName
      let pageUrl: SystemPageListUrl = SystemPageListUrl.userList
      switch (pageName) {
        case PageNameType.users:
          pageUrl = SystemPageListUrl.userList
          break
        case PageNameType.role:
          pageUrl = SystemPageListUrl.roleList
          break
        default:
          break
      }
      // 2、发起网络请求
      const result = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data
      switch (pageName) {
        case PageNameType.users:
          this.userList = list
          this.userCount = totalCount
          break
        case PageNameType.role:
          this.roleList = list
          this.roleCount = totalCount
          break
        default:
          break
      }
    }
  }
})
