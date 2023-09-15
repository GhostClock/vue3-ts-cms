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
const searchDataList: any[] = []
export default function userList(params: any) {
  // 只实现根据id查找
  const { offset, size, id } = JSON.parse(params.body)
  if (!totalDataList.length) {
    createData()
  }
  const newDataList: any[] = []
  if (offset === 0 && id) {
    // 1、传入了搜索内容
    const findDataList = findAction(id)
    searchDataList.push(...findDataList)
    const tempDataList = searchDataList.slice(
      offset * size,
      (offset + 1) * size
    )
    newDataList.push(...tempDataList)
  } else {
    // 2、没传入搜索内容 - 按照offset, size，返回数据
    const tempDataList = totalDataList.slice(offset * size, (offset + 1) * size)
    newDataList.push(...tempDataList)
  }
  return {
    list: newDataList,
    totalCount: newDataList.length
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
