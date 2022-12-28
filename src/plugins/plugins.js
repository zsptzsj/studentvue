/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 03:17:15
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-20 09:20:02
 * @FilePath: \student-boot-front\src\plugins\plugins.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { doGet ,formPost ,appJsonPost} from "@/network/request"

export default{
    install(Vue){
        Vue.prototype.$doGet=doGet
        Vue.prototype.$formPost=formPost
        Vue.prototype.$appJsonPost=appJsonPost
    }
}