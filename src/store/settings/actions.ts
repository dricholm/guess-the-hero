import { ActionTree } from 'vuex';

import SettingsState from '@/store/settings/types';

export const actions: ActionTree<SettingsState, {}> = {
  saveStorage({ commit }, data: SettingsState): void {
    const durationMax: number = data.durationMax || 999;
    const durationMin: number = data.durationMin || 0;
    const mmrMax: number = data.mmrMax || 9999;
    const mmrMin: number = data.mmrMin || 0;

    const saveData: SettingsState = {
      durationMax: Math.max(durationMin, durationMax),
      durationMin: Math.min(durationMin, durationMax),
      gameMode: data.gameMode,
      mmrMax: Math.max(mmrMin, mmrMax),
      mmrMin: Math.min(mmrMin, mmrMax),
    };

    localStorage.setItem('settings', JSON.stringify(saveData));
    commit('saveSettings', saveData);
  },
};
