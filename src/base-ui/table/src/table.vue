<template>
  <div class="gc-table">
    <el-table :data="listData" border style="width: 100%">
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
  }
})
const listData = computed(() => props.listData)
const propList = computed(() => props.propList)
</script>

<style scoped></style>
