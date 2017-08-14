<template>
  <div class="header">
    <div class="row">
      <div class="flex-2">
        <div class="menu"><i class="icon-menu"></i></div>
        <!-- <div class="back"><i class="icon-left"></i></div> -->
      </div>
      <div class="flex-8">
        <div class="search-box">
          <input type="text" placeholder="请输入产品名称">
          <i class="icon-search"></i>
        </div>
        <!-- <div class="title">我的关注</div> -->
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
