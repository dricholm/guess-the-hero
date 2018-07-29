import { Module } from 'vuex';

import { actions } from '@/store/game/actions';
import { getters } from '@/store/game/getters';
import { mutations } from '@/store/game/mutations';
import state from '@/store/game/state';
import { GameState } from '@/store/game/types';

export const game: Module<GameState, {}> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};
