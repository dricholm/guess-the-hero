import { MutationTree } from 'vuex';

import { GameState, GameStats } from '@/store/game/types';

export const mutations: MutationTree<GameState> = {
  startQuery(state: GameState) {
    state.error = false;
    state.isLoading = true;
  },
  saveMatchData(state: GameState, payload: GameStats) {
    state.isLoading = false;
    state.currentMatch.assists = payload.assists;
    state.currentMatch.avgMmr = payload.avgMmr;
    state.currentMatch.backpack0 = payload.backpack0;
    state.currentMatch.backpack1 = payload.backpack1;
    state.currentMatch.backpack2 = payload.backpack2;
    state.currentMatch.deaths = payload.deaths;
    state.currentMatch.denies = payload.denies;
    state.currentMatch.duration = payload.duration;
    state.currentMatch.gold = payload.gold;
    state.currentMatch.goldSpent = payload.goldSpent;
    state.currentMatch.gpm = payload.gpm;
    state.currentMatch.heroDamage = payload.heroDamage;
    state.currentMatch.heroHealing = payload.heroHealing;
    state.currentMatch.heroId = payload.heroId;
    state.currentMatch.isRoaming = payload.isRoaming;
    state.currentMatch.item0 = payload.item0;
    state.currentMatch.item1 = payload.item1;
    state.currentMatch.item2 = payload.item2;
    state.currentMatch.item3 = payload.item3;
    state.currentMatch.item4 = payload.item4;
    state.currentMatch.item5 = payload.item5;
    state.currentMatch.kills = payload.kills;
    state.currentMatch.lane = payload.lane;
    state.currentMatch.laneRole = payload.laneRole;
    state.currentMatch.lastHits = payload.lastHits;
    state.currentMatch.level = payload.level;
    state.currentMatch.matchId = payload.matchId;
    state.currentMatch.patch = payload.patch;
    state.currentMatch.playerSlot = payload.playerSlot;
    state.currentMatch.radiantWin = payload.radiantWin;
    state.currentMatch.roshansKilled = payload.roshansKilled;
    state.currentMatch.stuns = payload.stuns;
    state.currentMatch.teamfightParticipation = payload.teamfightParticipation;
    state.currentMatch.towerDamage = payload.towerDamage;
    state.currentMatch.towersKilled = payload.towersKilled;
    state.currentMatch.xpm = payload.xpm;
  },
  error(state: GameState) {
    state.error = true;
    state.isLoading = false;
  },
};
