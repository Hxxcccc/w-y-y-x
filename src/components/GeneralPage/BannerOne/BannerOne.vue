<template>
  <div class="swiper-container" id="swiper5">
    <div class="swiper-wrapper wrap">
      <div  class="swiper-slide slid" v-for="(item,index) in banner" :key="index">
        <a  href="javascript:;" class="a">
          <div  class="content">
            <div class="subTitle">---{{item.subTitle}}---</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
          <img :src="item.picUrl" class="img">
        </a>
      </div>
      <div  class="swiper-slide slid2" >
        <a  href="javascript:;" class="a">
          <div  class="content">
            <div class="subTitle">---严选推荐---</div>
            <div class="title">周年庆断货的好物榜</div>
            <div class="desc">周年庆没买到,这次不要错过咯</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['banner']),
    },

    mounted () {
      this.$store.dispatch('getBanner')
    },

    watch:{
      banner(){
        this.$nextTick(() => {
          new Swiper('#swiper5', {
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'

  #swiper5
    margin-top 56px
    .slid
      position relative
      left 25px
      margin-right 10px
      width 325px
      .a
        display block
        .content
          width 223px
          height 99px
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto
          transform translate(-50% -50%)
          background-color rgba(255,255,255,.9)
          text-align: center
          box-sizing border-box
          padding-top 20px
          .subTitle
            color #999
            margin-bottom 15px
          .title
            font-weight 600
            color #000
            font-size 16px
            margin-bottom 10px
          .desc
            font-weight 14px
        .img
          width 325px
          height 192.5px
          border-radius 5px
    .slid2
      position relative
      left 25px
      margin-right 10px
      width 325px
      height 192.5px
      border-radius 5px
      border 1px solid #eee
      .a
        display block
        .content
          width 223px
          height 99px
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto
          transform translate(-50% -50%)
          background-color rgba(255,255,255,.9)
          text-align: center
          box-sizing border-box
          padding-top 20px
          .subTitle
            color #999
            margin-bottom 15px
          .title
            font-weight 600
            color #000
            font-size 16px
            margin-bottom 10px
          .desc
            font-weight 14px
        .img
          width 325px
          height 192.5px
          border-radius 5px
</style>
