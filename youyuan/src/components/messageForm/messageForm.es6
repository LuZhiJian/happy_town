export default {
	name: 'messageForm',
	components: {
  },
  props: ['data'],
	data () {
		return {
      formData: this.data || {},
      showErr: false
		}
	},
	mounted() {
	},
	methods: {
    close() {
      this.$emit('close')
    },
    submit() {
      if (!this.formData.editValue) {
        this.$toast('提交内容不能为空')
        return false
      }
      this.$emit('submit', this.formData)
      this.close()
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
