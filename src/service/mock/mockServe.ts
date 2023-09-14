import Mock from 'mockjs'

// login
import account from './login/account.json'
import userInfo from './login/userInfo.json'
import userMenus from './login/userMenus.json'

// main
// import userList from './main/userList.json'
import userList from './main/userList'
import roleList from './main/roleList.json'

// 登录数据
Mock.mock('/mock/login', {
  code: 0,
  data: account
})

// 用户信息数据
Mock.mock('/mock/userinfo', {
  code: 0,
  data: userInfo
})

// 菜单信息数据
Mock.mock('/mock/usermenus', {
  code: 0,
  data: userMenus
})

// 用户列表
Mock.mock('/mock/users/list', (params) => {
  return {
    code: 0,
    data: userList(params)
  }
})

// 角色列表
Mock.mock('/mock/role/list', {
  code: 0,
  data: roleList
})
