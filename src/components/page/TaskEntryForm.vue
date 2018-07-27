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
      <el-table-column prop="nkName" label="微信昵称">
      </el-table-column>
      <el-table-column prop="fkStatus" label="奖励发放">
      </el-table-column>
      <el-table-column prop="reward" label="奖励">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="referee" label="推荐人">
      </el-table-column>
      <el-table-column prop="address" label="提交地址">
      </el-table-column>
      <el-table-column prop="explain" label="提交说明">
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
        dialogAuditing: false,
        centerDialogVisible: true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        tableData: [{
          position: '',
          nkName: '',
          rank: '',
          fkStatus: '',
          reward: '',
          name: '',
          referee:'',
          address: '',
          explain: '',

        }, {

        }]
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