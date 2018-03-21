<template>
  <div class="header">
    <div class="row">
      <div class="flex-2">
        <div class="menu" v-if="leftData == 'menu'"><a href="#"><i class="icon-menu"></i></a></div>
        <div class="back" v-if="leftData == 'back'" @click="back"><i class="icon-left"></i></div>
      </div>
      <div class="flex-8">
        <div class="search-box" v-if="titleData == 'input'">
          <input type="text" placeholder="请输入产品名称">
          <i class="icon-search"></i>
        </div>
        <div class="title" v-if="titleData && titleData != 'input'">{{titleData}}</div>
      </div>
      <div class="flex-2">
        <!-- <i class="icon-search"></i> -->
      </div>
    </div>
  </div>
</template>
<script>
  import appHeader from './appHeader.es6'
  export default appHeader
</script>
<style src="./appHeader.scss" lang="scss"></style>
