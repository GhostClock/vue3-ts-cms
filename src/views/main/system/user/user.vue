<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <GCTable
        :listData="userList"
        :propList="propList"
        :showIndexColum="showIndexColum"
        :showSelectColum="showSelectColum"
        @selectionChange="selectionChange"
      >
        <template #status="{ row }">
          <el-button
            plain
            :type="row.enable ? 'success' : 'danger'"
            @click="enableAction(row)"
            >{{ row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="{ row }">
          <span>{{ $filters.formatTime(row.createAt) }}</span>
        </template>
        <template #updateAt="{ row }">
          <span>{{ $filters.formatTime(row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handler-btns">
            <el-button size="mini" type="text" :icon="Edit">编辑</el-button>
            <el-button size="mini" type="text" :icon="Delete">删除</el-button>
          </div>
        </template>
      </GCTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useSystemStore } from '@/store/main/system/system'
import { SystemPageListUrl } from '@/service/urls'
import type { ITablePropType } from '@/base-ui/table'
import GCTable from '@/base-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'

const systemStore = useSystemStore()
// 获取用户列表数据
systemStore.getPageListAction({
  pageUrl: SystemPageListUrl.userList,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
// 从仓库里面获取数据
const userList = computed(() => systemStore.userList)
const userCount = computed(() => systemStore.userCount)

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
const enableAction = (row: any) => {
  row.enable = !row.enable
}
const showIndexColum = true
const showSelectColum = true

const selectionChange = (value: any) => {
  console.log(value)
}
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
