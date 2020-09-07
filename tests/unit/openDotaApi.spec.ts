import { queryRandom } from '@/openDotaApi';
import nock from 'nock';

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
    const matchId = 123456789;
    const mockBody = {
      duration: 0,
      match_id: 0,
      patch: '',
      radiant_win: true,
      players: [
        {
          assists: 0,
          backpack_0: 0,
          backpack_1: 0,
          backpack_2: 0,
          deaths: 0,
          denies: 0,
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
          item_neutral: 0,
          kills: 0,
          lane: 0,
          lane_role: 0,
          last_hits: 0,
          level: 0,
          player_slot: 0,
          roshans_killed: null,
          stuns: 0,
          teamfight_participation: 0,
          tower_damage: 0,
          towers_killed: null,
          xp_per_min: 0,
        },
      ],
    };

    const scope = nock('https://api.opendota.com/api')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/publicMatches')
      .reply(200, [{ match_id: matchId }])
      .get(`/matches/${matchId}`)
      .reply(200, mockBody);

    const response = await queryRandom();

    expect(scope.isDone()).toBe(true);
    expect(response).toEqual({
      assists: 0,
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
      neutralItem: 0,
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
});
