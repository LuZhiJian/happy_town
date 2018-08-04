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
