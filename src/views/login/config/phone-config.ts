// 编写表单检验规则
export const rules = {
  number: [
    {
      required: true,
      message: '手机号是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{,11}$/,
      message: '手机号必须为11位数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{,6}$/,
      message: '验证码必须为6位数组',
      trigger: 'blur'
    }
  ]
}
