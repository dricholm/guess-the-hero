import * as nock from 'nock';

import { actions } from '@/store/game/actions';
import { GameStats } from '@/store/game/types';

describe('game actions', () => {
  beforeEach(() => {
    if (!nock.isActive) {
      nock.activate();
    }
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('queryMatch', async () => {
    const commit = jest.fn();
    const rootGetters = {
      'settings/settings': {
        durationMax: 90,
        durationMin: 10,
        mmrMax: 6000,
        mmrMin: 2000,
      },
    };

    const mockBody = {
      assists: 0,
      avg_mmr: 0,
      backpack_0: 0,
      backpack_1: 0,
      backpack_2: 0,
      deaths: 0,
      denies: 0,
      duration: 0,
      gold: 0,
      gold_per_min: 0,
      gold_spent: 0,
      hero_damage: 0,
      hero_healing: 0,
      hero_id: 0,
      is_roaming: null,
      item_0: 0,
      item_1: 0,
      item_2: 0,
      item_3: 0,
      item_4: 0,
      item_5: 0,
      kills: 0,
      lane: 0,
      lane_role: 0,
      last_hits: 0,
      level: 0,
      match_id: 2,
      patch: '',
      player_slot: 0,
      radiant_win: true,
      roshans_killed: 0,
      stuns: 0,
      teamfight_participation: 0,
      tower_damage: 0,
      towers_killed: 0,
      xp_per_min: 0,
    };

    const mockRequest = nock('https://api.opendota.com/api/')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(
        new RegExp(
          'WHERE%0A' +
            'public_matches.avg_mmr%20%3E%202000%20AND%20public_matches.avg_mmr%20%3C%206000%0AAND%0A' +
            'public_matches.duration%20%3E%2010%20AND%20public_matches.duration%20%3C%2090%0AORDER'
        )
      )
      .reply(200, { rows: [mockBody] });

    // TODO: Resolve testing an action in TypeScript
    // @ts-ignore
    await actions.queryMatch({ commit, rootGetters });

    expect(mockRequest.isDone()).toBe(true);
    expect(commit).toHaveBeenCalledWith('startQuery');
    expect(commit).toHaveBeenCalledWith('saveMatchData', {
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
      matchId: 2,
      patch: '',
      playerSlot: 0,
      radiantWin: true,
      roshansKilled: 0,
      stuns: 0,
      teamfightParticipation: 0,
      towerDamage: 0,
      towersKilled: 0,
      xpm: 0,
    });
  });

  it('queryMatch should commit error', async () => {
    const commit = jest.fn();
    const rootGetters = {
      'settings/settings': {
        durationMax: 90,
        durationMin: 10,
        mmrMax: 6000,
        mmrMin: 2000,
      },
    };

    const mockRequest = nock('https://api.opendota.com/api/')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(
        new RegExp(
          'WHERE%0A' +
            'public_matches.avg_mmr%20%3E%202000%20AND%20public_matches.avg_mmr%20%3C%206000%0AAND%0A' +
            'public_matches.duration%20%3E%2010%20AND%20public_matches.duration%20%3C%2090%0AORDER'
        )
      )
      .reply(200, { rows: [] });

    try {
      // @ts-ignore
      await actions.queryMatch({ commit, rootGetters });
    } catch (error) {
      expect(mockRequest.isDone()).toBe(true);
      expect(commit).toHaveBeenCalledWith('startQuery');
      expect(commit).toHaveBeenCalledWith('error');
    }
  });
});
