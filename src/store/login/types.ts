import { IUserInfoResult, IUserMenus } from '@/service/login/types'
export interface ILoginState {
  token: string
  userInfo: IUserInfoResult
  userMenus: [IUserMenus]
}
