<template>
  <div class="timer">
    <div class="timer-count">{{ hours }}</div>
    <div class="timer-count">{{ minutes }}</div>
    <div class="timer-count">{{ seconds }}</div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'Timer',
  setup() {
    const interval = ref(null)
    const seconds = ref(0)
    const minutes = ref(0)
    const hours = ref(0)
    const timeleft = ref(550000)

    onMounted(() => {
      interval.value = setInterval(function () {
        timeleft.value = timeleft.value - 1000
        if (timeleft.value > 0) {
          hours.value = Math.floor(
            (timeleft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
          minutes.value = Math.floor(
            (timeleft.value % (1000 * 60 * 60)) / (1000 * 60)
          )
          seconds.value = Math.floor((timeleft.value % (1000 * 60)) / 1000)
        } else {
          clearInterval(interval.value)
        }
      }, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(interval.value)
    })

    return {
      seconds,
      minutes,
      hours,
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.timer {
  display: flex;
}

.timer-count {
  background: #ffffff;
  color: $font-color;
  width: 166px;
  height: 166px;
  border-radius: 14px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 58px;
  font-weight: 400;
  box-shadow: 0px 59px 55px 0px #fed1c9;
}
</style>
