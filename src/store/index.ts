import Vue from 'vue';
import Vuex from 'vuex';

import { settings } from '@/store/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
  },
  strict: process.env.NODE_ENV === 'development',
});
