<template>
	<div id="goodsInfo">
		<!-- 小球 -->
		<!-- 半场动画不需要 定义类 -->
		<transition 
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		>
			<div class="ball" v-show="ballshow" ref="ball"></div>
		</transition>
		<!-- 商品轮播图 -->
		<div class="mui-card">
				<div class="mui-card-content" >
					<div class="mui-card-content-inner">
						<!-- 轮播 -->
						<swiper :lunboList="lunbolist" :isFull='true' ></swiper>
					</div>
				</div>
			</div>
			<!-- 商品购买 -->
			<div class="mui-card">
				<div class="mui-card-header">{{parameter.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价: <del>￥{{parameter.old}}</del>&nbsp;&nbsp; 销售价<span class="now-price">￥{{parameter.now}}</span>
						</p>

						<label for="">购买数量</label>
						<!-- 数量选择 -->
						<!-- 传来父组件获取子组件的选择个数方法  传递一个最大数量--> 
					<numberbox @getCount="getSelectdCount" :max="parameter.num"></numberbox>
					
					<p>
						<br>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addStopCar">加入购物车</mt-button>
					</p>
						
					</div>
				</div>
			</div>
			<!-- 商品参数 -->
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品编号:</p>
						<p>库存:</p>
						<p>商家时间:</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<!-- 使用链式编程导航 -->
					<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
					<mt-button type="danger"  size="large" plain @click="goComment(id)">商品评论</mt-button>
				</div>
			</div>
	</div>
</template>
<script>
	//引入轮播组件

	import swiper from '../subcompoents/swiper.vue'
	//数量
	import numberbox from '../subcompoents/goosInfo_numberBox.vue'

	export default{
		data(){
			return{
				id: this.$route.params.id, //获取到地址参数
				lunbolist:[],
				parameter:{},
				ballshow:false,
				selected:1   //默认一件
			}
		},
		created(){
			this.getLunbo();
			this.getParameter();
		},
		methods:{
			getLunbo(){
				//获取轮播数据
				this.lunbolist=[
					{id:1,img:'../../image/banner_1.jpg'},
					{id:2,img:'../../image/banner_1.jpg'},
					{id:3,img:'../../image/banner_1.jpg'}
				]
			},
			getParameter(){
				this.parameter={
					title:"小米手机",
					now:600,
					old:1000,
					num:60
				}
			},
			goDesc(id){
				//点击使用编程式导航 跳转到图文介绍
				this.$router.push({name:'goodsdesc',params:{id}})
			},
			goComment(id){
				//点击使用编程式导航 跳转到商品评论
				this.$router.push({name:'goodscomment',params:{id}})
			},
			addStopCar(){
				this.ballshow=true

			},
			beforeEnter(el){
					el.style.transform="translate(0,0)"
			},
			enter(el,done){
				//小球动画适配思路
				//1.原因我们把小球动画最终位置写死了
				//2.只要分辨路和测试的时候不一样 或者滚动条有一定距离之后 问题就出现了
				//3.因此得到分析 不能把位置距离固定死
				//而是应该针对不同情况 动态机会坐标值
				//4.经过分析得到解题思路 先得到 徽标的坐标 在得到小球坐标 然后就差值就是要位移的距离

				//获取小球位置
				//console.log(this.$refs);
				const ballPosition=this.$refs.ball.getBoundingClientRect();
				//获取徽标
				const badgePostion=document.getElementById("bage")
				.getBoundingClientRect();
				const xDist= badgePostion.left-ballPosition.left  ;
				const yDist= badgePostion.top -ballPosition.top ;

				el.offsetWidth; //必须加这个不然没有动画
				el.style.transform=`translate(${xDist}px,${yDist}px)`;
				el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
				done();
			},
			afterEnter(el){
				this.ballshow=false;
			},
			getSelectdCount(count){
				this.selected=count;
				console.log("父组件:"+this.selected);
			}
		},
		components:{
			swiper,
			numberbox
		}
	}
</script>
<style lang="less" scoped>
	#goodsInfo{
		.ball{
			position: absolute;
			height:15px;
			width: 15px;	
			background-color: red;
			left:136px;
			top: 370px;
			border-radius: 50%;
			z-index:333
		}
		.price{
			.now-price{
				color: red;
			}
		}

		.mui-card-footer {
		display: block;
		button{
			margin: 10px auto;
		}
	}
	}
	

</style>