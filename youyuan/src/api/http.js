import axios from 'axios'
import conf from './config'
import Cookie from 'vue-cookie'
import qs from 'qs'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'

var APP_ENV = process.env.APP_ENV || 'dev'
var baseHost = APP_ENV === 'pro' ? conf.prod.apiHost : conf.dev.apiHost

// http request 拦截器
axios.interceptors.request.use(config => {
  const apiToken = Cookie.get('apiToken')
  if (apiToken) {
    config.headers['token'] = apiToken // 让每个请求携带token-- ['apiToken']为自定义key
  } else {
    const url = encodeURIComponent(window.location.href)
    location.href = `${baseHost}/api/customer/toAuthorize.do?backUrl=${url}`
  }
  return config
}, err => {
  // 关闭loading
  return Promise.reject(err)
})

axios.interceptors.response.use(
  response => {
    const res = response.data
    if (Number(res.code) !== 10000) {
      if (Number(res.code) === 50000) {
        // token过期
        const url = encodeURIComponent(window.location.href)
        location.href = `${baseHost}/api/customer/toAuthorize.do?backUrl=${url}`
      } else {
        // 错误
      }
      return Promise.reject(res)
    } else {
      return res.biz
    }
  }, error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default {
  get(url, params = {}) {
    return axios({
      method: 'get',
      baseURL: baseHost,
      url,
      timeout: 10000,
      params,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'token': Cookie.get('apiToken')
      }
    }).then(res => {
      return res
    }).catch(err => {
      return Promise.reject(err)
    })
  },
  post(url, data = {}) {
    return axios({
      method: 'post',
      baseURL: baseHost,
      url,
      timeout: 10000,
      // data: qs.stringify(data),
      data: data,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'token': Cookie.get('apiToken')
      }
    }).then(res => {
      return res
    }).catch(err => {
      return Promise.reject(err)
    })
  }
}
