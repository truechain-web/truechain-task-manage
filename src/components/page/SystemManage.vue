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
								<el-button type="success" style="width:100px" @click="addQuanXianPanel = true">新增按钮</el-button>
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
						<el-dialog title="新增" :visible.sync="addQuanXianPanel">
							  <div class="flexd">
									权限编码： <el-input placeholder="请输入内容" style="width:60%;"></el-input>
								</div> 
								<div class="flexd">
									权限名称： <el-input placeholder="请输入内容" style="width:60%;"></el-input>
								</div> 
								<div class="flexd">
									描 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	述： <el-input type="textarea" :rows="2"  placeholder="请输入内容" style="width:60%;"></el-input>
								</div> 
								<div class="flexd">
									隶属模块： 	<el-tree
											:data="models"
											show-checkbox
											default-expand-all
											node-key="id"
											ref="tree"
											highlight-current
											style="width:60%;">
										</el-tree>
								</div> 
									
								</el-form-item>
							  <div slot="footer" class="dialog-footer">
									<el-button @click="addQuanXianPanel = false">取 消</el-button>
									<el-button type="primary" @click="quanxianAdd">确 定</el-button>
								</div>
						</el-dialog>
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
import {getResourcePageAPI,getRolePageAPI,addResourceAPI} from "@/api/GaoAPI"
 export default {
	  data(){
			return {
				formLabelWidth:"120px",
				 activeName: 'first',
				 tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
				}],
				form:{},
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
				enddata:'',
				addQuanXianPanel:false,
				models:[{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }]
			}
		},
		methods: {
      handleClick(tab, event) {
				console.log(tab, event);
				if (tab.label == "角色管理"){
					 // 发送角色管理请求
					 this.getRolePage(1)
				}
			},
			// 权限部分-------------
			getResourcePage(pageIndex,pageSize){
				 if(!pageSize){
					  var pageSize = 10
				 }
				 let params = new FormData()
				 params.append("pageIndex",pageIndex)
				 params.append("pageSize",pageSize)
				 this.$http.post(getResourcePageAPI,params).then(res=>{
					 console.log(res)
				 })
			},
			// 添加权限
			addResourceAPI(){
				 let params = {
						id:"11",
						name:"22",
				 }
				 this.$http.post(addResourceAPI,params).then(res=>{
					  console.log(res)
				 })
			},
			quanxianAdd(){
				 this.addQuanXianPanel = false
				 alert("确定添加！")
				//  console.log(this.$refs.tree.getCheckedNodes());
				 this.addResourceAPI()
			},
			getRolePage(pageIndex,pageSize){
				 if(!pageSize){
					  var pageSize = 10
				 }
				 let params = new FormData()
				 params.append("pageIndex",pageIndex)
				 params.append("pageSize",pageSize)
				 this.$http.post(getRolePageAPI,params).then(res=>{
					 console.log(res)
				 })
			}
		},
		created() {
			 this.getResourcePage(1)
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
.flexd{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
}

</style>

