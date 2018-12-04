<template>
  <div>
    <div class="Look">
      <div class="header">
        <span>严选LOOK</span>
      </div>
      <div class="images">
        <img :src="yxLook.picUrl" alt="">
      </div>
      <div class="author">
        <div class="authorPic">
          <img :src="yxLook.avatar" alt="">
        </div>
        <div class="authorName">
          <span>{{yxLook.nickname}}</span>
        </div>
      </div>
      <div class="desc">
        <span>{{yxLook.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['yxLook'])
    },

    mounted () {
      this.$store.dispatch('getYxLook')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .Look
    height 560px
    .header
      height 60px
      text-align center
      line-height 60px
      span
        font-size 14px
    .images
      height 370px
      width 100%
      img
        height 370px
        width 100%
    .author
      height 25px
      position relative
      margin-top 10px
      .authorPic
        width 25px
        height 25px
        position absolute
        top 0
        left 10px
        img
          width 25px
          height 25px
          border-radius 50%
      .authorName
        width 80px
        position absolute
        top 5px
        left 50px
        span
          font-size: 14px;
    .desc
      height 80px
      width 345px
      margin-left 10px
      margin-top 10px
      span
        line-height 25px
        font-size 14px
        color #7f7f7f
</style>
