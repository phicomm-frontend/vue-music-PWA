import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Search from '@/components/search/search'

Vue.use(Router)
const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/', // 默认进入推荐页面
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
