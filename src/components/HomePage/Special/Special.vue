<template>
  <div>
    <div class="division"></div>
    <div class="xinpin">
      <div class="ping">
        <span class="yan">严 选 限 时 购</span>
        <span class="examine">下一场 22:00 开始</span>
        <div class="lobster"><img src="../../../../static/images/33148f20c32525c6dcb9f33577957e77.png" alt="" style="width: 150px"></div>
      </div>
    </div>
    <div class="division"></div>
    <div class="weal">
      <img src="../../../../static/images/move.a3ea2d1.jpg" alt="" style="height: 150px">
    </div>
    <div class="division"></div>
    <div class="special">
      <div class="header">
        <span>专题精选</span>
      </div>
      <div class="swiper-container" id="swiper1">
        <div class="swiper-wrapper ">
          <div class="swiper-slide info" v-for="(info, index) in topicList" :key="index">
            <div class="tu">
              <img :src="info.itemPicUrl" alt="">
            </div>
            <div class="mack">
              <span class="mark">{{info.title}}</span>
              <span class="moak">{{info.priceInfo}}元起</span>
            </div>
            <div class="hock">
              <span class="lock">{{info.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {

    computed:{
      ...mapState(['topicList']),
    },

    mounted(){
      this.$store.dispatch('getTopicList')
    },

    watch:{
      topicList(){
        this.$nextTick(() => {
          new Swiper('#swiper1', {
            slidesPerView : 1.2,
            spaceBetween : -30,
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'

  .division
    width 100%
    height 10px
    background #F4F4F4
  .xinpin
    width 100%
    height 140px
    .ping
      position relative
      .yan
        font-size 18px
        color #33333
        position absolute
        top 35px
        left 30px
      .examine
        position absolute
        top 90px
        left 28px
        width 100px
        height 24px
        font-size 10px
        color #333
        text-align center
        line-height 30px
      .lobster
        width 150px
        height 150px
        position absolute
        top 6px
        right 20px
  .weal
    width 100%
    height 150px
  .special
    width 100%
    height 260px
    .header
      width 100%
      height 50px
      background #fff
      position relative
      span
        font-size 16px
        position absolute
        top 20px
        left 160px
    .swiper-container
      /*overflow hidden*/
      .info
        height 210px
        margin-left 10px
        .tu
          img
            width 280px
            border-radius 5px
        .mack
          margin-top 10px
          position relative
          .mark
            font-size 14px
          .moak
            font-size 14px
            color #b4282d
            position absolute
            top 0
            right 40px
        .hock
          margin-top 6px
          .lock
            color #7f7f7f

</style>
