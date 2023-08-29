import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 对dayjs进行扩展
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 格式化UTC时间
export function formatUTCDate(
  dateUTCStr: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(dateUTCStr).format(format)
}
