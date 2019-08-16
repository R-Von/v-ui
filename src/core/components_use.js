import Vue from 'vue'
import Message from '@/components/Message'
import MessageBox from '@/components/MessageBox'
import Toast from '@/components/Toast'


Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$toast = Toast