import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import * as Vuex from 'vuex';

import { GameState } from '@/store/game/types';
import Game from '@/views/Game.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Game.vue', () => {
  let actions: any;
  let getters: any;
  let mutations: any;
  let state: GameState;
  let store: any;

  beforeEach(() => {
    actions = { queryMatch: jest.fn() };
    getters = {
      currentMatch: jest.fn(() => state.currentMatch),
      error: jest.fn(() => state.error),
      isLoading: jest.fn(() => state.isLoading),
    };
    mutations = {
      error: jest.fn(),
      saveMatchData: jest.fn(),
      startQuery: jest.fn(),
    };
    state = {
      currentMatch: {
        assists: 0,
        avgMmr: 0,
        backpack0: 0,
        backpack1: 0,
        backpack2: 0,
        deaths: 0,
        denies: 0,
        duration: 0,
        gold: 0,
        goldSpent: 0,
        gpm: 0,
        heroDamage: 0,
        heroHealing: 0,
        heroId: 0,
        isRoaming: null,
        item0: 0,
        item1: 0,
        item2: 0,
        item3: 0,
        item4: 0,
        item5: 0,
        kills: 0,
        lane: 0,
        laneRole: 0,
        lastHits: 0,
        level: 0,
        matchId: 0,
        patch: '',
        playerSlot: 0,
        radiantWin: true,
        roshansKilled: 0,
        stuns: 0,
        teamfightParticipation: 0,
        towerDamage: 0,
        towersKilled: 0,
        xpm: 0,
      },
      error: false,
      isLoading: false,
    };
    store = new Vuex.Store({
      modules: { game: { actions, getters, mutations, namespaced: true } },
    });
  });

  it('should dispatch queryMatch if matchId is 0', () => {
    shallowMount(Game, {
      localVue,
      store,
    });

    expect(getters.currentMatch).toHaveBeenCalledTimes(1);
    expect(actions.queryMatch).toHaveBeenCalledTimes(1);
  });

  it('should not dispatch queryMatch if matchId is not 0', () => {
    state.currentMatch.matchId = 1324;

    shallowMount(Game, {
      localVue,
      store,
    });

    expect(getters.currentMatch).toHaveBeenCalledTimes(1);
    expect(actions.queryMatch).toHaveBeenCalledTimes(0);
  });
});
