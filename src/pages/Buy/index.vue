<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
	export default {
		name: 'Person',
		data() {
			return {
        navData:[],
        
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
        this.navData = result.data.navList
      },
      onLoad(){
         if (this.list.length >= 1) {
          this.finished = true;
        }
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
    <div class="bg">
      <img src="/image/Buy/ia_100000001.png" alt="" class="bg1">
      <img src="/image/Buy/ia_100000000.png" alt="" class="bg2">
      <span class="text">严选好物 用心生活</span>
    </div>
    <div class="nav">
      <ul v-if="navData.length>0">
        <li class="li" v-for="item in navData" :key="item.id">
          <img :src="item.picUrl" alt="">
          <p>{{item.mainTitle}}</p>
          <span>{{item.viceTitle}}</span>
        </li>
      </ul>
    </div>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in navData" :key="item.id" :title="item.mainTitle" />
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
        font-size: 30px;
        display: block;
        width: 50px;
        height: 50px;
        line-height: 50px;
      }
    }
    .bg{
      width: 100%;
      position: relative;
      .bg1{
        width: 100%;
      }
      .bg2{
        width: 65px;
        position: absolute;
        top: 20px;
        left: 10px;
      }
      .text{
        position: absolute;
        top: 30px;
        left: 75px;
        color: #fff;
      }
    }
    
	}
</style>
