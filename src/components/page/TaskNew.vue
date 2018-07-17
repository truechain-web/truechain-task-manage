<template>
  <div class="task-new-wrapper">
    	<div class="position">我的位置：任务管理>新建任务</div>
    	 <div class="fr">
       <el-button type="primary">保存</el-button>
       <el-button >取消</el-button>
       
    </div>
      <div class="details-content">
			  <div class="title">任务详情</div>
        <div class="form-wrap">
			<el-form ref="form" label-width="70px">
        <el-form-item label="任务名称：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
        	<el-form-item label="任务等级：">
					<el-select v-model="form.region" placeholder="全部">
						<el-option label="全部" value="quanbu"></el-option>
						<el-option label="A" value="a"></el-option>
						<el-option label="B" value="b"></el-option>
						<el-option label="C" value="c"></el-option>
					</el-select>
				</el-form-item>
        <el-form-item label="状态：">
					<el-select v-model="form.region" placeholder="启用">
					  <el-option label="启用" value="guanbi"></el-option>
						<el-option label="禁用" value="jinyong"></el-option>
        </el-select>
				</el-form-item>
        	<el-form-item label="任务类别：">
					<el-select v-model="form.region" placeholder="个人">
						<el-option label="个人" value="geren"></el-option>
						<el-option label="团体" value="tuanti"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="时间范围：">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				
				<el-form-item label="奖励类型：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
        <el-form-item label="奖励数量：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
        <el-form-item label="提交地址：" style="display:block;">
					<el-input v-model="form.name" style="width:200px"></el-input>
				</el-form-item>
        <el-form-item label="任务描述：" style="display:block">
					<el-input type="textarea" v-model="form.desc"></el-input>
				</el-form-item>
			
			</el-form>
		</div>
      </div>
      <div class="details-content">
      <div class="title">岗位详情</div>
      <div class="table-wrapper">
        <table class="table">
        	<tr>
        	  <th>岗位</th>
        	  <th>需要人数</th>
        	  <th>奖励/人</th>
        	</tr>
        	<tr class="el-table__row">
        	  <td><input type="text" class="el-input__inner"/></td>
        	  <td><input type="text" class="el-input__inner"/></td>
        	  <td><input type="text" class="el-input__inner"/></td>
        	</tr>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      	form: {
				
				},
    }
  },
  methods:{
      goback(){
        this.$router.go(-1)
      }
    }
}
</script>

<style >
	.task-new-wrapper .el-form-item__label {
		text-align: left;
		padding-right: 0;
	}
  .task-new-wrapper .form-wrap{padding: 10px 20px 20px;}
  .form-wrap .el-select input{width: 192px!important}
  .task-new-wrapper  .line {
		text-align: center;
	}
	.table{width: 100%; border-collapse: collapse;table-layout: fixed;    border: 1px solid #dfe6ec;
    border-spacing: 0;}
	.table th{
    border-bottom: 1px solid #dfe6ec;
    white-space: nowrap;
    overflow: hidden;
    background-color: #eef1f6;
    text-align: left;
	}
	.table td, .table th {
    border-right: 1px solid #dfe6ec;
    padding: 0 18px;
}
	.table td, .table th {
	      border-width: 0 0 1px;
    height: 40px;
    min-width: 0;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-style: solid;
    border-color: #e6e6e6;
}
.el-table__row{
      background-color: #fff;
}
 .table td{padding: 5px 10px;}   
 .table tr input{
   width: 240px;
 }
</style>
