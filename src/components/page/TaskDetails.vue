<template>
	<div class="task-details-wrapper">
		<div class="position">我的位置：任务管理>查看详情</div>
		<div class="fr">
			 <el-button  @click="goback">返回</el-button>
			 <router-link to="/TaskEntryForm">
			   <el-button type="primary">报名表</el-button>
			 </router-link>
       
		</div>
          
       
		<div class="details-content">
			<div class="title">任务详情</div>
			<ul>
			  <li style="width: 100%;">任务logo：<span><img src="../../../static/images/b_header.jpg"/></span></li>
				<li>任务名称：<span></span></li>
				<li>任务等级：<span></span></li>
				<li>状态：<span></span></li>
				<li>任务类别：<span></span></li>
				<li>发布者：<span></span></li>
				<li>发布时间：<span></span></li>
				<li>时间范围：<span></span></li>
				<li>奖励：<span></span></li>
				<li style="width: 100%;">提交地址：<span></span></li>
				<li style="width: 100%;">任务描述：<span></span></li>
			</ul>
		</div>
		<div class="details-content">
			<div class="title">岗位详情</div>
			<div class="table-wrapper">
				<el-table :data="tableData" stripe >
					<el-table-column prop="date" label="岗位" >
						</el-table-column>
						<el-table-column prop="name" label="需要人数" >
						</el-table-column>
						<el-table-column prop="address" label="奖励/人">
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TaskDetails',
		data() {
			
			return {
				tableData: [{
					date: '开发',
					name: '2',
					address: '500'
				}]
			}
		},
		methods:{
		  goback(){
		    this.$router.go(-1)
		  }
		}
	}
</script>

<style scoped>
  .fr{
    float: right;
    margin-bottom: 20px;
  }
.details-content{
	border: 1px solid #dfe6ec;
	margin-bottom: 20px;
	font-size: 15px;
	clear: both;
}
.table-wrapper{padding: 2%;} 
.title{
 font-size: 16px;
 padding-left: 5px;
 border-left: 4px solid rgba(255, 69, 0, 0.68);
}
.details-content ul{
	overflow: hidden;
	padding: 10px 20px 20px;
}
.details-content li{
 width: 24.7%;
 float: left;
 font-size: 14px;
 line-height: 30px;
}
</style>