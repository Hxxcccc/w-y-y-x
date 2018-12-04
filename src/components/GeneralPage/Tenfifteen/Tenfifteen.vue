<template>
  <div>
    <div class="topicShow">
      <div class="header">
        <span>十点一刻</span>
      </div>
      <div class="swiper-container" id="swiper7">
        <div class="swiper-wrapper">
          <div class="swiper-slide info" v-for="(info, index) in tenfifteen" :key="index">
            <div class="lineTitle">
              <span class="inner">—今日话题—</span>
            </div>
            <div class="tsTitle">
              <span class="bz">{{info.title}}</span>
            </div>
            <div class="desc">
              <span class="why">{{info.desc}}</span>
            </div>
            <div class="joinInfo">
              <span class="topic">20人参与话题</span>
            </div>
          </div>
        </div>
    </div>
    <div class="division"></div>

  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['tenfifteen']),
    },

    mounted () {
      this.$store.dispatch('getTenfifteen')
    },

    watch:{
      tenfifteen(){
        this.$nextTick(() => {
          new Swiper('#swiper7', {
            slidesPerView: 1.2,
            spaceBetween: 10,
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .topicShow
    height 265px
    .header
      height 65px
      text-align center
      line-height 65px
      span
        font-size 14px
    .swiper-container
      height 200px
      .swiper-slide
        width 300px
        height 166px
        border 5px solid #E6E6E6
        background #FAFAFA
        margin-left 10px
        position relative
        .lineTitle
          position absolute
          top 15px
          left 115px
          .inner
            color #7f7f7f
        .tsTitle
          position absolute
          left 50%
          top 40%
          transform translate(-50%,-50%)
          .bz
            font-size 12px
            font-weight bold
        .desc
          position absolute
          left 50%
          top 60%
          transform translate(-50%,-50%)
          .why
            font-size 16px
        .joinInfo
          position absolute
          bottom 25px
          left 105px
  .division
    width 100%
    height 10px
    background #F4F4F4
</style>
