import Mock from 'mockjs'
const Random = Mock.Random

import axios from 'axios'

const totalDataList: any[] = []
function createGoodsData(params: any) {
  const { offset, size } = JSON.parse(params.body)
  for (let i = 0; i < 50; i++) {
    const r = Random.integer(1, 9)
    const g = Random.integer(1, 9)
    const b = Random.integer(1, 9)
    const color = `#${r}1A${g}B${b}C`
    const text = Random.cword(2, 5)
    const template = {
      id: 7,
      name: Random.cparagraph(),
      oldPrice: Random.integer(100, 200),
      newPrice: Random.integer(10, 100),
      desc: Random.cparagraph(),
      enable: Random.boolean(),
      imageUrl: Random.image('500x500', color, text),
      inventoryCount: 40044,
      saleCount: 35122,
      favorCount: 172,
      address: Random.city(),
      category: 7,
      createAt: '2023-10-20T16:10:11.00Z',
      updateAt: '2023-10-20T16:10:11.00Z'
    }
    totalDataList.push(template)
  }
}

function goodsData(params: any) {
  if (!totalDataList.length) {
    createGoodsData(params)
  }
  return {
    list: totalDataList,
    totalCount: totalDataList.length
  }
}

export default goodsData
