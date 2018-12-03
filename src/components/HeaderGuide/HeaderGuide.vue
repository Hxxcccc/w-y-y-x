<template>
     <div class="title">
       <div class="header">
         <div class="top">
           <div class="logo"></div>
           <div class="search">
             <i class="iconfont icon-sousuo"></i>
             <span>搜索商品，共19724款好物</span>
           </div>
           <div class="loginBtn" @click="$router.push('/personal')">登录</div>
         </div>
         <div class="bottom">
           <ul class="list">
             <li class="frist" style="color: deeppink">
               推荐
               <div class="line"></div>
             </li>
             <li>居家</li>
             <li>鞋包配饰</li>
             <li>服装</li>
             <li>电器</li>
             <li>洗护</li>
             <li>饮食</li>
             <li>餐饮</li>
             <li>婴童</li>
             <li>特色区</li>
           </ul>
         </div>
       </div>
     </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted () {
      new BScroll('.bottom',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .title
    position fixed
    top 0
    z-index 100
    overflow hidden
    .header
      position relative
      top 0
      z-index 100
      background #fff
      box-sizing border-box
      padding 0
      width 100%
      .top
        display flex
        .logo
          width 70px
          height 20px
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
          background-repeat no-repeat
          background-size 70px
          margin 12px 15px
        .search
          height 28px
          width 220px
          background #eee
          margin 8px -6px
          text-align center
          line-height 28px
          border-radius 4px
          .iconfont
            font-size 13px
          span
            font-size 14px
            color #666
        .loginBtn
          height 18px
          width 35px
          text-align center
          line-height 18px
          font-size: 10px;
          border 1px solid #b4282d
          border-radius 3px
          color #b4282d
          margin 13px 15px
      .bottom
        background #fff
        width 375px
        margin-top 6px
        .list
          width 700px
          overflow hidden
          display flex
          li
            width 70px
            font-size 14px
            text-align: center
            .line
              margin-top 4px
              width 60%
              height 2px
              background red
              transform translateX(30%)
</style>
