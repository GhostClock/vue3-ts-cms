import { IFormType, IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 10px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'id',
      type: IFormType.input,
      label: 'id',
      placeholder: '请输入查询的id'
    },
    {
      field: 'name',
      type: IFormType.input,
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: IFormType.input,
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: IFormType.input,
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      type: IFormType.select,
      label: '用户状态',
      placeholder: '请选择用户状态',
      selectOptions: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ]
    },
    {
      field: 'createAt',
      type: IFormType.datepicker,
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
