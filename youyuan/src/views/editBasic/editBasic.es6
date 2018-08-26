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
      editForm: {}
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
    msgClose() {
      this.msgBoxData = {
        msgVisible: false,
        msgTitle: '',
        editValue: '',
        editKey: ''
      }
    }
  },
  computed: {
    userBasicInfo() {
      return this.$store.state.userBasicInfo
    }
  }
}
