<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="_handleResetClick"
      @queryBtnClick="_handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="PageNameType.user"
      @newUserClick="_handleNewUser"
      @editUserClick="_handleEditUser"
    />
    <PageModal
      ref="pageModalRef"
      :pageName="PageNameType.user"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { PageNameType } from '@/service/urls'
import { useRootStore } from '@/store'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

type tupeClickType = (...args: any[]) => void

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const _handleResetClick = handleResetClick as tupeClickType
const _handleQueryClick = handleQueryClick as tupeClickType

// pageModal相关逻辑
// 1、处理密码的逻辑
const newUserCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editUserCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}
// 2、处理添加部门和角色列表
const rootStore = useRootStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )
  departmentItem!.selectOptions = rootStore.entireDepartment.map((item) => {
    return {
      label: item.name,
      value: item.id
    }
  })
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleItem!.selectOptions = rootStore.entireRole.map((item) => {
    return {
      label: item.name,
      value: item.id
    }
  })
  return modalConfig
})
// 3、调用hooks获取公共变量和函数
const [pageModalRef, handleNewUser, handleEditUser, defaultInfo] = usePageModal(
  newUserCallBack,
  editUserCallBack
)
const _handleNewUser = handleNewUser as tupeClickType
const _handleEditUser = handleEditUser as tupeClickType
</script>

<style scoped></style>
