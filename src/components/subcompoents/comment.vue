<!-- 公共的评论组件 -->
<template>

		<div id="comment">
			<h5>发表评论</h5>
		</hr>
		<textarea name="" placeholder="请输入评论长度(最多120字)" maxlength="120"  v-model="msg" >
			
		</textarea>
		<mt-button type="primary" size="large" @click="postMsg">发表评论</mt-button>
		<div class="cmt-list" >
			<div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
				<div class="cmt-title">
				第{{i+1}}楼	{{item.title}}
				</div>
				<div class="cmt-body">
					<!-- 可以使用三元表达式 -->
					{{item.content== '' ? '此用户很懒': item.content}}
				</div>
			</div>
		</div>
		<!-- 让pageIndex++-->
		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>		
		</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data:function(){
			return{
				pageIndex:1, //页码默认为1
				comments:[],  //所有的评论数据
				msg:''    //评论内容
			}
		},
		created(){
			// this.getComment()
		this.comments=this.comments.concat([
		{id:'1',title:'用户:匿名用户 发表时间：2000-10-10 10：20：10',content:'锄禾日荡母'},
		{id:'2',title:'用户:匿名用户 发表时间：2000-10-10 10：20：10',content:'锄禾日荡母'},
		{id:'3',title:'用户:匿名用户 发表时间：2000-10-10 10：20：10',content:'锄禾日荡母'},
		{id:'4',title:'123',content:''},
		{id:'5',title:'123',content:'锄禾日荡母'},
		{id:'6',title:'123',content:'锄禾日荡母'},
		{id:'7',title:'123',content:'锄禾日荡母'},
		{id:'8',title:'123',content:'锄禾日荡母'},
		{id:'9',title:'123',content:'锄禾日荡母'},
		{id:'10',title:'123',content:'锄禾日荡母'},

		]	)
		},
		methods:{
			getComment(){
				//请求地址 api/getComment:artid?page=1
				this.$http.get('api/getComment/'+this.artid+'?page='+this.pageIndex+'')
				.then(function(result){
					this.comments=this.comments.concat(result)
				})
				.catch(function(err){
					//失败
				})
			},
			getMore(){ //加载更多
				this.pageIndex++;
				// getComment();
				//模拟加载更多
				this.comments=this.comments.concat([
					{id:'111',title:'用户:匿名用户 发表时间：2000-10-10 10：20：10',content:'锄禾日荡母'},
					{id:'112',title:'用户:匿名用户 发表时间：2000-10-10 10：20：10',content:'锄禾日荡母'},
					{id:'116',title:'用户:匿名用户 发表时间：2000-10-10 10：20：10',content:'锄禾日荡母'},
					{id:'133',title:'123',content:''},
					{id:'12',title:'123',content:'锄禾日荡母'},
					{id:'13',title:'123',content:'锄禾日荡母'},
					{id:'14',title:'123',content:'锄禾日荡母'},
					{id:'15',title:'123',content:'锄禾日荡母'},
					{id:'16',title:'123',content:'锄禾日荡母'},
					{id:'101',title:'123',content:'锄禾日荡母'}
					])	
			},
			postMsg(){
				if(this.msg.trim()==''){//没有输入内容
					return Toast("内容不能为空！")
				}
				var cmt={id:'999',title:'用户:匿名用户 发表时间：2000-10-10 10：20：10',content:this.msg}
				this.comments.unshift(cmt);//添加到数组第一位

				//地址 api/postcomment/:artid 
				//描述 给某条新闻评论的id
				//传入的参数 artid: 咨询的artid content 评论的内容
				this.$http.post('api/postcomment/:artid'+this.artid,{content:this.msg.trim()})
				.then(function(){
					//成功了

				}).catch(function(){

				})
			}
		},
		props:['artid']
	}
</script>

<style lang="less" scoped>
.cmt-list{
	margin: 10px 0;
	.cmt-item{
		font-family: "微软雅黑";
		.cmt-title{
			font-size: 12px;
			background-color:rgba(151,151,151,0.5);
		}
		.cmt-body{
			font-size: 14px;
		}
	}
}

	
</style>