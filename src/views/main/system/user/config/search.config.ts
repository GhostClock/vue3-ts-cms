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
      rules: [],
      placeholder: '请输入查询的id'
    },
    {
      field: 'name',
      type: IFormType.input,
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: IFormType.password,
      label: '密码',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: IFormType.select,
      label: '喜欢的运动',
      rules: [],
      placeholder: '请选择喜欢的运动',
      selectOptions: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ]
    },
    {
      field: 'createTime',
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
