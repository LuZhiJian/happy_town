// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import SvgIcon from 'vue-svgicon'
import './assets/icons'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import * as myFilter from './filter'

/*引入移动端手势库*/
import directives from './directives/touch'
directives(Vue)

Vue.config.productionTip = false

Vue.use(SvgIcon, {tagName: 'icon'})
Vue.use(Mint)

Object.keys(myFilter).forEach(key => {
  Vue.filter(key, myFilter[key])
})

// simple history management
const history = window.sessionStorage
let historyCount = history.getItem('count') * 1
router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
