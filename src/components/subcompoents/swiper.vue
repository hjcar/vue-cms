<template>
	<div>
		<mt-swipe  :auto="4000">
		  <mt-swipe-item v-for="item in lunboList" >
		  	<!-- 这里必须要绑定属性表达式 不然 src把item.img当作字符串解析 -->
		  	<!-- 如果isFull为true使用这个类 否则不使用 -->
		  	<img :src="item.img" :class="{w:isFull}" alt="">
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script >
	export default {
		props:['lunboList',"isFull"] 
	}
</script>
<style lang="less" scoped>
		.mint-swipe{
		height: 180px;
		.mint-swipe-item{
			/*是否为100%*/
			.w {
				width: 100%;
			}

			img{
			
				height: 100%;
			}
		}
}	

</style>