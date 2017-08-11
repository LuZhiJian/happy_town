<template>
  <div class="home-wrapper">
    <app-header :id="id"></app-header>
    <h4>{{title}}</h4>
    <a :href="'#/login/' + id">登录</a>
    <span> 待机时间</span>
  </div>
</template>
<script>
  import home from './home.es6'
  export default home
</script>
<style src="./home.scss" lang="scss"></style>
