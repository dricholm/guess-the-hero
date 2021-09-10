const heroes = require('dotaconstants/build/heroes.json');

module.exports = [
  {
    component: () =>
      import(/* webpackChunkName: "about" */ './views/About.vue'),
    name: 'about',
    path: '/about',
  },
  {
    children: [
      {
        component: () =>
          import(/* webpackChunkName: "heroes" */ './views/Heroes.vue'),
        name: 'heroes',
        path: '',
      },
      {
        component: () =>
          import(/* webpackChunkName: "herodetail" */ './views/HeroDetail.vue'),
        name: 'heroDetail',
        meta: {
          sitemap: {
            slugs: Object.values(heroes).map((hero) => hero.name.substr(14)),
          },
        },
        path: ':slug',
      },
    ],
    component: () =>
      import(/* webpackChunkName: "heroesroot" */ './views/HeroesRoot.vue'),
    path: '/heroes',
  },
  {
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () =>
      import(/* webpackChunkName: "items" */ './views/Items.vue'),
    name: 'items',
    path: '/items',
  },
  {
    component: () => import(/* webpackChunkName: "game" */ './views/Game.vue'),
    name: 'game',
    meta: {
      sitemap: {
        priority: 1.0,
      },
    },
    path: '/game',
  },
  {
    component: () =>
      import(/* webpackChunkName: "notfound" */ './views/NotFound.vue'),
    name: 'notFound',
    path: '**',
  },
];
