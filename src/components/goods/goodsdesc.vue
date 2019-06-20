<template>
	<div>
		<h3>{{title}}</h3>
		<hr>
		<div class="content">
			{{content}}
		</div>
		<img src="../../image/banner_1.jpg" alt="">
		{{content}}
		<img src="../../image/banner_1.jpg" alt="">
	</div>
</template>
<script>
	export default{
		data(){
			return {
				title:'小米手机',
				content:"小米手机小米手机小米手机小米手机小米手机小米手机小米手机"
			}
		}
	}
</script>
<style lang="less" scoped>
	h3{
		text-align: center;
		font-size: 20px;
		margin: 10px;
	}
	.content{
		padding: 0 5px;
		font-family: "微软雅黑";
		color: #333;
	}
	img{
		width: 100%;
		display: block;
	}
</style>