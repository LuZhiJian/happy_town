import { Component, Prop, Watch } from 'vue-property-decorator'

export default {
  name: 'appHeader',

  props: {
    id: Number,
  },

  props: ['left', 'title', 'right'],

  data () {
    return {
      leftData: this.left || false,
      titleData: this.title || false,
      rightData: this.right || false
    }
  },

  mounted () {
  },

  methods: {
    onLeftChange(val) {
      this.leftData = val
    },
    onTitleChange(val) {
      this.titleData = val
    },
    onRightChange(val) {
      this.rightData = val
    },
    // 返回上一页
    back() {
      this.$router.go(-1)
    }
  },

  watch: {
    'left': {
      handler: 'onLeftChange',
      immediate: true,
      deep: true
    },
    'title': {
      handler: 'onTitleChange',
      immediate: true,
      deep: true
    },
    'right': {
      handler: 'onRightChange',
      immediate: true,
      deep: true
    }
  }

}
