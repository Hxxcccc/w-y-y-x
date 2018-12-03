<template>
  <div>
    <div class="xinpin">
      <div class="ping">
        <span class="fa">新品首发</span>
        <div class="examine">
          <span>查看全部</span>
        </div>
      </div>
    </div>
    <div class="swiper-container" id="swiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide info" v-for="(info,index) in newItemNewUserList" :key="index">
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
      ...mapState(['newItemNewUserList']),
    },

    mounted () {
      this.$store.dispatch('getNewItemNewUserList')
    },

    watch:{
      newItemNewUserList(){
        this.$nextTick(() => {
          new Swiper('#swiper3', {
            slidesPerView :1.2,
            spaceBetween : -180,
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .xinpin
    width 100%
    height 120px
    background #F1F7FD
    .ping
      position relative
      .fa
        font-size 18px
        color #9db1c3
        position absolute
        top 25px
        left 155px
      .examine
        position absolute
        top 50px
        left 135px
        width 110px
        height 30px
        background #d8e5f1
        font-size 14px
        color #9db1c3
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
        width 150px
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
