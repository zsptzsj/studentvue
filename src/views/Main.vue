<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 00:51:09
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 01:54:11
 * @FilePath: \student-boot-front\src\views\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div class="main">
    <el-container class="outer-conrainer">
      <el-header>
        <header-com></header-com>
      </el-header>
      <el-container>
        <el-aside :width="asideWidth">
          <side-bar @update:asideWidth="updateAsideWidth"></side-bar>
        </el-aside>
        <el-main>
          <Tabs :opened-tabs="openedTabs"></Tabs>
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
import HeaderCom from '@/components/HeaderCom.vue'
import SideBar from '@/components/SideBar'
import Tabs from '@/components/Tabs'
export default {
    name:'Main',
    data(){
      return{
        asideWidth:'200px'
      }
    },
    computed:{
      openedTabs(){
        return this.$store.getters.openedTabs
      }
    },
    methods:{
      updateAsideWidth(val){
        this.asideWidth = val
      }
    },
    components:{
      HeaderCom,
      SideBar,
      Tabs,
        Tabs
    }
}
</script>

<style  scoped>
  .el-header{
    background-color: #03a6bb;
    color: white;
  }
  .el-aside{
    background-color: #03a6dd;
  }
  .main,.outer-conrainer{
    height: 100%;
  }
  .el-main{
    padding: 10px;
  }
</style>
