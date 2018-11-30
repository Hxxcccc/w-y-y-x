<template>
  <div>
    <div class="bottom">
      <ul class="list">
        <li class="frist">
          推荐
          <div class="line"></div>
        </li>
        <li>居家</li>
        <li>鞋包配饰</li>
        <li>服装</li>
        <li>电器</li>
        <li>洗护</li>
        <li>饮食</li>
        <li>餐饮</li>
        <li>婴童</li>
        <li>特色区</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted () {
      let scroll = new BScroll('.bottom',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .bottom
    margin-top 8px
    /*display flex*/
    overflow hidden
    .list
      width 700px
      overflow hidden
      li
        float left
        width 70px
        font-size 14px
        text-align: center
        /*display inline*/
        .line
          margin-top 4px
          width 60%
          height 2px
          background #b4282d
          transform translateX(30%)
</style>
