import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import City from '@/pages/city/city.vue'
import Detail from '@/pages/detail/detail.vue'
import List from '@/pages/list/list.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/city',
    name: "city",
    component: City
  }, {
    path: '/detail/:id',
    name: "detail",
    component: Detail
  }, {
    path: '/list/:id',
    name: "list",
    component: List
  },{
    path: '/*',
    name: 'home',
    component: Home
<<<<<<< HEAD
  }],
=======
  },],
>>>>>>> a0fb689c8d3fd5bdf3373d9f54873ce4ffbb6eb3

  // 解决当前页面滚动页对其他页面造成影响
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
