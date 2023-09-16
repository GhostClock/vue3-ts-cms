import { useLoginStore } from '@/store/login/login'

// 权限判断
export function usePermission(pageName: string, handleName: string) {
  const loginStore = useLoginStore()
  const permission = loginStore.permissions

  const verifyPermission = `system:${pageName}:${handleName}`

  // name = '123'
  // !name => false
  // !!name => true
  return !!permission.find((item) => item === verifyPermission)
}
