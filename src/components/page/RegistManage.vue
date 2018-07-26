<template>
	<div class="task-content">
		<div class="position">我的位置：任务管理</div>
		<div class="form-wrap">
			<el-form ref="form" label-width="70px">
				<el-form-item label="注册时间：">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="姓名：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="微信昵称：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="审核状态：">
					<el-select v-model="form.auditStatus" placeholder="全部">
						<el-option label="全部" value="quanbu"></el-option>
						<el-option label="未审核" value="geren"></el-option>
						<el-option label="已审核" value="tuanti"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="等级：">
					<el-select v-model="form.level" placeholder="全部">
						<el-option label="全部" value="quanbu"></el-option>
						<el-option label="A" value="a"></el-option>
						<el-option label="B" value="b"></el-option>
						<el-option label="C" value="c"></el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item class="btn-wrap">
					<el-button type="primary">查询</el-button>
					<el-button>重置</el-button>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="userName" label="姓名">
			</el-table-column>
			<el-table-column prop="wxNickName" label="微信昵称" >
			</el-table-column>
			<el-table-column prop="wxNum" label="微信号" >
			</el-table-column>
			<el-table-column prop="auditStatus" label="审核状态" >
			</el-table-column>
			<el-table-column prop="mobile" label="联系电话" >
			</el-table-column>
			<el-table-column prop="level" label="等级" >
			</el-table-column>
			<el-table-column prop="createTime" label="注册时间" >
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<!-- <router-link to="/RegistDetail"> -->
						<el-button size="mini" @click="getUserInfo(scope)">查看详情</el-button>
					<!-- </router-link> -->
					<!-- <router-link to="/RegistDetail"> -->
					<el-button size="mini"  @click="">审核</el-button>
					<!-- </router-link> -->
					<el-button size="mini" type="danger" @click="">修改</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="page">
			<el-pagination background layout="prev, pager, next"	:total="1000">	</el-pagination>
		</div>
		<div class="tips" v-show="showss">{{tips}}</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				showss:false,
				form: {
					name: '',
					region: '',
					startDate: '',
					endDate: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				tableData: [{
					userName: '兼职任务',
					rank: 'c',
					status:'关闭',
					type: '个人',
					publisher:'xiaomi',
					shstatus:'已审核',
					date:'2018-07-12'
					
				}, {
					userName: '兼职任务',
					rank: 'c',
					status:'关闭',
					type: '个人',
					publisher:'xiaomi',
					shstatus:'已审核',
					date:'2018-07-12'
					
				} ]
			}
		},
		methods:{
			getUserPage () {
				let url ="http://www.phptrain.cn/api/unauth/task/getTaskInfo?taskId=";
				this.$http.post(url, {headers: {
						"Content-Type": "application/json"}})
					.then(res => {
						if (res.data.message === "成功") {
							if (res.data.result) {
							this.tableData = res.data.result;
							}
						} else {
							this.tips = res.data.message;
							this.showTips();
						}
					})
			},
			getUserInfo (scope) {
				this.$router.push({
					path: "/RegistDetail",
					params: {
						userId: scope.id
					}
				})


				
			}
		}
	}
</script>
<style>
	.tips {
		position: absolute;
		background-color: #00aaee;
		color: white;
		text-align: left;
		width: 200px;
		padding: 20px 20px;
		word-break:break-all;
		left: 50%;
		top: 50%;
		margin-left: -100px;
		margin-top: -120px;
		border-radius: 5px;
		}
	.task-content .el-form-item__label {
		text-align: left;
		padding-right: 0;
	}
	
	.task-content .el-form-item {
		margin-bottom: 7px;
	}
	.task-content .el-table .cell, .el-table th>div{padding: 0 0 0 10px;}
	.btn-wrap .el-form-item__content {
		margin-left: 7px!important;
	}
	
	.btn-wrap .el-button+.el-button {
		margin-left: 2px;
	}
	
	.task-content .line {
		text-align: center;
	}
	.task-content .page{
	display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 20px;
	}
	.position {
		font-size: 15px;
		margin-bottom: 10px;
	}
	
	.el-form-item {
		display: inline-block;
		overflow: hidden;
	}
	
	.block .name {
		line-height: 36px;
		display: inline-block;
		font-size: 15px;
	}
</style>