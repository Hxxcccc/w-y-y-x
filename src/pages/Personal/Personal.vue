<template>
  <div class="wrap">
    <div class="header">
        <div class="home"  @click="$router.push('/msite')">
          <i class="iconfont icon-shouye1"></i>
        </div>
        <div class="logo"></div>
        <div class="sousuo">
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="shop">
          <i class="iconfont icon-gouwuche" @click="$router.push('/shopping')"></i>
        </div>
    </div>
    <div class="section">
      <div class="cont">
        <div class="logoWrap">
          <img src="../../assets/images/logo.png">
        </div>
        <div class="phone">
          <i class="iconfont icon-shouji"></i>
          <p>手机号码登录</p>
        </div>
        <div class="email">
          <i class="iconfont icon-youxiang"></i>
          <p>邮箱账号登录</p>
        </div>
        <div class="btn">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-iconfontyoujiantou"></i>
        </div>
      </div>
      <div class="footerGuide">
        <div class="weixin">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
          <i class="iconfont icon-shuxian1" style="margin-left: 10px"></i>
        </div>
        <div class="QQ">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
          <i class="iconfont icon-shuxian1" style="margin-left: 10px" ></i>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weiboFlashnews"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'

  .header
    bottom-border-1px(#e4e4e4)
    width 100%
    height 45px
    display flex
    justify-content space-around
    text-align center
    line-height 45px
    position relative
    background #fafafa
    .home
      position absolute
      top 0
      left 10px
    .iconfont
      font-size 25px
      color #666
    .logo
      width 80px
      height 25px
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      background-repeat no-repeat
      background-size 80px
      position absolute
      top 10px
      left 145px
    .sousuo
      position absolute
      top 0
      right 60px
    .shop
      position absolute
      top 0
      right 15px
  .section
    height 622px
    width 100%
    background #F2F5F4
    position relative
    .cont
      width 100%
      height 351px
      .logoWrap
        width 100%
        height 205px
        text-align: center
        img
          width 134px
          height 45px
          margin 0 auto
          margin-top 80px
      .phone
        width 335px
        height 47px
        background-color #b4282d
        border 1px solid #b4282d
        border-radius 2px
        display flex
        margin-left 20px
        margin-bottom 15px
        justify-content center
        align-items center
        .iconfont
          font-size 22px
          color #eee
          margin-right 8px
        p
          font-size 14px
          color #fff
      .email
        display flex
        width 335px
        height 47px
        border 1px solid #b4282d
        margin-left 20px
        border-radius 2px
        justify-content center
        align-items center
        margin-bottom 15px
        .iconfont
          font-size 30px
          color #b4282d
          margin-right 8px
        p
          font-size 14px
          color #b4282d
      .btn
        width 335px
        height 20px
        display flex
        justify-content center
        align-items  center
        span
          font-size 14px
          color #333
          margin-left 40px
        .iconfont
          font-size 14px
          margin-top 3px
    .footerGuide
      width 335px
      height 20px
      position absolute
      left 20px
      bottom 40px
      display flex
      justify-content center
      align-items center
      .weixin
        .iconfont
          color #7F7F7F
          font-size 20px
          float left
        span
          color #7F7F7F
          font-size 14px
          float left
          line-height 20px
      .QQ
        margin 0 20px
        .iconfont
          color #7F7F7F
          font-size 20px
          float left
        span
          color #7F7F7F
          font-size 14px
          float left
          line-height 20px
      .weibo
        .iconfont
          color #7F7F7F
          font-size 20px
          float left
        span
          color #7F7F7F
          font-size 14px
          float left
          line-height 20px
</style>
