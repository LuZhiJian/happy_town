import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import UserCenter from '@/views/userCenter'
import ShareList from '@/views/shareList'
import Wallet from '@/views/wallet'
import Coupon from '@/views/coupon'
import EditBasic from '@/views/editBasic'
import Activity from '@/views/activity'
import JoinMembers from '@/views/joinMembers'
import Enroll from '@/views/enroll'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', name: 'Home', component: Home},
    {path: '/user/center/:customerId',name: 'UserCenter',component: UserCenter},
    {path: '/share/list', name: 'ShareList', component: ShareList},
    {path: '/wallet', name: 'Wallet', component: Wallet},
    {path: '/coupon', name: 'Coupon', component: Coupon},
    {path: '/edit/basic', name: 'EditBasic', component: EditBasic},
    {path: '/activity/:id', name: 'Activity', component: Activity},
    {path: '/join/members/:activityId', name: 'JoinMembers', component: JoinMembers},
    {path: '/enroll/:activityId', name: 'Enroll', component: Enroll},
    {path: '*', redirect: 'home', hidden: true}
  ]
})
