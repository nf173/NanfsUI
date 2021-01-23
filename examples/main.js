import Vue from 'vue'
import App from './App.vue'

import '../icons'

// 导入组件库
import NfIcon from '../packages/index'
import NfInput from '../packages/index'
import NfButton from '../packages/index'

// 注册组件库
Vue.use(NfIcon)
Vue.use(NfInput)
Vue.use(NfButton)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
