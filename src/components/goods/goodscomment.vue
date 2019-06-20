<template>
	<div>
		<h3>商品评论</h3>
		<hr>
		<!-- 评论组件  传入id -->
		<commentbox :artid="artid"></commentbox>
	</div>
</template>
<script>
	import commentbox from '../subcompoents/comment.vue';
	export default {
		data(){
			return {
				artid:this.$route.params.id
			}
		},
		methods:{

		},
		components:{
			commentbox
		}
	}
	
</script>
<style>
	h3{
		text-align: center;
	}
</style>