import { queryRandom } from '@/openDotaApi';
import { GameState, GameStats } from '@/store/game/types';
import { ActionTree } from 'vuex';

export const actions: ActionTree<GameState, {}> = {
  async queryMatch({ commit }): Promise<void> {
    commit('startQuery');
    try {
      const matchData: GameStats = await queryRandom();
      commit('saveMatchData', matchData);
    } catch (error) {
      commit('error');
    }
  },
};
