<script>
	import Vue from 'vue';
	import {
		Swipe,
		SwipeItem,
		Lazyload,
		Tab,
		Tabs,
		Popup,
		CountDown,
	} from 'vant';
	Vue.use(Lazyload);
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(Tab);
	Vue.use(Tabs);
	Vue.use(Popup);
	Vue.use(CountDown);
	import Formpage from '../Formpage';
	export default {
		name: 'Home',
		data() {
			return {
				undefault: true,
				time: 30 * 60 * 60 * 1000,
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
				tabOffsetTop: 0,
				scrollTop: 0,
				showFormpage: false,
			};
		},
		components: {
			Formpage,
		},
		/* 
    
    */
		methods: {
			imgChange(index) {
				document
					.querySelectorAll('.pointer')
					.forEach((item) => item.classList.remove('active'));
				document.querySelectorAll('.pointer')[index].classList.add('active');
			},
			show() {
				this.isShow = !this.isShow;
			},
			getScroll() {
				let box = document.getElementById('downloadApp');
				let header = document.getElementById('header');
				let backTop = document.getElementById('backTop');
				// 获取滚动条到顶部距离
				let top = document.documentElement.scrollTop || document.body.scrollTop;
				if (box) {
					// 如果距离屏幕顶部数字为负
					if (box.getBoundingClientRect().top < 0) {
						header.style.top = 0;
						// 如果距离屏幕顶部数字为正
					} else if (box.getBoundingClientRect().top >= 0) {
						header.style.top = box.style.height;
						// console.log(box.clientHeight);
					}
				}
				if (top > document.body.scrollHeight / 2) {
					backTop.style.display = 'block';
				} else {
					backTop.style.display = 'none';
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
			toSearch() {
				this.showFormpage = true;
			},
		},
		mounted() {
			// 监听滚动事件
			window.addEventListener('scroll', this.getScroll, true);
		},
		/* eslint-disable-next-line */
		beforeRouteLeave(to, from, next) {
			window.removeEventListener('scroll', this.getScroll,true);
			next()
		},
	};
</script>

<template>
	<div class="home" id="top">
		<Formpage v-if="this.showFormpage" route="home" />
		<div v-else class="inner">
			<div class="downloadApp" id="downloadApp">
				<img
					src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&amp;imageView&amp;thumbnail=750x0&amp;quality=75"
				/>
			</div>
			<div class="none"></div>
			<header id="header">
				<div class="top">
					<img src="/image/ia_200000000.png" alt="" />
					<div @click="toSearch">
						<i class="iconfont icon-search"></i>
						<span class="placeholder">搜索商品, 共28263款好物</span>
					</div>
					<div class="undefault" v-if="isShow">
						<div class="all">全部频道</div>
						<ul class="content">
							<li class="nav1" v-for="(item, index) in title" :key="index">
								{{ item }}
							</li>
						</ul>
						<div class="mask"></div>
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
				</div>
			</header>
			<van-swipe
				class="my-swipe"
				@change="imgChange"
				:autoplay="3000"
				indicator-color="white"
			>
				<van-swipe-item
					><img src="/image/ia_100000003.webp" alt=""
				/></van-swipe-item>
				<van-swipe-item
					><img src="/image/ia_100000004.webp" alt=""
				/></van-swipe-item>
				<van-swipe-item
					><img src="/image/ia_100000005.webp" alt=""
				/></van-swipe-item>
				<van-swipe-item
					><img src="/image/ia_100000006.webp" alt=""
				/></van-swipe-item>
				<van-swipe-item
					><img src="/image/ia_100000007.webp" alt=""
				/></van-swipe-item>
				<van-swipe-item
					><img src="/image/ia_100000008.webp" alt=""
				/></van-swipe-item>
				<van-swipe-item
					><img src="/image/ia_100000009.webp" alt=""
				/></van-swipe-item>
				<van-swipe-item
					><img src="/image/ia_100000010.webp" alt=""
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
				<i class="i1"></i
				><span>网易自营品牌</span>
				<i class="i2"></i
				><span>30天无忧退货</span>
				<i class="i3"></i
				><span>48小时快速退款</span>
			</ul>
			<ul class="any">
				<li class="anyitem1">
					<a href=""
						><img src="/image/ia_100000011.png" alt="" /><br /><span
							>新品首发</span
						></a
					>
				</li>
				<li class="anyitem2">
					<a href=""
						><img src="/image/ia_100000012.png" alt="" /><br /><span
							>居家生活</span
						></a
					>
				</li>
				<li class="anyitem3">
					<a href=""
						><img src="/image/ia_100000013.png" alt="" /><br /><span
							>服饰鞋包</span
						></a
					>
				</li>
				<li class="anyitem4">
					<a href=""
						><img src="/image/ia_100000014.png" alt="" /><br /><span
							>美食酒水</span
						></a
					>
				</li>
				<li class="anyitem5">
					<a href=""
						><img src="/image/ia_100000015.png" alt="" /><br /><span
							>个护清洁</span
						></a
					>
				</li>
				<li class="anyitem6">
					<a href=""
						><img src="/image/ia_100000016.png" alt="" /><br /><span
							>母婴亲子</span
						></a
					>
				</li>
				<li class="anyitem7">
					<a href=""
						><img src="/image/ia_100000017.png" alt="" /><br /><span
							>运动旅行</span
						></a
					>
				</li>
				<li class="anyitem8">
					<a href=""
						><img src="/image/ia_100000018.png" alt="" /><br /><span
							>数码家电</span
						></a
					>
				</li>
				<li class="anyitem9">
					<a href=""
						><img src="/image/ia_100000019.png" alt="" /><br /><span
							>全球特色</span
						></a
					>
				</li>
				<li class="anyitem10">
					<a href=""
						><img src="/image/ia_100000020.gif" alt="" /><br /><span
							>好货抄底</span
						></a
					>
				</li>
			</ul>
			<div class="section">
				<a class="mask"
					><img src="/image/ia_100000063.webp" class="newbird" alt=""
				/></a>
				<a class="mask"><img src="/image/ia_100000064.webp" alt=""/></a>
				<a class="discount"><img src="/image/ia_100000065.webp" alt=""/></a>
				<a class="discount"><img src="/image/ia_100000066.webp" alt=""/></a>
				<a class="discount"><img src="/image/ia_100000067.webp" alt=""/></a>
			</div>
			<div class="gift">
				<nav>一 &nbsp;<span>新人专享礼</span>&nbsp; 一</nav>
				<div class="desc1">
					<p>新人专享礼包</p>
					<img class="img1" src="/image/ia_100000022.png" alt="" />
				</div>
				<div class="desc2">
					<p>福利社</p>
					<p>今日特价</p>
					<img class="img2" src="/image/ia_100000024.webp" alt="" />
				</div>
				<div class="desc3">
					<p>新人拼团</p>
					<p>1元起包邮</p>
					<img class="img3" src="/image/ia_100000025.webp" alt="" />
				</div>
			</div>
			<div class="hot">
				<nav>类目热销榜</nav>
				<ul>
					<li class="hot1">
						<span>热销榜</span>
						<img src="/image/1.webp" alt="" />
					</li>
					<li class="hot2">
						<span>好评榜</span>
						<img src="/image/2.webp" alt="" />
					</li>
					<li class="hot3">
						<span>居家生活榜</span>
						<img src="/image/1 (1).webp" alt="" />
					</li>
					<li class="hot4">
						<span>美食酒水榜</span>
						<img src="/image/1 (2).webp" alt="" />
					</li>
					<li class="hot5">
						<span>服饰鞋包榜</span>
						<img src="/image/1 (3).webp" alt="" />
					</li>
					<li class="hot6">
						<span>个护清洁榜</span>
						<img src="/image/1 (4).webp" alt="" />
					</li>
					<li class="hot7">
						<span>数码家电榜</span>
						<img src="/image/1 (5).webp" alt="" />
					</li>
					<li class="hot8">
						<span>母婴亲子榜</span>
						<img src="/image/1 (6).webp" alt="" />
					</li>
					<li class="hot9">
						<span>严选全球榜</span>
						<img src="/image/1 (7).webp" alt="" />
					</li>
					<li class="hot10">
						<span>运动旅行榜</span>
						<img src="/image/1 (8).webp" alt="" />
					</li>
				</ul>
			</div>
			<div class="timeToBuy">
				<nav>
					<van-count-down :time="time">
						<template v-slot="timeData">
							<a>限时购</a>
							<span class="block">{{ timeData.hours }}</span>
							<span class="colon">:</span>
							<span class="block">{{ timeData.minutes }}</span>
							<span class="colon">:</span>
							<span class="block">{{ timeData.seconds }}</span>
						</template>
					</van-count-down>
					<p></p>
					<a href="">更多<i></i></a>
				</nav>
				<div class="buy">
					<div class="buy1">
						<img src="/image/ia_200000039.webp" alt="" />
						<span class="new">¥79</span>
						<span class="old">¥116</span>
					</div>
					<div class="buy2">
						<img src="/image/ia_200000040.webp" alt="" />
						<span class="new">¥54.5</span>
						<span class="old">¥69</span>
					</div>
					<div class="buy3">
						<img src="/image/ia_200000041.webp" alt="" />
						<span class="new">¥129</span>
						<span class="old">¥199</span>
					</div>
					<div class="buy4">
						<img src="/image/ia_200000042.webp" alt="" />
						<span class="new">¥199</span>
						<span class="old">¥249</span>
					</div>
					<div class="buy5">
						<img src="/image/ia_200000043.webp" alt="" />
						<span class="new">¥999</span>
						<span class="old">¥1499</span>
					</div>
					<div class="buy6">
						<img src="/image/ia_200000044.webp" alt="" />
						<span class="new">¥49.9</span>
						<span class="old">¥79.9</span>
					</div>
				</div>
			</div>
			<div class="newShop">
				<nav>
					<p>新品首发</p>
					<a href=""><i></i></a>
				</nav>
				<div class="shop">
					<div class="newShop1">
						<img src="/image/ia_100000046.webp" alt="" />
						<p>手撕魔方酵母面包</p>
						<span></span>
					</div>
					<div class="newShop2">
						<img src="/image/ia_100000049.webp" alt="" />
						<p>拒绝慢性烂脸，化妆刷除菌收纳筒</p>
						<span></span>
					</div>
					<div class="newShop3">
						<img src="/image/ia_100000047.webp" alt="" />
						<p>夏日桌面清凉伴侣，超静音桌面小风扇</p>
						<span></span>
					</div>
					<div class="newShop4">
						<img src="/image/111.webp" alt="" />
						<p>真丝般睡感，儿童60支全棉贡缎三件套</p>
						<span></span>
					</div>
					<div class="newShop5">
						<img src="/image/ia_100000048.webp" alt="" />
						<p>轻盈柔软如睡云端 天然乳胶透气夏凉被</p>
						<span></span>
					</div>
					<div class="newShop6">
						<img src="/image/ia_100000045.webp" alt="" />
						<p>仲夏夜之梦，西班牙莫斯卡托甜白起泡酒</p>
						<span></span>
					</div>
				</div>
			</div>
			<a @click="backTop" id="backTop"
				><img src="/image/ia_100000080.webp" alt=""
			/></a>
			<footer>
				<button class="btn1">下载APP</button>
				<button class="btn2">电脑版</button>
				<p>网易公司版权所有 © 1997-<br />食品经营许可证：JY13301080111719</p>
			</footer>
			<div class="null"></div>
		</div>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.home {
		width: 100%;
		height: 100%;
		position: relative;
		.inner {
			height: 100%;
			width: 100%;
			.none {
				height: 18%;
			}
			.downloadApp {
				position: absolute;
				top: 0;
				width: 100%;
				height: 50px;
				img {
					width: 100%;
					height: 50px;
				}
			}
			header {
				position: fixed;
				background-color: white;
				top: 7%;
				z-index: 9;

				.top {
					width: 95%;
					height: 30px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 7px 10px;
					position: relative;
					.undefault {
						position: absolute;
						background-color: white;
						padding: 0;
						top: 40px;
						left: 0;
						z-index: 2;
						width: 100%;
						height: 180px;
						font-size: 14px;
						.all {
							line-height: 40px;
							text-align: left;
							padding-left: 20px;
							height: 40px;
							background-color: white;
							padding: 0 0 0 20px;
						}
						.mask {
							height: 500px;
							width: 100%;
							padding: 0;
							background-color: rgba(0, 0, 0, 0.6);
						}
						.content {
							background-color: white;
							display: flex;
							flex-wrap: wrap;
							justify-content: start;
							height: 180px;
							li {
								width: 75px;
								height: 25px;
								background-color: #eee;
								line-height: 25px;
								border: 1px solid #ccc;
								border-radius: 3px;
								margin: 0 0 15px 14px;
							}
						}
					}
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
					.btn {
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

					.tabs > div {
						height: 30px;
					}
					.tabs {
						margin-right: 50px;
						height: 30px;
						position: relative;
						van-tabs__nav {
							padding-bottom: 0;
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
				}
			}
			.my-swipe {
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
					@media screen and (min-width: 320px) and (max-width: 330px) {
						& {
							margin-right: 0px;
						}
					}
				}
				i {
					margin-left: 10px;
					display: inline-block;
					width: 18px;
					height: 18px;
				}
				.i1 {
					background: url(/image/ia_100000059.png) 0 0 no-repeat;
					background-size: cover;
				}
				.i2 {
					background: url(/image/ia_100000061.png) 0 0 no-repeat;
					background-size: cover;
				}
				.i3 {
					background: url(/image/ia_100000060.png) 0 0 no-repeat;
					background-size: cover;
				}
			}
			.any {
				width: 100%;
				height: 190px;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				li {
					width: 60px;
					margin: 5px 5px;

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
			.gift {
				// overflow: hidden;
				padding: 0 10px;
				div {
					float: left;
					width: 160px;
					padding: 15px 0 0 15px;
					background-color: #f9e9cf;
					// position: relative;
					p {
						text-align: left;
					}
				}
				.desc1 {
					margin-right: 2px;
					height: 215px;
				}
				.desc3,
				.desc2 {
					height: 100px;
				}
				.desc3 {
					margin-top: 2px;
				}
				.img1 {
					width: 130px;
					position: relative;
					top: 20px;
				}
				.img2,
				.img3 {
					width: 100px;
					height: 100px;
					position: relative;
					top: -30px;
					right: -30px;
				}
				nav {
					height: 45px;
					line-height: 45px;
					width: 100%;
					span {
						font-weight: normal;
						margin: 0 10px;
						&::before {
							content: '';
							display: inline-block;
							height: 20px;
							position: relative;
							left: -20px;
							top: 5px;
							border: 1px solid #000;
							-webkit-transform: rotate(90deg);
						}
						&::after {
							content: '';
							display: inline-block;
							height: 20px;
							position: relative;
							left: 20px;
							top: 5px;
							border: 1px solid #000;
							-webkit-transform: rotate(90deg);
						}
					}
				}
			}
			.hot {
				padding: 0 11px;
				nav {
					height: 50px;
					line-height: 50px;
					text-align: left;
					width: 100%;
				}

				.hot1,
				.hot2 {
					height: 100px;
					width: 173px;
					font-size: 14px;
					span {
						margin: 30px 0 0 20px;
						float: left;
					}
					img {
						height: 100px;
					}
				}
				li {
					background-color: #f5f5f5;
					float: left;
					margin: 0 3px 3px 0;
					width: 85px;
					height: 90px;
					font-size: 12px;
					img {
						height: 60px;
					}
				}
			}
			.timeToBuy {
				padding: 0 0 0 10px;
				nav {
					display: flex;
					width: 100%;
					height: 50px;
					justify-content: space-between;
					a {
						display: block;
						width: 70px;
						height: 50px;
						line-height: 50px;
					}

					.van-count-down {
						display: flex;
						height: 50px;

						.block {
							margin-top: 16px;
							display: block;
							width: 18px;
							height: 18px;
							background-color: black;
							color: white;
						}
						.colon {
							margin: 16px 3px;
						}
					}
				}
				.buy {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					div {
						width: 108px;
						height: 150px;
						margin-right: 10px;
						float: left;
						img {
							height: 108px;
							background-color: #eee;
						}
						span {
							font-size: 12px;
						}
						.new {
							color: red;
							margin-right: 5px;
						}
						.old {
							text-decoration: line-through;
							color: #aaa;
						}
					}
				}
			}
			.newShop {
				padding: 0 10px 20px 10px;
				nav {
					text-align: left;
					height: 50px;
					line-height: 50px;
					padding-left: 10px;
				}
				.shop {
					font-size: 14px;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					div {
						width: 108px;
						p {
							display: inline-block;
							text-overflow: ellipsis;
						}
						img {
							background-color: #eee;
							height: 108px;
						}
					}
				}
			}
			footer {
				background-color: #333;
				padding: 36px 12px 18px;
				font-size: 12px;
				button {
					background-color: #333;
					border: 1px solid #ccc;
					color: white;
					width: 95px;
					height: 34px;
					margin-bottom: 20px;
				}
				.btn1 {
					margin-right: 10px;
				}
				.btn2 {
					margin-left: 10px;
				}
				p {
					color: #aaa;
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
			.null {
				height: 50px;
			}
		}
	}
</style>
