<template>
	<div class="">
		<div class="position">我的位置：统计明细表>任务明细</div>
		<el-form ref="form"  :inline="true"  class="demo-form-inline">
				<el-form-item label="时间段：">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.startDateTime" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.endDateTime" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
			
				<el-form-item label="任务名称：">
					<el-input v-model="form.wxNickName"></el-input>
				</el-form-item>
				<el-form-item label="任务等级：">
          <el-select v-model="form.level" placeholder="全部">
            <el-option label="全部" value=""></el-option>
            <el-option label="A" value="A"></el-option>
            <el-option label="B" value="B"></el-option>
            <el-option label="C" value="C"></el-option>
          </el-select>
       </el-form-item>
       <el-form-item label="任务类别：">
          <el-select v-model="form.level" placeholder="全部">
            <el-option label="全部" value=""></el-option>
            <el-option label="个人" value="0"></el-option>
            <el-option label="团队" value="1"></el-option>
          </el-select>
       </el-form-item>
       <el-form-item label="任务状态：">
          <el-select v-model="form.level" placeholder="全部">
            <el-option label="全部" value=""></el-option>
            <el-option label="进行中" value="0"></el-option>
            <el-option label="已完成" value="1"></el-option>
          </el-select>
       </el-form-item>
       	<el-form-item class="btn-wrap">
					<el-button type="primary"  @click="getStaticsInfo">查询</el-button>
					<el-button @click="reset">重置</el-button>
				</el-form-item>
			</el-form>
			<div><span>姓名：</span></div>
			<div  class="data-table">
				<el-table
				:data="tableData"
				stripe
				style="width: 100%">
				<el-table-column  prop="sysUser.personName"	label="任务名称"></el-table-column>
				<el-table-column prop="sysUser.wxNickName"	label="任务等级"></el-table-column>
				<el-table-column	prop="sysUser.userName"	label="任务状态"></el-table-column>
				<el-table-column	prop="sysUser.wxNum"	label="任务类型" ></el-table-column>
				<el-table-column	prop="taskDoneCount"	label="抢任务时间"  ></el-table-column>
			</el-table>
			</div>
	</div>
</template>

<script>
	export default {
	  data(){
			return {
				tableData:[],
				form:{
					
				}
			}
		},
		methods:{
			getStaticsInfo(){
				let id =  this.$route.query.userId
		  	let url="http://www.phptrain.cn/testadmin/report/getTaskStats?userId="+id
		  	var param={
		  		auditStatus:this.auditStatus,
		  		category:this.category,
		  		endDateTime:this.endDateTime,
		  		level:this.level
		  	}
		  	this.$http.post(url, {
		  		headers: {
            		"Content-Type": "application/json"
          		}
		  	}).then((res)=>{
		  		console.log(res)
		  		if(res.data.message=='成功'){
		  			if (res.data.result) {
		  				
		  			}
		  		}
		  	})
			},
			reset(){
				
			}
		},
		mounted(){
			this.getStaticsInfo()
		}
	}
	
</script>

<style>
</style>