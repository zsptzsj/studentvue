/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 09:43:19
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-20 11:23:09
 * @FilePath: \student-boot-front\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store