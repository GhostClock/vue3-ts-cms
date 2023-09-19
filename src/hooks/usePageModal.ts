import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = () => void

export function usePageModal(
  newCallBack?: CallBackFn,
  editCallBack?: CallBackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewUser = () => {
    // 新建的时候置为空对象
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCallBack && newCallBack()
  }
  const handleEditUser = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCallBack && editCallBack()
  }

  return [pageModalRef, handleNewUser, handleEditUser, defaultInfo]
}
