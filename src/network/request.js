/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 03:05:20
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-28 01:48:49
 * @FilePath: \student-boot-front\src\network\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BASE_URL, USER_INFO_KEY } from '@/config/constants'
import { clearAll, getItem } from '@/storage'
import axios from 'axios'
import { MessageBox } from 'element-ui'
import qs from 'qs'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

axios.defaults.baseURL=BASE_URL
axios.defaults.timeout = 1000*60*10
axios.defaults.headers["Content-Type"] = "applicaton/josn"

function addInterceptors(axiosInstance){
    // 请求拦截器
    axiosInstance.interceptors.request.use(config =>{
        Nprogress.start()
        // 获取token并加入请求中
        let userToken = getItem(USER_INFO_KEY)
        if(userToken){
            config.headers['Authorization'] = userToken
        }
        return config;
    }),error=>{
        console.log("请求发送失败",error)
        MessageBox.alert("请求发送失败","错误提示")
    }
    axiosInstance.interceptors.response.use(resultWrapper =>{
        Nprogress.done()
        let result =  resultWrapper.data;
        console.log(result);
        if(result.success){
            return result;
        }else{
            if(result.code && result.code === 30001){
                // 跳转登录页面
                clearAll()
                window.location.reload()
            }else{
                MessageBox.alert(result.msg,"错误提示")
                return Promise.reject(result)
            }
        }
    }),error=>{
        Nprogress.done()
        Message.error("请求发送失败")
        return Promise.reject("服务器响应失败")
    }
}

// 用来发用get
let getInstance= axios.create()
addInterceptors(getInstance);

// 用来发用post
let fromPostInstance= axios.create({
    method:"post",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    transformRequest: [function(data,headers){
        return qs.stringify(data)
    }]
})
addInterceptors(fromPostInstance);

let appJsonPostInstance= axios.create({
    method:"post",
});
addInterceptors(appJsonPostInstance);


export function doGet(config){
    return getInstance(config)
}

export function formPost(config){
    return fromPostInstance(config)
}

export function appJsonPost(config){
    return appJsonPostInstance(config)
}