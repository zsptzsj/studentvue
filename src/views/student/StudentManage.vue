<!--
 * @Author: zsj 2318940149@qq.com
 * @Date: 2022-12-20 00:53:49
 * @LastEditors: zsj 2318940149@qq.com
 * @LastEditTime: 2022-12-28 03:21:58
 * @FilePath: \student-boot-front\src\views\student\StudentManage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div>
    <section class="title-bar">
      <el-row>
        <el-col :span="2">
          <el-button @click="openAddDia" type="primary" icon="el-icon-plus">
            新增
          </el-button>
        </el-col>
        <el-col :span="22">
          <el-form :model="searchFormData" :inline="true">
            <el-form-item>
              <el-input type="text" placeholder="请输入学生姓名"
                                    v-model="searchFormData.searchWord">
                                  </el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="doSearch" type="primary">
                查询
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </section>
    <section>
      <el-table
        :data="tableData.rows"
        stripe
        border
        size="mini"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="系统编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="no"
          label="学号">
        </el-table-column>
        <el-table-column
          prop="realName"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="enrollTime"
          label="入学日期">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section>
      <el-pagination
        @size-change="handlePageSizeChange"
        @current-change="handlePageNowChange"
        :current-page="searchFormData.pageNow"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="searchFormData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.total">
      </el-pagination>
    </section>

    <add-student :addDiaVisible.sync="addDiaVisible" @addSuccess="handleAddSuccess"></add-student>
    <update-student :updateDiaVisible.sync="updateDiaVisible" :idToUpdate="idToUpdate" @updateSuccess="handleUpdateSuccess"></update-student>
  </div>
</template>

<script>
import AddStudent from '@/views/student/AddStudent'
import UpdateStudent from '@/views/student/UpdateStudent'

export default {
    name:'StudentManage',
    data(){
      return{
        searchFormData:{
          pageNow: 1,
          pageSize:10,
          searchWord:''
        },
        addDiaVisible:false,
        updateDiaVisible:false,
        idToUpdate: -1,
        tableData:{
          rows:[],
          total:0
        }
      }
    },
    methods:{
      openAddDia(){
        this.addDiaVisible=true
      },
      doSearch(){
        this.loadTable()
      },
      handleAddSuccess(){
        this.addDiaVisible=false
        this.loadTable()
      },
      handleUpdateSuccess(){
        this.updateDiaVisible=false
        this.loadTable()
      },
      loadTable(){
        this.$formPost({
          url:'/student/selectPage',
          data:this.searchFormData
        }).then(result =>{
          console.log(result.data)
          console.log(result.data.length)
          if(result.data && result.data.length>0){
            this.tableData.rows = result.data
            this.tableData.total = result.total
          }
        })
      },
      handleEdit(index,row){
        this.idToUpdate = row.id
        this.updateDiaVisible = true
      },
      handleDelete(index,row){
        this.$confirm("确认要删除吗？","提示",{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
        }).then(()=>{
          this.$doGet({
            url:'/student/deleteById',
            params:{'id':row.id}
          }).then(result =>{
            this.$message.success(result.data)
            this.loadTable()
          })
        }).catch(()=>{
          
        })
      },
      handlePageSizeChange(pageSize){
        this.searchFormData.pageSize = pageSize
        this.loadTable()
      },
      handlePageNowChange(pageNow){
        this.searchFormData.pageNow = pageNow
        this.loadTable()
      },
    },
    components:{
      AddStudent,
      UpdateStudent
    },
    mounted(){
      this.loadTable()
    }
}
</script>

<style  scoped>

</style>
