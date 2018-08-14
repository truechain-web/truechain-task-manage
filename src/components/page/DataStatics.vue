<template>
	<div class="data-statistics">
		<div class="position">我的位置：数据统计</div>
		<div class="form-wrap">
			<el-form ref="form"  :inline="true"  class="demo-form-inline">
				<el-form-item label="时间段：">
					<el-col :span="11">
						<el-date-picker type="date"   @change="getTime"  format="yyyy-MM-dd HH:mm:ss"  placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-date-picker type="date" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item class="btn-wrap">
					<el-button type="primary"  @click="getStaticsInfo">查询</el-button>
					<el-button @click="reset">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="userCount" label="通过审核用户数量">
			</el-table-column>
			<el-table-column prop="taskCount" label="任务总量" width="90px">
			</el-table-column>
			<el-table-column prop="taskDoneCount" label="完成任务数" width="70px">
			</el-table-column>
			<el-table-column prop="taskDoingCount" label="进行中任务数" width="90px">
			</el-table-column>
			<el-table-column prop="trueValue" label="true发放总量" width="100px">
			</el-table-column>
			<el-table-column prop="ttrValue" label="ttr发放总量" width="100px">
			</el-table-column>
			<el-table-column prop="rmbValue" label="rmb发放总金额" >
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="dataDetails(scope.row)">统计明细表</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					startDate:'',
					endDate:'',
				},
				tableData:[]
			}
		},
	
		methods:{
			getTime(date){
          this.startDate = date;
          console.log(this.startDate,'22222');
       },
			//统计明细表
			dataDetails(scope){
				console.log(scope)
				this.$router.push({
					path: "/DataDetailsTaskList",
					query:{
						userId:scope.id
					}
				})	
			},
			getStaticsInfo(){
			let param={
				startDate:this.startDate,
				endDate:this.endDate,
			}
		    let url ="http://www.phptrain.cn/testadmin/report/index";
		    this.$http.post(url,param,{
		      headers:{"Content-Type": "application/json"}
		    }).then((res)=>{
		    	console.log(res)
		      if(res.data.message=='成功'){
		      	if (res.data.result) {
		      		this.tableData=res.data.result
		      		console.log(this.tableData)
						
		      	}
		      }
		    })
			},
			reset(){
				this.form={
					startDateTime:'',
					endDateTime:'',
				}
			}
		},
		mounted(){
			this.getStaticsInfo()
		},
		
	}
</script>

<style>
</style>