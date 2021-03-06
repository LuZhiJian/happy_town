import * as api from '../../api'

export default {
	name: 'joinMembers',
	components: {
	},
	data () {
		return {
      leaderList: [],
      memberList: [
        {
          avatar: 'https://wx3.sinaimg.cn/mw690/8debe637gy1ftbnocrjplj20j60j6gn1.jpg',
          sex: 1,
          name: '傻肯定'
        },
        {
          avatar: 'https://wx1.sinaimg.cn/mw690/8debe637gy1ftbnocramkj20j60j6gmm.jpg',
          sex: 2,
          name: '小左木'
        },
        {
          avatar: 'https://wx4.sinaimg.cn/mw690/8debe637gy1ftbnocrom2j20j60j6wfp.jpg',
          sex: 1,
          name: '慕斯古风'
        },
        {
          avatar: 'https://wx2.sinaimg.cn/mw690/8debe637gy1ftbnocuykoj20j60j577a.jpg',
          sex: 2,
          name: '樱桃小姐姐'
        },
        {
          avatar: 'https://wx1.sinaimg.cn/mw690/8debe637gy1ftbnocvb3rj20j60j6whi.jpg',
          sex: 1,
          name: '小可医生'
        },
        {
          avatar: 'https://wx4.sinaimg.cn/mw690/8debe637gy1ftbnocspffj20j60j6ta0.jpg',
          sex: 2,
          name: '暴走萝莉'
        },
        {
          avatar: 'https://wx4.sinaimg.cn/mw690/8debe637gy1ftbnocvjzfj20di0db74o.jpg',
          sex: 2,
          name: '高冷了点哈哈哈'
        },
        {
          avatar: 'https://wx3.sinaimg.cn/mw690/8debe637gy1ftbnocvznsj20dp0d4jru.jpg',
          sex: 1,
          name: '面目全非'
        },
      ]
		}
	},
	mounted() {
    this.getMembers()
	},
	methods: {
    getMembers() {
      const data = {
        activityId: this.$route.params.activityId
      }
      api.getActivityMembers(data).then(res => {
        this.leaderList = this.leaderList.concat(res.leaderInfo)
        this.memberList = res.registers
      })
    }
	}
}
