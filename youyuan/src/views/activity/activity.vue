<template>
	<div class="activity-wrapper">
    <div class="banner-box">
      <swiper-banner :data="bannerList"></swiper-banner>
    </div>
    <div class="activity-content">
      <div class="activity-info">
        <div class="activity-name">广东阳西沙扒湾+阳江月亮湾休闲自由行2日</div>
        <div class="price"><b>420</b>元/人</div>
        <div class="leader-box">
          <div class="leader-avatar" :style="{backgroundImage: 'url(' + 'https://wx3.sinaimg.cn/mw690/006f8wK2gy1fte1ws4g4tj308c08cn17.jpg' + ')'}"></div>
          <div class="leader-other">
            <div class="name">薇恩<span>（领队）</span></div>
            <div class="star">评分：4.9 （108人评）</div>
          </div>
        </div>
        <ul>
          <li>难度：休闲行摄 +130学分</li>
          <li>目的地：从化天堂顶（车程约2小时）</li>
          <li>行程时间：6.23～6.24  周六、周日</li>
          <li>集合：6月23日早上07:30客村地铁站b出口</li>
          <li>年龄要求：18岁—38岁</li>
        </ul>
      </div>

      <div class="join-members">
        <div class="join-title row">
          <div class="flex-7">
            <icon name="org" width="18" height="18" color="#21b265"></icon> 已参加的人（<span>20</span>人成行）
          </div>
          <a :href="`#/join/members/${$route.params.id}`" class="flex-5">总共<span>20</span>/50人<icon name="right" width="18" height="18" color="#999"></icon></a>
        </div>
        <div class="member-list">
          <div class="member" v-for="(v, i) in memberList" :key="i">
            <div :class="'member-avatar ' + (v.sex === 1 ? 'male':'famale')" :style="{backgroundImage: 'url(' + v.avatar + ')'}"></div>
            <div class="nickname">{{v.name}}</div>
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
            <div class="details">
              <p>不做走马观花的Tourist，</p>
              <p>不做打卡而过的Traveller，</p>
              <p>我们都是Wanderlust，漫游者。</p>
              <p>在快节奏的香港中漫游，</p>
              <p>寻找混凝土与玻璃以外的自然野趣。</p>
              <p>山野以外，</p>
              <p>还是无垦。</p>
              <p>这次，32号带你去发现香港的海~</p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item :id="2">
            <div class="trip">
              行程与准备
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item :id="3">
            <div class="cost">
              费用说明
            </div>
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
