import Vue from 'vue'
import Router from 'vue-router'
import goods from './views/Goods/goods.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: () => import('./views/ratings.vue')
    },{
      path: '/sheller',
      name: 'seller',
      component: () => import('./views/seller.vue')
    }
  ]
})
