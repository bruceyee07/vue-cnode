import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index')
    },
    {
    	path: '/topic/:topic_id',
    	name: 'topic_detail',
    	component: () => import('@/pages/topic')
    }
  ]
})
