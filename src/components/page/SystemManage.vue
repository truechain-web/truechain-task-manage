<template>
 	<div>
	  <el-tabs v-model="activeName" >
		<!-- 用户管理部分 -->
		<el-tab-pane label="用户管理" name="first">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item label="登录账号:">
					<el-input v-model="formInline.userName" placeholder="请输入登录账号"></el-input>
				</el-form-item>
				<el-form-item label="姓名:">
					<el-input v-model="formInline.realName" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号:">
					<el-input v-model="formInline.phone" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="系统角色:">
					<el-input v-model="formInline.roleName" placeholder="请输入系统角色"></el-input>
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
					<el-table-column  prop="roleName"  label="系统角色" ></el-table-column>
					<el-table-column   prop="remark" label="描述" ></el-table-column>
					<el-table-column    label="操作" width="250">
						<template slot-scope="scope">
							<el-button size="small" @click="handleEdit( scope.row,'see')" type="primary">查看详情</el-button>
							<el-button size="small"	@click="handleEdit( scope.row,'edit')">修改</el-button>
							<el-button size="small" type="danger" @click="handleDelete( scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="page">
					<el-pagination v-show="roleTotal || roleTotal>0"	@current-change="rolePageChange" :current-page.sync="rolePageIndex"
					:page-size="rolePageSize" :total="roleTotal"  background layout="total,prev, pager, next" >	</el-pagination>
				</div>
			</div>
		</el-tab-pane>
		<el-dialog title="新增" :visible.sync="addUserDialog" label-width="80px">
			<el-form :inline="true" :model="addForm" ref="addForm" :rules="rules" label-width="100px" class="demo-ruleForm">
				<el-form-item label="登录账号:" prop="username">
					<el-input v-model="addForm.username" placeholder="请输入登录账号"></el-input>
				</el-form-item>
				<el-form-item label="密码:" prop="password">
					<el-input v-model="addForm.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item label="确认密码:" prop="comfirmPassword">
					<el-input v-model="addForm.comfirmPassword" placeholder="请输入确认密码"></el-input>
				</el-form-item>
				<el-form-item label="姓名:" prop="realName">
					<el-input v-model="addForm.realName" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号:" prop="phone">
					<el-input v-model="addForm.phone" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="描述:">
					<el-input v-model="addForm.remark" placeholder="请输入描述"></el-input>
				</el-form-item>
				<el-form-item label="系统角色:" prop="roleIdId">
					<el-radio-group v-model="addForm.roleIdId" >
						<el-radio v-for="item in roleList " :label="item.id">{{item.name}}</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addUserDialog = false">取 消</el-button>
				<el-button type="primary" @click="addUser('addForm')">确 定</el-button>
			</div>
		</el-dialog>
		<el-dialog :title="this.isSee?'查看详情':'修改'" :visible.sync="editDialog" label-width="80px">
			<el-form :inline="true" :model="editForm" ref="editForm" :rules="rules" label-width="100px" class="demo-ruleForm">
				<el-form-item label="登录账号:" prop="username">
					<el-input v-model="editForm.username" :disabled="this.isSee" placeholder="请输入登录账号"></el-input>
				</el-form-item>
				<el-form-item label="密码:" prop="password">
					<el-input v-model="editForm.password" :disabled="this.isSee" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item label="确认密码:" prop="comfirmPassword">
					<el-input v-model="editForm.comfirmPassword"  :disabled="this.isSee" placeholder="请输入确认密码"></el-input>
				</el-form-item>
				<el-form-item label="姓名:" prop="realName">
					<el-input v-model="editForm.realName" :disabled="this.isSee" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号:" prop="phone">
					<el-input v-model="editForm.phone" :disabled="this.isSee" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="描述:">
					<el-input v-model="editForm.remark" :disabled="this.isSee" placeholder="请输入系统角色"></el-input>
				</el-form-item>
				<el-form-item label="系统角色:" prop="roleIdId">
					<el-radio-group  v-model="editForm.roleIdId" >
						<el-radio v-for="item in roleList "  :label="item.id">{{item.name}}</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" v-if="this.isSee" class="dialog-footer">
				<el-button @click="editDialog = false">退出</el-button>
			</div>
			<div slot="footer"  v-if="!this.isSee" class="dialog-footer">
				<el-button @click="editDialog = false">取 消</el-button>
				<el-button type="primary" @click="editUser('editForm')">确 定</el-button>
			</div>
		</el-dialog>

	</el-tabs>
 </div>
</template>
<script>
import {getUserPageAPI,getRoleListAPI,addUserAPI,getUserInfoAPI,updateAuthUserAPI,deleteAuthUserAPI} from "@/api/GaoAPI"
import qs from 'qs'
export default {
	data(){
		var password = (rule, value, callback) => {
			if (value === '') {
			callback(new Error('请输入密码'));
			} else {
			if (this.addForm.comfirmPassword !== '') {
				this.$refs.addForm.validateField('comfirmPassword');
			}
			callback();
			}
      	};
		var comfirmPassword = (rule, value, callback) => {
			if (value === '') {
			callback(new Error('请再次输入密码'));
			} else if (value !== this.addForm.password) {
			callback(new Error('两次输入密码不一致!'));
			} else {
			callback();
			}
		};
		var phoneRule = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入手机号'));
			} else if(!(/^1[3|4|5|8|2|7|6|9][0-9]\d{8}$/.test(value))){
				callback(new Error('请输入正确的手机号'));
			} else {
				callback();
			}
      	};
		
		return {
			rolePageIndex:1,
			rolePageSize:10,
			roleTotal:0,
			activeName: 'first',
			formInline:{
				userName:'',
				realName:'',
				phone:'',
				roleName:'',
			},
			addForm:{
				password:'',
				phone:'',
				realName:'',
				remark:'',
				roleIdId:'',
				username:'',
				comfirmPassword:''
			},
			roleName:'',   
			tableData: [],
			form:{},
			addUserDialog:false,
			radio2:'',
			roleList:[],
			rules: {
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ validator: password, trigger: 'blur' }
				],
				comfirmPassword: [
					{ required: true, message: '请输入确认密码', trigger: 'blur' },
					{ validator: comfirmPassword, trigger: 'blur' }
				],
				phone: [
					{ required: true, message: '请输入手机号码', trigger: 'blur' },
					{ validator: phoneRule, trigger: 'blur' }
				],
				realName: [
					{ required: true, message: '请输入登录账号', trigger: 'blur' },
				],
				username: [
					{ required: true, message: '请输入姓名', trigger: 'blur' },
				],
				// roleIdId: [
				// 	{ required: true, message: '请选择系统角色', trigger: 'blur' },
				// ]

			},
			isSee:false,
			editDialog:false,
			editForm:{
				password:'',
				phone:'',
				realName:'',
				remark:'',
				roleIdId:'',
				username:'',
				comfirmPassword:''
			},
			id:'',
			editRules:{}
		}
	},
	methods: {
		// 用户管理部分-------------
		getUserPage(){
			let param= {
				pageIndex:this.rolePageIndex,
				pageSize:this.rolePageSize,
				userName:this.formInline.userName,
				realName:this.formInline.realName,
				phone:this.formInline.phone,
				roleName:this.formInline.roleName,
			}
			this.$http.post(getUserPageAPI,qs.stringify(param)).then(res => {
				if (res.data.message === "成功") {
					if(res.data.result) {
						this.tableData = res.data.result.content;								
						this.roleTotal=res.data.result.totalElements;
					}
				} else {
					
				}
			})
		},
		//获取角色下拉
		getRoleList(){
			this.$http.post(getRoleListAPI).then(res => {
				if (res.data.message === "成功") {
					if(res.data.result) {
						this.roleList = res.data.result;								
					}
				} else {
					
				}
			})
		},
		clearRole(){
			this.formInline={
				userName:'',
				realName:'',
				phone:'',
				roleName:'',
			}
		},
		rolePageChange(value){
			this.rolePageIndex = value
			this.getUserPage()
		},
		
		//新增角色
		addUser(addForm){
			 this.$refs[addForm].validate((valid) => {
				if (valid) {
					if(!this.addForm.roleIdId){
						this.$message.error('请选择用户角色');
						return
					}
					let param= {
						password:this.addForm.password,
						phone:this.addForm.phone,
						realName:this.addForm.realName,
						remark:this.addForm.remark,
						roleIdId:this.addForm.roleIdId,
						username:this.addForm.username,
						comfirmPassword:this.addForm.comfirmPassword
					}
					this.$http.post(addUserAPI,param).then(res => {
						if (res.data.message === "成功") {
							this.$message({
								message: '添加成功',
								type: 'success'
								});
							this.addUserDialog=false
							this.getUserPage()
						} else {
							
						}
					})
				} else {
					this.$message.error('请修改标红处的信息');
					return false;
				}
			});
				

		},
		//编辑角色
		editUser(editForm){
			this.$refs[editForm].validate((valid) => {
				if (valid) {
					if(!this.addForm.roleIdId){
						this.$message.error('请选择用户角色');
						return
					}
					let param= {
						password:this.editForm.password,
						phone:this.editForm.phone,
						realName:this.editForm.realName,
						remark:this.editForm.remark,
						roleIdId:this.editForm.roleIdId,
						username:this.editForm.username,
						comfirmPassword:this.editForm.comfirmPassword,
						id:this.id
					}
					this.$http.post(updateAuthUserAPI,param).then(res => {
						if (res.data.message === "成功") {
							this.$message({
								message: '修改成功',
								type: 'success'
							});
							this.editDialog=false
							this.getUserPage()
						} else {
							
						}
					})
				} else {
					 this.$message.error('请修改标红处的信息');
					return false;
			}});
		},
		//删除
		handleDelete(id){
			let param= {
				userId:id,
			}
			this.$http.post(deleteAuthUserAPI,qs.stringify(param)).then(res => {
				if (res.data.message === "成功") {
					this.$message({
						message: '删除成功',
						type: 'success'
					});
					this.getUserPage()
				} else {
					
				}
			})
		},
		//操作 修改和查看
		handleEdit(row,type){
			if(type=='see'){
				this.isSee = true
			}else{
				this.isSee = false
			}
			this.id=row.id
			this.getUserInfo(row.id)				
			
			
		},
		//获取系统用户信息
		getUserInfo(id){
			let param= {
				userId:id,
			}
			this.$http.post(getUserInfoAPI,qs.stringify(param)).then(res => {
				if (res.data.message === "成功") {
					this.editForm=res.data.result
					this.editDialog = true
				} else {
					
				}
			})

		}
	
	},
	created() {
		this.getUserPage()
		this.getRoleList()
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

