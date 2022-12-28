/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 10:19:07
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-21 00:59:48
 * @FilePath: \student-boot-front\src\storage\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function saveItem(key,value){
    if(typeof value ==='object'){
        window.sessionStorage.setItem(key,JSON.stringify(value))
    }else{
        window.sessionStorage.setItem(key,value)
    }
}

export function getItem(key){
    return window.sessionStorage.getItem(key)
}
export function clearAll(){
    window.sessionStorage.clear()
}