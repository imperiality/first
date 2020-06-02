<script>
	export default {
		name: 'Formpage',
		data() {
			return {
				show: true,
				searchInfo:{}
			};
		},
		props: {
			router:String,
			route:String,
		},
		methods: {
			toSearch() {},
			cancel() {
				const router = this.router;
				const route = this.route;
				console.log(this.$router);
				if (router && router == 'classify') {
					this.$parent.showFormpage = false;
				}
				if (route && route == 'home') {
					this.$parent.showFormpage = false;
				}
				console.log(route,router);
			},
			async baseInfo() {
				const result = await this.$API.baseSearchInfo();
				this.searchInfo = result;
				console.log(result);
			},
		},
		mounted() {
			this.baseInfo()
			if (this.route==='home') {
				document.getElementsByClassName('formpage')[0].style.paddingTop = '0'
			}
			console.log(document.getElementsByClassName('formpage')[0])
		},
	};
</script>

<template>
	<div class="formpage">
		<div class="downloadApp" id="downloadApp">
			<img src="/image/3137220cc522a8fbb0b7520637a61469.png" />
		</div>
		<div class="componentSearch">
			<div @keyup.enter="toSearch" class="searchTo">
				<i class="iconfont icon-search"></i>
				<input
					type="text"
					v-if="this.searchInfo.data"
					:placeholder="this.searchInfo.data.defaultKeyword.keyword"
				/>
			</div>
			<button @click="cancel">取消</button>
		</div>
		<div class="hotSearch">
			<p>热门搜索</p>
			<section v-if="searchInfo.data">
				<span
					:class="{ active: item.highlight === 1 }"
					v-for="(item, index) in searchInfo.data.hotKeywordVOList"
					:key="index"
					>{{ item.keyword }}</span
				>
			</section>
		</div>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.formpage {
		position: relative;
		background-color: #ededed;
		padding-top: 50px;
		.downloadApp {
			img {
				width: 100%;
				height: 50px;
			}
		}
		.componentSearch {
			width: 100%;
			height: 50px;
			display: flex;
			padding: 0 10px;
			justify-content: space-around;
			align-items: center;
			background-color: white;
			.searchTo {
				width: 80%;
				height: 20px;
				padding: 6px;
				background-color: #ededed;
				border-radius: 5px;
				input {
					width: 80%;
					border: none;
					background-color: #ededed;
				}
			}
			button {
				background-color: white;
				border: none;
				height: 40px;
				width: 40px;
				margin-right: 10px;
			}
		}
		.hotSearch {
			p {
				text-align: left;
				padding: 10px 0 10px 20px;
			}
			section {
				padding: 3px;
				display: flex;
				flex-wrap: wrap;
				font-size: 12px;
				span {
					border: 1px solid #ccc;
					border-radius: 3px;
					&.active {
						border: 1px solid #e11;
					}
					padding: 5px;
					margin: 10px;
				}
			}
			// position: absolute;
			// top: 150px;
			background-color: white;
		}
	}
</style>
