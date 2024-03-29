import { IFormType, IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
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
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: IFormType.input,
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      type: IFormType.select,
      label: '选择部门',
      placeholder: '请选择部门',
      selectOptions: []
    },
    {
      field: 'roleId',
      type: IFormType.select,
      label: '选择角色',
      placeholder: '请选择角色',
      selectOptions: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {},
  title: '用户'
}
