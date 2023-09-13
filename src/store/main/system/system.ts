import { defineStore } from 'pinia'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system'
import { SystemPageListUrl, PageNameType } from '@/service/urls'

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  actions: {
    // 查询页面列表数据
    async getPageListAction(payload: any) {
      // 1、获取pageUrl
      const pageName: PageNameType = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2、发起网络请求
      const result = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data

      switch (pageName) {
        case PageNameType.users:
          this.usersList = list
          this.usersCount = totalCount
          break
        case PageNameType.role:
          this.roleList = list
          this.roleCount = totalCount
          break
        default:
          break
      }
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  }
})
