interface CategoryGoodsItem {
  id: number
  name: string
  goodCount: number
}

interface CategoryFavorItem {
  id: number
  name: string
  goodFavor: number
}

interface AddressSale {
  address: string
  count: number
}

export interface IDashboardState {
  // 商品的数据
  categoryGoodsCount: CategoryGoodsItem[]
  // 商品的销量
  categoryCoodsSale: CategoryGoodsItem[]
  // 商品的收藏
  categoryCoodsFavor: CategoryFavorItem[]
  // 商品的城市销量
  addressGoodsSale: AddressSale[]
}
