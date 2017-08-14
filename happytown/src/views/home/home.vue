<template>
  <div class="home-wrapper">
    <app-header :id="id"></app-header>
    <div class="home-content">
      <banner></banner>
      <h4>{{title}}</h4>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import home from './home.es6'
  export default home
</script>
<style src="./home.scss" lang="scss"></style>
