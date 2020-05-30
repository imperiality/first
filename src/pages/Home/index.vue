<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem, Lazyload, Tab, Tabs, Popup } from 'vant';
	Vue.use(Lazyload);
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(Tab);
	Vue.use(Tabs);
	Vue.use(Popup);

	export default {
		name: 'Home',
		data() {
			return {
				undefault: false,
				current: 0,
				title: [
					'推荐',
					'居家生活',
					'服饰鞋包',
					'美食酒水',
					'个护清洁',
					'母婴亲子',
					'运动旅行',
					'数码家电',
					'严选全球',
				],
				isShow: false,
			
			};
		},
		methods: {
			hiddenApp() {
        
        document.getElementsByClassName('home')[0].addEventListener(
					'touchmove',
					function(e) {
						e.stopPropagation();
						e.preventDefault();
						const downloadApp = document.getElementsByClassName(
							'downloadApp'
						)[0];
						downloadApp.style.display = 'none';
					},
					{ passive: false }
        );
        document.getElementsByClassName('body')[0].addEventListener(
					'wheelDelta',
					function(e) {
						e.stopPropagation();
						e.preventDefault();
						const downloadApp = document.getElementsByClassName(
							'downloadApp'
						)[0];
						downloadApp.style.display = 'none';
					},
					{ passive: false }
				);
			},
			imgChange(index) {
				console.log(index);
				document
					.querySelectorAll('.pointer')
					.forEach((item) => item.classList.remove('active'));
				document.querySelectorAll('.pointer')[index].classList.add('active');
			},
			show() {
				this.isShow = !this.isShow;
			},
			getContainer() {
				return document.querySelector('.mounted');
			},
		},
	};
</script>

<template>
	<div class="home" ref="home" @touchstart="hiddenApp">
		<div class="downloadApp" ref="downloadapp">
			<img
				src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&amp;imageView&amp;thumbnail=750x0&amp;quality=75"
			/>
		</div>
		<header>
			<div class="top">
				<img src="./image/ia_200000000.png" alt="" />
				<div>
					<i class="iconfont icon-search"></i>
					<span class="placeholder">搜索商品, 共28263款好物</span>
				</div>
				<button class="btn">登录</button>
			</div>
			<div class="bottom mounted">
				<van-tabs class="tabs">
					<van-tab
						v-for="(item, index) in title"
						swipeable
						:title="item"
						:key="index"
					>
					</van-tab>
				</van-tabs>
				<button class="iconfont icon-xia" @click="show"></button>
				<van-popup
					v-model="isShow"
					overlay="false"
					get-container="header"
					position="top"
					:style="{ height: '30%' }"
					>内容</van-popup
				>
				<ul class="undefault" v-if="undefault">
					<li class="nav1">推荐</li>
					<li class="nav1">居家生活</li>
					<li class="nav1">服饰鞋包</li>
					<li class="nav1">美食酒水</li>
					<li class="nav1">个护清洁</li>
					<li class="nav1">母婴亲子</li>
					<li class="nav1">运动旅行</li>
					<li class="nav1">数码家电</li>
					<li class="nav1">严选全球</li>
				</ul>
			</div>
		</header>
		<van-swipe
			class="my-swipe"
			@change="imgChange"
			:autoplay="3000"
			indicator-color="white"
		>
			<van-swipe-item
				><img src="./image/ia_100000003.webp" alt=""
			/></van-swipe-item>
			<van-swipe-item
				><img src="./image/ia_100000004.webp" alt=""
			/></van-swipe-item>
			<van-swipe-item
				><img src="./image/ia_100000005.webp" alt=""
			/></van-swipe-item>
			<van-swipe-item
				><img src="./image/ia_100000006.webp" alt=""
			/></van-swipe-item>
			<van-swipe-item
				><img src="./image/ia_100000007.webp" alt=""
			/></van-swipe-item>
			<van-swipe-item
				><img src="./image/ia_100000008.webp" alt=""
			/></van-swipe-item>
			<van-swipe-item
				><img src="./image/ia_100000009.webp" alt=""
			/></van-swipe-item>
			<van-swipe-item
				><img src="./image/ia_100000010.webp" alt=""
			/></van-swipe-item>
			<template #indicator>
				<div class="custom-indicator">
					<div class="pointer"></div>
					<div class="pointer"></div>
					<div class="pointer"></div>
					<div class="pointer"></div>
					<div class="pointer"></div>
					<div class="pointer"></div>
					<div class="pointer"></div>
					<div class="pointer"></div>
				</div>
			</template>
		</van-swipe>
		<ul class="service">
			<i></i
			><span>网易自营品牌</span>
			<i></i
			><span>30天无忧退货</span>
			<i></i
			><span>48小时快速退款</span>
		</ul>
		<ul class="any">
			<li class="anyitem1">
				<a href=""
					><img src="./image/ia_100000011.png" alt="" /><br /><span
						>新品首发</span
					></a
				>
			</li>
			<li class="anyitem2">
				<a href=""
					><img src="./image/ia_100000012.png" alt="" /><br /><span
						>居家生活</span
					></a
				>
			</li>
			<li class="anyitem3">
				<a href=""
					><img src="./image/ia_100000013.png" alt="" /><br /><span
						>服饰鞋包</span
					></a
				>
			</li>
			<li class="anyitem4">
				<a href=""
					><img src="./image/ia_100000014.png" alt="" /><br /><span
						>美食酒水</span
					></a
				>
			</li>
			<li class="anyitem5">
				<a href=""
					><img src="./image/ia_100000015.png" alt="" /><br /><span
						>个护清洁</span
					></a
				>
			</li>
			<li class="anyitem6">
				<a href=""
					><img src="./image/ia_100000016.png" alt="" /><br /><span
						>母婴亲子</span
					></a
				>
			</li>
			<li class="anyitem7">
				<a href=""
					><img src="./image/ia_100000017.png" alt="" /><br /><span
						>运动旅行</span
					></a
				>
			</li>
			<li class="anyitem8">
				<a href=""
					><img src="./image/ia_100000018.png" alt="" /><br /><span
						>数码家电</span
					></a
				>
			</li>
			<li class="anyitem9">
				<a href=""
					><img src="./image/ia_100000019.png" alt="" /><br /><span
						>全球特色</span
					></a
				>
			</li>
			<li class="anyitem10">
				<a href=""
					><img src="./image/ia_100000020.gif" alt="" /><br /><span
						>好货抄底</span
					></a
				>
			</li>
		</ul>
		<div class="section">
			<a class="mask"
				><img src="./image/ia_100000063.webp" class="newbird" alt=""
			/></a>
			<a class="mask"><img src="./image/ia_100000064.webp" alt=""/></a>
			<a class="discount"><img src="./image/ia_100000065.webp" alt=""/></a>
			<a class="discount"><img src="./image/ia_100000066.webp" alt=""/></a>
			<a class="discount"><img src="./image/ia_100000067.webp" alt=""/></a>
		</div>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.home {
		width: 100%;
		height: 100%;
		.downloadApp {
      position: fixed;
      top: 0;
      z-index: 9;
			img {
				width: 100%;
			}
		}
		header {
      position: fixed;
      top: 50px;
      background-color: white;
      z-index: 9;
			.top {
				width: 95%;
				height: 30px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 7px 10px;
				div {
					width: 210px;
					height: 20px;
					padding: 6px;
					background-color: #ededed;
					border-radius: 5px;
				}
				span:nth-child(2) {
					border: none;
					font-size: 14px;
					color: #666666;
					width: 300px;
				}
				img {
					height: 18px;
				}
				button {
					width: 40px;
					height: 25px;
					border-radius: 3px;
					background-color: #fff;
					font-size: 14px;
					color: rgb(236, 73, 100);
					border: 1px solid rgb(236, 73, 100);
				}
			}
			.bottom {
				float: left;
        position: relative;
        .tabs>div{
          height: 30px;
        }
				.tabs {
					margin-right: 50px;
					height: 30px;
					position: relative;
					van-tabs__nav {
						padding-bottom:0;
					}
					.van-tabs__line {
            
						position: absolute;
            top: 27px;
            
					}
				}
				.icon-xia {
					background-color: white;
					width: 40px;
					height: 25px;
					border: 1px solid #ccc;
					border-right: none;
					position: absolute;
					top: 2px;
					right: 0;
					box-shadow: -20px 0px 30px 10px white;
					z-index: 9999;
				}
				.selectbox {
				}
			}
		}
		.my-swipe {
      margin-top: 32%;
			width: 100%;
			height: 160px;
			img {
				width: 100%;
				height: 160px;
			}
			.custom-indicator {
				position: absolute;
				width: 180px;
				right: calc(50% - 90px);
				bottom: 10px;
				padding: 2px 5px;
				display: flex;
				justify-content: space-between;
				.pointer {
					width: 20px;
					height: 3px;
					background: rgba(255, 255, 255, 0.6);
				}
				.active {
					background: rgba(255, 255, 255, 1);
				}
			}
		}
		.service {
			width: 100%;
			height: 36px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			span {
				font-size: 12px;
			}
			span {
				margin-right: 10px;
			}
			i {
				margin-left: 10px;
			}
			span {
				font-size: 12px;
			}
			i:nth-child(1) {
				display: inline-block;
				width: 18px;
				height: 18px;
				background: url(./image/ia_100000059.png) 0 0 no-repeat;
				background-size: cover;
			}
			i:nth-child(2) {
				display: inline-block;
				width: 18px;
				height: 18px;
				background: url(./image/ia_100000061.png) 0 0 no-repeat;
				background-size: cover;
			}

			i:nth-child(3) {
				display: inline-block;
				width: 18px;
				height: 18px;
				background: url(./image/ia_100000059.png) 0 0 no-repeat;
				background-size: cover;
			}
			span {
				font-size: 12px;
			}
		}
		.any {
			width: 100%;
			height: 180px;
			li {
				float: left;
				margin: 5px 10px;
				img {
					display: inline-block;
					width: 55px;
				}
				span {
					font-size: 12px;
				}
			}
		}
		.section {
			background-color: #eee;
			.mask:nth-child(1) {
				img {
					display: inline-block;
					width: 100%;
				}
			}
			.mask:nth-child(2) {
				img {
					display: inline-block;
					width: 95%;
				}
			}

			.discount {
				img {
          margin: 4px;
					width: 30%;
				}
			}
		}
	}
</style>
