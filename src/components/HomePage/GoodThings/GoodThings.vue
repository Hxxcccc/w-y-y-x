<template>
  <div>
    <div class="division"></div>
    <div class="haowu">
      <div class="goodsShow icon"  v-for="(icon, index) in cateList" :key="index">
        <div class="header">
          <span>{{icon.name}}好物</span>
        </div>
        <ul class="list">
          <li class="item info" v-for="(info, index) in icon.itemList" :key="index">
            <div class="images">
              <img :src="info.listPicUrl" alt="">
            </div>
            <div class="sp">
              <span>{{info.simpleDesc}}</span>
            </div>
            <div class="describe">
              <span>{{info.name}}</span>
            </div>
            <div class="price">
              <span>￥{{info.retailPrice}}</span>
            </div>
          </li>
        </ul>
        <div class="division"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {

    computed:{
      ...mapState(['cateList']),
    },

    mounted () {
      this.$store.dispatch('getCateList')
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .division
    width 100%
    height 10px
    background #F4F4F4
  .haowu
    .goodsShow
      .header
        height 60px
        text-align center
        line-height 60px
        span
          font-size: 14px;
      .list
        overflow hidden
        .item
          width 170px
          float left
          margin-left 12px
          .images
            width 170px
            height 170px
            background #f4f4f4
            img
              width 170px
          .sp
            height 30px
            width 170px
            background #f1ece2
            color #9f8a60
            line-height 30px
            ellipsis()
          .describe
            width 170px
            height 20px
            font-size 15px
            margin-top 8px
            ellipsis()
          .price
            width 170px
            height 20px
            font-size 16px
            color #b4282d
            margin-bottom 10px
      .division
        width 100%
        height 10px
        background #F4F4F4
</style>
