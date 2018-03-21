<template>
  <div class="home-wrapper">
    <app-header :left="headData.left" :title="headData.title" :right="headData.right"></app-header>
    <div class="home-content">
      <banner></banner>
      <div class="index-list-wrap">
        <ul class="index-tab-ul row">
          <li class="flex-6 active">
            <a href="#/">推荐</a>
          </li>
          <li class="flex-6">
            <a href="#/">最热</a>
          </li>
        </ul>
        <div class="product-list">
          <div class="item" v-for="(v, i) in proList">
            <a :href="'#/production/' + v.id">
              <div class="img">
                <img :src="v.img">
              </div>
              <div class="pro-name">{{v.name}}</div>
              <div class="collection">
                <button>
                  <i class="icon-xin1" v-if="v.isCollected"></i>
                  <i class="icon-xin" v-else></i>
                  {{ v.isCollected ? '已收藏' : '收藏'}}
                </button>
              </div>
            </a>
          </div>
        </div>
        <div class="no-more">没有更多了...</div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import home from './home.es6'
  export default home
</script>
<style src="./home.scss" lang="scss"></style>
