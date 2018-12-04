<template>
  <div>
    <div class="swiper-container" id="swiper6">
      <div class="swiper-wrapper">
        <div class="swiper-slide info" v-for="(info, index) in column" :key="index">
          <div class="list">
            <div class="images">
              <div class="character">
                <span>{{info.articleCount}}</span>
              </div>
              <img :src="info.picUrl" alt="">
            </div>
            <div class="tui">
              <span>{{info.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="division"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {

    computed:{
      ...mapState(['column']),
    },

    mounted () {
      this.$store.dispatch('getColumn')
    },

    watch:{
      column(){
        this.$nextTick(() => {
          new Swiper('#swiper6', {
            slidesPerView: 3,
            spaceBetween: -50,
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .swiper-container
    height 130px
    margin-top 20px
    .list
      width 100px
      margin-top 10px
      margin-left 15px
      .images
        width 90px
        height 90px
        position relative
        img
          width 90px
          height 90px
          border-radius 2px
        span
          color skyblue
          position absolute
          top 0
          right 5px
      .tui
        width 90px
        margin-top 10px
        span
          margin-left 5px
          ellipsis()
  .division
    width 100%
    height 10px
    background #F4F4F4
    margin-top 10px
</style>
