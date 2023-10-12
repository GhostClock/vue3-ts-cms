import { defineStore } from 'pinia'
import { IDashboardState } from './types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

export const useDashboardStore = defineStore('dashboard', {
  state: (): IDashboardState => {
    return {
      // 商品的数据
      categoryGoodsCount: [],
      // 商品的销量
      categoryCoodsSale: [],
      // 商品的收藏
      categoryCoodsFavor: [],
      // 商品的城市销量
      addressGoodsSale: []
    }
  },

  actions: {
    async getDashboardDataAction() {
      const { data: categoryCountResult } = await getCategoryGoodsCount()
      this.categoryGoodsCount = categoryCountResult

      const { data: categoryCoodsSaleResult } = await getCategoryGoodsSale()
      this.categoryCoodsSale = categoryCoodsSaleResult

      const { data: categoryCoodsFavorResult } = await getCategoryGoodsFavor()
      this.categoryCoodsFavor = categoryCoodsFavorResult

      const { data: addressGoodsSaleResult } = await getAddressGoodsSale()
      this.addressGoodsSale = addressGoodsSaleResult
    }
  }
})
