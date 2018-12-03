<template>
  <div>
      <HeaderGuide/>
      <Banner/>
      <BannerFooter/>
      <Brand/>
      <NewProduct/>
      <Popularity/>
      <Special/>
      <GoodThings/>
      <Copyright/>
      <GoTop/>
  </div>
</template>

<script>

import Banner from '../../components/Banner/Banner'
import BannerFooter from '../../components/BannerFooter/BannerFooter'
import Brand from '../../components/Brand/Brand'
import NewProduct from '../../components/NewProduct/NewProduct'
import Popularity from '../../components/Popularity/Popularity'
import Special from '../../components/Special/Special'
import GoodThings from '../../components/GoodThings/GoodThings'
import Copyright from '../../components/Copyright/Copyright'
import GoTop from '../../components/GoTop/GoTop'

export default {

  components: {
    Banner,
    BannerFooter,
    Brand,
    NewProduct,
    Popularity,
    Special,
    GoodThings,
    Copyright,
    GoTop
  },
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
