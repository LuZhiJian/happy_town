<template>
	<div class="edit-basic-wrapper">
    <div class="edit-basic-content">
      <div class="basic-item basic-avatar row">
        <div class="flex-3 labels">我的头像</div>
        <div class="flex-9 edit">
          <div class="avatar" :style="{backgroundImage: 'url(' + editForm.headImgUrl + ')'}"></div>
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">昵称</div>
        <div class="flex-9 edit" @click="editText('昵称', 'nickName', editForm.nickName)">
          {{editForm.nickName}}
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">性别</div>
        <div class="flex-9 edit">
          <div class="radio-box">
            <div class="as-radio">
              <label>
                <input type="radio" name="sex" value="1" v-model="editForm.sex">
                <span>男</span>
              </label>
            </div>
            <div class="as-radio">
              <label>
                <input type="radio" name="sex" value="2" v-model="editForm.sex">
                <span>女</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">年龄</div>
        <div class="flex-9 edit" @click="editText('年龄', 'age', editForm.age)">
          {{editForm.age}}
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">身高</div>
        <div class="flex-9 edit" @click="editText('身高', 'height', editForm.height)">
          {{editForm.height}}
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">最高学历</div>
        <div class="flex-9 edit" @click="editText('最高学历', 'education', editForm.education)">
          {{editForm.education}}
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">籍贯</div>
        <div class="flex-9 edit" @click="editText('籍贯', 'nativePlace', editForm.nativePlace)">
          {{editForm.nativePlace}}
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">职业</div>
        <div class="flex-9 edit" @click="editText('职业', 'profession', editForm.profession)">
          {{editForm.profession}}
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">感情</div>
        <div class="flex-9 edit" @click="editText('感情', 'emotionalState', editForm.emotionalState)">
          {{editForm.emotionalState}}
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
      <div class="basic-item row">
        <div class="flex-3 labels">个人签名</div>
        <div class="flex-9 edit" @click="editText('个人签名', 'personalitySignature', editForm.personalitySignature)">
          <div class="sign">{{editForm.personalitySignature}}</div>
          <icon name="right" width="18" height="18" color="#6c6c6c"></icon>
        </div>
      </div>
    </div>
    <div class="basic-footer">
      <div class="submit-box">
        <button type="button" @click="submit">确定修改</button>
      </div>
    </div>
    <message-form :data="msgBoxData" @close="msgClose" @submit="setData"></message-form>
	</div>
</template>
<script>
import editBasic from './editBasic.es6'
export default editBasic
</script>
<style src="./editBasic.scss" lang="scss"></style>
