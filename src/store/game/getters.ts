import { GetterTree } from 'vuex';

import { GameState, GameStats } from '@/store/game/types';

export const getters: GetterTree<GameState, {}> = {
  currentMatch(state): GameStats {
    return state.currentMatch;
  },
  error(state): boolean {
    return state.error;
  },
  isLoading(state): boolean {
    return state.isLoading;
  },
};
