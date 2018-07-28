import { createLocalVue, mount } from '@vue/test-utils';
import * as Vuex from 'vuex';

import SettingsState from '@/store/settings/types';
import Settings from '@/views/Settings.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Settings.vue', () => {
  let actions: any;
  let getters: any;
  let mutations: any;
  let state: SettingsState;
  let store: any;

  beforeEach(() => {
    actions = {
      saveStorage: jest.fn(),
    };
    getters = {
      settings: jest.fn(() => state),
    };
    mutations = {
      saveSettings: jest.fn(),
    };
    state = {
      durationMax: 300,
      durationMin: 20,
      gameMode: 0,
      mmrMax: 9000,
      mmrMin: 2000,
    };
    store = new Vuex.Store({
      modules: { settings: { actions, getters, mutations, namespaced: true } },
    });
  });

  it('should set input from getter', () => {
    const wrapper = mount(Settings, {
      localVue,
      store,
    });

    const numbers = wrapper.findAll('input[type="number"]');
    const gameMode = wrapper.findAll('input[type="radio"]');
    const checked = wrapper.find('input[type="radio"]:checked');

    expect(getters.settings).toHaveBeenCalledTimes(1);

    expect(numbers.length).toBe(4);
    expect(+numbers.at(0).attributes().value).toBe(state.mmrMin);
    expect(+numbers.at(1).attributes().value).toBe(state.mmrMax);
    expect(+numbers.at(2).attributes().value).toBe(state.durationMin);
    expect(+numbers.at(3).attributes().value).toBe(state.durationMax);

    expect(gameMode.length).toBe(2);
    expect(+gameMode.at(0).attributes().value).toBe(0);
    expect(+gameMode.at(1).attributes().value).toBe(1);
    expect(+checked.attributes().value).toBe(
      +gameMode.at(0).attributes().value
    );
  });

  it('should dispatch action with input values', () => {
    const wrapper = mount(Settings, { localVue, store });

    const numbers = wrapper.findAll('input[type="number"]');
    const gameMode = wrapper.findAll('input[type="radio"]');
    const form = wrapper.find('form');

    expect(actions.saveStorage).toHaveBeenCalledTimes(0);

    numbers.at(0).setValue(1000);
    numbers.at(1).setValue(5000);
    numbers.at(2).setValue(30);
    numbers.at(3).setValue(90);
    gameMode.at(1).trigger('click');
    form.trigger('submit');

    expect(actions.saveStorage).toHaveBeenCalledTimes(1);
    expect(actions.saveStorage).toHaveBeenCalledWith(
      expect.any(Object),
      {
        durationMax: 90,
        durationMin: 30,
        gameMode: 1,
        mmrMax: 5000,
        mmrMin: 1000,
      },
      undefined
    );
  });
});
