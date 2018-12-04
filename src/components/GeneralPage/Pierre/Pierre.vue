<template>
  <div class="zhen">
      <div class="header">
        <span>严选臻品</span>
      </div>
      <div class="itemMajor"  v-if="zhen.Item">
        <div class="images">
          <img :src="zhen.Item[0].picUrl" alt="">
        </div>
        <div class="item">
          <div class="line1">
            <span class="baiyi">{{zhen.Item[0].title}}</span>
            <span class="price">69元起</span>
          </div>
          <div class="line2">
            <span class="shaonian">{{zhen.Item[0].subTitle}}</span>
          </div>
        </div>
      </div>
      <div class="item2 info" v-for="(info, index) in zhen.Item" v-if="index>0" :key="index">
        <div class="line1">
          <span class="topicTitle">{{info.title}}</span>
        </div>
        <div class="line2">
          <span class="cont">{{info.subTitle}}</span>
        </div>
        <div class="images">
          <img :src="info.picUrl" alt="">
          <div class="tag">
            <span>{{info.typeName}}</span>
          </div>
        </div>
      </div>
      <div class="division"></div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['zhen'])
    },

    mounted () {
      this.$store.dispatch('getZhen')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .zhen
    height 694px
    .header
      width 100%
      height 60px
      text-align center
      line-height 60px
      span
        font-size 14px
    .itemMajor
      width 100%
      height 280px
      /*background pink*/
      .images
        width 350px
        height 195px
        margin-left 12px
        img
          width 350px
          border-radius 5px
      .item
        width 348px
        height 100px
        border 1px solid #eee
        margin-left 12px
        margin-right 12px
        .line1
          width 350px
          margin-top 12px
          margin-left 10px
          position relative
          .baiyi
            font-size 18px
          .price
            position absolute
            top 0
            right 25px
            font-size 16px
        .line2
          width 350px
          margin-left 10px
          margin-top 20px
          .shaonian
            font-size 14px
            color #7f7f7f
    .item2
      width 350px
      height 130px
      margin-top 30px
      margin-left 12px
      border 1px solid #eee
      position relative
      .line1
        position absolute
        top 40px
        left 10px
        width 200px
        .topicTitle
          font-size 16px
      .line2
        position absolute
        bottom  50px
        left 10px
        width 180px
        ellipsis()
        .cont
          font-size 12px
          color #7f7f7f
      .images
        height 130px
        width 140px
        position absolute
        top 0
        right 0
        img
          height 130px
          width 140px
        .tag
          position absolute
          top 5px
          left 5px
          width 100px
          height 20px
          text-align center
          line-height 20px
          background #fbf7f0
          border-radius 10px
    .division
      width 100%
      height 10px
      background #F4F4F4
      margin-top 20px
</style>
