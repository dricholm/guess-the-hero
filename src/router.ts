import Vue from 'vue';
import VueMeta from 'vue-meta';
import Router from 'vue-router';
import About from './views/About.vue';
import Game from './views/Game.vue';
import HeroDetail from './views/HeroDetail.vue';
import Heroes from './views/Heroes.vue';
import HeroesRoot from './views/HeroesRoot.vue';
import Home from './views/Home.vue';
import Items from './views/Items.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);
Vue.use(VueMeta);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      component: About,
      name: 'about',
      path: '/about',
    },
    {
      children: [
        {
          component: Heroes,
          name: 'heroes',
          path: '',
        },
        {
          component: HeroDetail,
          name: 'heroDetail',
          path: ':slug',
        },
      ],
      component: HeroesRoot,
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
      component: Game,
      name: 'game',
      path: '/game',
    },
    {
      component: NotFound,
      name: 'notFound',
      path: '**',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
