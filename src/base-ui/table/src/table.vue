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
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
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

const emit = defineEmits(['selectionChange'])

// 选中的回调
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
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
