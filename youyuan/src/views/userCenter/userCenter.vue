<template>
	<div class="user-center-wrapper">
    <div class="user-top">
      <div class="set have"><icon name="set" width="20" height="20" color="#fff"></icon></div>
      <div class="notice have"><icon name="notice" width="22" height="22" color="#fff"></icon></div>

      <div class="user-info">
        <div :class="'user-avatar ' + (userInfo.sex === 1 ? 'male' : 'famale')" :style="{backgroundImage: 'url(' + userInfo.headImgUrl + ')'}">
        </div>
        <mt-button class="star-btn" v-if="activeCustomerId !== '0'" @click="toFucos">{{userInfo.isStar === '0' ? '+ 关注':'取消关注'}}</mt-button>
        <div class="user-name">{{userInfo.nickName}}</div>
        <div class="grade-box row">
          <div class="flex-6">
            <icon name="grade1" width="13" height="13" color="#fff"></icon>
            {{userInfo.grade}}
          </div>
          <div class="flex-6">
            学分：{{userInfo.credit}}
          </div>
        </div>
      </div>

      <div class="friends row">
        <div class="flex-6">
          <a href="####">关注 <span>{{userInfo.starCount}}</span></a>
        </div>
        <div class="flex-6">
          <a href="####">粉丝 <span>{{userInfo.beStarCount}}</span></a>
        </div>
      </div>
    </div>
    <div class="fun-list-kop" v-if="activeCustomerId === '0'">
      <a href="#/share/list" class="fun-item row">
        <div class="flex-9 lt">
          <img src="../../assets/images/icon-share.png">
          <div class="txt">我的分享<b>【一次分享永久收益】</b></div>
        </div>
        <div class="flex-3 rt">{{userInfo.shareCount}}人 <icon name="right" width="16" height="16" color="#666"></icon></div>
      </a>
      <a href="#/wallet" class="fun-item row">
        <div class="flex-9 lt">
          <img src="../../assets/images/icon-pin.png">
          <div class="txt">零钱<b>【分享活动轻松赚零钱(超链接)】</b></div>
        </div>
        <div class="flex-3 rt">￥{{userInfo.balance}}<icon name="right" width="16" height="16" color="#666"></icon></div>
      </a>
      <a href="#/coupon" class="fun-item row">
        <div class="flex-9 lt">
          <img src="../../assets/images/icon-coupon.png">
          <div class="txt">代金券</div>
        </div>
        <div class="flex-3 rt">{{userInfo.couponCount}}张 <icon name="right" width="16" height="16" color="#666"></icon></div>
      </a>
    </div>

    <div class="user-data-tabcontent">
      <mt-navbar v-model="tabIndex">
        <mt-tab-item :id="1">基本资料</mt-tab-item>
        <mt-tab-item :id="2">我的相册</mt-tab-item>
        <mt-tab-item :id="3">我的活动</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="tabIndex">
        <mt-tab-container-item :id="1">
          <div class="user-base-data">
            <div class="the-line row">
              <div class="flex-4">性别</div>
              <div class="flex-8">{{basicInfo.sex === '1' ? '男':'女'}}</div>
            </div>
            <div class="the-line row">
              <div class="flex-4">年龄</div>
              <div class="flex-8">{{basicInfo.age}}</div>
            </div>
            <div class="the-line row">
              <div class="flex-4">身高</div>
              <div class="flex-8">{{basicInfo.height}}</div>
            </div>
            <div class="the-line row">
              <div class="flex-4">学历</div>
              <div class="flex-8">{{basicInfo.education}}</div>
            </div>
            <div class="the-line row">
              <div class="flex-4">籍贯</div>
              <div class="flex-8">{{basicInfo.nativePlace}}</div>
            </div>
            <div class="the-line row">
              <div class="flex-4">职业</div>
              <div class="flex-8">{{basicInfo.profession}}</div>
            </div>
            <div class="the-line row">
              <div class="flex-4">情感状态</div>
              <div class="flex-8">{{basicInfo.emotionalState}}</div>
            </div>
            <div class="the-line row">
              <div class="flex-4">个人签名</div>
              <div class="flex-8">
                <div class="sign" v-html="basicInfo.personalitySignature"></div>
              </div>
            </div>
            <div class="edit-line" v-if="activeCustomerId === '0'">
              <mt-button @click="editBasic">
                <icon name="edit" width="18" height="18" color="#fff"></icon>编辑个人资料
              </mt-button>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="2">
          <div class="pictrue-poll">
            <ul>
              <li>
                <div class="upload"></div>
              </li>
              <li v-for="(v, i) in picList" :key="i" :style="{backgroundImage: 'url(' + v.url + ')'}">
                <div :class="'del ' + (editPic ? 'show':'hide')"><icon name="del" width="22" height="22"></icon></div>
              </li>
            </ul>
            <div class="s-btn" v-if="activeCustomerId === '0'">
              <mt-button size="small" @click="edit">{{editPic ? '完成' : '编辑'}}</mt-button>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="3">
          <div class="user-activities">
            <div class="activity-item" v-for="(v, i) in activityList" :key="i">
              <a :href="`#/activity/${v.activityId}`" class="pictrue-box" :style="{backgroundImage: 'url(' + v.img + ')'}">
                <div class="stu">{{v.payStatus}}</div>
              </a>
              <div class="rt-content">
                <a :href="`#/activity/${v.activityId}`">{{v.title}}</a>
                <div class="date"><icon name="date" width="20" height="20" color="#999"></icon>{{v.departureTime}}出发 <span>{{v.activityDay}}日</span></div>
                <div class="credit"><icon name="credit" width="20" height="20" color="#999"></icon>获得学分：<span>{{v.credit}}分</span></div>
                <mt-button size="small">评论/奖赏</mt-button>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
	</div>
</template>
<script>
import userCenter from './userCenter.es6'
export default userCenter
</script>
<style src="./userCenter.scss" lang="scss"></style>
