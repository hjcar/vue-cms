//导入Vue
import Vue from 'vue'
//导入app组件
import app from '../src/app.vue'

//mint-ui框架
import MintUI from "mint-ui"
//mint-ui CSS样式
import 'mint-ui/lib/style.css'
//安装
Vue.use(MintUI) 

//MUI样式
import'../src/lib/mui/css/mui.css'

//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter);  


//路由
// import router from '../src/router.js'

const vm = new Vue({
	el:'#app',
	data:{

	},
	methods:{

	},
	render: c =>c(app) //渲染app组件

	// router
})