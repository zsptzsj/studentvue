<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 00:54:44
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-28 03:32:34
 * @FilePath: \student-boot-front\src\views\student\UpdateStudent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div>
    <el-dialog title="更新学生" :visible="updateDiaVisible" @open="handleOpen" :before-close="handleCancel">
      <el-form :model="formData" :rules="rules" label-width="120px" ref="updateForm">
        <el-form-item label="系统编号:">
          <el-input v-model="formData.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="学号:">
          <el-input v-model="formData.no" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名:" prop="realName">
          <el-input v-model="formData.realName"></el-input>
        </el-form-item>
        <el-form-item label="入学日期:" prop="enrollTime">
          <el-date-picker type="date"
                          v-model="formData.enrollTime"
                          :editable="true"
                          prefix-icon="el-icon-date"
                          value-format="yyyy-MM-dd">

          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name:'UpdateStudent',
    data(){
      return{
        formData:{
          id: -1,
          no:'',
          realName:'',
          enrollTime:''
        },
        rules:{
            realName:[
                {
                    required: true,
                    message:'请输入姓名',
                    trigger:'blur'
                }
            ],
            enrollTime:[
                {
                    required: true,
                    message:'选择入学日期',
                    trigger:'blur'
                }
            ]
        }
      }
    },
    props:{
      updateDiaVisible:{
        default:false
      },
      idToUpdate:{

      }
    },
    methods:{
      onSubmit(){
        console.log(JSON.stringify(this.formData))
        this.$refs["updateForm"].validate((valid)=>{
          if(!valid) return
          this.$formPost({
            url:'/student/updateById',
            data:this.formData
          }).then(result =>{
            this.$message.success(result.data)
            this.$refs["updateForm"].resetFields()
            this.$emit("updateSuccess")
          }).catch(result =>{})
        })
      },
      handleCancel(){
        this.$refs["updateForm"].resetFields()
        this.$emit("update:updateDiaVisible",false)
      },
      handleOpen(){
        this.$doGet({
            url:'/student/selectById',
            params:{id:this.idToUpdate}
          }).then(result =>{
            this.formData = result.data
          }).catch(result =>{})
      }
    }
}
</script>

<style  scoped>

</style>
