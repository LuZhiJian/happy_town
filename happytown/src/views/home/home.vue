<template>
  <div class="home-wrapper">
    <app-header :id="id"></app-header>
    <h4>{{title}}</h4>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import home from './home.es6'
  export default home
</script>
<style src="./home.scss" lang="scss"></style>
