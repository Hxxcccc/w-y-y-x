<template>
  <div>
    <div class="BannerFooter">
      <div class="ziyin">
        <i class="iconfont icon-duihao"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="wuyou">
        <i class="iconfont icon-duihao"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="tuikuan">
        <i class="iconfont icon-duihao"></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <div class="division"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .BannerFooter
    width 100%
    height 38px
    display flex
    justify-content space-around
    align-items center
    line-height 38px
    .iconfont
      color #B4282D
      float left
    span
      color #B4282D
      float left
      margin-left 6px
  .division
    width 100%
    height 10px
    background #F4F4F4
</style>
