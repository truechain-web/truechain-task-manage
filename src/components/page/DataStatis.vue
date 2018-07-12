<template>
 <div class="datastatis">
	  <div class="top">
				<div>
						<span style="line-height:36px;">姓名：</span>
						<el-input placeholder="请输入内容" style="width:120px; margin: 0 20px;"></el-input>
						<span style="line-height:36px;">微信名称：</span>
						<el-input placeholder="请输入内容" style="width:120px; margin: 0 20px;"></el-input>
						<span style="line-height:36px;">等级：</span>
						<el-select v-model="optionsValue" placeholder="全部">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
						</el-select>
					
						<el-button type="primary">查询</el-button>
						<el-button type="warning">重置</el-button>
				</div>
				<el-button type="success" style="width:100px">新增按钮</el-button>
	 </div>
	 <div class="data-table">
			<el-table
				:data="tableData"
				border
				style="width: 100%">
				<el-table-column  prop="name"	label="姓名"></el-table-column>
				<el-table-column prop="wechatname"	label="微信昵称"></el-table-column>
				<el-table-column	prop="wechatid"	label="微信号"></el-table-column>
				<el-table-column	prop="task"	label="抢任务数"></el-table-column>
				<el-table-column	prop="tasked"	label="完成任务数"></el-table-column>
				<el-table-column	prop="tasking"	label="进行中任务数"></el-table-column>
				<el-table-column	prop="truenum"	label="true数量"></el-table-column>
				<el-table-column	prop="ttrnum"	label="ttr数量"></el-table-column>
				<el-table-column	prop="rmbnum"	label="rmb数量"></el-table-column>
				<el-table-column	prop="recommendnum"	label="用户推荐数"></el-table-column>
				<el-table-column	label="操作">
							<template slot-scope="scope">
								<el-button size="mini"	
									@click="handleEdit(scope.$index, scope.row)">任务列表</el-button>
								<el-button size="mini"	
									@click="handleEdit(scope.$index, scope.row)">推荐列表</el-button>
								<el-button size="mini"
									@click="handleDelete(scope.$index, scope.row)">奖励列表</el-button>
							</template>
				</el-table-column>
			</el-table>
			<div class="page">
					<el-pagination background layout="prev, pager, next"	:total="1000">	</el-pagination>
			</div>
  	</div>
 </div>
</template>
<script>
 export default {
	  data(){
			return {
				tableData:[{
          name: '王小虎',
          wechatname: 'ai',
          wechatid: 'Gao',
					task:10,
					tasked:23,
					tasking:44,
					truenum:33,
					ttrnum:22,
					rmbnum:333,
					recommendnum:55
        },{
          name: '王小虎',
          wechatname: 'ai',
          wechatid: 'Gao',
					task:10,
					tasked:23,
					tasking:44,
					truenum:33,
					ttrnum:22,
					rmbnum:333,
					recommendnum:55
        },{
          name: '王小虎',
          wechatname: 'ai',
          wechatid: 'Gao',
					task:10,
					tasked:23,
					tasking:44,
					truenum:33,
					ttrnum:22,
					rmbnum:333,
					recommendnum:55
        },{
          name: '王小虎',
          wechatname: 'ai',
          wechatid: 'Gao',
					task:10,
					tasked:23,
					tasking:44,
					truenum:33,
					ttrnum:22,
					rmbnum:333,
					recommendnum:55
        }],
				 options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: 'A'
        }, {
          value: '选项3',
          label: 'B'
        },
				{
          value: '选项4',
          label: 'C'
        }],
				optionsValue:""
			}
		}
 }
</script>	
<style scoped lang="less">
.datastatis{
  .top{
		  display: flex;
			height: 36px;
			align-content: center;
			justify-content: space-between;
	}
	.data-table{
		 margin-top: 20px;
		.page{
				display: flex;
				justify-content: center;
				margin-top: 20px;
		}
	}
}
</style>