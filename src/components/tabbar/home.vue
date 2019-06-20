<template>
	<div>
		<!-- 轮播图 -->
		<swiper :lunboList="lunboList" :isFull="true"></swiper>	
		<!-- 九宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../../image/menu1.png" alt="">
		                    <div class="mui-media-body">新闻咨询</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                     <img src="../../image/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                     <img src="../../image/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../image/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../image/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../image/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
	</div>
</template>
<script >
	//导入轮播图组件
	import swiper from '../subcompoents/swiper.vue'
	//导入提示框 
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return{
				lunboList:[]
			}
		},
		created(){
			// this.getlunbp();
			this.lunboList=[
				{img:"../../image/banner_1.jpg"},
				{img:"../../image/banner_1.jpg"}
			]
		},
		methods:{
			getlunbp(){
				this.$http.get('http://localhost:3001/').then(result=>{
					this.lunboList=result.body
				}).catch(err=>{
					Toast('加载数据失败') 
				})
			}
		},
		components:{
			'swiper':swiper
		}
	}
</script>

<style lang='less' scoped>
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: none;
	img{
		width: 60px;
		height: auto;
	}
	.mui-media-body{
		font-size: 16px;
	}
}

</style>