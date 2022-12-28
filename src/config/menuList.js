/*
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-21 03:10:31
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-21 03:43:54
 * @FilePath: \student-boot-front\src\config\menuList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const menuList=[
    {
        path:'/index',
        comName:'Index',
        menuName:'首页',
        iconClassName:'el-icon-s-home'
    },
    {
        path:'/student/manage',
        comName:'StudentManage',
        menuName:'学生管理',
        iconClassName:'el-icon-s-custom'
    },
    {
        path:'/score/manage',
        comName:'ScoreManage',
        menuName:'成绩管理',
        iconClassName:'el-icon-s-flag'
    }
]

export default menuList