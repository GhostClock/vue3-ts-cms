export enum LoginAPI {
  // 登录
  AccountLogin = '/login',
  // 用户信息
  UserInfo = '/userinfo',
  // 菜单信息
  UserMenus = '/usermenus'
}

export enum PageNameType {
  users = 'users',
  role = 'role',
  goods = 'goods',
  menu = 'menu',
  department = 'department'
}

export enum PageListUrl {
  // 用户列表
  userList = '/users/list',
  // 角色列表
  roleList = '/role/list',
  // 商品列表
  goodsList = '/goods/list',
  // 部门列表
  departmentList = 'department/list'
}
