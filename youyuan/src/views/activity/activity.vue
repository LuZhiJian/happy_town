<template>
	<div class="activity-wrapper">
    <div class="banner-box">
      <swiper-banner :data="bannerList"></swiper-banner>
    </div>
    <div class="activity-content">
      <div class="activity-info">
        <div class="activity-name">{{detailData.title}}</div>
        <div class="price"><b>{{detailData.cost}}</b>元/人</div>
        <div class="leader-box" v-for="(v, i) in detailData.leaderInfoList" :key="i">
          <div class="leader-avatar" :style="{backgroundImage: 'url(' + v.headImgUrl + ')'}"></div>
          <div class="leader-other">
            <div class="name">{{v.nickName}}<span>（领队）</span></div>
            <div class="star">评分：{{v.score}} （{{v.commentCount}}人评）</div>
          </div>
        </div>
        <div class="requirement">
          <ul>
            <li>难度：{{detailData.label}} - {{detailData.difficulty}}星 +130学分</li>
            <li>目的地：{{detailData.destination}}（车程约2小时）</li>
            <li>行程时间：{{detailData.departureTime}}（{{detailData.activityDay}}天）</li>
            <li>集合：{{detailData.meetingPlace}}</li>
            <li>活动要求：{{detailData.requirement}}</li>
          </ul>
        </div>
      </div>

      <div class="join-members">
        <div class="join-title row">
          <div class="flex-7">
            <icon name="org" width="18" height="18" color="#21b265"></icon> 已参加的人（<span>{{memberList.length}}</span>人成行）
          </div>
          <a :href="`#/join/members/${$route.params.id}`" class="flex-5">总共<span>{{memberList.length}}</span>/{{detailData.quota}}人<icon name="right" width="18" height="18" color="#999"></icon></a>
        </div>
        <div class="member-list">
          <div :class="'member ' + (v.leaderId ? 'leader':'')" v-for="(v, i) in memberList" :key="i">
            <div :class="'member-avatar ' + (v.sex === '1' ? 'male':'famale')" :style="{backgroundImage: 'url(' + v.headImgUrl + ')'}"></div>
            <div class="nickname">{{v.nickName}}</div>
          </div>
        </div>
      </div>

      <div class="activity-details">
        <mt-navbar v-model="tabIndex">
          <mt-tab-item :id="1">活动详情</mt-tab-item>
          <mt-tab-item :id="2">行程与准备</mt-tab-item>
          <mt-tab-item :id="3">费用说明</mt-tab-item>
          <mt-tab-item :id="4">评价</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="tabIndex">
          <mt-tab-container-item :id="1">
            <div class="details" v-html="detailData.details"></div>
          </mt-tab-container-item>
          <mt-tab-container-item :id="2">
            <div class="trip" v-html="detailData.scheduling"></div>
          </mt-tab-container-item>
          <mt-tab-container-item :id="3">
            <div class="cost" v-html="detailData.costDescription"></div>
          </mt-tab-container-item>
          <mt-tab-container-item :id="4">
            <div class="comment">评价</div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>

    <div class="footer-btn-line row">
      <div class="flex-3 blue-btn"><icon name="group" width="20" height="20" color="#fff"></icon>进群</div>
      <div class="flex-5 yellow-btn">
        <p>分享链接赚取佣金</p>
        <p>免费旅行</p>
      </div>
      <div class="flex-4 green-btn">
        <a :href="`#/enroll/${$route.params.id}`">立即报名</a>
      </div>
    </div>
	</div>
</template>
<script>
import activity from './activity.es6'
export default activity
</script>
<style src="./activity.scss" lang="scss"></style>
