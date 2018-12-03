<template>
  <div class="copyright">
    <div class="App">
      <span>下载APP</span>
    </div>
    <div class="computer">
      <span>电脑版</span>
    </div>
    <div class="netcase">
      <span>网易公司版权所有 © 1997-2018</span>
    </div>
    <div class="licence">
      <span>食品经营许可证：JY13301080111719</span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .copyright
    width 100%
    height 180px
    background #414141
    position relative
    .App
      position absolute
      top 30px
      left 85px
      width 80px
      height 30px
      border 2px solid #5e5e5e
      text-align center
      line-height 30px
      span
        color #dfdfdf
        font-weight bold
    .computer
      position absolute
      top 30px
      right 85px
      width 80px
      height 30px
      border 2px solid #5e5e5e
      text-align center
      line-height 30px
      span
        color #dfdfdf
        font-weight bold
    .netcase
      position absolute
      top 80px
      left 96px
      width 180px
      height 15px
      span
        color #999
    .licence
      position absolute
      top 105px
      left 80px
      width 210px
      height 15px
      span
        color #999
</style>
