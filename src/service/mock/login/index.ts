// 登录数据
export const AccountData = {
  id: 1,
  name: 'GhostClock',
  token: '这是token信息'
}

// 用户信息数据
export const UserInfoData = {
  cellphone: '18812345678',
  createAt: '2023-08-01',
  department: {
    id: 1,
    name: '总裁办',
    parent: null,
    createAt: '2023-08-01',
    updateAt: '2023-08-01'
  },
  enable: true,
  id: 1,
  realname: 'GhostClock',
  role: {
    id: 1,
    name: '超级管理员',
    intor: '所有权限',
    createAt: '2023-08-01',
    updateAt: '2023-08-01'
  },
  updateAt: '2023-08-01'
}

// 菜单信息数据
export const UserMenus = [
  {
    id: 38,
    name: '系统总揽',
    type: 1,
    url: '/main/analysis',
    icon: 'Monitor',
    sort: 1,
    children: [
      {
        id: 39,
        name: '核心技术',
        parentId: 38,
        type: 2,
        sort: 2,
        url: '/main/analysis/overview',
        children: null
      },
      {
        id: 40,
        name: '仪表盘',
        parentId: 38,
        type: 2,
        sort: 3,
        url: '/main/analysis/dashboard',
        children: null
      }
    ]
  },
  {
    id: 41,
    name: '系统管理',
    type: 1,
    url: '/main/system',
    icon: 'Setting',
    sort: 2,
    children: [
      {
        id: 42,
        name: '用户管理',
        parentId: 41,
        type: 2,
        sort: 2,
        url: '/main/system/user',
        children: null
      },
      {
        id: 43,
        name: '部门管理',
        parentId: 41,
        type: 2,
        sort: 2,
        url: '/main/system/department',
        children: null
      },
      {
        id: 44,
        name: '菜单管理',
        parentId: 41,
        type: 2,
        sort: 2,
        url: '/main/system/menu',
        children: null
      },
      {
        id: 45,
        name: '角色管理',
        parentId: 41,
        type: 2,
        sort: 2,
        url: '/main/system/role',
        children: null
      }
    ]
  },
  {
    id: 46,
    name: '商品中心',
    type: 1,
    url: '/main/product',
    icon: 'Goods',
    sort: 3,
    children: [
      {
        id: 47,
        name: '商品类别',
        parentId: 46,
        type: 2,
        sort: 2,
        url: '/main/product/category',
        children: null
      },
      {
        id: 48,
        name: '商品信息',
        parentId: 46,
        type: 2,
        sort: 2,
        url: '/main/product/goods',
        children: null
      }
    ]
  },
  {
    id: 49,
    name: '随便聊聊',
    type: 1,
    url: '/main/story',
    icon: 'ChatDotRound',
    sort: 4,
    children: [
      {
        id: 50,
        name: '你的故事',
        parentId: 49,
        type: 2,
        sort: 2,
        url: '/main/story/chat',
        children: null
      },
      {
        id: 51,
        name: '故事列表',
        parentId: 49,
        type: 2,
        sort: 2,
        url: '/main/story/list',
        children: null
      }
    ]
  }
]
