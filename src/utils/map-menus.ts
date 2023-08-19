import { RouteRecordRaw } from 'vue-router'
import type { IUserMenus } from '@/service/login/types'

// 保留第一个菜单
let firstMenu: IUserMenus | null = null
export function mapMenusToRoutes(userMenus: IUserMenus[]): RouteRecordRaw[] {
  const routers: RouteRecordRaw[] = []
  // 1、先加载所有的routers
  const allRouters: RouteRecordRaw[] = []
  const routerFiles = require.context('../router/main', true, /\.ts/)
  routerFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRouters.push(route.default)
  })
  // 2、根据菜单获取需要添加的routers
  // userMenus:
  // type===1 => chindren
  // type===2 => url -> route
  const _recurseGetRoute = (menus: IUserMenus[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // 当前路由的path和菜单的url相等时表示找到了
        const route = allRouters.find((route) => route.path === menu.url)
        if (route) routers.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        // 递归查找
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routers
}

export function pathMapToMenu(
  userMenus: IUserMenus[],
  currentPath: string
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      // 找到匹配的菜单
      return menu
    }
  }
  return null
}

export { firstMenu }
