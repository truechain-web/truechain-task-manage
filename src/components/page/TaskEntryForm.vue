<template>
  <div class="task-entryForm-content">
    <div class="position">我的位置：任务管理>报名表</div>
    <div class="status">
      <span>任务名称：<span>{{taskName}}</span></span>
      <span>审核状态：<span>{{totalAuditStatus}}</span></span>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="station" label="岗位">
      </el-table-column>
      <el-table-column prop="wxNickName" label="微信昵称">
      </el-table-column>
      <el-table-column prop="rewardNum" label="奖励发放">
      </el-table-column>
      <el-table-column prop="rewardNum" label="奖励">
      </el-table-column>
      <el-table-column prop="personName" label="姓名">
      </el-table-column>
      <el-table-column prop="recommendUser" label="推荐人">
      </el-table-column>
      <el-table-column prop="pushAddress" label="提交地址">
      </el-table-column>
      <el-table-column prop="remark" label="提交说明">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="dialogAuditing = true">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="btn-center">
      <el-button @click="goback">返回</el-button>
    </div>
    <el-dialog title="审核"  width="30%" :visible.sync="dialogAuditing" >
      <el-form :model="form">
        <el-form-item label="产品：" :label-width="formLabelWidth">
          沈家
        </el-form-item>
        <el-form-item label="奖励数：" :label-width="formLabelWidth">
          <el-input v-model="form.num" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="推荐人奖励数：" :label-width="formLabelWidth">
          <el-input v-model="form.num" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAuditing = false">取 消</el-button>
        <el-button type="primary" @click="dialogAudit" :plain="true" >发放奖励</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'TaskEntryForm',
    data() {
      return {
      	taskName:'',
      	totalAuditStatus:'',
        dialogAuditing: false,
        centerDialogVisible: true,
        form: {
          
        },
        formLabelWidth: '120px',
        tableData: []
      }
    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      dialogAudit(){
        this.dialogAuditing=false
        this.$message({
          message: '奖励已发送',
          type: 'success'
        });
      },
      getTaskEntryForm(){
      	let id =  this.$route.query.taskId
		  	let url="http://www.phptrain.cn/testadmin/task/getEntryFormInfo?taskId="+id
		  	this.$http.post(url, {
		  		headers: {
            		"Content-Type": "application/json"
          		}
		  	}).then((res)=>{
		  		console.log(res.data.result,'000000000')
		  		if(res.data.message=='成功'){
		  			if (res.data.result) {
		  				var result=res.data.result
		  				this.tableData=result.taskEntryFromInfoList
		  				this.taskName=result.taskName
		  				this.totalAuditStatus=result.totalAuditStatus
		  			}
		  		}
		  	})
      }
    },
    mounted(){
    	this.getTaskEntryForm()
   
    }
  }
</script>

<style type="text/css">
	.el-message{
    top: 200px!important;
  }
</style>
<style scoped>
  
  .btn-center {
    text-align: center;
    margin: 10px 0;
  }
  
  .status {
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  .status span {
    margin-right: 20px;
  }
</style>