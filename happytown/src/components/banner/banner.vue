<template>
  <div class="home-banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(v, i) in bannerList" :key="i">
        <a :href="v.link">
          <img :src="v.img">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import banner from './banner.es6'
  export default banner
</script>
<style src="./banner.scss" lang="scss"></style>
