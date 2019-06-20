<template>
	<div id="numbox">
		<!-- 问题 不知道什么时候能拿到max的值,但是总归有一颗得到一个真正的max值 -->
		<!-- 我们可以使用 watch监听 父组件的max值 不管父组件传递过来的max值 
		不管watch会触发几次 最后都会得到一个数值
		 -->
		<div class="mui-numbox" data-numbox-min='1'  data-numbox-max='max'>
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
			<input id="test"  class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numbox" />
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
	</div>
</template>
<script>
	import mui from'../../lib/mui/js/mui.min.js'
	

	export default{
		data(){
			return{

			}
		},
		mounted(){
			//
			mui(".mui-numbox").numbox();
		},
		methods:{
			countChange(){
				//每当文本框数据改变时 立即把最新的值传递给父主键
			console.log(this.$refs.numbox.value);
			//调用父组件方法将数据传递给父组件
			this.$emit('getCount',parseInt(this.$refs.numbox.value))
			}
		},
		props:['max'],
		watch:{ //假如说购买了 这时候父组件传来值应该发送了
			max:function(newVal,oldVal){
				console.log(newVal);
				mui(".mui-numbox").numbox().setOption("max",newVal);
				}
			
		}
	}
</script>
<style></style>