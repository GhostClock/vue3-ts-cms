import { IFormType } from '@/base-ui/form'

export const modalConfig = {
  formItems: [
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
      field: 'password',
      type: IFormType.password,
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: IFormType.input,
      label: '电话号码',
      placeholder: '请输入电话号码'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
