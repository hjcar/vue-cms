//路由
import VueRouter from 'vue-router'

//导入组件

//导入tabbar组件

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'


//导入新闻

import newlist from './components/news/newlist.vue'
import newinfo from './components/news/newinfo.vue'


//图片分享

import photolist from '../src/components/photos/photolist.vue'
import photoinfo from '../src/components/photos/photoinfo.vue'

//商品
import goodslist from '../src/components/goods/goodslist.vue'
import goodsInfo from '../src/components/goods/goodsInfo.vue'
import goodsdesc from '../src/components/goods/goodsdesc.vue'//图文介绍
import goodscomment from '../src/components/goods/goodscomment.vue'//商品评论
//创建路由对象
var router=new VueRouter({
	routes:[
		{path:'',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/shopcar',component:shopcar},
		{path:'/search',component:search},
		{path:'/home/newlist',component:newlist},
		{path:'/home/newlist/newinfo/:id',component:newinfo},
		{path:'/home/photolist',component:photolist},
		{path:'/home/photolist/:id',component:photoinfo},
		{path:'/home/goodslist',component:goodslist},
		{path:'/home/goodslist/:id',component:goodsInfo},
		{path:'/home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'},
		{path:'/home/goodscomment/:id',component:goodscomment,name:'goodscomment'}
	],
	linkActiveClass:'mui-active' //覆盖默认的高亮类 router-link-active
})


//暴露路由对象 

export default router