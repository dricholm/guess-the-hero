import { actions } from '@/store/game/actions';
import { GameStats } from '@/store/game/types';

let matchData: GameStats | null;

jest.mock('@/openDotaApi', () => ({
  queryRandom() {
    if (matchData == null) {
      throw Error('Error');
    }
    return matchData;
  },
}));

describe('game actions', () => {
  beforeEach(() => {
    matchData = null;
  });

  it('queryMatch', async () => {
    const commit = jest.fn();

    matchData = {
      duration: 0,
      matchId: 2,
      patch: '',
      radiantWin: true,
      assists: 0,
      backpack0: 0,
      backpack1: 0,
      backpack2: 0,
      deaths: 0,
      denies: 0,
      gold: 0,
      gpm: 0,
      goldSpent: 0,
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
      neutralItem: 0,
      playerSlot: 0,
      roshansKilled: 0,
      stuns: 0,
      teamfightParticipation: 0,
      towerDamage: 0,
      towersKilled: 0,
      xpm: 0,
    };

    await (actions.queryMatch as Function)({ commit });

    expect(commit).toHaveBeenCalledWith('startQuery');
    expect(commit).toHaveBeenCalledWith('saveMatchData', {
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
      kills: 0,
      lane: 0,
      laneRole: 0,
      lastHits: 0,
      level: 0,
      matchId: 2,
      neutralItem: 0,
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

    await (actions.queryMatch as Function)({ commit });
    expect(commit).toHaveBeenCalledWith('startQuery');
    expect(commit).toHaveBeenCalledWith('error');
  });
});
