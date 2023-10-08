import { defineStore } from 'pinia'
import { IRootState } from './types'
import { PageListUrl } from '@/service/urls'
import { getPageListData } from '@/service/main/system'

export const useRootStore = defineStore('root', {
  state: (): IRootState => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
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

      // 请求全部菜单
      const menuResult = await getPageListData(PageListUrl.menuList, {})
      const { list: menuList } = menuResult.data
      // 2、保存数据
      this.entireDepartment = departmentList
      this.entireRole = roleList
      this.entireMenu = menuList
    }
  },
  getters: {}
})
