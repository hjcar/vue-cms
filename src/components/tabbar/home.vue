<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe  :auto="4000">
		  <mt-swipe-item v-for="item in lunboList">
		  	<!-- 这里必须要绑定属性表达式 不然 src把item.img当作字符串解析 -->
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<!-- 九宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu1.png" alt="">
		                    <div class="mui-media-body">新闻咨询</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../image/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../image/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
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
	//导入提示框 
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return{
				lunboList:[]
			}
		},
		created(){
			this.getlunbp();
			this.lunboList=[
				{img:"../../image/banner_1.jpg"},
				{img:"../../image/banner_1.jpg"}
			]
		},
		methods:{
			getlunbp(){
				this.$http.jsonp('http://148.70.86.254:8080/static/api/api_data.php?img_page=1&img_id=35').then(result=>{
					console.log(result);
				}).catch(err=>{
					Toast('加载数据失败') 
				})
			}
		}
	}
</script>

<style lang='less' scoped>
	.mint-swipe{
		height: 200px;
		.mint-swipe-item{
			background-color: pink;
			&:nth-child(1){
				background-color: red;
			}
			&:nth-child(2){
				background-color: blue;
			}
			&:nth-child(3){
				background-color: yellow;
			}
			img{
				width: 100%;
				height: auto;
			}
		}
}	

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