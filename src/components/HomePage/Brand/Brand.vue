<template>
  <div class="goodsSale">
    <div class="header">
      <span>品牌制造商直供</span>
      <i class="iconfont icon-yuanjiantou-copy"></i>
    </div>
    <ul class="zhigong">
      <li class="Nine" v-for="(li,index) in tagList" :key="index" v-if="index<4">
        <span>{{li.name}}</span>
        <p>{{li.floorPrice}}元起</p>
        <img :src="li.picUrl">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {

    computed:{
      ...mapState(['tagList']),
    },

    mounted () {
      this.$store.dispatch('getTagList')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .goodsSale
    width 100%
    height 294px
    .header
      width 100%
      height 60px
      display flex
      justify-content center
      align-items center
      span
        font-size 16px
        color #333
        margin-right 5px
      .iconfont
        font-size 18px
    .zhigong
      width 100%
      height 234px
      li
        width 175px
        height 112px
        background red
        float left
        margin-left 8px
        margin-bottom  3px
        background #f4f4f4
        position relative
        img
          width 175px
        span
          font-size 14px
          position absolute
          top 10px
          left 10px
        p
          font-size 14px
          position absolute
          top 30px
          left 10px
</style>
