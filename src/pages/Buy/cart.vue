<script>
export default {
  name: 'cart',
  data () {
    return {
      
    }
  },
  props:{
    toBuy:String,
    appBanHeight:Number,
    picUrl:String,
    appBanWidth:Number,
    avatar:String,
    buyNow:Object,
    title:String,
    nickname:String,
    readCount:Number
  }
}
</script>

<template>
  <div class="cart">
    <img class="picUrl" :src="picUrl" v-if="appBanHeight"  alt="">
    <div class="title">{{title}}</div>
    <div class="avatar" v-if="avatar">
      <img :src="avatar" alt="">
      <span class="nickname">{{nickname}}</span>
      <span class="look"><i class="iconfont icon-yanjing"></i>{{readCount>=10000?readCount.toString().slice(0,2)+'k':readCount}}</span>
    </div>
      <div class="van-hairline--top"></div>
    <div class="toBuy" v-if="buyNow">
      <span class="intro" >{{buyNow.itemName}}</span>
      <span class="buyNow">去购买<i class="iconfont icon-weibiaoti34"></i></span>
    </div>
  </div>
</template>

<style lang='less' rel='stylesheet/less' scope>

  .cart{
    margin-top: 10px;
    background-color: white;
    width: 173px;
    margin: 10px 7px;
    border-radius:10px;
    
    // vertical-align: top;
    .title{
      padding: 10px 8px 0 8px;
      font-size: 14px;
      text-align: left;
    }
    .picUrl{
      width: 173px;
      border-radius: 10px 10px 0 0;
    }
    .avatar{
      padding: 10px;
      font-size: 10px;
      height: 22px;
      span{
        display: inline-block;
        line-height: 22px;
      }
      .look{
        font-size: 6px;
        float: right;
      }
      .nickname{
        float: left;
        margin-left: 5px;
        width: 50%;
        height: 22px;
        white-space: nowrap;
        text-align: left;
      }
      img{
        float: left;
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
    .toBuy{
      padding: 10px;
      font-size: 10px;
      display: flex;
      justify-content: space-between;
      i{
        font-size: 8px;
      }
      .intro{
        white-space: nowrap;
        overflow: hidden;
        height: 15px;
        width: 103px;
        text-overflow: ellipsis;
      }
      .buyNow{
        color: red;
      }
    }
  }
</style>
