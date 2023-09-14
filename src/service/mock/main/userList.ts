import Mock from 'mockjs'
const Random = Mock.Random

const totalDataList: any[] = []
function createData() {
  for (let i = 0; i < 50; i++) {
    const template = {
      id: Random.integer(1, 100),
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

export default function userList(params: any) {
  const { offset, size } = JSON.parse(params.body)
  if (!totalDataList.length) {
    createData()
  }
  const newDataList = totalDataList.slice(offset * size, (offset + 1) * size)
  return {
    list: newDataList,
    totalCount: totalDataList.length
  }
}
