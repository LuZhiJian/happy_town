<template>
  <div class="forgot-wrapper">
    <app-header :left="headData.left" :title="headData.title" :right="headData.right"></app-header>
    <div class="forgot-content">
      <form class="forgot-form">
        <div class="label-group row">
          <div class="flex-3">
            <i class="icon-shouji"></i>
          </div>
          <div class="flex-9">
            <input type="text" name="telephone" placeholder="输入手机号码">
          </div>
        </div>
        <div class="label-group row">
          <div class="flex-3">
            <i class="icon-yanzhengma"></i>
          </div>
          <div class="flex-9">
            <input type="text" name="yzm" placeholder="短信验证码" maxlength="8">
            <a href="javascript:;">发送验证码</a>
          </div>
        </div>
        <div class="label-group row">
          <div class="flex-3">
            <i class="icon-mima"></i>
          </div>
          <div class="flex-9">
            <input type="text" name="telephone" placeholder="输入新的登录密码">
          </div>
        </div>
        <div class="submit-line">
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import forgot from './forgot.es6'
  export default forgot
</script>
<style src="./forgot.scss" lang="scss"></style>
