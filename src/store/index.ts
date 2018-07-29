import Vue from 'vue';
import Vuex from 'vuex';

import { game } from '@/store/game';
import { settings } from '@/store/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    settings,
  },
  strict: process.env.NODE_ENV === 'development',
});
