import { MutationTree } from 'vuex';

import SettingsState from '@/store/settings/types';

export const mutations: MutationTree<SettingsState> = {
  saveSettings(state: SettingsState, payload: SettingsState) {
    state.durationMax = payload.durationMax;
    state.durationMin = payload.durationMin;
    state.gameMode = payload.gameMode;
    state.mmrMax = payload.mmrMax;
    state.mmrMin = payload.mmrMin;
  },
};
