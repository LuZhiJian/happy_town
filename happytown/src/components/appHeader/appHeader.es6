import { Component, Prop, Watch } from 'vue-property-decorator'

export default {
  name: 'appHeader',

  props: {
    id: Number,
  },

  props: ['id'],

  data () {
    return {
    }
  },
  mounted () {
    console.log(this.id)
  },

  methods: {
    onIdChange(val) {
      console.log(val)
    }
  },

  watch: {
    'id': {
      handler: 'onIdChange',
      immediate: true,
      deep: true
    }
  }

}
