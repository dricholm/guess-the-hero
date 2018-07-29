import { ActionTree } from 'vuex';

import { queryRandom } from '@/openDotaApi';
import { GameState, GameStats } from '@/store/game/types';
import SettingsState from '@/store/settings/types';

export const actions: ActionTree<GameState, {}> = {
  async queryMatch({ commit, rootGetters }): Promise<void> {
    commit('startQuery');
    const settings: SettingsState = rootGetters['settings/settings'];
    try {
      const matchData: GameStats = await queryRandom(
        settings.durationMin,
        settings.durationMax,
        settings.mmrMin,
        settings.mmrMax
      );
      commit('saveMatchData', matchData);
    } catch (error) {
      commit('error');
    }
  },
};
