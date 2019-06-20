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
import'../src/lib/mui/css/icons-extra.css'
import mui from'../src/lib/mui/js/mui.min.js'

//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter);  

//导入vue-resource (请求)
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource); 
//全局配置
Vue.http.options.root = 'wnhja.cn';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

//VUE图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//路由
import router from '../src/router.js'

//时间过滤器
Vue.use(require('vue-moment'));

const vm = new Vue({
	el:'#app',
	data:{

	},
	methods:{

	},
	render: c =>c(app), //渲染app组件

	router
})



mui('body').on('tap','a',function(){document.location.href=this.href;});
