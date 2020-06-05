<template>
	<div id="app" ref="app">
		<router-view :currentPage='this.currentPage'></router-view>
		<div class="tabBottom">
			<mt-tabbar v-model="selected" class="tab">
				<mt-tab-item id="tab1" @click.native="jump('home')">
					<i class="iconfont icon-shouye" :class="{active:currentPage==='home'}"></i>
					<span :class="{active:currentPage==='home'}">首页</span>
				</mt-tab-item>
				<mt-tab-item id="tab2" @click.native="jump('classify')">
					<i class="iconfont icon-fenlei" :class="{active:currentPage==='classify'}"></i>
					<span :class="{active:currentPage==='classify'}">分类</span>
				</mt-tab-item>
				<mt-tab-item id="tab3" @click.native="jump('buy')">
					<i class="iconfont icon-mairu" :class="{active:currentPage==='buy'}"></i>
					<span :class="{active:currentPage==='buy'}">值得买</span>
				</mt-tab-item>
				<mt-tab-item id="tab4" @click.native="jump('shopcart')">
					<i class="iconfont icon-gouwuchekong" :class="{active:currentPage==='shopcart'}"></i>
					<span :class="{active:currentPage==='shopcart'}">购物车</span>
				</mt-tab-item>
				<mt-tab-item id="tab4" @click.native.prevent="jump('person')">
					<i class="iconfont icon-gerenzhongxin" :class="{active:currentPage==='person'}"></i>
					<span :class="{active:currentPage==='person'}">个人</span>
				</mt-tab-item>
			</mt-tabbar>
		</div>
	</div>
</template>

<script>
	import 'vant/lib/index.less';
	// 阻止默认事件
	document.addEventListener('touchstart', function(e) {
		e.preventDefault();
	});
	
	export default {
		name: 'App',
		components: {},
		data() {
			return {
				selected: '首页',
				currentPage:'home',
				tab:'',
				
			};
		},
		methods: {
			jump(tab) {
				if (tab==='classify') {
					window.removeEventListener('scroll',this.getScroll,true)
				}
				// console.log(this.$route.name,tab)
				this.tab =tab;
				if (this.$route.name !== tab) {
          this.$router.push({ name: tab });
          this.currentPage = tab
				}
			},
		
		},
	
		mounted() {
			this.currentPage = this.$route.name
			
		},
	};
</script>

<style lang="less" rel="stylesheet/less" scope>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		width: 100%;
		height: 100%;
		position: relative;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		touch-action: none;
	}
	.tabBottom {
		z-index: 99;
		position: fixed;
		bottom: 0;
		width: 100%;
			background-color: white;
		.tab {
			display: flex;
			height: 50px;
			width: 100%;
			justify-content: space-around;
			div {
				display: flex;
				flex-direction: column;
				font-size: 14px;
				width: 50px;
				height: 55px;
				.active {
					color: rgb(236, 73, 100);
				}
				i {
					font-size: 20px;
					&.active {
						color: rgb(236, 73, 100);
					}
				}
			}
			.mint-tab-item-icon {
				display: none;
			}
		}
	}
</style>
