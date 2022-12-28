/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-19 10:34:59
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-20 09:49:09
 * @FilePath: \student-boot-front\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import plugins from '@/plugins/plugins'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(ElementUI,{size:'small'})
Vue.use(plugins)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
