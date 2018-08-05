import Vue from 'vue';
import Router from 'vue-router';

import About from './views/About.vue';
import Game from './views/Game.vue';
import Heroes from './views/Heroes.vue';
import Home from './views/Home.vue';
import Items from './views/Items.vue';
import NotFound from './views/NotFound.vue';
import Play from './views/Play.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'hash',
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
      children: [
        {
          component: Game,
          name: 'game',
          path: '/',
        },
        {
          component: Settings,
          name: 'settings',
          path: 'settings',
        },
      ],
      component: Play,
      path: '/play',
    },
    {
      component: NotFound,
      name: 'notFound',
      path: '**',
    },
  ],
});
