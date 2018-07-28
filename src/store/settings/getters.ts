import { GetterTree } from 'vuex';

import SettingsState from '@/store/settings/types';

export const getters: GetterTree<SettingsState, {}> = {
  settings(state): SettingsState {
    return state;
  },
};
