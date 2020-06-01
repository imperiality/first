<script>
	import { Notify } from 'vant';
	import Vue from 'vue';
	import { Sidebar, SidebarItem } from 'vant';
	Vue.use(Sidebar);
	Vue.use(SidebarItem);

	import { cateNavDatas } from '../../api';
	import Section0 from './section0';
	import Section1 from './section1';
	import Section2 from './section2';
	import Section3 from './section3';
	import Section4 from './section4';
	import Section5 from './section5';
	import Section6 from './section6';
	import Section7 from './section7';
	import Section8 from './section8';
	import Section9 from './section9';
	import Section10 from './section10';
	import Section11 from './section11';
	export default {
		name: 'Person',
		data() {
			return {
				activeKey: 0,
				NavDatas: [],
				section: 0,
				cateLists: [],
			};
		},
		components: {
			Section0,
			Section1,
			Section2,
			Section3,
			Section4,
			Section5,
			Section6,
			Section7,
			Section8,
			Section9,
			Section10,
			Section11,
		},
		methods: {
			async cateNavDatas() {
				const result = await cateNavDatas();
				if (result.code === 200) {
					this.NavDatas = result.data.categoryL1List;
				}
				return result;
			},
			onChange(index) {
				this.section = index;
				Notify({ type: 'primary', message: index });
				console.log(typeof index);
			},
		},
		mounted() {
			this.cateNavDatas();

			console.log(typeof this.cateLists);
		},
	};
</script>

<template>
	<div class="Person">
		<div class="downloadApp" id="downloadApp">
			<img src="/image/3137220cc522a8fbb0b7520637a61469.png" />
		</div>
		<div class="search">
			<div @keyup.enter="toSearch" class="search">
				<i class="iconfont icon-search"></i>
				<input type="text" placeholder="搜索商品, 共28263款好物" />
			</div>
		</div>
		<div class="van-hairline--bottom"></div>
		<div class="box">
			<van-sidebar v-model="activeKey" @change="onChange" class="sideBar">
				<van-sidebar-item
					class="sideBarBox"
					:title="item.name"
					v-for="(item, index) in NavDatas"
					:key="index"
				/>
			</van-sidebar>
			<Section0
				class="bar0"
				v-if="this.section === 0"
				:cateLists="this.cateLists"
				>0</Section0
			>
			<Section1 class="bar1" v-if="this.section === 1"></Section1>
			<Section2 class="bar2" v-if="this.section === 2">2</Section2>
			<Section3 class="bar3" v-if="this.section === 3">3</Section3>
			<Section4 class="bar4" v-if="this.section === 4">4</Section4>
			<Section5 class="bar5" v-if="this.section === 5">5</Section5>
			<Section6 class="bar6" v-if="this.section === 6">6</Section6>
			<Section7 class="bar7" v-if="this.section === 7">7</Section7>
			<Section8 class="bar8" v-if="this.section === 8">8</Section8>
			<Section9 class="bar9" v-if="this.section === 9">9</Section9>
			<Section10 class="bar10" v-if="this.section === 10">10</Section10>
			<Section11 class="bar11" v-if="this.section === 11">11</Section11>
		</div>
		<div class="null"></div>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.Person {
		position: relative;
		.downloadApp {
			img {
				width: 100%;
			}
		}
		.search {
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: white;
			padding: 0;
			div {
				width: 90%;
				height: 20px;
				padding: 6px;
				background-color: #ededed;
				border-radius: 5px;
				i {
					margin-left: 80px;
				}
				input {
					width: 80%;
					border: none;
					background-color: #ededed;
					font-size: 14px;
				}
			}
		}
		.null {
			height: 50px;
		}
		.box {
			display: flex;
			.sideBar {
				margin: 0;
				width: 80px;
				.sideBarBox {
				// height: 60px;
				padding: 11px 10px;
					font-size: 12px;
				}
			}
			section {
				width: 79%;
				padding-top: 10px;
				ul {
					padding:0px 20px;
					display: flex;
					flex-wrap: wrap;
					font-size: 12px;
					width: 87%;
					li {
						width: 80px;
						img {
							width: 77px;
							height: 77px;
						}
						p {
							text-align: center;
						}
					}
				}
			}
		}
	}
</style>
