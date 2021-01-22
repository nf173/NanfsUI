// 导入组件，组件必须声明 name
import NfButton from './src/nf-button.vue'

// 为组件提供 install 安装方法，供按需引入
NfButton.install = function (Vue) {
  Vue.component(NfButton.name, NfButton)
}

// 默认导出组件
export default NfButton
