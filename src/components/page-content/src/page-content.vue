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
        <el-button type="primary" @click="handlerNewUser"
          >新建{{ createNewTitle }}</el-button
        >
      </template>
      <!-- 2.列表里面的插槽 固定插槽 -->
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
      <template #handler="{ row }">
        <div class="handler-btns">
          <el-button primary @click="handlerEditUser(row)">
            <el-icon><Edit /></el-icon>
            编辑
          </el-button>
          <el-button primary @click="handleDeleteClick(row)">
            <el-icon><Delete /></el-icon>
            删除
          </el-button>
        </div>
      </template>

      <!-- 3.动态插入剩余的插槽 -->
      <template
        v-for="item in otherProSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </GCTable>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { useSystemStore } from '@/store/main/system/system'
import { usePermission } from '@/hooks/usePermission'
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
const emits = defineEmits(['newUserClick', 'editUserClick'])
const createNewTitle = computed(() => props.contentTableConfig?.createNewTitle)

// 0.获取操作权限
const isCreate = usePermission(props.pageName ?? '', 'create')
const isUpdate = usePermission(props.pageName ?? '', 'update')
const isDelete = usePermission(props.pageName ?? '', 'delete')
const isQuery = usePermission(props.pageName ?? '', 'query')
// TODO 权限判断

const systemStore = useSystemStore()

// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
watch(pageInfo, () => {
  getPageData()
})

// 2.获取列表数据
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

// 3.从仓库里面获取数据
const dataList = computed(() => systemStore.pageListData(props.pageName))
const listCount = computed(() => systemStore.pageListCount(props.pageName))

// 4.获取其他的动态插槽
const otherProSlots = props.contentTableConfig?.propList.filter((item: any) => {
  if (
    item.slotName === 'status' ||
    item.slotName === 'createAt' ||
    item.slotName === 'updateAt' ||
    item.slotName === 'handler'
  ) {
    return false
  }
  return true
})
// 点击禁用
const enableAction = (row: any) => {
  row.enable = !row.enable
}
// 选择用户
const selectionChange = (value: any) => {
  console.log(value)
}
// 新建用户
const handlerNewUser = () => {
  emits('newUserClick')
}
// 编辑用户
const handlerEditUser = (item: any) => {
  emits('editUserClick', item)
}
// 删除用户
const handleDeleteClick = (item: any) => {
  systemStore.deletePageDataAction({
    id: item.id,
    pageName: props.pageName
  })
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
