<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <GCTable :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
        <template #updateAt="scope">
          <strong>{{ scope.row.updateAt }}</strong>
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
import { SystemPageListUrl } from '@/service/main/systemUrls'
import GCTable from '@/base-ui/table'

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

const propList = [
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
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  }
]
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
