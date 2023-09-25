<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <GCForm v-bind="props.modalConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSystemStore } from '@/store/main/system/system'
import GCForm from '@/base-ui/form'
const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  }
})

let dialogVisible = ref(false)
const formData = ref<any>({})

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
const store = useSystemStore()
// 确定点击
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 有值，表示是编辑
    console.log('编辑用户')
    store.editPageDataAction({
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
  } else {
    // 无值，表示是新建
    console.log('新建用户')
    store.createPageDataAction({
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}

defineExpose({
  dialogVisible
})
</script>

<style scoped></style>
