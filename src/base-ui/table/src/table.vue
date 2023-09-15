<template>
  <div class="gc-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColum"
        type="selection"
        align="center"
        width="40"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColum"
        type="index"
        label="序号"
        align="center"
        width="70"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="{ row }">
            <slot :name="propItem.slotName" :row="row">
              {{ row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          small="small"
          layout="total, sizes, prev, pager, next, jumper"
          :total="props.listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ITablePropType } from '../types'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    default: () => ({
      currentPage: 0,
      pageSize: 10
    })
  },
  propList: {
    type: Array as PropType<ITablePropType[]>,
    required: true
  },
  showIndexColum: {
    type: Boolean,
    default: false
  },
  showSelectColum: {
    type: Boolean,
    default: false
  }
})
const listData = computed(() => props.listData)
const propList = computed(() => props.propList)
const page = computed(() => props.page)

const emit = defineEmits(['selectionChange', 'update:page'])

// 选中的回调
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
// 分页器
// size改变
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
// 当前页改变
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
