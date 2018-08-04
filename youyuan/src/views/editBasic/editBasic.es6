import MessageForm from '../../components/messageForm'

export default {
	name: 'editBasic',
	components: {
    MessageForm
  },
	data () {
		return {
      form: {
        avatar: 'https://wx1.sinaimg.cn/mw690/bd297795gy1ft9lbpli80j20j60gzgpk.jpg',
        name: '天使彦',
        sex: 2,
        age: 24,
        height: 178,
        education: '本科',
        city: '广东广州',
        occupation: '自由职业者',
        emotion: '单身',
        desc: '旅行真正的快乐不在于目的地，而在于它的过程。遇见不同的人，遭遇到奇奇怪怪的事，克服种种的困难，听听不同的语言，在我都是很大的快乐。虽说一沙一世界，一花一天堂。更何况世界不止是一沙一花，世界是多少多少奇妙的现象累积起来的。我看，我听，我的阅历就更丰富了。'
      },
      msgBoxData: {
        msgVisible: false,
        msgTitle: '',
        editValue: '',
        editKey: ''
      }
		}
	},
	mounted() {
	},
	methods: {
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
	}
}
