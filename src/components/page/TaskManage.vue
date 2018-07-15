<template>
	<div class="task-content">
		<div class="position">我的位置：任务管理</div>
		<div class="form-wrap">
			<el-form ref="form" label-width="70px">
				<el-form-item label="发布时间：">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="任务名称：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="发布者：">
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
				<el-form-item label="审核状态：">
					<el-select v-model="form.region" placeholder="全部">
						<el-option label="全部" value="quanbu"></el-option>
						<el-option label="关闭" value="guanbi"></el-option>
						<el-option label="禁用" value="jinyong"></el-option>
						<el-option label="启用" value="qiyong"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="任务类别：">
					<el-select v-model="form.region" placeholder="全部">
						<el-option label="全部" value="quanbu"></el-option>
						<el-option label="个人" value="geren"></el-option>
						<el-option label="团体" value="tuanti"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item class="btn-wrap">
					<el-button type="primary">查询</el-button>
					<el-button>重置</el-button>
				</el-form-item>
				<el-form-item class="btn-wrap">
					<router-link to="/TaskNew">
						<el-button icon="el-icon-search">新增</el-button>
					</router-link>
				</el-form-item>
			</el-form>
		</div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="name" label="任务名称">
			</el-table-column>
			<el-table-column prop="rank" label="任务等级" width="90px">
			</el-table-column>
			<el-table-column prop="status" label="状态" width="70px">
			</el-table-column>
			<el-table-column prop="type" label="任务类别" width="90px">
			</el-table-column>
			<el-table-column prop="publisher" label="发布者" width="100px">
			</el-table-column>
			<el-table-column prop="shstatus" label="审核状态" width="100px">
			</el-table-column>
			<el-table-column prop="date" label="发布时间" >
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<router-link to="TaskDetails">
						<el-button size="mini" @click="">查看详情</el-button>
					</router-link>
					<el-button size="mini"  @click="">报名表</el-button>
					<el-button size="mini" type="danger" @click="">禁用</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="page">
			<el-pagination background layout="prev, pager, next"	:total="1000">	</el-pagination>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
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
				tableData: [{
					name: '兼职任务',
					rank: 'c',
					status:'关闭',
					type: '个人',
					publisher:'xiaomi',
					shstatus:'已审核',
					date:'2018-07-12'
					
				}, {
					name: '兼职任务',
					rank: 'c',
					status:'关闭',
					type: '个人',
					publisher:'xiaomi',
					shstatus:'已审核',
					date:'2018-07-12'
					
				} ]
			}
		}
	}
</script>
<style>
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