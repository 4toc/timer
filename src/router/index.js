import { createRouter, createWebHistory } from 'vue-router'
import TimerView from '@/views/TimerView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TimerView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
