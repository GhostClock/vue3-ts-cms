import Request from '../index'
import { IAccount, IDataType, ILoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/post'
}

export function accountLoginRequest(account: IAccount) {
  return Request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    // 模拟登录信息
    data: {
      ...account,
      code: 0,
      data: {
        id: 1,
        name: 'GhostClock',
        token: '这是token信息'
      }
    }
  })
}
