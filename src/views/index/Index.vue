<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 00:53:14
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 11:42:58
 * @FilePath: \student-boot-front\src\views\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div class="center-middle">
    <diV>
      你好,<span class="user-name">{{ userName }}</span>
      <h3 style="font-style: italic">欢迎使用</h3>
      <h1>学生成绩管理系统</h1>
    </diV>
  </div>
</template>

<script>
export default {
    name: 'Index',
    computed:{
      userName(){
        return this.$store.getters.userInfo.userName
      }
    }
}
</script>

<style  scoped>
.center-middle{
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center; 
}
h1,h3,h2,h4{
  font-weight: normal;
}
.user-name{
  color: red;
}
</style>
