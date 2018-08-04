<template>
	<div class="join-members-wrapper">
    <div class="join-members-content">
      <div class="leader-box">
        <h3 class="j-title">活动领队</h3>
        <a href="#" class="leader">
          <div class="leader-avatar" :style="{backgroundImage: 'url(' + 'https://wx3.sinaimg.cn/mw690/006f8wK2gy1fte1ws4g4tj308c08cn17.jpg' + ')'}"></div>
          <div class="leader-name">天使彦</div>
        </a>
      </div>

      <div class="all-member-list">
        <h3 class="j-title">已报名</h3>
        <div class="kc-title">和你一起参加过活动的伙伴</div>
        <div class="member-list">
          <a href="#" class="member" v-for="(v, i) in memberList" :key="i">
            <div :class="'member-avatar ' + (v.sex === 1 ? 'male':'famale')" :style="{backgroundImage: 'url(' + v.avatar + ')'}"></div>
            <div class="nickname">{{v.name}}</div>
          </a>
        </div>
        <div class="kc-title">新的小伙伴</div>
        <div class="member-list">
          <a href="#" class="member" v-for="(v, i) in memberList" :key="i" v-if="i < 5">
            <div :class="'member-avatar ' + (v.sex === 1 ? 'male':'famale')" :style="{backgroundImage: 'url(' + v.avatar + ')'}"></div>
            <div class="nickname">{{v.name}}</div>
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
