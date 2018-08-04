<template>
	<div class="share-list-wrapper">
    <div class="share-list-content">
      <div class="member-item row" v-for="(v, i) in memberList" :key="i">
        <div class="flex-7">
          <div :class="'avatar ' + (v.sex === 1 ? 'male' : 'famale')" :style="{backgroundImage: 'url(' + v.avatar + ')'}"></div>
          <div class="name">{{v.nickName}}</div>
        </div>
        <div class="flex-5">参加活动{{v.acNum}}次</div>
      </div>
    </div>
    <div class="member-total">共<span>{{memberList.length}}</span>人</div>
	</div>
</template>
<script>
import shareList from './shareList.es6'
export default shareList
</script>
<style src="./shareList.scss" lang="scss"></style>
