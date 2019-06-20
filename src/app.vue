<template>
	<div class="app_container">
		<!-- 头部 -->
		<mt-header fixed title="顶部">
			
		</mt-header>
		<!-- 中间路由 -->
		<transition >
				<router-view></router-view>
		</transition>
		<!-- tabbar -->
		<nav class="mui-bar mui-bar-tab">

			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="bage">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>

</script>

<style lang="less" scoped>
		.app_container{
		overflow-x: hidden;
		padding-top: 40px;
		padding-bottom: 50px;
		position: absolute;
		width: 100%;
		height: 100%;
		
	}
		.v-enter
		{
			opacity: 0;
			transform: translateX(100%);

		}
		.v-leave-active {
			opacity: 0;
			transform: translateX(-100%);
			position: absolute;
		}
		.v-enter-active,
		.v-leave-active{
			transition: all 0.6s ease;
		}


*{touch-action: none;} 


</style>