import MessageForm from '../../components/messageForm'
import * as api from '../../api'

export default {
	name: 'editBasic',
	components: {
    MessageForm
  },
	data () {
		return {
      msgBoxData: {
        msgVisible: false,
        msgTitle: '',
        editValue: '',
        editKey: ''
      },
      editForm: {},
      eduSheetVisible: false
		}
	},
	mounted() {
    this.initForm()
	},
	methods: {
    initForm() {
      this.editForm = Object.assign({}, this.userBasicInfo)
    },
    editText(label, key, myvalue) {
      this.msgBoxData.msgTitle = label
      this.msgBoxData.msgVisible = true
      this.msgBoxData.editValue = myvalue
      this.msgBoxData.editKey = key
    },
    setData(data) {
      this.editForm[data.editKey] = data.editValue
    },
    msgClose() {
      this.msgBoxData = {
        msgVisible: false,
        msgTitle: '',
        editValue: '',
        editKey: ''
      }
    },
    submit() {
      this.$indicator.open()
      api.saveBasicInfo(this.editForm).then(res => {
        this.$indicator.close()
        location.href = '#/user/center/0'
      })
    }
  },
  computed: {
    userBasicInfo() {
      return this.$store.state.userBasicInfo
    }
  }
}
