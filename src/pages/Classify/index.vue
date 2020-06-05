<script>
/* eslint-disable */

	import { Notify } from 'vant';
	import Vue from 'vue';
	import { Sidebar, SidebarItem } from 'vant';
	Vue.use(Sidebar);
	Vue.use(SidebarItem);

	import { cateNavDatas } from '../../api';
	import Section0 from './section0';
	import Section1 from './section1';
	import Section2 from './section2';

	import Formpage from '../Formpage';
	export default {
		name: 'Person',
		data() {
			return {
				activeKey: 0,
				NavDatas: [],
				section: 0,
				cateLists: {},
				showFormpage: false,
				searchInfo:{}
			};
		},
		components: {
			Formpage,
			Section0,
			Section1,
			Section2,
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
			},
			async reqData() {
				const result = await this.$API.cateLists();
				this.cateLists = result.data;
				// this.title = result.data[4].title
			},
			search() {
				this.showFormpage = true;
			},
			
		},
		mounted() {
			this.cateNavDatas();
			this.reqData();
			this.$bus.$on('search',(result) => {
					this.searchInfo= result
					console.log(this.searchInfo,result)
				})
			console.log(this.$bus.$on('search',(result) => {
					return result
				}))
			// console.log(this.cateLists);
		},
	};
</script>

<template>
	<div class="Person">
		<Formpage v-if="this.showFormpage" router="classify" />
		<div v-else>
			<div class="downloadApp" id="downloadApp">
				<img src="/image/3137220cc522a8fbb0b7520637a61469.png" />
			</div>
			<div class="searchBefore">
				<div @click="search" class="search">
					<i class="iconfont icon-search"></i>
					<input
						type="text"
						@keyup.enter="toSearch"
						placeholder="搜索商品, 共28263款好物"
					/>
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
				<Section0 class="bar0"
					v-if="this.section === 0"
					:cateLists="cateLists"
					:section="section"
					>0</Section0
				>
				<Section1
					v-if="item.categoryList && index === section" v-for="(item, index) in cateLists" :key="index" :cateLists="cateLists" :section="section"
				></Section1>
				<Section2 v-if="item.subCateList && section === index" v-for="(item, index) in cateLists" :key="index" :cateLists="cateLists" :section="section"/>
			</div>
			<div class="null"></div>
		</div>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.Person {
		position: relative;
		.downloadApp {
			position: fixed;
			top: 0px;
			img {
				width: 100%;
			}
		}
		.searchBefore {
			position: fixed;
			top: 50px;
			width: 100%;
			height: 50px;
			display: flex;
			// justify-content: space-around;
			// 
			align-items: center;
			background-color: white;
			padding: 0;
			div {
				width: 90%;
				margin: 0 auto;
				height: 20px;
				padding: 6px;
				// margin-left: 80px;
				background-color: #ededed;
				border-radius: 5px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				i {
					// margin-left: 80px;
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
			overflow: scroll;
			width: 100%;
			.sideBar {
				margin: 0;
				width: 80px;
				position: fixed;
				top: 100px;
				.sideBarBox {
					// height: 60px;
					padding: 11px 10px;
					font-size: 12px;
				}
			}
			section {
				margin: 100px 0 0 80px;
				width: 100%;
				overflow-x: hidden;
				img {
					width: 265px;
				}
				&.img1{
					margin-left: 10px;
				}
				ul {
					padding: 0px 0 20px 20px;
					display: flex;
					flex-wrap: wrap;
					font-size: 12px;
					width: 93%;
					
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
