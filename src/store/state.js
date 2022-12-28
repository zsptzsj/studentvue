/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 09:45:19
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 01:50:41
 * @FilePath: \student-boot-front\src\store\state.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getItem } from '@/storage'
import { USER_INFO_KEY } from '@/config/constants'

const state={
    userInfo:getItem(USER_INFO_KEY) ? JSON.parse(getItem(USER_INFO_KEY)):{
        id: -1,
        userName:''
    },
    openedTabs:[
        {
            path:'/index',
            text:'首页',
            fullPath:'/index'
        }
    ]
}

export default state