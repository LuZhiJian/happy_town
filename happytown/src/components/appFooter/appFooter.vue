<template>
  <div class="footer">
    <ul class="row">
      <li class="flex-4" v-bind:class="{'active': v.isActive}" v-for="(v, i) in linkList">
        <a :href="v.link">
          <div class="icon-box">
            <i v-bind:class="v.icon"></i>
          </div>
          <div class="name">{{v.name}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import appFooter from './appFooter.es6'
  export default appFooter
</script>
<style src="./appFooter.scss" lang="scss"></style>
