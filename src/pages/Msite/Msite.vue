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

import Banner from '../../components/HomePage/Banner/Banner'
import BannerFooter from '../../components/HomePage/BannerFooter/BannerFooter'
import Brand from '../../components/HomePage/Brand/Brand'
import NewProduct from '../../components/HomePage/NewProduct/NewProduct'
import Popularity from '../../components/HomePage/Popularity/Popularity'
import Special from '../../components/HomePage/Special/Special'
import GoodThings from '../../components/HomePage/GoodThings/GoodThings'
import Copyright from '../../components/HomePage/Copyright/Copyright'
import GoTop from '../../components/HomePage/GoTop/GoTop'

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
