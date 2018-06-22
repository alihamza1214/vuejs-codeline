import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import weather_detail from '@/components/weather_detail'
import search_page from '@/components/search_page'

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
      ,{
          path: '/search/:keyword',
          name: 'search_page',
          component: search_page
      }
  ]
})
