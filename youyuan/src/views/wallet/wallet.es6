import * as api from '../../api'

export default {
	name: 'wallet',
	components: {
	},
	data () {
		return {
      list: [{
        "amount": 10,
        "type": -1,
        "remarks": "提现",
        "time": "20180801122334"
      }, {
        "amount": 10,
        "type": 1,
        "remarks": "活动赠送",
        "time": "20180731160000"
      }]
		}
	},
	mounted() {
    this.getDetailList()
	},
	methods: {
    getDetailList() {
      api.getWalletDetail().then(res => {
        // console.log(res)
        this.list = res
      })
    }
	}
}
