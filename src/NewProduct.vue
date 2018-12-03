<template>
  <section>
    <div class="newText">
      <div class="content">
        <span class="new">新品首发</span>
        <div class="btn">
          <a href="javascript:;">
            <span>查看全部</span>
            <i class="iconfont icon-youjiantou2"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="newList">
      <ul class="listContent">
        <li class="info" v-for="(info,index) in NewProductInfo" :key="index">
          <div class="img">
            <img :src="info.listPicUrl" alt="">
          </div>
          <div class="text">
            <span class="xxx">{{info.name}}</span>
          </div>
          <div class="grayText">
            <span>{{info.simpleDesc}}</span>
          </div>
          <span>￥{{info.retailPrice}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['NewProductInfo'])
    },
    created () {
      //分发
      this.$store.dispatch('newItemNewUserList')
    },
    mounted () {
      new BScroll('.newList',{
        scrollX: true,
        click: true
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .newText
    position relative
    width 100%;
    height 130px;
    background-image url('data:image/png;base64,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');
    .content
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      text-align: center
      .new
        color #8ba0b6
        font-size 20px
      .btn
        width 120px
        height 28px
        line-height 28px
        background-color #d8e5f1
        text-align: center
        margin-top 10px
        a
          color #8ba0b6
  .newList
    width 100%
    height 220px
    overflow hidden
    .listContent
      /*width 1400px*/
      width 370%
      position relative
      display flex
      /*margin-left 10px*/
      .info
        height 100%
        width 140px
        margin-left 10px
        margin-right 25px
        div
          margin-top 5px
          font-size 14px
        .img
          background #f4f4f4
          img
            height 100%
            width 100%
        .text
          width 140px
          overflow:hidden;
          white-space:nowrap;/*限制不换行*/
          text-overflow:ellipsis;
          span
            width:100px;
        .grayText
          span
            color #7f7f7f

</style>

