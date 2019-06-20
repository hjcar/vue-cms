<template>
	<div id="photoinfo">
	<!-- 	<h1>图片详情==={{ $route.params.id}}</h1> -->
	<h3>标题</h3>
	<p class="subtitle">
		<span>发表时间:</span>
		<span>点击次数:10</span>
	</p>
	<hr>

		<!-- 缩略图区域  -->
		<vue-preview :slides="slide1" @close="handleClose" class="preview-img"></vue-preview>

		<!-- 图片内容区域 -->
		<div class="content">
			6666666666666
		</div>
	<!-- 评论子组件 -->
	<comment-box :artid="id"></comment-box>
	</div>
</template>
<script>
	import comment from "../subcompoents/comment.vue"
	export default {
		data(){
			return {
				info:{},
				id:this.$route.params.id,
				slide1: [  //图片数组
			          {
			            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
			            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
			            alt: 'picture1',
			            title: 'Image Caption 1',
			            w: 600,
			            h: 400
			          },
			           {
			            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
			            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
			            alt: 'picture1',
			            title: 'Image Caption 1',
			            w: 600,
			            h: 400
			          },
			           {
			            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
			            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
			            alt: 'picture1',
			            title: 'Image Caption 1',
			            w: 600,
			            h: 400
			          },
			           {
			            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
			            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
			            alt: 'picture1',
			            title: 'Image Caption 1',
			            w: 600,
			            h: 400
			          }

			        ]
			}
		},
		methods:{
			getInfo(){
				//获取数据
				this.info={title:'',}
			},
			 handleClose () {
		        console.log('close event')
		      }
		},
		components:{
			"comment-box":comment
		}

	}
</script>
<style lang="less" >
	#photoinfo{
		h3{
			color: #26a2ff;
			text-align: center;
		}
		.subtitle{
			display: flex;
			justify-content: space-between;
			padding: 0 5px;
		}
		.preview-img{
			figure{
				float: left;
				margin:0 1%;
				width: 31.33%;
				/*height: auto;*/
				img{
					width: 100%;
				}
			}
		}
		.content{
			clear : both;
			}
	}
</style>