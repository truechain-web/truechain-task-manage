<template>
<div class="task-entryForm-content">
		<div class="position">我的位置：任务管理>报名表</div>
		<div class="status">
		    <span>任务名称：<span>兼职任务06-23</span></span>
		    <span>审核状态：<span>未审核</span></span>
		</div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="position" label="岗位">
      </el-table-column>
      <el-table-column prop="nkName" label="微信昵称" >
      </el-table-column>
      <el-table-column prop="rank" label="审核名次" >
      </el-table-column>
      <el-table-column prop="fkStatus" label="奖励发放" >
      </el-table-column>
      <el-table-column prop="reward" label="奖励">
      </el-table-column>
      <el-table-column prop="name" label="姓名" >
      </el-table-column>
      <el-table-column prop="address" label="提交地址" >
      </el-table-column>
      <el-table-column prop="explain" label="提交说明" >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link to="TaskDetails">
            <el-button size="mini" @click="">审核</el-button>
          </router-link>
          <router-link to="TaskEntryForm">
          <el-button size="mini"  @click="">奖励</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>       
</div>
</template>

<script>
  export default{
    name:'TaskEntryForm',
    data(){
      return{
          tableData: [{
            position: '',
            nkName: '',
            rank:'',
            fkStatus: '',
            reward:'',
            name:'',
            address:'',
            explain:''
          
        }, {
          
        } ]
      }
    }
  }
</script>

<style>
  .status{font-size: 14px;margin-bottom: 15px;}
  .status span{margin-right: 20px;}
</style>