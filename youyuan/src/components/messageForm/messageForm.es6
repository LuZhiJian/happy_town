export default {
	name: 'messageForm',
	components: {
  },
  props: ['data'],
	data () {
		return {
      formData: this.data || {}
		}
	},
	mounted() {
	},
	methods: {
    close() {
      this.$emit('close')
    },
    onDataChange(val) {
      this.formData = val
    }
  },
  watch: {
    'data': {
      handler: 'onDataChange',
      immediate: true,
      deep: true
    },
  }
}
