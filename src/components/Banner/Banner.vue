<template>
  <div class="swiper-container" v-if="cateLists.length>0">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(cateList,index) in cateLists" :key="index">
        <img :src="cateLists[0].bannerUrl" alt="">
      </div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  import {cateList} from '../../api'
  import Swiper from 'swiper'
  export default {
    data(){
      return {
        cateLists:[]
      }
    },
    mounted () {
      cateList()
        .then(res => {
          console.log(res.data)
          this.cateLists = res.data
        })

      new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width: 100%;
    height: 200px;
</style>
