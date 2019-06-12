<template>
	<div id="newInfo">	
		<h1 class="title">新闻详情====={{ $route.params.id }}</h1>
		<p class="info">	
			<span>发表时间：{{newinfo.time | moment("YYY-MM-DD")}}</span>
			<span>浏览次数：{{newinfo.browse}}</span>
		</p>
			<div class="content" v-html="newinfo.content">

		</div>
		<!-- 评论主组件 -->
		<comment-box :artid="this.id"></comment-box>
	</div>
	
</template>	


<script>	

	import comment from "../subcompoents/comment.vue"	

	export default {
		data:function(){
			return{
				id:this.$route.params.id, //url地址栏id
				newinfo:{} //新闻详情对象
			}
		},
		methods:{
			getNewInfo(){//获取数据
				this.$http.get('api/params/'+this.id).then(function(result){
						console.log(result);
				})
				.catch(function(){
						console.log(result);
				})
			}
		},
		created(){
			// this.getNewInfo()
			this.newinfo={
				title:"哈哈",
				time:new Date(),
				browse:0,
				content:`<p>啊哈哈哈哈哈哈哈哈哈<img src="https://gw.alicdn.com/imgextra/i4/192/O1CN011ChXwx1DHya02xZXJ_!!192-0-lubanu.jpg" alt="" /></p>`
			}
		},
		components:{
			'comment-box':comment
		}

	}

</script>


<style lang="less"  >	
#newInfo{
	padding: 0 10px;
	font-family: "微软雅黑";
	h1{
		text-align: center;
	}
	.title{
		color:red;
	}
	.info{
		display: flex;
		justify-content: space-between;

	}
	.content{
		img{
			width: 100%;
		}
	}
}
</style>
