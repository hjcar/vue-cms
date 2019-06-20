<template>
	<div id="photolist">
		<mt-navbar v-model="selected" >
		  <mt-tab-item :id="item.id" :key="item.id" v-for="item in cates">{{ item.title }}</mt-tab-item>
		</mt-navbar>
		<!-- 图片-->
		<ul>
			<router-link tag="li" v-for="item in list" :key="item.id" :to="'/home/photolist/'+item.id">
				<img v-lazy.container="item.imgUrl">
				<div class="info">
					<h1 class="info-title">你好你好你好你好你好你好你好</h1>
					<p class="info-body">哈哈哈哈哈哈</p>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>
	//初始化mui滚动
	export default{
		data(){
			return{
				selected:'',//获取id
				cates:[], //分类
				list:[] //图片列表
			}
		},
		methods:{
			getAllCatrgory(){
				//获取所有的图片分类
				this.cates=[//获取分类
					{title:'跑车',id:1},
					{title:'唯美',id:2},
					{title:'风景',id:3},
					{title:'娱乐',id:4}
				];

				this.cates.unshift({title:'全部',id:0});
			}
		},
		created(){
			this.getAllCatrgory();
			this.selected=0;
		},watch:{//监听列表然后请求
			'selected':function(newVal){
				// this.$http.get('api/getImage/'+newVal)
				// .then(function(){
				// 	console.log("成功")
				// }).catch(function(){
				// 	console.log("失败")
				// })
				if(newVal==0){
				this.list=[
					{id:0,imgUrl:"../../image/menu4.png"},
					{id:1,imgUrl:"../../image/menu4.png"},
					{id:2,imgUrl:"../../image/menu4.png"}
				]}else{
					this.list=[
					{id:3,imgUrl:"../../image/menu1.png"},
					{id:4,imgUrl:"../../image/menu1.png"},
					{id:5,imgUrl:"../../image/menu1.png"}]
				}
			}
		}

	}
</script>
<style lang="less" scoped>
	#photolist{
		ul{
			padding: 10px;
			li{
				margin-top: 10px;
				position: relative;
				img{
					width: 100%;
					display: block;
				}
				.info{
					position: absolute;
					bottom: 0;
					left: 0;
					height: 100px;
					width: 100%;
					background-color: rgba(0,0,0,.5);
					padding:0 5px;

				}
				.info-title{
					font-size: 14px;
					color: #fff;
				}
				.info-body{
					color: #fff;
				}
			}
		}
		img[lazy="loding"]{
		width: 40px;
		height: 300px;
		margin: auto;
	}
	}
	
</style>