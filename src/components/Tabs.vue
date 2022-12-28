<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-21 04:09:13
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-28 16:55:42
 * @FilePath: \student-boot-front\src\components\Ta_bs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-tabs :value="activeTabName"
             @tab-click="tabClick"
             @tab-remove="closeTab">
      <el-tab-pane
        :name="item.path"
        v-for="item in openedTabs"
        :key="item.path"
        :label="item.text"
        :closable=" item.path !== '/index' "
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name:'Tabs',
  computed:{
    activeTabName(){
      return this.$route.path
    }
  },
  watch:{
    $route:{
      immediate:true,
      handler(newValue,oldValue){
        console.log(newValue)
        let tab = {
          path:newValue.path,
          text:newValue.meta.title,
          fullPath:newValue.fullPath,
        }
        this.$store.dispatch("addTabIfNotExist",tab)
      }
    }
  },
  props:{
    "openedTabs":{
      type:Array,
      required:true
    }
  },
  methods:{
    tabClick(tab){
      let clickTab=this.openedTabs.find(valObj => valObj.path == tab.name)
      this.$router.replace(clickTab.fullPath)
    },
    closeTab(tabName){
      if(tabName !== this.activeTabName){
        this.$store.dispatch("closeTab",tabName)
        return
      }
      let tabToCloseIndex = this.openedTabs.findIndex(valObj => valObj.path === tabName );
      let tabToActive=this.openedTabs[tabToCloseIndex-1]
      console.log(tabToActive)
      this.$router.replace(tabToActive.fullPath)
      this.$store.dispatch("closeTab",tabName)
    }
  }
}
</script>

<style  scoped>

</style>
