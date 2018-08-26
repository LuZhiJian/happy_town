<template>
	<div class="wallet-wrapper">
    <div class="list-content">
      <div v-if="list.length > 0">
        <div class="wallet-item" v-for="(v, i) in list" :key="i">
          <div class="row">
            <div class="lt flex-8">
              <div class="name">{{v.remarks}}
                <div class="tag">{{v.remarks}}</div>
              </div>
              <div class="date">{{v.time}}</div>
            </div>
            <div class="rt flex-4"><span>{{v.type > 0 ? '+':'-'}}</span>{{v.amount}}</div>
          </div>
        </div>
      </div>
      <div class="null-data" v-else>此数据空空如也~_~!!</div>
    </div>
	</div>
</template>
<script>
import wallet from './wallet.es6'
export default wallet
</script>
<style src="./wallet.scss" lang="scss"></style>
