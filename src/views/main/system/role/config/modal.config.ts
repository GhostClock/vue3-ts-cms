import { IFormType, IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: IFormType.input,
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: IFormType.input,
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
