<template>
	<div class="share-list-wrapper">
    <div class="share-list-content">
      <div v-if="memberList.length > 0">
        <div class="member-item row" v-for="(v, i) in memberList" :key="i">
          <a class="flex-7" :href="`#/user/center/${v.customerId}`">
            <div :class="'avatar ' + (v.sex === '1' ? 'male' : 'famale')" :style="{backgroundImage: 'url(' + v.headImgUrl + ')'}"></div>
            <div class="name">{{v.nickName}}</div>
          </a>
          <div class="flex-5">参加活动<span>{{v.activitiesCount}}</span>次</div>
        </div>
        <div class="member-total">共<span>{{memberList.length}}</span>人</div>
      </div>
      <div class="null-data" v-else>此数据空空如也~_~!!</div>
    </div>
	</div>
</template>
<script>
import shareList from './shareList.es6'
export default shareList
</script>
<style src="./shareList.scss" lang="scss"></style>
