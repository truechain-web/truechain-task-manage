<template>
	<div class="task-details-wrapper">
		<div class="position">我的位置：注册用户管理 > 查看详情</div>
		<div class="fr">
			 <el-button  @click="goback">返回</el-button>
			   <el-button type="primary" @click='typeButton(2)'>修改</el-button>
			   <el-button type="primary" @click='typeButton(1)'>审核</el-button>               
       
		</div>
          
       
		<div class="details-content">
			<div class="title">基本信息</div>
			<ul>
				<li>姓名：<span></span></li>
				<li>微信昵称：<span></span></li>
				<li>微信号：<span></span></li>
				<li>审核状态：<span></span></li>
				<li>联系方式：<span></span></li>
				<li>等级：<span></span></li>
				<li>提交时间：<span></span></li>
				<li>钱包地址：<span></span></li>
			</ul>
		</div>
		<div class="details-content">
			<div class="title">附件信息</div>
			<div>
                <img src="" alt="">
                <div>
                    <p>向丽的简历</p>
                    <el-button  >预览</el-button>
                    <el-button  >下载</el-button>
                </div>
            </div>
		</div>
        <el-dialog :title= " isAudit ? '审核':'修改'"   width="30%" :visible.sync="dialogVis" >
            <el-form :model="form">
                <el-form-item label="评级：" >
                    <el-select v-model="form.rank" placeholder="A">
                        <el-option label="A" value="r1"></el-option>
                        <el-option label="B" value="r2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="红包金额：" >
                    <el-select v-model="form.rank" placeholder="30">
                        <el-option label="30" value="r1"></el-option>
                        <el-option label="40" value="r2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVis = false">确 定</el-button>
            </div>
        </el-dialog>
         
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
                }],
                isAudit:'',
                dialogVis:false,
                form:{}
			}
		},
		methods:{
			getDetail(){
				let url = "http://www.phptrain.cn/api/task/getUserTaskInfo?taskDetailId=" + taskDetailId;
				var param = {
					userId: scope.id
				};
				this.$http
					.post(url, param, {headers: {"Content-Type": "application/json"}})
					.then(res => {
					if (res.data.message === "成功") {
						if (res.data.result) {
						this.data = res.data.result;
						
						}
					} else {
						this.tips = res.data.message;
						this.showTips();
					}
					});
			},
			goback(){
				this.$router.go(-1)
			},
			typeButton(type) {
				if(type=='1'){
					this.isAudit = true
				} else {
					this.isAudit = false
				}
				this.dialogVis = true
			}
		}
	}
</script>

<style >
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