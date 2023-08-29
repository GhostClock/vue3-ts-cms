// 格式化UTC时间
export function formatUTCDate(dateUTCStr: string) {
  const date = new Date(dateUTCStr)
  if (date) {
    // 将Date()对象转成YYYY-MM-DD HH:MM:SS格式
    const year = date.getFullYear()
    const month =
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth()
    const day =
      date.getDate() + 1 < 10 ? `0${date.getDate() + 1}` : date.getDate()
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minute =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const second =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
  return ''
}
