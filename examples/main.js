import Vue from 'vue'
import App from './App.vue'

import '../icons'

// 导入组件库
import NfButton from '../packages/index'
import NfIcon from '../packages/index'
// 注册组件库
Vue.use(NfButton)
Vue.use(NfIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
