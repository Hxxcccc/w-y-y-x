<template>
  <div class="body">
    <div class="header">
      <span>购物车</span>
      <div class="get">
        <a href="javascript:;">领券</a>
      </div>
    </div>
    <div class="list">
      <div class="li"><div class="yuan"></div>30天无忧退货</div>
      <div class="li"><div class="yuan"></div>48小时快速退款</div>
      <div class="li"><div class="yuan"></div>满88元免邮费</div>
      <br>
    </div>
    <div class="main">
      <div class="bg">
        <div></div>
      </div>
    </div>
    <div class="login">
      <span>去添加点什么吧</span><br>
      <input type="submit" class="btn" value="登录">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .body
    background #f4f4f4
    height 616px
    .header
      width 100%
      height 44px
      text-align center
      background #fff
      span
        font-size 18px
        line-height 44px
      .get
        position absolute
        right 25px
        top 12px
        font-size 16px
    .list
      box-sizing border-box
      padding 0px 10px
      justify-content center
      .li
        float left
        margin-left 10px
        margin-right 20px
        margin-top 10px
        color #666
        .yuan
          display inline-block
          width 8px
          height 8px
          background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png)
          background-size 70%
          background-repeat no-repeat
    .main
      /*height 532px*/
      .bg
        width 100%
        height 120px
        /*background skyblue*/
        background-size 80%
        margin-top 60%
        &>div
          width 33%
          height 100%
          /*background pink*/
          transform translateX(100%)
          background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
          background-size 95%
          background-position-x 3px
    .login
      position absolute
      top 59%
      left 0
      width 100%
      height 120px
      /*background yellowgreen*/
      text-align: center
      color #999
      font-size 16px
      .btn
        display inline-block
        width 60%
        height 50px
        border-radius 4px
        background #b4282d
        color #fff
        margin-top 10px
</style>
