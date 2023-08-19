// 表单支持的类型
export enum IFormType {
  input,
  password,
  select,
  datepicker
}

export interface IFormSelectOption {
  label: string
  value: string
}

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select
  selectOptions?: IFormSelectOption[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}