import SwiperBanner from '../../components/swiperBanner'
import * as api from '../../api'

export default {
	name: 'activity',
	components: {
    SwiperBanner
	},
	data () {
		return {
      tabIndex: 1,
      detailData: {
        leaderInfo: {}
      },
      bannerList: [],
      memberList: []
		}
	},
	mounted() {
    this.getDetail()
    this.getMembers()
	},
	methods: {
    getDetail() {
      const data = {
        activityId: this.$route.params.id
      }
      api.getActivityDetail(data).then(res => {
        this.bannerList = []
        this.detailData = res
        res.imgUrls.forEach(v => {
          this.bannerList.push({
            img: v
          })
        })
      })
    },
    getMembers() {
      const data = {
        activityId: this.$route.params.id
      }
      api.getActivityMembers(data).then(res => {
        this.memberList = this.memberList.concat(res.leaderInfos, res.registers)
      })
    }
  }
}
