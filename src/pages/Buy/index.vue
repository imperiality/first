<script>
	/* eslint-disable */
	import Vue from 'vue';
	import { List } from 'vant';

	Vue.use(List);
	import Cart from './cart';
	export default {
		name: 'Buy',
		data() {
			return {
				navData: [],
				loading: false,
				finished: false,
				list: [],
				page: 2,
				size: 5,
			};
		},
		components: {
			Cart,
		},
		props: {
			currentPage: String,
		},

		mounted() {
			console.log(this.currentPage);
			this.navWap();
			// window.addEventListener('scroll', this.debounce(3000), true);
		},
		methods: {
			tohome() {
				this.$parent.currentPage = 'home';
			},
			// scroll () {
			//   var top = document.documentElement.scrollTop || document.body.scrollTop;
			//   var height = document.documentElement.height || document.body.scrollHeight;
			//   console.log(top,height)

			// },
			async navWap() {
				const result = await this.$API.navWap();
				this.navData = result.data.navList;
			},
			// getScroll() {
			// 	let backTop = document.getElementById('backTop');
			// 	// 获取滚动条到顶部距离
			// 	let top = document.documentElement.scrollTop || document.body.scrollTop;

			// 	if (top > document.body.scrollHeight / 2) {
			// 		backTop.style.display = 'block';
			// 	} else {
			// 		backTop.style.display = 'none';
			// 	}
			// },
			async onLoad() {
				this.page++;
				console.log(this.page);
				const result = await this.$API.recAuto(this.page, this.size);
				// this.list = result.data.result;
				// console.log(typeof result.data.hasMore);
				if (result.data.hasMore === true) {
					// console.log(result.data.hasMore);
					result.data.result.forEach((item) => {
						if (item.topics) {
							item.topics.forEach((item) => {
								// if (item.topics) {
								// 	item.topics.forEach((item) => {
								// 		this.list.push(item);
								// 	});
								// 	this.loading = false;
								// }
								// this.$forceUpdate();
								this.list.push(item);
							});
							this.loading = false;
							// this.finished = true;
						}
					});
					console.log(this.list);
					// this.list.splice(0,5);
				} else {
					this.loading = false;
					this.finished = true;
				}
			},
			backTop() {
				let timer;
				// 慢慢的回到顶部
				cancelAnimationFrame(timer);
				timer = requestAnimationFrame(function fn() {
					var oTop =
						document.body.scrollTop || document.documentElement.scrollTop;
					if (oTop > 0) {
						document.body.scrollTop = document.documentElement.scrollTop =
							oTop - 50; //可以调整数字明确放慢速度20->50,为0时为正常速度
						timer = requestAnimationFrame(fn);
					} else {
						cancelAnimationFrame(timer);
					}
				});
			},
		},
	};
</script>

<template>
	<div class="buy" id="buy">
		<header>
			<router-link
				to="/"
				@click.native="tohome"
				class="iconfont icon-shouye"
			></router-link>
			<p>值得买</p>
			<router-link to="/search" class="iconfont icon-search"></router-link>
			<router-link to="/cart" class="iconfont icon-gouwuchekong"></router-link>
		</header>
		<div class="bg">
			<img src="/image/Buy/ia_100000001.png" alt="" class="bg1" />
			<img src="/image/Buy/ia_100000000.png" alt="" class="bg2" />
			<span class="text">严选好物 用心生活</span>
		</div>
		<div class="nav">
			<ul v-if="this.navData.length > 0">
				<li class="li" v-for="item in navData" :key="item.id">
					<img :src="item.picUrl" alt="" />
					<p>{{ item.mainTitle }}</p>
					<span>{{ item.viceTitle }}</span>
				</li>
			</ul>
		</div>
		<a @click="backTop" id="backTop"
			><img src="/image/ia_100000080.webp" alt=""
		/></a>
		<div class="longList">
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
			>
				<div class="center van-clearfix">
					<div class="van-clearfix left">
						<Cart
							v-for="(item, index) in list"
							v-show="index % 2 === 1"
							:key="index"
							:toBuy="item.toBuy"
							:appBanHeight="item.appBanHeight"
							:picUrl="item.picUrl"
							:appBanWidth="item.appBanWidth"
							:avatar="item.avatar"
							:buyNow="item.buyNow"
							:nickname="item.nickname"
							:readCount="item.readCount"
							:title="item.title"
						/>
					</div>
					<div class="van-clearfix right">
						<Cart
							v-for="(item, index) in list"
							v-show="index % 2 === 0"
							:key="index"
							:toBuy="item.toBuy"
							:appBanHeight="item.appBanHeight"
							:picUrl="item.picUrl"
							:appBanWidth="item.appBanWidth"
							:avatar="item.avatar"
							:buyNow="item.buyNow"
							:nickname="item.nickname"
							:readCount="item.readCount"
							:title="item.title"
						/>
					</div>
				</div>
			</van-list>
		</div>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.buy {
		position: relative;
		background-color: #eee;

		.longList {
			position: absolute;
			top: 350px;
			width: 375px;
			background-color: #eee;
			// height: 667px;
			.van-list {
				background-color: #eee;
				padding-bottom: 50px;
				font-size: 0;
				.van-clearfix {
					overflow: hidden;
				}

				.left{
					float: left;
				}
				.right{
					float: right;
				}
			}
		}
		header {
			position: fixed;
			top: 0;
			z-index: 9;
			width: 375px;
			display: flex;
			height: 50px;
			background-color: #fff;
			p {
				line-height: 50px;
				width: 50%;
				margin-left: 40px;
			}
			a {
				font-size: 30px;
				display: block;
				width: 50px;
				height: 50px;
				line-height: 50px;
			}
		}
		.bg {
			margin-top: 50px;
			width: 100%;
			position: relative;
			.bg1 {
				width: 100%;
			}
			.bg2 {
				width: 65px;
				position: absolute;
				top: 20px;
				left: 10px;
			}
			.text {
				position: absolute;
				top: 30px;
				left: 75px;
				color: #fff;
			}
		}
		.nav {
			position: absolute;
			top: 70px;
			margin-left: 10px;
			width: 355px;
			ul {
				border-radius: 10px;
				height: 250px;
				background-color: white;
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				overflow-x: auto;
				padding-top: 10px;
				.li {
					width: 90px;
					height: 100px;
					margin-top: 10px;
					img {
						height: 60px;
					}
					p {
						font-size: 14px;
						font-weight: bold;
					}
					span {
						font-size: 12px;
						color: #aaa;
					}
				}
			}
		}
		#backTop {
			img {
				width: 45px;
				height: 45px;
			}
			position: fixed;
			right: 10px;
			bottom: 60px;
		}
	}
</style>
