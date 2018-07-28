import { Module } from 'vuex';

import { actions } from '@/store/settings/actions';
import { getters } from '@/store/settings/getters';
import { mutations } from '@/store/settings/mutations';
import state from '@/store/settings/state';
import SettingsState from '@/store/settings/types';

export const settings: Module<SettingsState, {}> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};
