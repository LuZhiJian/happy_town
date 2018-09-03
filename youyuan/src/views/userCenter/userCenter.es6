import * as api from '../../api'

export default {
	name: 'userCenter',
	components: {
	},
	data () {
		return {
      tabIndex: 1,
      picList: [
        {
          url: 'https://wx4.sinaimg.cn/mw690/bd297795gy1ft9lbp0frhj20j60fcaco.jpg'
        },
        {
          url: 'https://wx4.sinaimg.cn/mw690/bd297795gy1ft9lbp02jgj20j60fcgna.jpg'
        },
        {
          url: 'https://wx1.sinaimg.cn/mw690/bd297795gy1ft9lbph94oj20j60fcad3.jpg'
        },
        {
          url: 'https://wx2.sinaimg.cn/mw690/bd297795gy1ft9lbp0a5wj20j60iv76s.jpg'
        },
        {
          url: 'https://wx4.sinaimg.cn/mw690/bd297795gy1ft9lbp8nptj20j60iyq85.jpg'
        },
        {
          url: 'https://wx1.sinaimg.cn/mw690/bd297795gy1ft9lbpli80j20j60gzgpk.jpg'
        },
        {
          url: 'https://wx4.sinaimg.cn/mw690/bd297795gy1ft9lbp7z2bj20j60hbwht.jpg'
        }
      ],
      editPic: false,
      userInfo: {},
      basicInfo: {},
      activeCustomerId: this.$route.params.customerId,
      activityList: [
        {
          "registrationId": "sadfsadfdasfasf",
          "activityId": "AT201808202224240001",
          "img": "http://image.ddcxcars.com/upload/upload/20180731/231717553.jpg",
          "title": "鸡枕山广州第二峰",
          "departureTime": "2018-08-01 08:00",
          "activityDay": 2,
          "credit": 99,
          "state": "REGISTERED",
          "payStatus": "PAID"
        }, {
          "registrationId": "sdfashsafsdf",
          "activityId": "AT201808202224240001",
          "img": "http://image.ddcxcars.com/upload/upload/20180731/231717553.jpg",
          "title": "广州帽峰山徒步旅行",
          "departureTime": "2018-07-31 07:50",
          "activityDay": 2,
          "credit": 56,
          "state": "IN_PROGRESS",
          "payStatus": "PAID"
        }
      ]
    }
  },
	mounted() {

	},
	methods: {
    edit() {
      this.editPic = !this.editPic
    },
    editBasic() {
      location.href = '#/edit/basic'
    },
    getInfo() {
      let data = {}
      const cId = this.activeCustomerId
      if (cId !== '0') {
        data = {
          customerId: cId
        }
      }
      api.getCustomerInfo(data).then(res => {
        res.sex = Number(res.sex)
        this.userInfo = res
        this.$store.dispatch('setUser', res)
      })
    },
    getBasicInfo() {
      let data = {}
      const cId = this.activeCustomerId
      if (cId !== '0') {
        data = {
          customerId: cId
        }
      }
      api.getCustomerBasicInfo(data).then(res => {
        this.basicInfo = res
        this.$store.dispatch('getUserBasicInfo', res)
      })
    },
    getActivityList() {
      api.getActivityList().then(res => {
        console.log(res)
      })
    },
    toFucos() {
      const data = {
        customerId: this.activeCustomerId
      }
      api.saveFocus(data).then(res => {
        console.log(res)
      })
    },
    onTabChange(val) {
      if (val === 1) {
        this.getBasicInfo()
      }
      if (val === 3) {
        this.getActivityList()
      }
    },
    onCustomerChange(id) {
      this.activeCustomerId = id
      this.getInfo()
    }
  },
  watch: {
    'tabIndex': {
      handler: 'onTabChange',
      immediate: true,
      deep: true
    },
    '$route.params.customerId': {
      handler: 'onCustomerChange',
      immediate: true,
      deep: true
    }
  }
}
