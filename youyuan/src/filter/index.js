import Moment from 'moment'

export const amountType = (type) => {
  let name = ''
  switch (type) {
    case 1:
      name = '参加活动'
      break
    case 2:
      name = '赞赏'
      break
    default:
      name = '未知'
  }
  return name
}

export const dateFilter = (value) => {
  let date = ''
  date = Moment(value).format('YYYY-MM-DD 00:00:00')
  return date
}

export const eduType = (type) => {
  let name = ''
  switch (type) {
    case 1:
      name = '初中'
      break
    case 2:
      name = '中专'
      break
    case 3:
      name = '高中'
      break
    case 4:
      name = '大专'
      break
    case 5:
      name = '本科'
      break
    case 6:
      name = '研究生'
      break
    case 7:
      name = '硕士'
      break
    case 8:
      name = '博士'
      break
    default:
      name = '-'
  }
  return name
}
