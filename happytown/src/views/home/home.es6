import AppHeader from '../../components/appHeader'
import AppFooter from '../../components/appFooter'
import Banner from '../../components/banner'

export default {
  name: 'home',

  components: {
    AppHeader,
    AppFooter,
    Banner
  },

  data () {
    return {
      headData: {
        left: 'menu',
        title: 'input',
        right: false
      },
      proList: [
        {
          img: 'http://wx1.sinaimg.cn/mw690/9b7a7878ly1fi4eqyr2izj20go0bgju8.jpg',
          id: 1,
          name: '被遗忘的美好童年',
          isCollected: false
        }, {
          img: 'http://wx1.sinaimg.cn/mw690/9b7a7878ly1fi4eqxtlnjj20go0b076j.jpg',
          id: 2,
          name: '去捕捉那时光',
          isCollected: true
        }, {
          img: 'http://wx4.sinaimg.cn/mw690/9b7a7878ly1fi4equc964j20go0catbt.jpg',
          id: 3,
          name: '爷爷的故事',
          isCollected: true
        }, {
          img: 'http://wx3.sinaimg.cn/mw690/9b7a7878ly1fi4equxr7jj20go0cdtc4.jpg',
          id: 4,
          name: '放飞的，都是初真',
          isCollected: false
        }, {
          img: 'http://wx2.sinaimg.cn/mw690/9b7a7878ly1fi4eqvdsboj20go0butbk.jpg',
          id: 5,
          name: '放学了..',
          isCollected: false
        }
      ],
    }
  },

  mounted() {
  },

  methods: {

  }
}
