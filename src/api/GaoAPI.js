var host = "http://www.phptrain.cn/testadmin"
// 登录API
export const loginApi = "http://www.phptrain.cn/admin/unauth/account/login"

// ---------------------首页API开始--------------------------------------------
// 首页兼职总人数
export const TotalPeopleAPI = "http://www.phptrain.cn/admin/home/countPartTimeTotalPeople"

// 完成任务统计数API
export const countComplateTaskAPI = "http://www.phptrain.cn/admin/home/countComplateTask"

// 获取总任务数
export const countTotalTaskAPI = "http://www.phptrain.cn/admin/home/countTotalTask"

// ---------------------首页API结束--------------------------------------------

// --------------------- 统计页面API开始 --------------------------------------
export const statisticUserProfilePage= host+"/report/getUserProfilePage"
// --------------------- 统计页面API结束 --------------------------------------


// --------------------- 系统管理之权限管理 API开始 --------------------------------------
// 获取权限管理内容
export const getResourcePageAPI = host +"/admin/resource/getResourcePage"

export const addResourceAPI = host + "/admin/resource/addResource"
// 角色管理内容
export const getRolePageAPI = host + "/admin/role/getRolePage"
//用户管理
export const getUserPageAPI = host +"/admin/user/getUserPage"


// --------------------- 系统管理之权限管理 API结束 --------------------------------------
// --------------------- 统计页面API开始 --------------------------------------