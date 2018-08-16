<template>
 	<div>
	  <el-tabs v-model="activeName" @tab-click="handleClick">
		<!-- 用户管理部分 -->
		<el-tab-pane label="用户管理" name="first">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="登录账号:">
					<el-input v-model="formInline.username" placeholder="请输入登录账号"></el-input>
				</el-form-item>
				<el-form-item label="姓名:">
					<el-input v-model="formInline.realName" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号:">
					<el-input v-model="formInline.phone" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="系统角色:">
					<el-input v-model="formInline.roleIdList" placeholder="请输入系统角色"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getUserPage" >查询</el-button>
					<el-button type="warning" @click="clearRole" >重置</el-button>
					<el-button type="success"  @click="addUserDialog = true">新增按钮</el-button>
				</el-form-item>
			</el-form>
			<div class="quanxian-table">
				<el-table :data="tableData"  border  style="width: 100%">
					<el-table-column  prop="username"  label="登录账号"></el-table-column>
					<el-table-column  prop="realName"  label="姓名"></el-table-column>
					<el-table-column  prop="phone" label="手机号"></el-table-column>
					<el-table-column  prop="roleIdList"  label="系统角色" ></el-table-column>
					<el-table-column   prop="remark" label="描述" ></el-table-column>
					<el-table-column    label="操作" width="250">
						<template slot-scope="scope">
							<el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="primary">查看详情</el-button>
							<el-button size="small"	@click="handleEdit(scope.$index, scope.row)">修改</el-button>
							<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="page">
					<el-pagination v-show="roleTotal || roleTotal>0"	@current-change="rolePageChange" :current-page.sync="rolePageIndex"
					:page-size="pageSize" :total="roleTotal"  background layout="total,prev, pager, next" >	</el-pagination>
				</div>
			</div>
		</el-tab-pane>
		<el-dialog title="新增" :visible.sync="addUserDialog">
			<el-form :inline="true" :model="addForm" class="demo-form-inline">
				<el-form-item label="登录账号:">
					<el-input v-model="addForm.username" placeholder="请输入登录账号"></el-input>
				</el-form-item>
				<el-form-item label="密码:">
					<el-input v-model="addForm.user" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item label="确认密码:">
					<el-input v-model="addForm.user" placeholder="请输入确认密码"></el-input>
				</el-form-item>
				<el-form-item label="姓名:">
					<el-input v-model="addForm.user" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号:">
					<el-input v-model="addForm.user" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="描述:">
					<el-input v-model="addForm.user" placeholder="请输入系统角色"></el-input>
				</el-form-item>
				<el-form-item label="系统角色:" width="350">
					<el-radio-group v-model="radio2" width="350" >
						<el-radio :label="3">备选项</el-radio>
						<el-radio :label="6">备选项</el-radio>
						<el-radio :label="9">备选项</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addUserDialog = false">取 消</el-button>
				<el-button type="primary" @click="quanxianAdd">确 定</el-button>
			</div>
		</el-dialog>

	</el-tabs>
 </div>
</template>
<script>
import {getUserPageAPI,getRolePageAPI,addResourceAPI} from "@/api/GaoAPI"
import qs from 'qs'
export default {
	data(){
		return {
			rolePageIndex:'1',
			rolePageSize:'10',
			roleTotal:'',
			formLabelWidth:"120px",
			activeName: 'first',
			formInline:[],
			addForm:[],
			roleName:'',   
			tableData: [],
			form:{},
			addUserDialog:false,
		}
	},
	methods: {
      	handleClick(tab, event) {
				if (tab.label == "角色管理"){
					 // 发送角色管理请求
					 this.getRolePage()
				}
			},
		// 用户管理部分-------------
		getUserPage(){
			let param= {
				// name:this.roleName,
				pageIndex:this.rolePageIndex,
				pageSize:this.rolePageSize
			}
			this.$http.post(getUserPageAPI,qs.stringify(param)).then(res => {
				if (res.data.message === "成功") {
					if(res.data.result) {
						this.tableData = res.data.result.content;								
						this.roleTotal=res.data.result.totalElements;
					}
				} else {
					this.tips = res.data.message;
					this.showTips();
				}
			})
		},
		clearRole(){
			this.roleName=''
		},
		rolePageChange(value){
			this.rolePageIndex = value
			this.getUserPage()
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
				this.addUserDialog = false
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
		this.getUserPage(1)
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

