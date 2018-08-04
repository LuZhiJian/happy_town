<template>
	<div class="enroll-wrapper">
    <div class="enroll-content">
      <div class="part-item">
        <div class="green-title">当前选择</div>
        <div class="activity-name">广州帽峰山自由行</div>
        <div class="date-and-place">
          <span>6月30日</span>
          <span>广州出发</span>
        </div>
      </div>
      <div class="part-item pb0">
        <div class="green-title">请填写真实信息</div>
        <div class="member-basic-form" v-for="(v, i) in formData" :key="i">
          <div class="form-group row" >
            <mt-field label="真实姓名" placeholder="与证件名字一致" v-model="v.name"></mt-field>
          </div>
          <div class="form-group row" >
            <mt-field label="身份证" placeholder="与证件号码一致" v-model="v.cardID"></mt-field>
          </div>
          <div class="form-group row" >
            <mt-field label="电话号码" placeholder="必填" v-model="v.phone"></mt-field>
          </div>
          <div class="add-btn" v-if="i === 0" @click="add">
            <icon name="add" width="35" height="35" color="#333"></icon>
          </div>
          <div class="remove-btn" v-else @click="remove(i)">
            <icon name="remove" width="35" height="35" color="#ff2525"></icon>
          </div>
        </div>
      </div>
      <div class="part-item">
        <div class="green-title">费用详情</div>
        <div class="fee-box row">
          <div class="flex-4">基础价格</div>
          <div class="flex-4 text-c"><span>138</span>元/人</div>
          <div class="flex-4 text-r">1人</div>
        </div>
      </div>
      <div class="part-item">
        <div class="green-title">支付方式</div>
        <div class="pay-ways-box">
          <div class="pay-item row" v-for="(v, i) in payList" :key="i" @click="checkPay(v)">
            <div class="flex-1 icon-box"><img :src="v.icon"></div>
            <div class="flex-10 txt">{{v.name}}<span v-if="v.price">-￥{{v.price}}</span></div>
            <div class="flex-1 ck-box">
              <div :class="'checkbox ' + (v.selected ? 'checked':'')"></div>
            </div>
          </div>
        </div>
        <div class="coupon row">
          <div class="flex-6">代金券</div>
          <div class="flex-6 text-r"><span>6张可用</span><icon name="right" width="16" height="16" color="#999"></icon></div>
        </div>
      </div>
    </div>

    <div class="footer-btn-line row">
      <div class="flex-8 yellow-btn">
        <h5>总费用：120元<span>(已减9.9)</span></h5>
      </div>
      <div class="flex-4 green-btn">
        <a href="javascript:;">立即支付</a>
      </div>
    </div>
	</div>
</template>
<script>
import enroll from './enroll.es6'
export default enroll
</script>
<style src="./enroll.scss" lang="scss"></style>
