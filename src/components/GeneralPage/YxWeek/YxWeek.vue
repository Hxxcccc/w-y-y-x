<template>
  <div class="moveTopic">
    <div class="header">
      <span>更多精彩</span>
    </div>
    <div class="item info" v-for="(info, index) in yxWeek" :key="index">
      <div class="images">
        <img :src="info.itemPicUrl" alt="">
      </div>
      <div class="desc">
        <span>{{info.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['yxWeek'])
    },

    mounted () {
      this.$store.dispatch('getYxWeek')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .moveTopic
    height 2340px
    background #F4F4F4
    .header
      height 80px
      /*background #B4282D*/
      text-align center
      line-height 80px
      span
        font-size 14px
    .item
      width 350px
      height 260px
      background #fff
      margin-left 12px
      margin-bottom 16px
      img
        width 330px
        height 200px
        margin-top 10px
        margin-left 10px
    .desc
      width 250px
      height 20px
      margin-left 14px
      margin-top 10px
      span
        font-size 14px
        color #333
</style>
