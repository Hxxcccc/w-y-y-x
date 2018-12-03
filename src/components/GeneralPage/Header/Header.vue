<template>
  <div class="header">
  <div class="home">
    <i class="iconfont icon-shouye1" style="font-size: 20px;"></i>
  </div>
  <div class="find" style="margin-left: 100px">
    <span style="font-size: 20px; font-weight: bold; color: #b4282d">发现</span>
    <span style="font-size: 14px; color: #7F7F7F; margin-left: 10px">甄选家</span>
  </div>
  <div class="sousuo" style="padding-left: 40px">
    <i class="iconfont icon-sousuo" style="font-size: 22px; color: #666"></i>
  </div>
  <div class="shop" style="margin-right: 15px">
    <i class="iconfont icon-gouwuche" style="font-size: 22px; color: #666" @click="$router.push('/shopping')"></i>
  </div>
</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .header
    border-bottom 1px solid #e4e4e4
    width 100%
    height 45px
    background #fafafa
    display flex
    justify-content space-between
    align-items center
    .home
      margin-left 10px
</style>
