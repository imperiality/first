<script>
export default {
  name: 'Home',
  data () {
    return {
      undefault:false
    }
  },
  methods: {
    hiddenApp(){
        document.getElementsByClassName('home')[0].addEventListener('touchmove',function  (e) {
          e.stopPropagation()
          e.preventDefault();
          const downloadApp = document.getElementsByClassName('downloadApp')[0]
          
            downloadApp.style.display = 'none'
            
          
      },{passive:false});

  
    }
  },
}
</script>

<template>
  <div class="home" ref="home" @touchstart="hiddenApp">
    <div class="downloadApp" ref="downloadapp">
      <img src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&amp;imageView&amp;thumbnail=750x0&amp;quality=75">
    </div>
    <header>
      <div class="top">
        <p>网易严选</p>
        <input type="text" placeholder="搜索商品,共27639款好物"/>
        <button class="btn">登录</button>
      </div>
      <div class="bottom">
        <ul class="default">
          <li class="nav1">推荐</li>
          <li class="nav1">居家生活</li>
          <li class="nav1">服饰鞋包</li>
          <li class="nav1">美食酒水</li>
          <li class="nav1">个护清洁</li>
          <li class="nav1">母婴亲子</li>
          <li class="nav1">运动旅行</li>
          <li class="nav1">数码家电</li>
          <li class="nav1">严选全球</li>
        </ul>
        <ul class="undefault" v-if="undefault">
          <li class="nav1">推荐</li>
          <li class="nav1">居家生活</li>
          <li class="nav1">服饰鞋包</li>
          <li class="nav1">美食酒水</li>
          <li class="nav1">个护清洁</li>
          <li class="nav1">母婴亲子</li>
          <li class="nav1">运动旅行</li>
          <li class="nav1">数码家电</li>
          <li class="nav1">严选全球</li>
        </ul>
      </div>
    </header>
  </div>
</template>

<style lang='less' rel='stylesheet/less' scope>
.home{
  width: 100%;
  height: 100%;
  .downloadApp{
    img{
      width: 100%;
    }
  }
  header{
    .top{
      input{
        background-color: #ededed;
        border-radius: 10px;
        border: none;
        font-size: 16px;
        color:#666666;
      }
    }
  }
}
</style>
