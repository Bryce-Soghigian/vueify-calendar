import Vue from 'vue'
import App from './App.vue'
import Vueify from "vueify"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
