<script>
	export default {
		name: 'section6',
		data() {
			return {
				cateLists1: [],
				cateLists2: [],
				cateLists3: [],
				cateLists4: [],
				cateLists5: [],
				cateLists6: [],
				cateLists7: [],
				cateLists8: [],
			};
		},
		props: {
      cateLists: {},
      section:Number
		},
    watch: {
      cateLists:() => {
        console.log(this.cateLists)
      },
      deep:true
    },
		methods: {
			slice() {
        console.log(this.cateLists.data)
				this.cateLists1 = this.cateLists[this.section].subCateList.slice(0, 3);
				this.cateLists2 = this.cateLists[this.section].subCateList.slice(3, 6);
				this.cateLists3 = this.cateLists[this.section].subCateList.slice(6, 10);
				this.cateLists4 = this.cateLists[this.section].subCateList.slice(10, 13);
				this.cateLists5 = this.cateLists[this.section].subCateList.slice(14, 18);
				this.cateLists6 = this.cateLists[this.section].subCateList.slice(18, 21);
				this.cateLists7 = this.cateLists[this.section].subCateList.slice(21, 26);
        this.cateLists8 = this.cateLists[this.section].subCateList.slice(26, 31);
			},
		},
		mounted() {
			this.slice()	
		},
	};
</script>

<template>
	<section class="section1">
		<img src="/image/giveyou.webp" alt="" />
		<div class="title">好物精选</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists1">
			<li class="" v-for="(item, index) in cateLists1" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div class="title">面部护理</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists2">
			<li class="" v-for="(item, index) in cateLists2" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div class="title">个人护理</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists3">
			<li class="" v-for="(item, index) in cateLists3" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div class="title">彩妆香水</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists4">
			<li class="" v-for="(item, index) in cateLists4" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div class="title">个护电器</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists5">
			<li class="" v-for="(item, index) in cateLists5" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div class="title">纸品清洁</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists6">
			<li class="" v-for="(item, index) in cateLists6" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div class="title">家清卫浴</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists7">
			<li class="" v-for="(item, index) in cateLists7" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div class="title">成人用品</div>
		<div class="van-hairline--bottom"></div>
		<ul v-if="cateLists8">
			<li class="" v-for="(item, index) in cateLists8" :key="index">
				<img :src="item.wapBannerUrl" alt="" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
	</section>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.section1 {
		img {
			width: 265px;
		}
		ul {
			padding: 20px;
			display: flex;
			flex-wrap: wrap;
			font-size: 12px;
			width: 60%;
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
		.title {
			margin: 20px 0 5px 10px;
			text-align: left;
			padding-left: 20px 0 10px 10px;
			font-weight: bold;
		}
	}
</style>
