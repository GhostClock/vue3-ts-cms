export enum LoginAPI {
  // 登录
  AccountLogin = '/login',
  // 用户信息
  UserInfo = '/userinfo',
  // 菜单信息
  UserMenus = '/usermenus'
}

export enum PageNameType {
  user = 'user',
  role = 'role',
  goods = 'goods',
  menu = 'menu',
  department = 'department'
}

export enum PageListUrl {
  // 用户列表
  userList = '/user/list',
  // 角色列表
  roleList = '/role/list',
  // 商品列表
  goodsList = '/goods/list',
  // 部门列表
  departmentList = 'department/list',
  // 菜单列表
  menuList = 'menu/list',
  // 商品的城市销量
  addresssSale = 'address/sale',
  // 商品的数据
  categoryCount = 'category/count',
  // 商品的收藏
  categoryFavor = 'category/favor',
  // 商品的销量
  categorySale = 'category/sale'
}
