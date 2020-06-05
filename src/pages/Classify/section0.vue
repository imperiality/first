<script>
	export default {
		name: 'section0',
		data() {
			return {
        cateLists: {},
        section:Number
			};
		},
		
		methods: {
			async reqData() {
				const result = await this.$API.cateLists();
				if (result.code === 200) {
					this.cateLists = result.data[0].categoryList
				}
			},
		},
		
		mounted() {
      this.reqData()
		},
	};
</script>

<template>
	<section class="section0">
		<img src="/image/giveyou.webp" alt="" class="img1" />
		<ul v-if="cateLists">
			<li class="" v-for="(item, index) in cateLists" :key="index">
				<img :src="item.bannerUrl"  alt="" />
				<p>{{ item.frontName }}</p>
			</li>
		</ul>
	</section>
</template>

<style lang="less" rel="stylesheet/less" scope>
	
</style>
