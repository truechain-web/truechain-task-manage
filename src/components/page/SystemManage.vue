<template>
 <div>
	  <el-tabs v-model="activeName" @tab-click="handleClick">
			   <!-- 权限管理部分 -->
				<el-tab-pane label="权限管理" name="first">
					  <div class="quanxian">
							  <div>
									<span style="line-height:36px;">权限名称：</span>
									<el-input placeholder="请输入内容" style="width:300px; margin: 0 20px;"></el-input>
									<el-button type="primary">查询</el-button>
									<el-button type="warning">重置</el-button>
								</div>
								<el-button type="success" style="width:100px">新增按钮</el-button>
						</div>
						<div class="quanxian-table">
							  <el-table
									:data="tableData"
									border
									style="width: 100%">
									<el-table-column  prop="date"	label="权限编码"></el-table-column>
									<el-table-column prop="name"	label="权限名称"></el-table-column>
									<el-table-column	prop="address"	label="隶属模块"></el-table-column>
									<el-table-column label="描述"></el-table-column>
									<el-table-column	label="操作">
										    <template slot-scope="scope">
													<el-button size="mini"
														@click="handleEdit(scope.$index, scope.row)" type="primary">查看详情</el-button>
													<el-button size="mini"	
														@click="handleEdit(scope.$index, scope.row)">修改</el-button>
													<el-button size="mini"
														type="danger"
														@click="handleDelete(scope.$index, scope.row)">删除</el-button>
												</template>
									</el-table-column>
								</el-table>
								<div class="page">
										<el-pagination background layout="prev, pager, next"	:total="1000">	</el-pagination>
								</div>
						
						</div>
				</el-tab-pane>

				<!-- 角色管理部分 -->
				<el-tab-pane label="角色管理" name="second">
					  <div class="jiaose">
							  <div>
									<span style="line-height:36px;">角色名称：</span>
									<el-input placeholder="请输入内容" style="width:150px; margin: 0 20px;"></el-input>
									<span style="line-height:36px;">角色状态：</span>
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
						<div class="quanxian-table">
							  <el-table
									:data="tableData"
									border
									style="width: 100%">
									<el-table-column  prop="date"	label="角色编号"></el-table-column>
									<el-table-column prop="name"	label="角色名称"></el-table-column>
									<el-table-column	prop="address"	label="角色状态"></el-table-column>
									<el-table-column label="描述"></el-table-column>
									<el-table-column	label="操作">
										    <template slot-scope="scope">
													<el-button size="mini"
														@click="handleEdit(scope.$index, scope.row)" type="primary">查看详情</el-button>
													<el-button size="mini"	
														@click="handleEdit(scope.$index, scope.row)">修改</el-button>
													<el-button size="mini"
														type="danger"
														@click="handleDelete(scope.$index, scope.row)">删除</el-button>
												</template>
									</el-table-column>
								</el-table>
								<div class="page">
										<el-pagination background layout="prev, pager, next"	:total="1000">	</el-pagination>
								</div>
						</div>
				</el-tab-pane>

				<!-- 用户管理部分 -->
				<el-tab-pane label="用户管理" name="third">
					  <div class="yonghu">
							  <div>
									<span style="line-height:36px;">登录账号：</span>
									<el-input placeholder="请输入内容" style="width:120px; margin: 0 20px;"></el-input>
									<span style="line-height:36px;">姓名：</span>
									<el-input placeholder="请输入内容" style="width:120px; margin: 0 20px;"></el-input>
									<span style="line-height:36px;">手机号：</span>
									<el-input placeholder="请输入内容" style="width:120px; margin: 0 20px;"></el-input>
									<span style="line-height:36px;">系统角色：</span>
									<el-input placeholder="请输入内容" style="width:120px; margin: 0 20px;"></el-input>
									<el-button type="primary">查询</el-button>
									<el-button type="warning">重置</el-button>
								</div>
								<el-button type="success" style="width:100px">新增按钮</el-button>
						</div>
						<div class="quanxian-table">
							  <el-table
									:data="tableData"
									border
									style="width: 100%">
									<el-table-column  prop="date"	label="登录账号"></el-table-column>
									<el-table-column prop="name"	label="姓名"></el-table-column>
									<el-table-column	prop="address"	label="手机号"></el-table-column>
									<el-table-column label="系统角色"></el-table-column>
									<el-table-column label="描述"></el-table-column>
									<el-table-column	label="操作">
										    <template slot-scope="scope">
													<el-button size="mini"
														@click="handleEdit(scope.$index, scope.row)" type="primary">查看详情</el-button>
													<el-button size="mini"	
														@click="handleEdit(scope.$index, scope.row)">修改</el-button>
													<el-button size="mini"
														type="danger"
														@click="handleDelete(scope.$index, scope.row)">删除</el-button>
												</template>
									</el-table-column>
								</el-table>
								<div class="page">
										<el-pagination background layout="prev, pager, next"	:total="1000">	</el-pagination>
								</div>
						
						</div>
				</el-tab-pane>

				<!-- 日志部分 -->
				<el-tab-pane label="日志" name="fourth">
					  <div class="rizhi">
							  <div>
									<span style="line-height:36px;">更新时间：</span>
									<el-date-picker
										v-model="begindata"
										type="date"
										placeholder="选择日期">
									</el-date-picker>
									<span style="line-height:36px;">--</span>
									<el-date-picker
										v-model="enddata"
										type="date"
										placeholder="选择日期">
									</el-date-picker>
									<span style="line-height:36px;margin-left:20px;">更新者：</span>
									<el-input  style="width:120px; margin: 0 20px;"></el-input>
									<el-button type="primary">查询</el-button>
									<el-button type="warning">重置</el-button>
								</div>
								<el-button type="success" style="width:100px">新增按钮</el-button>
						</div>
						<div class="quanxian-table">
							  <el-table
									:data="tableData"
									border
									style="width: 100%">
									<el-table-column  prop="date"	label="日志内容"></el-table-column>
									<el-table-column prop="name"	label="更新时间"></el-table-column>
									<el-table-column	prop="address"	label="更新者"></el-table-column>
									<el-table-column	label="操作">
										    <template slot-scope="scope">
													<el-button size="mini"	
														@click="handleEdit(scope.$index, scope.row)">修改</el-button>
													<el-button size="mini"
														type="danger"
														@click="handleDelete(scope.$index, scope.row)">删除</el-button>
												</template>
									</el-table-column>
								</el-table>
								<div class="page">
										<el-pagination background layout="prev, pager, next"	:total="1000">	</el-pagination>
								</div>
						
						</div>
				</el-tab-pane>
		</el-tabs>
 </div>
</template>
<script>
 export default {
	  data(){
			return {
				 activeName: 'first',
				 tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        } ,{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
				}
				 ,{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
				options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '启用'
        }, {
          value: '选项3',
          label: '禁用'
        }],
				optionsValue:"",
			  begindata:'',
				enddata:''
			}
		},
		methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
 }
</script>	
<style lang="less" scoped>
.quanxian{
	 display: flex;
	 height: 36px;
	 align-content: center;
	 justify-content: space-between;
	
}
.quanxian-table{
	margin-top: 20px;
	.page{
			display: flex;
			justify-content: center;
			margin-top: 20px;
	}
}
.jiaose,.yonghu,.rizhi{
	 display: flex;
	 height: 36px;
	 align-content: center;
	 justify-content: space-between;
}

</style>

