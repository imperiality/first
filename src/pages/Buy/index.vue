<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
	export default {
		name: 'Person',
		data() {
			return {
        navData:{},
         list: [],
      loading: false,
      finished: false,
      };
    },
    props:{
      currentPage:String
    },
    mounted() {
      console.log(this.currentPage,)
      this.navWap()
    },
    methods: {
      tohome(){
        this.$parent.currentPage='home'
      },
      async navWap () {
        const result = await this.$API.navWap()
        this.navData = result.data
      },
      onLoad(){

      }
    },
	};
</script>

<template>
	<div class="person">
		<header>
			<router-link to="/" @click.native="tohome" class="iconfont icon-shouye"></router-link>
			<p>值得买</p>
      <router-link to='/search' class="iconfont icon-search"></router-link>
			<router-link to="/cart" class="iconfont icon-gouwuchekong"></router-link>
		</header>
    <img src="/image/Buy/ia_100000001.png" alt="" class="bg">
    <img src="/image/Buy/ia_100000000.png" alt="">
    <div class="text">严选好物 用心生活</div>
    <div class="nav">
      <ul>
        <li class="li"></li>
      </ul>
    </div>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
	</div>
</template>

<style lang="less" rel="stylesheet/less" scope>
	.person {
		width: 100%;
    height: 100%;
    header{
      display: flex;
      height: 50px;
      p{
        line-height: 50px;
        width: 50%;
        margin-left: 40px;
      }
      a{
        font-size: 40px;
        display: block;
        width: 50px;
        height: 50px;
      }
    }
    .bg{
      width: 100%;
    }
	}
</style>
