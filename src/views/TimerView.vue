<template>
  <div class="timer-view">
    <div class="timer-view__timer">
      <Timer />
    </div>
  </div>
</template>

<script>
import Timer from '@/components/Timer/Timer.vue'
export default {
  name: 'Home',
  components: { Timer },
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

body {
  margin: 0;
}

.timer-view {
  background: $background;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
