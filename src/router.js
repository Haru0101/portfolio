import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top';
import About from '@/components/About';
import Works from '@/components/Works';
import Links from '@/components/Links';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Top
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/works',
      component: Works
    },
    {
      path: '/links',
      component: Links
    }
  ]
})
