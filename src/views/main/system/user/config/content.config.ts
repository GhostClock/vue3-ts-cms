import type { ITablePropType } from '@/base-ui/table'

const propList: ITablePropType[] = [
  {
    prop: 'name',
    label: '用户名',
    minWidth: '100'
  },
  {
    prop: 'realname',
    label: '真实姓名',
    minWidth: '100'
  },
  {
    prop: 'cellphone',
    label: '手机号码',
    minWidth: '120'
  },
  {
    prop: 'enable',
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
  title: '用户列表',
  createNewTitle: '用户',
  showIndexColum: true,
  showSelectColum: true,
  propList
}
