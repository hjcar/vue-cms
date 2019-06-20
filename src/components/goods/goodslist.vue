<template>
	<div id="goodslist" >
		<!-- <h1>商品列表</h1> -->
		<router-link :to="'/home/goodslist/'+item.id" class="goods-item" v-for="item in list">
			<img :src="item.imgUrl" alt="">
			<h1 class="goods-title">{{item.title}}</h1>
			<p class="goods-money">
				<b class="now">￥{{item.now}}</b>
				<b class="old">￥{{item.old}}</b>
			</p>
			<p class="goods-num">
				热卖中 剩余{{item.num}}件
			</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		data(){
			return { //首先请求第一页 
				indexPage:1,
				list:[]
			}
		},
		created(){
			//this.getGoodsList() 获取数据
			this.list=[
				{id:1,title:'小米手机',old:400,now:200,num:10,imgUrl:'../../image/menu6.png'},
				{id:2,title:'小米手机',old:400,now:200,num:10,imgUrl:'../../image/menu6.png'},
				{id:3,title:'小米手机',old:400,now:200,num:10,imgUrl:'../../image/menu6.png'},
				{id:4,title:'小米手机',old:400,now:200,num:10,imgUrl:'../../image/menu6.png'}
			]
		},
		methods:{
			getGoodsList(){
				this.$http.get('localhost/api/goodlist/'+this.indexPage).then(function(){
					//获取到了
				}).catch(function(){
					//错误
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	#goodslist{
		display: flex;
		flex-wrap: wrap;
		padding: 7px;
		justify-content: space-between;
		.goods-item{
			width: 49%;
			background-color: #fff;
			margin-top: 7px;
			padding: 3px;
			box-shadow:  0 6px 12px 1px rgba(0,0,0,0.1);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			img{
				width: 100%;
				min-height: 150px;
			}
			.goods-title{
				font-size:24px;
			}
			.goods-money{
				background-color: #e7e7e7;
			}
			.now{
				color: red;
			}
			.old{
				text-decoration: line-through;
				font-size: 8px;
			}
		}

	}
</style>