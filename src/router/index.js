import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import weather_detail from '@/components/weather_detail'

Vue.use(Router)
export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
          path: '/weather/:woeid',
          name: 'weather_detail',
          component: weather_detail
      }
  ]
})
