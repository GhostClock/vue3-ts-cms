<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent
      :contentTableConfig="contentTableConfig"
      :pageName="PageNameType.role"
      @newUserClick="_handleNewUser"
      @editUserClick="_handleEditUser"
    />
    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :default-info="defaultInfo"
      :pageName="PageNameType.role"
    >
      <div class="menu-tree">
        <el-tree
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

import { PageNameType } from '@/service/urls'
import { usePageModal } from '@/hooks/usePageModal'

import { useRootStore } from '@/store'
const rootStore = useRootStore()
const menus = computed(() => rootStore.entireMenu)

const otherInfo = ref({})
const handleCheckChange = (data1: any, data2: any) => {
  const { checkedKeys, halfCheckedKeys } = data2
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
// TODO: 回显待补充

type clickType = (...args: any[]) => void
const [pageModalRef, handleNewUser, handleEditUser, defaultInfo] =
  usePageModal()

const _handleNewUser = handleNewUser as clickType
const _handleEditUser = handleEditUser as clickType
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
