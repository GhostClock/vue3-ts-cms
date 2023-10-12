import Mock from 'mockjs'

// login
import account from './login/account.json'
import userInfo from './login/userInfo.json'
import userMenus from './login/userMenus.json'

// main
// import userList from './main/userList.json'
import userList from './main/userList'
import { deleteUser, createUser, editUser } from './main/userList'
import roleList from './main/roleList.json'
import goodsData from './main/goods'
import menuList from './main/menuList.json'
import departmentList from './main/departmentList.json'
// 仪表盘
import addressSale from './main/dashboard/addressSale.json'
import categoryCount from './main/dashboard/categoryCount.json'
import categoryFavor from './main/dashboard/categoryFavor.json'
import categorySale from './main/dashboard/categorySale.json'

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
Mock.mock('/mock/user/list', (params) => {
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

// 商品列表
Mock.mock('/mock/goods/list', (params) => {
  return {
    code: 0,
    data: goodsData(params)
  }
})

// 部门列表
Mock.mock('/mock/department/list', {
  code: 0,
  data: departmentList
})

// 菜单列表
Mock.mock('/mock/menu/list', {
  code: 0,
  data: {
    list: menuList,
    totalCount: 4
  }
})

// 删除用户
Mock.mock('/mock/user', 'delete', (params) => {
  return {
    code: 0,
    data: deleteUser(params)
  }
})

// 创建用户
Mock.mock('/mock/user', 'post', (params) => {
  return {
    code: 0,
    data: createUser(params)
  }
})

// 编辑用户
Mock.mock('/mock/user', 'patch', (params) => {
  return {
    code: 0,
    data: editUser(params)
  }
})

// 商品的城市销量
Mock.mock('/mock/address/sale', {
  code: 0,
  data: addressSale
})
// 商品的数据
Mock.mock('/mock/category/count', {
  code: 0,
  data: categoryCount
})
// 商品的收藏
Mock.mock('/mock/category/favor', {
  code: 0,
  data: categoryFavor
})
// 商品的销量
Mock.mock('/mock/category/sale', {
  code: 0,
  data: categorySale
})
