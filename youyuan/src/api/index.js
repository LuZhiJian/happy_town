import http from './http'

// 获取个人信息
export function getCustomerInfo(params) {
  return http.post('/api/customer/getCustomer.do', params)
}

// 获取用户基本资料
export function getCustomerBasicInfo(params) {
  return http.post('/api/customer/getCustomerInfo.do', params)
}

// 设置保存用户基本资料
export function saveBasicInfo(params) {
  return http.post('/api/customer/saveCustomerInfo.do', params)
}

// 获取会员分享信息列表
export function getShareList(params) {
  return http.post('/api/customer/getShareList.do', params)
}

// 获取零钱明细
export function getWalletDetail(params) {
  return http.post('/api/customer/getWalletDetail.do', params)
}

// 获取代金券裂列表
export function getCouponsList(params) {
  return http.post('/api/customer/getCoupons.do', params)
}

// 获取会员参与的活动列表
export function getActivityList(params) {
  return http.post('/api/customer/getCustomerActivities.do', params)
}

// 获取活动详情
export function getActivityDetail(params) {
  return http.post('/api/activity/getActivityDetail.do', params)
}

// 对用户的关注/取消
export function saveFocus(params) {
  return http.post('/api/customer/saveStar.do', params)
}

// 获取参与活动的人员
export function getActivityMembers(params) {
  return http.post('/api/registration/getRegisters.do', params)
}

// 获取报名活动时活动费用与活动信息
export function getRegisterInfo(params) {
  return http.post('/api/registration/getInfoToRegister.do', params)
}

