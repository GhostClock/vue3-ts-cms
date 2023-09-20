import { defineStore } from 'pinia'
import { IRootState } from './types'
import { PageListUrl } from '@/service/urls'
import { getPageListData } from '@/service/main/system'

export const useRootStore = defineStore('root', {
  state: (): IRootState => {
    return {
      entireDepartment: [],
      entireRole: []
    }
  },
  actions: {
    async getInitialDataAction() {
      // 1、请求部门，角色数据
      const departmentResult = await getPageListData(
        PageListUrl.departmentList,
        {
          offset: 0,
          size: 1000
        }
      )
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData(PageListUrl.roleList, {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      // 2、保存数据
      this.entireDepartment = departmentList
      this.entireRole = roleList
    }
  },
  getters: {}
})
