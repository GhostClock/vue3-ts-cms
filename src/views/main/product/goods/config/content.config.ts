import type { ITablePropType } from '@/base-ui/table'

const propList: ITablePropType[] = [
  {
    prop: 'name',
    label: '商品名称',
    minWidth: '120'
  },
  {
    prop: 'oldPrice',
    label: '原价格',
    minWidth: '80',
    slotName: 'oldPrice'
  },
  {
    prop: 'newPrice',
    label: '现价格',
    minWidth: '80',
    slotName: 'newPrice'
  },
  {
    prop: 'imageUrl',
    label: '商品图片',
    minWidth: '100',
    slotName: 'image'
  },
  {
    prop: 'status',
    label: '状态',
    minWidth: '100',
    slotName: 'status'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '200',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '200',
    slotName: 'updateAt'
  },
  { prop: 'handler', label: '操作', minWidth: '150', slotName: 'handler' }
]

export const contentTableConfig = {
  title: '商品列表',
  showIndexColum: true,
  showSelectColum: true,
  propList
}
