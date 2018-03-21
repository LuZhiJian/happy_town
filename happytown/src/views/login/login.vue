<template>
  <div class="login-wrapper">
    <app-header :left="headData.left" :title="headData.title" :right="headData.right"></app-header>
    <div class="login-content">
      <form class="login-form">
        <div class="label-group row">
          <div class="flex-3">
            <i class="icon-shouji"></i>
          </div>
          <div class="flex-9">
            <input type="text" name="telephone" placeholder="手机号码">
          </div>
        </div>
        <div class="label-group row">
          <div class="flex-3">
            <i class="icon-mima"></i>
          </div>
          <div class="flex-9">
            <input type="text" name="telephone" placeholder="登录密码">
          </div>
        </div>
        <div class="forget-line">
          <a href="#/forgot">忘记密码</a>
        </div>
        <div class="submit-line">
          <button type="submit">登录</button>
        </div>
        <div class="register-line">
          <a href="#/register">注册账号</a>
        </div>
        <div class="other-plate">
          <div class="line">
            <div class="or">OR</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import login from './login.es6'
  export default login
</script>
<style src="./login.scss" lang="scss"></style>
