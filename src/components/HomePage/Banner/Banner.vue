<template>
  <div>
    <div class="swiper-container" id='swiper2' v-if="focusLists.length>0">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(focusList,index) in focusLists" :key="index">
          <img :src="focusLists[index].picUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['focusLists'])
    },
    mounted(){
      this.$store.dispatch('getFocusList')
    },

    watch : {
      focusLists () {
        this.$nextTick(() => {
          new Swiper('#swiper2', {
            loop: true, // 循环模式选项
            autoplay: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .swiper-container
    width 100%
    height 200px
    padding-top 70px
    .swiper-slide
      text-align center
      font-size 18px
      background #fff
      img
        height 200px
</style>
