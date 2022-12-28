<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-21 02:41:46
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-21 02:52:44
 * @FilePath: \student-boot-front\src\components\HeadCom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div class="header-com">
    <el-row>
      <el-col :span="10" class="login">
        学生成绩管理系统
      </el-col>
      <el-col :span="4" :offset="10" class="user-info">
        欢迎您 <span class="user-name">{{ userInfo.userName }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'HeaderCom',
    computed:{
      ...mapGetters(["userInfo"])
    }
}
</script>

<style  scoped>
.user-info{
  text-align: right;
  line-height: 60px;
}
.user-name{
  color: red;
  padding-left: 5px;
  font-weight: bold;
}
.login{
  line-height: 60px;
  font-size: 25px;
}
</style>
