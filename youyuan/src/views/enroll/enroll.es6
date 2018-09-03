import icon1 from '../../assets/images/wallet.png'
import icon2 from '../../assets/images/wechat.png'
import icon3 from '../../assets/images/alipay.png'
import * as api from '../../api'

export default {
	name: 'enroll',
	components: {
	},
	data () {
		return {
      activity: {},
      formData: [
        {
          name: '',
          cardID: '',
          phone: null
        }
      ],
      payTotal: 188,
      payList: [
        {
          icon: icon1,
          name: '账户余额支付',
          price: 0,
          selected: true
        },
        {
          icon: icon2,
          name: '微信支付',
          price: 0,
          selected: false
        },
        {
          icon: icon3,
          name: '支付宝支付',
          price: 0,
          selected: false
        }
      ]
		}
	},
	mounted() {
    this.getInfo()
	},
	methods: {
    add() {
      this.formData.push({
        name: '',
        idCard: '',
        phone: null
      })
    },
    remove(index) {
      this.formData.splice(index, 1)
    },
    checkPay(item) {
      this.payList.map(o => {
        o.selected = false
        o.price = 0
      })
      item.selected = true
      item.price = this.payTotal
    },
    getInfo() {
      const data = {
        activityId: this.$route.params.activityId
      }
      api.getRegisterInfo(data).then(res => {
        console.log(res)
        this.activity = res
      })
    }
  }
}
