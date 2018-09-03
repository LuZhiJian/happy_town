<template>
	<div class="join-members-wrapper">
    <div class="join-members-content">
      <div class="leader-box">
        <h3 class="j-title">活动领队</h3>
        <a :href="`#/user/center/${v.leaderId}`" class="leader" v-for="(v, i) in leaderList" :key="i">
          <div class="leader-avatar" :style="{backgroundImage: 'url(' + v.headImgUrl + ')'}"></div>
          <div class="leader-name">{{v.nickName}}</div>
        </a>
      </div>

      <div class="all-member-list">
        <h3 class="j-title">已报名</h3>
        <div class="kc-title">和你一起参加过活动的伙伴</div>
        <div class="member-list">
          <a :href="`#/user/center/${v.customerId}`" class="member" v-for="(v, i) in memberList" :key="i">
            <div :class="'member-avatar ' + (v.sex === '1' ? 'male':'famale')" :style="{backgroundImage: 'url(' + v.headImgUrl + ')'}"></div>
            <div class="nickname">{{v.nickName}}</div>
          </a>
        </div>
        <div class="kc-title">新的小伙伴</div>
        <div class="member-list">
          <a :href="`#/user/center/${v.customerId}`" class="member" v-for="(v, i) in memberList" :key="i" v-if="i < 5">
            <div :class="'member-avatar ' + (v.sex === '1' ? 'male':'famale')" :style="{backgroundImage: 'url(' + v.headImgUrl + ')'}"></div>
            <div class="nickname">{{v.nickName}}</div>
          </a>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import joinMembers from './joinMembers.es6'
export default joinMembers
</script>
<style src="./joinMembers.scss" lang="scss"></style>
