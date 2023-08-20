<template>
  <div class="gc-form">
    <div class="header">
      <slot name="header"> </slot>
    </div>
    <el-form :label-width="props.labelWidth">
      <el-row>
        <template v-for="item in props.formItems" :key="item.label">
          <el-col v-bind="props.colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="props.itemStyle"
            >
              <template v-if="item.type === IFormType.input">
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === IFormType.password">
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  show-password
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === IFormType.select">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="selectOption in item.selectOptions"
                    :value="selectOption.value"
                    :key="selectOption.value"
                    >{{ selectOption.label }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === IFormType.datepicker">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue'
import { IFormItem, IFormType } from '../types'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 10px' })
  },
  // 更加屏幕宽度展示item个数
  colLayout: {
    type: Object,
    default: () => ({
      // ≥1920 显示4个
      xl: 6,
      // ≥1200px 显示3个
      lg: 8,
      // ≥992px  显示2个
      md: 12,
      // ≥768px 显示1个
      sm: 24,
      xs: 24
    })
  }
})
const formData = ref({ ...props.modelValue })

const emit = defineEmits(['update:modelValue'])
watch(formData, (newValue) => emit('update:modelValue', newValue), {
  deep: true
})
</script>

<style scoped lang="less">
.gc-form {
  padding-top: 22px;
}
</style>
