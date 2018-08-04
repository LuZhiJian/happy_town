<template>
  <div>
    <transition name="fade">
      <div class="message-form-wrapper" v-show="formData.msgVisible">
        <div class="message-modal"></div>
        <div class="message-box">
          <div class="title">请输入{{formData.msgTitle}}</div>
          <div class="message-content">
            <div class="input-box">
              <input type="text" v-model="formData.editValue">
            </div>
            <div class="error-txt" v-show="false">xxx不能为空</div>
          </div>
          <div class="message-footer">
            <button class="cancel" @click="close">取消</button>
            <button class="confirm">确定</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import messageForm from './messageForm.es6'
export default messageForm
</script>
<style src="./messageForm.scss" lang="scss"></style>
<style lang="scss">
  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
  }

</style>
