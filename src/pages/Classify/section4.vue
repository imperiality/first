<script>
	export default {
		name: 'section4',
		data() {
			return {
        cateLists: [],
			};
		},

		methods: {
			async reqData() {
				const result = await this.$API.cateLists();
					this.cateLists = result.data[4].subCateList
					// this.title = result.data[4].title
					console.log(result);
			},
    },
   
    
		mounted() {
      console.log(this.cateLists)
		},
	};
</script>

<template>
	<section class="section1">
    <img src="/image/giveyou.webp" alt="">
		<ul >
			
			<li class="" v-for="(item, index) in cateLists" :key="index">
        <img :src="item.wapBannerUrl" alt="">
        <p>{{item.name}}</p>
      </li>
		</ul>
	</section>
</template>

<style lang="less" rel="stylesheet/less" scope>
.section1{
  img{
    width: 265px;
  }
  ul{
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    width: 60%;
    li{
    width: 80px;
      img{
        width: 77px;
        height: 77px;
      }
      p{
        text-align: center;
      }
    }
  }

}


</style>
