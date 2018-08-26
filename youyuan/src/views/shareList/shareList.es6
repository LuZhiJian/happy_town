import * as api from '../../api'

export default {
	name: 'shareList',
	components: {
	},
	data () {
		return {
      memberList: []
		}
	},
	mounted() {
    this.getList()
	},
	methods: {
    getList() {
      api.getShareList().then(res => {
        this.memberList = res
      })
    }
	}
}
