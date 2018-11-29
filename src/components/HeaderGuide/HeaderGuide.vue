<template>
  <div class="home">
    <div class="header">
      <div class="logo"></div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共19724款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home
    width 100%
    height 100%
    .header
      width 100%
      /*background red*/
      position relative
      display flex
      .logo
        width 70px
        height 20px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
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
</style>
