import nock from 'nock';

import { queryRandom } from '@/openDotaApi';

describe('OpenDotaApi', () => {
  beforeEach(() => {
    if (!nock.isActive) {
      nock.activate();
    }
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('queryRandom should return match data', async () => {
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
      match_id: 0,
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
            'public_matches.duration%20%3E%20600%20AND%20public_matches.duration%20%3C%205400%0AORDER',
        ),
      )
      .reply(200, { rows: [mockBody] });

    const response = await queryRandom(10, 90, 2000, 6000);

    expect(mockRequest.isDone()).toBe(true);
    expect(response).toEqual({
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
    });
  });

  it('queryRandom should throw error', async () => {
    const mockRequest = nock('https://api.opendota.com/api/')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(
        new RegExp(
          'WHERE%0A' +
            'public_matches.avg_mmr%20%3E%202000%20AND%20public_matches.avg_mmr%20%3C%206000%0AAND%0A' +
            'public_matches.duration%20%3E%20600%20AND%20public_matches.duration%20%3C%205400%0AORDER',
        ),
      )
      .reply(200, { rows: [] });

    try {
      await queryRandom(10, 90, 2000, 6000);
    } catch (error) {
      expect(mockRequest.isDone()).toBe(true);
      expect(error.message).toEqual('No matches were returned');
    }
  });
});
