<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
.component-fade-enter-active {
  // transition: opacity .3s ease;
  -webkit-animation: scaleUp .3s ease both;
	animation: scaleUp .3s ease both;
}
.component-fade-leave-active {
  -webkit-animation: scaleDown .3s ease both;
	animation: scaleDown .3s ease both;
}

@-webkit-keyframes scaleUp {
	from { opacity: 0; -webkit-transform: scale(.9); }
}
@keyframes scaleUp {
	from { opacity: 0; -webkit-transform: scale(.9); transform: scale(.9); }
}

@-webkit-keyframes scaleDown {
	from { }
	to { opacity: 0; -webkit-transform: scale(.9); }
}
@keyframes scaleDown {
	from { }
	to { opacity: 0; -webkit-transform: scale(.9); transform: scale(.9); }
}
</style>
