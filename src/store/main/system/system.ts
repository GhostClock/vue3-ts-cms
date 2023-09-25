import { defineStore } from 'pinia'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system'
import { PageNameType } from '@/service/urls'
import { ElMessage, ElNotification } from 'element-plus'

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => {
    return {
      userList: [],
      userCount: 0,

      roleList: [],
      roleCount: 0,

      goodsList: [],
      goodsCount: 0,

      menuList: [],
      menuCount: 0
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
        case PageNameType.user:
          this.userList = list
          this.userCount = totalCount
          break
        case PageNameType.role:
          this.roleList = list
          this.roleCount = totalCount
          break
        case PageNameType.goods:
          this.goodsList = list
          this.goodsCount = totalCount
          break
        case PageNameType.menu:
          this.menuList = list
          this.menuCount = totalCount
          break
        default:
          break
      }
    },
    // 更加id删除数据
    async deletePageDataAction(payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}`
      // 发起删除数据的请求
      const result = await deletePageData(pageUrl, { id })
      if (result.data) {
        ElMessage({ message: '删除成功', type: 'success' })
      }
      // 重新发起请求
      this.getPageListAction({ pageName, queryInfo: { offset: 0, size: 10 } })
    },
    // 新建
    async createPageDataAction(payload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      const { code } = await createPageData(pageUrl, newData)
      if (code === 0) {
        // 创建用户成功
        ElNotification({
          title: '提示',
          message: '创建用户成功',
          type: 'success'
        })
        // 2.请求最新数据
        this.getPageListAction({ pageName, queryInfo: { offset: 0, size: 10 } })
      } else {
        // 创建用户失败
        ElNotification({
          title: '提示',
          message: '编辑用户失败，请稍候再试',
          type: 'error'
        })
      }
    },
    // 编辑
    async editPageDataAction(payload: any) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}`
      const { code } = await editPageData(pageUrl, id, editData)
      if (code === 0) {
        // 编辑用户
        ElNotification({
          title: '提示',
          message: '编辑用户成功',
          type: 'success'
        })
        // 2.请求最新数据
        this.getPageListAction({ pageName, queryInfo: { offset: 0, size: 10 } })
      } else {
        // 编辑用户失败
        ElNotification({
          title: '提示',
          message: '编辑用户失败，请稍候再试',
          type: 'error'
        })
      }
    }
  },
  getters: {
    pageListData(state) {
      return (pageName?: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName?: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
})
