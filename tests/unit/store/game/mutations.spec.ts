import { mutations } from '@/store/game/mutations';
import { GameState } from '@/store/game/types';

describe('game mutations', () => {
  it('startQuery', () => {
    const state: GameState = {
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

    mutations.startQuery(state, null);

    expect(state.error).toBe(false);
    expect(state.isLoading).toBe(true);
  });

  it('saveMatchData', () => {
    const state: GameState = {
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

    const dummyData = {
      assists: 1,
      avgMmr: 1000,
      backpack0: 1,
      backpack1: 1,
      backpack2: 2,
      deaths: 3,
      denies: 4,
      duration: 600,
      gold: 651,
      goldSpent: 7135,
      gpm: 540,
      heroDamage: 651,
      heroHealing: 10,
      heroId: 11,
      isRoaming: false,
      item0: 12,
      item1: 13,
      item2: 14,
      item3: 0,
      item4: 12,
      item5: 12,
      kills: 2,
      lane: 2,
      laneRole: 1,
      lastHits: 60,
      level: 8,
      matchId: 1324,
      patch: '6.89',
      playerSlot: 2,
      radiantWin: true,
      roshansKilled: 1,
      stuns: 12,
      teamfightParticipation: 0.84,
      towerDamage: 15,
      towersKilled: 1,
      xpm: 156,
    };

    mutations.saveMatchData(state, dummyData);

    expect(state.error).toBe(false);
    expect(state.isLoading).toBe(false);
    expect(state.currentMatch.assists).toBe(dummyData.assists);
    expect(state.currentMatch.avgMmr).toBe(dummyData.avgMmr);
    expect(state.currentMatch.backpack0).toBe(dummyData.backpack0);
    expect(state.currentMatch.backpack1).toBe(dummyData.backpack1);
    expect(state.currentMatch.backpack2).toBe(dummyData.backpack2);
    expect(state.currentMatch.deaths).toBe(dummyData.deaths);
    expect(state.currentMatch.denies).toBe(dummyData.denies);
    expect(state.currentMatch.duration).toBe(dummyData.duration);
    expect(state.currentMatch.gold).toBe(dummyData.gold);
    expect(state.currentMatch.goldSpent).toBe(dummyData.goldSpent);
    expect(state.currentMatch.gpm).toBe(dummyData.gpm);
    expect(state.currentMatch.heroDamage).toBe(dummyData.heroDamage);
    expect(state.currentMatch.heroHealing).toBe(dummyData.heroHealing);
    expect(state.currentMatch.heroId).toBe(dummyData.heroId);
    expect(state.currentMatch.isRoaming).toBe(dummyData.isRoaming);
    expect(state.currentMatch.item0).toBe(dummyData.item0);
    expect(state.currentMatch.item1).toBe(dummyData.item1);
    expect(state.currentMatch.item2).toBe(dummyData.item2);
    expect(state.currentMatch.item3).toBe(dummyData.item3);
    expect(state.currentMatch.item4).toBe(dummyData.item4);
    expect(state.currentMatch.item5).toBe(dummyData.item5);
    expect(state.currentMatch.kills).toBe(dummyData.kills);
    expect(state.currentMatch.lane).toBe(dummyData.lane);
    expect(state.currentMatch.laneRole).toBe(dummyData.laneRole);
    expect(state.currentMatch.lastHits).toBe(dummyData.lastHits);
    expect(state.currentMatch.level).toBe(dummyData.level);
    expect(state.currentMatch.matchId).toBe(dummyData.matchId);
    expect(state.currentMatch.patch).toBe(dummyData.patch);
    expect(state.currentMatch.playerSlot).toBe(dummyData.playerSlot);
    expect(state.currentMatch.radiantWin).toBe(dummyData.radiantWin);
    expect(state.currentMatch.roshansKilled).toBe(dummyData.roshansKilled);
    expect(state.currentMatch.stuns).toBe(dummyData.stuns);
    expect(state.currentMatch.teamfightParticipation).toBe(
      dummyData.teamfightParticipation,
    );
    expect(state.currentMatch.towerDamage).toBe(dummyData.towerDamage);
    expect(state.currentMatch.towersKilled).toBe(dummyData.towersKilled);
    expect(state.currentMatch.xpm).toBe(dummyData.xpm);
  });

  it('error', () => {
    const state: GameState = {
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

    mutations.error(state, null);

    expect(state.error).toBe(true);
    expect(state.isLoading).toBe(false);
  });
});
