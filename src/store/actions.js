/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 09:45:27
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 02:29:31
 * @FilePath: \student-boot-front\src\store\action.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {STORE_USER_INFO} from './mutation'

export default{
    storeUserInfo(context,payload){
        context.commit(STORE_USER_INFO,payload)
    },
    addTabIfNotExist(context,tabToAdd){
        let existFlag=context.state.openedTabs.some(Obj => Obj.path === tabToAdd.path)
        if(existFlag){
            return
        }
        context.commit("addTab",tabToAdd)
    },
    closeTab(context,tabName){
        context.commit("closeTab",tabName)
    }
}
