<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-19 23:03:40
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-27 09:23:02
 * @FilePath: \student-boot-front\src\views\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login">
    登录
    <el-form ref="loginForm" :model="formData" :rules="rules">
        <el-form-item label="用户名" prop="userName">
            <el-input v-model="formData.userName"
                      type="text"
                      placeholder="请输入用户名"
                      size="medium"
                      clearable 
            >
              <template slot="prepend"><i class="el-icon-user-solid"></i></template>
            </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input v-model="formData.pwd"
                      type="password"
                      placeholder="请输入密码"
                      size="medium"
                      show-password
                      clearable 
            >
              <template slot="prepend"><i class="el-icon-lock"></i></template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <div class="btn-grouup">
              <el-button type="success" size="medium" @click="subitForm">
                登录
              </el-button>
              <el-button type="primary" size="medium" @click="resetForm">
                重置
              </el-button>
            </div>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { saveItem } from '@/storage'
import { USER_TOKEN_KEY } from '@/config/constants'
export default {
  name:'Login',
  data() {
      return {
        formData: {
          userName:'',
          pwd:''
        },
        rules:{
            userName:[
                {
                    required: true,
                    message:'请输入用户名',
                    trigger:'blur'
                }
            ],
            pwd:[
                {
                    required: true,
                    message:'请输入密码',
                    trigger:'blur'
                }
            ]
        }
      }
    },
    methods: {
      subitForm() {
        this.$refs["loginForm"].validate((valid)=>{
          if(valid){
            this.$formPost({
              url:'/manager/login',
              data:this.formData
            }).then(result=>{
              this.$store.dispatch("storeUserInfo",result.data)
              saveItem(USER_TOKEN_KEY,result.data.token)
              this.$router.replace("/index")
            }).catch(err =>{})
          }
        })
      },
      resetForm(){
        this.$refs["loginForm"].resetFields()
      }
  }
}
</script>

<style  scoped>
.login{
    width: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
}
.btn-grouup{
  display: flex;
  justify-content: space-around;
}
</style>
