import type { ITablePropType } from '@/base-ui/table'

const propList: ITablePropType[] = [
  {
    prop: 'name',
    label: '角色名',
    minWidth: '100'
  },
  {
    prop: 'intro',
    label: '权限介绍',
    minWidth: '100'
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
  title: '角色列表',
  createNewTitle: '角色',
  showIndexColum: true,
  showSelectColum: true,
  propList
}
