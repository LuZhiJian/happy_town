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
      activityList: [
        {
          acName: '鸡枕山广州第二峰',
          acId: 101,
          img: 'https://wx4.sinaimg.cn/mw690/bd297795gy1ft9lbp8nptj20j60iyq85.jpg',
          status: '已报名',
          date: '03月24日',
          day: 2,
          credit: 90,
        }, {
          acName: '广州塔',
          acId: 102,
          img: 'https://wx2.sinaimg.cn/mw690/67dd74e0gy1fpi9ndrxkej20j60nyjwa.jpg',
          status: '未报名',
          date: '08月24日',
          day: 3,
          credit: 130,
        }, {
          acName: '长隆水上乐园',
          acId: 103,
          img: 'https://ww4.sinaimg.cn/mw690/7f0b4796jw1ej8d86bvpxj20dt0dwta2.jpg',
          status: '已报名',
          date: '09月06日',
          day: 7,
          credit: 800,
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
    }
	}
}
