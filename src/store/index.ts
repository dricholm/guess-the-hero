import { game } from '@/store/game';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
  },
  strict: process.env.NODE_ENV === 'development',
});
