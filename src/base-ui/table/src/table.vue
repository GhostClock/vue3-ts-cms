<template>
  <div class="gc-table">
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
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ITablePropType } from '../types'
const props = defineProps({
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

<style scoped></style>
