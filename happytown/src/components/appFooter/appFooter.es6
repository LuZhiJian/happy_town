export default {
  name: 'appFooter',
  data () {
    return {
      linkList: []
    }
  },
  mounted () {
    this.linkList = [{
      name: '匠品',
      icon: 'icon-cubelifangti',
      link: '#/',
      isActive: true
    }, {
      name: '匠人',
      icon: 'icon-global',
      link: '#/jr',
      isActive: false
    }, {
      name: '我',
      icon: 'icon-wo',
      link: '#/me',
      isActive: false
    }]
  },

  methods: {
  }
}
