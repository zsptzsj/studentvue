/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 09:45:46
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 02:32:46
 * @FilePath: \student-boot-front\src\store\mutations.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {STORE_USER_INFO} from '@/store/mutation'

export default{
    [STORE_USER_INFO](state,userInfo){
        state.userInfo = userInfo
    },
    addTab(state,tabToAdd){
        state.openedTabs.push(tabToAdd)
    },
    closeTab(state,tabName){
        state.openedTabs=state.openedTabs.filter(val => val.path !== tabName)
    }
    
}
