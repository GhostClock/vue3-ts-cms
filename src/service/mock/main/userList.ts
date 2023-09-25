import Mock from 'mockjs'
const Random = Mock.Random

const totalDataList: any[] = []
function createData() {
  for (let i = 0; i < 50; i++) {
    const template = {
      id: Random.integer(1, 1000),
      name: Random.name(),
      realname: Random.cname(),
      cellphone: 18812345678 + i,
      enable: Random.boolean(),
      departmentId: Random.natural(1, 10),
      roleId: 1,
      createAt: `202${Random.natural(0, 9)}-11-01T18:00:13.000Z`,
      updateAt: `202${Random.natural(0, 9)}-11-01T18:00:15.000Z`
    }
    totalDataList.push(template)
  }
}
let searchDataList: any[] = []
export default function userList(params: any) {
  // 只实现根据id查找
  const { offset, size, id } = JSON.parse(params.body)
  if (!totalDataList.length) {
    createData()
  }
  const newDataList: any[] = []
  let count = 0
  if (id) {
    // 1、传入了搜索内容
    const findDataList = findAction(id)
    searchDataList.push(...findDataList)
    const tempDataList = searchDataList.slice(offset, size)
    newDataList.push(...tempDataList)
    count = searchDataList.length
  } else {
    // 2、没传入搜索内容 - 按照offset, size，返回数据
    searchDataList = []
    const tempDataList = totalDataList.slice(offset, size)
    newDataList.push(...tempDataList)
    count = totalDataList.length
  }
  return {
    list: newDataList,
    totalCount: count
  }
}
function findAction(id: number) {
  const result: any[] = []
  totalDataList.forEach((item) => {
    if (`${item.id}`.includes(`${id}`)) {
      result.push(item)
    }
  })
  return result
}

// 删除用户
export function deleteUser(params: any) {
  const { id } = JSON.parse(params.body)
  // 删除元素
  const index = totalDataList.findIndex((item) => item.id === id)
  totalDataList.splice(index, 1)
  return true
}

// 创建用户
export function createUser(params: any) {
  const { cellphone, departmentId, name, realname, roleId } = JSON.parse(
    params.body
  )
  const newUser = {
    id: Random.integer(1, 1000),
    name,
    realname,
    cellphone,
    enable: Random.boolean(),
    departmentId,
    roleId,
    createAt: `202${Random.natural(0, 9)}-11-01T18:00:13.000Z`,
    updateAt: `202${Random.natural(0, 9)}-11-01T18:00:15.000Z`
  }
  // 插到第0位
  totalDataList.unshift(newUser)
}

// 编辑
export function editUser(params: any) {
  const { editData, id } = JSON.parse(params.body)
  const { cellphone, departmentId, name, realname, roleId } = editData
  const user = totalDataList.find((item) => {
    return item.id === id
  })
  user.cellphone = cellphone
  user.departmentId = departmentId
  user.name = name
  user.realname = realname
  user.roleId = roleId
  user.cellphone = cellphone
  user.createAt = `202${Random.natural(0, 9)}-11-01T18:00:13.000Z`
  user.updateAt = `202${Random.natural(0, 9)}-11-01T18:00:15.000Z`
}
