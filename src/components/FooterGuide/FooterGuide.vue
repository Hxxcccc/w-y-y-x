<template>
  <div class="footer">
    <div @click="goto('/msite')" :class="{on: $route.path==='/msite'}">
      <p>
        <i class="iconfont icon-shouye1"></i>
      </p>
      <span>首页</span>
    </div>
    <div @click="goto('/classify')" :class="{on: $route.path==='/classify'}">
      <p>
        <i class="iconfont icon-category"></i>
      </p>
      <span>分类</span>
    </div>
    <div  @click="goto('/recommend')" :class="{on: $route.path==='/recommend'}">
      <p>
        <i class="iconfont icon-shiwu"></i>
      </p>
      <span>识物</span>
    </div>
    <div @click="goto('/shopping')" :class="{on: $route.path==='/shopping'}">
      <p >
        <i class="iconfont icon-gouwuche"></i>
      </p>
      <span>购物车</span>
    </div>
    <div @click="goto('/personal')" :class="{on: $route.path==='/personal'}">
      <p >
        <i class="iconfont icon-geren"></i>
      </p>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";

  .footer
    border-top 1px solid #e4e4e4
    position fixed
    width 100%
    height  48px
    bottom 0
    display flex
    justify-content space-around
    align-items center
    background #fff
    z-index 10
    &>div
      margin-bottom 6px
      p
        text-align center
        i
          font-size 18px
          color #666
      span
        display block
        color #666
        text-align center
        font-size 10px
        margin-top 5px
    &>.on
      p
        i
          color #b4282d
      span
        color #b4282d
</style>
