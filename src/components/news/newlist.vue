<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for= " item in list" :key="item.id">
					<router-link :to="'/home/newlist/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.imgurl">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">
							<span>发表时间:{{item.time | moment("YYYY-MM-DD") }}</span>
							<span>点击：{{item.browse}}</span></p>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui';
	export default {
		data:function(){
			return {
				msg:'news',
				list:[]
			}
		},methods:{
			//获取数据
			getList(){
				//前面不能有/
				this.$http.get('newlist').then(result=>{
					console.log(result)
				}).catch(err=>{
					Toast('新闻数据失败') 
				})
			}
		},
		created(){
			this.getList();
			//假数据
			this.list=[
				{id:'1',title:"木屋",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'2',title:"哈哈",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'3',title:"123",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'5',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'6',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'7',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'8',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'9',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'10',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'11',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'12',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'13',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'14',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'16',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
				{id:'17',title:"456",time:new Date(),browse:'0',imgurl:'http://www.dcloud.io/hellomui/images/cbd.jpg'},
			]
		}
	}
</script>

<style lang="less" scoped >
	
	.mui-table-view{
			a{
				.mui-media-body{
					font-size: 14px;

					p{
						display: flex;
						justify-content: space-between;
					}
				}
			}
	}
</style>
