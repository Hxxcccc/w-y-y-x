<template>
  <div>
    <div class="division"></div>
    <div class="xinpin">
      <div class="ping">
        <span class="fa">人气推荐.好物精选</span>
        <div class="examine">
          <span>查看全部</span>
        </div>
      </div>
    </div>
    <div class="swiper-container" id="swiper4">
      <div class="swiper-wrapper">
        <div class="swiper-slide info" v-for="(info,index) in popularItemList" :key="index">
          <div class="img">
            <img :src="info.listPicUrl" alt="">
          </div>
          <div class="text">
            <span class="xxx">{{info.name}}</span>
          </div>
          <div class="grayText">
            <span>{{info.simpleDesc}}</span>
          </div>
          <div class="price">
            <span>￥{{info.retailPrice}}</span>
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
      ...mapState(['popularItemList']),
    },

    mounted () {
      this.$store.dispatch('getPopularItemList')
    },

    watch:{
      popularItemList(){
        this.$nextTick(() => {
          new Swiper('#swiper4', {
            slidesPerView :1.2,
            spaceBetween : -180,
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
    height 120px
    background #FEF7E3
    .ping
      position relative
      .fa
        font-size 18px
        color #B6A374
        position absolute
        top 34px
        left 115px
      .examine
        position absolute
        top 58px
        left 135px
        width 110px
        height 30px
        background #f4e9cb
        font-size 14px
        color #c3b28c
        text-align center
        line-height 30px
  .swiper-container
    width 100%
    height 220px
    overflow hidden
    .swiper-wrapper
      position relative
      display flex
      .swiper-slide
        height 100%
        width 140px
        margin-left 10px
        margin-right 25px
        div
          margin-top 5px
          font-size 14px
        .img
          background #f4f4f4
          width 150px
          img
            height 150px
        .text
          width 140px
          overflow:hidden;
          white-space:nowrap;/*限制不换行*/
          text-overflow:ellipsis;
          span
            width:100px;
        .grayText
          overflow:hidden;
          white-space:nowrap;/*限制不换行*/
          text-overflow:ellipsis;
          font-size: 10px;
          margin-top 8px
          margin-bottom  8px
          span
            color #7f7f7f
        .price
          font-size 14px
          color #b4282d
</style>
