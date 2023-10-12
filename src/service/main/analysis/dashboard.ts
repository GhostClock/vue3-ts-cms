import Request from '../../index'
import { IDataBaseType } from '../../types/base-types'
import { PageListUrl } from '@/service/urls'

export function getCategoryGoodsCount() {
  return Request.get<IDataBaseType>({
    url: PageListUrl.categoryCount
  })
}

export function getCategoryGoodsSale() {
  return Request.get<IDataBaseType>({
    url: PageListUrl.categorySale
  })
}

export function getCategoryGoodsFavor() {
  return Request.get<IDataBaseType>({
    url: PageListUrl.categoryFavor
  })
}

export function getAddressGoodsSale() {
  return Request.get<IDataBaseType>({
    url: PageListUrl.addresssSale
  })
}
