<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-21 03:14:58
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-22 01:37:35
 * @FilePath: \student-boot-front\src\components\SideBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-21 03:14:58
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-21 04:02:04
 * @FilePath: \student-boot-front\src\components\SideBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div>
    <div class="collapse" @click="toggleCollapse">
        <span :class="isCollapsed?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></span>
    </div>
    <el-menu
      :default-active="activeName"
      class="el-menu-vertical-demo"
      :collapse-transition="false"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item :index="item.path"
        v-for="item in menuList"
        :key="item.path"
        @click="clickMenuItem(item)"
      >
        <i :class="item.iconClassName"></i>
        <span slot="title">{{ item.menuName }}</span>
      </el-menu-item>
      <div @click="logout">
        <el-menu-item index="logout">
            <i class="el-icon-unlock"></i>
            <span slot="title">退出</span>
        </el-menu-item>
    </div>
    </el-menu>
  </div>
</template>

<script>
import menuList from "@/config/menuList";
import { clearAll } from "@/storage";
export default {
  name:'SideBar',
  data(){
    return {
        menuList:menuList,
        isCollapsed:false
    }
  },
  computed:{
    activeName(){
        return this.$route.path
    }
  },
  methods:{
        toggleCollapse(){
            if(this.isCollapsed){
                this.$emit("update:asideWidth",'200px')
            }else{
                this.$emit("update:asideWidth",'65px')
            }
            this.isCollapsed = !this.isCollapsed
        },
        clickMenuItem(item){
            this.$router.replace({
                name:item.comName
            })
        },
        logout(){
            clearAll()
            this.$router.replace("/login")
        }
    }
}
</script>

<style  scoped>
.collapse{
    background-color: rgb(110, 170, 220);
    padding: 8px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    line-height: 1.5;
}
aside ul,aside ul li{
    background-color: #03a6dd;
}
.el-menu {
    border-right-width: 0;
}
li.el-submenu >>> .el-submenu_title:hover{
    background-color: rgb(0, 48, 102) !important;
}
.el-menu-item:focus,.el-menu-item:hover,.el-menu-item.is-active{
    background-color: rgb(0, 48, 102) !important;
}
</style>
