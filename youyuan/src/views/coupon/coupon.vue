<template>
	<div class="coupon-wrapper">
    <div class="coupon-content">
      <div v-if="couponList.length > 0">
        <div class="coupon-item" v-for="(v, i) in couponList" :key="i">
          <div class="left-bor"></div>
          <div class="item-content row">
            <div class="txt flex-8">
              <h3>代金券</h3>
              <p>活动价格满{{v.minCost}}可用</p>
              <p>有效期：{{v.startDate}} ~ {{v.overDate}}</p>
            </div>
            <div class="money flex-4">
              {{v.amount}}
            </div>
          </div>
          <div class="right-bor"></div>
        </div>
      </div>
      <div class="null-data" v-else>此数据空空如也~_~!!</div>
    </div>
	</div>
</template>
<script>
import coupon from './coupon.es6'
export default coupon
</script>
<style src="./coupon.scss" lang="scss"></style>
