<template>
	<div class="swiper-banner-wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(v, i) in data" :key="i">
        <a href="javascript:;">
          <img :src="v.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
	</div>
</template>
<script>
import swiperBanner from './swiperBanner.es6'
export default swiperBanner
</script>
<style src="./swiperBanner.scss" lang="scss"></style>
