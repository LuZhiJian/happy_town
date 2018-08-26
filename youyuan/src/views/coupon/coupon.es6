import * as api from '../../api'

export default {
	name: 'coupon',
	components: {
	},
	data () {
		return {
      couponList: [{
        "id": "sadfsadfdasfasf",
        "amount": 10,
        "minCost": 100,
        "startDate": "2018-07-31",
        "overDate": "2018-08-31",
        "state": "1"
      }, {
        "id": "qqwerewrwerwqerewt",
        "amount": 10,
        "minCost": 100,
        "startDate": "2018-07-31",
        "overDate": "2018-09-31",
        "state": "1"
      }]
		}
	},
	mounted() {
    this.getCouponsList()
	},
	methods: {
    getCouponsList() {
      api.getCouponsList().then(res => {
        this.couponList = res
      })
    }
	}
}
