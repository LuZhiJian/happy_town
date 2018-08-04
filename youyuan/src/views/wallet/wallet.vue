<template>
	<div class="wallet-wrapper">
    <div class="list-content">
      <div class="wallet-item" v-for="(v, i) in list" :key="i">
        <div class="row">
          <div class="lt flex-8">
            <div class="name">{{v.name}} <div class="tag">{{v.type | amountType}}</div></div>
            <div class="date">{{v.date}}</div>
          </div>
          <div class="rt flex-4">+ {{v.amount}}</div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import wallet from './wallet.es6'
export default wallet
</script>
<style src="./wallet.scss" lang="scss"></style>
