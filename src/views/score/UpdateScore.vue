<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 00:55:24
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-28 15:46:16
 * @FilePath: \student-boot-front\src\views\score\UpdateScore.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-form :model="formData" :rules="rules" label-width="120px" ref="updateForm">
          <el-form-item label="编号:">
            <el-input v-model="formData.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="选择学生:" prop="studentId">
            <el-select v-model="formData.studentId">
              <el-option v-for="(one) in formCfg.studentList" :key="one.id" :label="one.realName" :value="one.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="考试名称:" prop="examName">
            <el-input v-model="formData.examName"></el-input>
          </el-form-item>
          <el-form-item label="语文成绩:" prop="cnScore">
            <el-input v-model="formData.cnScore"></el-input>
          </el-form-item>
          <el-form-item label="数学成绩:" prop="mathScore">
            <el-input v-model="formData.mathScore"></el-input>
          </el-form-item>
          <el-form-item label="英语成绩:" prop="enScore">
            <el-input v-model="formData.enScore"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="doSubmit" type="primary">修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'UpdateScore',
  computed:{
    idToUpdate(){
      return this.$route.query.idToUpdate
      console.log(this.formData);
    }
  },
  data(){
    const validateNum = (rule,value,cb) =>{
      let numReg=/^(\d+)$|^(\d+\.\d+)$/;
      if(!numReg.test(value)){
        cb(new Error("请输入数字值"))
      }else{
        cb()
      }
    }
    return{
      formData:{
        id:'',
        studentId:'',
        examName:'',
        cnScore:'',
        enScore:'',
        mathScore:'',
      },
      rules:{
        studentId:[
              {
                  required: true,
                  message:'请选择学生',
                  trigger:'blur'
              }
          ],
          examName:[
              {
                  required: true,
                  message:'请输入考试名称',
                  trigger:'blur'
              }
          ],
          cnScore:[
              {
                  required: true,
                  message:'选择语文成绩',
                  trigger:'blur'
              },
              {validator:validateNum,trigger:'blur'}

          ],
          mathScore:[
              {
                  required: true,
                  message:'选择语文成绩',
                  trigger:'blur'
              },
              {validator:validateNum,trigger:'blur'}
          ],
          enScore:[
              {
                  required: true,
                  message:'选择语文成绩',
                  trigger:'blur'
              },
              {validator:validateNum,trigger:'blur'}
          ]
      },
      formCfg:{
        studentList:[]
      }
    }
  },
  methods:{
    doSubmit(){
      this.$refs["updateForm"].validate((valid)=>{
        if(!valid) return
        this.$formPost({
          url:'/score/updateById',
          data:this.formData
        }).then(result =>{
          this.$message.success(result.data)
          this.$refs["updateForm"].resetFields()
          this.$router.replace("/score/manage")
        }).catch(result =>{})
      })
    },
  },
  mounted(){
    this.$doGet({
      url:'/student/selectAll'
    }).then(result =>{
      this.formCfg.studentList = result.data
      return Promise.resolve()
    }).then(result =>{
      this.$doGet({
        url:'/score/selectById?id='+this.idToUpdate
      }).then(r =>{
        this.formData = r.data
      })
    })
  }
}
</script>

<style  scoped>

</style>
