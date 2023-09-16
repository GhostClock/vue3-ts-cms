<template>
  <div class="goods">
    <PageContent
      :contentTableConfig="contentTableConfig"
      :pageName="PageNameType.goods"
    >
      <!-- 商品特有的插槽数据 -->
      <template #image="{ row }">
        <!-- preview-teleported：
          image-viewer 是否插入至 body 元素上。
          嵌套的父元素属性会发生修改时应该将此属性设置为 true
        -->
        <el-image
          style="width: 60px; height: 60px"
          :src="row.imageUrl"
          :preview-src-list="[row.imageUrl]"
          :preview-teleported="true"
        ></el-image>
      </template>
      <template #oldPrice="{ row }">
        <span>{{ '$' + row.oldPrice }}</span>
      </template>
      <template #newPrice="{ row }">
        <span>{{ '$' + row.newPrice }}</span>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { PageNameType } from '@/service/urls'
</script>

<style scoped></style>
