<template>
    <div >
        <v-pageTitle vtitle="总数"></v-pageTitle>

        <div class="clear"></div>

        <el-row :gutter="20">

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                   
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>兼职总人数</span>
                        <span><h2>57,820</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="material-icons">person_outline</i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>任务数</span>
                        <span><h2>1123</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="material-icons">attach_money</i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                   
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>完成任务数</span>
                        <span><h2>157,820</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="material-icons">touch_app</i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>
        </el-row>



        





    </div>



</template>

<script>
    export default {
        data(){
           return{
             
           }
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
        text-align:center;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
    .box-card{
        height:110px;
    } 
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    .box-chart{
        height:420px;
    }
    .box-list{
        height:auto;
        text-align:left;
    }
    .box-list hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:5px;
        margin-top:6px;

    }
</style>