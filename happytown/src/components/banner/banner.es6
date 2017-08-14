import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

export default {
  name: 'banner',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      bannerList: [{
        img: 'http://wx2.sinaimg.cn/mw690/9b7a7878ly1fi5a7ysawhj20go0ban08.jpg',
        link: '#/info/11'
      }, {
        img: 'http://wx4.sinaimg.cn/mw690/9b7a7878ly1fi5a7z71eoj20go0b8gow.jpg',
        link: '#/info/21'
      }, {
        img: 'http://wx3.sinaimg.cn/mw690/9b7a7878ly1fi5a829iqpj20go0al0vt.jpg',
        link: '#/info/30'
      }, {
        img: 'http://wx4.sinaimg.cn/mw690/9b7a7878ly1fi5a7z71eoj20go0b8gow.jpg',
        link: '#/info/24'
      }],
      swiperOption: {
        autoplay: 4000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable :true,
        autoplayDisableOnInteraction: false
      }
    }
  },
  mounted () {
    this.linkList = []
  },

  methods: {
  }
}
