import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Heroes from './views/Heroes.vue';
import Home from './views/Home.vue';
import Items from './views/Items.vue';
import Play from './views/Play.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      component: About,
      name: 'about',
      path: '/about',
    },
    {
      component: Heroes,
      name: 'heroes',
      path: '/heroes',
    },
    {
      component: Home,
      name: 'home',
      path: '/',
    },
    {
      component: Items,
      name: 'items',
      path: '/items',
    },
    {
      component: Play,
      name: 'play',
      path: '/play',
    },
  ],
});
