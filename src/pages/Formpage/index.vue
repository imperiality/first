<script>
import {baseSearchInfo} from '../../api'
	export default {
		name: 'Formpage',
		data() {
			return {
				show: true,
			};
		},
		/* 
    
    */
		methods: {
			toSearch() {
				
			},
			cancel () {
				this.$router.push({name:'home'})
			},
			async	baseInfo(){
				const result = await baseSearchInfo()
				return result
			}
		},
		mounted() {
			
			// console.log(this.baseInfo())
		},
	};
</script>

<template>
	<div class="formpage">
		<div class="downloadApp" id="downloadApp">
			<img src="/image/3137220cc522a8fbb0b7520637a61469.png" />
		</div>
		<div class="search">
			<div @keyup.enter="toSearch" class="search">
				<i class="iconfont icon-search"></i>
				<input type="text" placeholder="搜索商品, 共28263款好物" />
			</div>
			<button @click="cancel">取消</button>
		</div>
		<div class="hotSearch">
			<p>热门搜索</p>
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
.formpage{
	background-color: #ededed;
}
	.downloadApp {
		img {
			width: 100%;
		}
	}
	.search{
		width: 100%;
		height: 50px;
		display: flex;
		padding: 0 10px;
		justify-content: space-around;
		align-items: center;
		background-color: white;
		div {
			width: 80%;
			height: 20px;
			padding: 6px;
			background-color: #ededed;
			border-radius: 5px;
			// display: flex;
			input {
				width: 80%;
				border: none;
				background-color: #ededed;
			}
		}
		button{
			background-color: white;
			border: none;
			height: 40px;
			width: 40px;
			margin-right: 10px;
		}
	}
</style>
