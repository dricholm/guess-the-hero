import Vue from 'vue';
import VueMeta from 'vue-meta';
import Router from 'vue-router';
// @ts-expect-error
import routes from './routes';

Vue.use(Router);
Vue.use(VueMeta);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
