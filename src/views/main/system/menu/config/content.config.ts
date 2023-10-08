import type { ITablePropType } from '@/base-ui/table'

const propList: ITablePropType[] = [
  {
    prop: 'name',
    label: '菜单名称',
    minWidth: '135'
  },
  {
    prop: 'type',
    label: '菜单类型',
    minWidth: '60'
  },
  {
    prop: 'url',
    label: '菜单url',
    minWidth: '150'
  },
  {
    prop: 'icon',
    label: '菜单图标',
    minWidth: '120'
  },
  {
    prop: 'permission',
    label: '按钮权限',
    minWidth: '120'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '220',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '220',
    slotName: 'updateAt'
  },
  { prop: 'handler', label: '操作', minWidth: '150', slotName: 'handler' }
]

export const contentTableConfig = {
  title: '菜单列表',
  createNewTitle: '菜单',
  showIndexColum: false,
  showSelectColum: false,
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  propList
}
