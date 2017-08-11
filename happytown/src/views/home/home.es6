import AppHeader from '../../components/appHeader'

export default {
  name: 'home',

  components: {
    AppHeader
  },

  data () {
    return {
      title: '首页',
      id: 20
    }
  },

  mounted() {
    this.title = '计算机'
  },

  methods: {

  }
}
