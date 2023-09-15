<template>
  <div class="page-content">
    <GCTable
      v-bind="props.contentTableConfig"
      :listCount="listCount"
      :listData="dataList"
      v-model:page="pageInfo"
      @selectionChange="selectionChange"
    >
      <!-- 1.header中的插槽 -->
      <template #header-handler>
        <el-button type="primary" @click="handlerNewUser">新建用户</el-button>
      </template>
      <!-- 2.列表里面的插槽 -->
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
          <el-button primary>
            <el-icon><Edit /></el-icon>
            编辑
          </el-button>
          <el-button primary>
            <el-icon><Delete /></el-icon>
            删除
          </el-button>
        </div>
      </template>
    </GCTable>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { useSystemStore } from '@/store/main/system/system'
import GCTable from '@/base-ui/table'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  pageName: {
    type: String,
    require: true
  }
})

const systemStore = useSystemStore()

// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
watch(pageInfo, () => {
  getPageData()
})

// 获取列表数据
const getPageData = (queryInfo: any = {}) => {
  const offset = pageInfo.value.currentPage * pageInfo.value.pageSize
  systemStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset,
      size: offset + pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
defineExpose({
  getPageData
})

// 从仓库里面获取数据
const dataList = computed(() => systemStore.pageListData(props.pageName))
const listCount = computed(() => systemStore.pageListCount(props.pageName))

const enableAction = (row: any) => {
  row.enable = !row.enable
}

const selectionChange = (value: any) => {
  console.log(value)
}

const handlerNewUser = () => {
  console.log('新建用户')
}
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;

  .handler-btns {
    display: flex;
    color: cornflowerblue;
  }
}
</style>
