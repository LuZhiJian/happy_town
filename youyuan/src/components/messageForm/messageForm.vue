<template>
  <div>
    <transition name="fade">
      <div class="message-form-wrapper" v-show="formData.msgVisible">
        <div class="message-modal"></div>
        <div class="message-box">
          <div class="title">请输入{{formData.msgTitle}}</div>
          <div class="message-content">
            <div class="input-box" v-if="formData.editKey === 'personalitySignature'">
              <textarea v-model.trim="formData.editValue" placeholder="个人签名"></textarea>
            </div>
            <div class="input-box" v-else>
              <input type="text" v-model.trim="formData.editValue">
            </div>
          </div>
          <div class="message-footer">
            <button class="cancel" @click="close">取消</button>
            <button class="confirm" @click="submit">确定</button>
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
