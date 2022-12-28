<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-19 10:34:59
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-21 02:39:04
 * @FilePath: \student-boot-front\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { USER_INFO_KEY } from '@/config/constants'
import { saveItem } from '@/storage'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed:{
    // userInfo(){
    //   return this.$store.getters.userInfo
    // }
    ...mapGetters(["userInfo"])
  },
  methods:{
    saveUserInfo(){
      saveItem(USER_INFO_KEY,this.userInfo)
    }
  },
  mounted(){
    window.addEventListener("unload",this.saveUserInfo)
  }
}
</script>

<style>
  html,body,#app{
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
