/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 00:56:35
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 03:38:49
 * @FilePath: \student-boot-front\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import Index from '@/views/index/Index'
import StudentHome from '@/views/student/StudentHome'
import StudentManage from '@/views/student/StudentManage'
import ScoreHome from '@/views/score/ScoreHome'
import ScoreManage from '@/views/score/ScoreManage'
import AddScore from '@/views/score/AddScore'
import UpdateScore from '@/views/score/UpdateScore'
import { USER_TOKEN_KEY } from '@/config/constants'
import {getItem} from '@/storage/index'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name:'Login',
        component:Login,
        meta:{
            title:'登录'
        }
    },
    {
        // /score/manage
        path:'/',
        name:'Main',
        component:Main,
        children:[
            {
                path:'index',
                name:'Index',
                component:Index,
                meta:{
                    title:'首页'
                },
            },
            {
                path:'student',
                name:'StudentHome',
                component:StudentHome,
                children:[
                    {
                        path:'manage',
                        name:'StudentManage',
                        component:StudentManage,
                        meta:{
                            title:'学生管理'
                        },
                    },
                ]
            },
            {
                path:'score',
                name:'ScoreHome',
                component:ScoreHome,
                children:[
                    {
                        path:'manage',
                        name:'ScoreManage',
                        component:ScoreManage,
                        meta:{
                            title:'成绩管理'
                        },
                    },
                    {
                        path:'add',
                        name:'AddScore',
                        component:AddScore,
                        meta:{
                            title:'添加成绩'
                        },
                    },
                    {
                        path:'updata',
                        name:'UpdataScore',
                        component:UpdateScore,
                        meta:{
                            title:'修改成绩'
                        },
                    },
                ]
            },
        ]
    }
]

const router = new VueRouter({
    routes
})
const IGNOTE_URLS=['/','/login']
router.beforeEach((toRoute,fromRouter,next) =>{

    Nprogress.start()
    if(IGNOTE_URLS.includes(toRoute.path)){
        next()
    }else{
        let token = getItem(USER_TOKEN_KEY)
        console.log(token)
        if(token){
            return next()
        }
    }
    return next({path:IGNOTE_URLS[0]})
})

router.afterEach((toRoute,fromRouter)=>{
    Nprogress.done()
    document.title= toRoute.meta.title
})

export default router