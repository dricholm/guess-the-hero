import { MutationTree } from 'vuex';

import { GameState, GameStats } from '@/store/game/types';

export const mutations: MutationTree<GameState> = {
  startQuery(state: GameState) {
    state.error = false;
    state.isLoading = true;
    state.currentMatch.assists = 0;
    state.currentMatch.backpack0 = 0;
    state.currentMatch.backpack1 = 0;
    state.currentMatch.backpack2 = 0;
    state.currentMatch.deaths = 0;
    state.currentMatch.denies = 0;
    state.currentMatch.duration = 0;
    state.currentMatch.gold = 0;
    state.currentMatch.goldSpent = 0;
    state.currentMatch.gpm = 0;
    state.currentMatch.heroDamage = 0;
    state.currentMatch.heroHealing = 0;
    state.currentMatch.heroId = 0;
    state.currentMatch.isRoaming = false;
    state.currentMatch.item0 = 0;
    state.currentMatch.item1 = 0;
    state.currentMatch.item2 = 0;
    state.currentMatch.item3 = 0;
    state.currentMatch.item4 = 0;
    state.currentMatch.item5 = 0;
    state.currentMatch.kills = 0;
    state.currentMatch.lane = 0;
    state.currentMatch.laneRole = 0;
    state.currentMatch.lastHits = 0;
    state.currentMatch.level = 0;
    state.currentMatch.matchId = 0;
    state.currentMatch.patch = '';
    state.currentMatch.playerSlot = 0;
    state.currentMatch.radiantWin = false;
    state.currentMatch.roshansKilled = 0;
    state.currentMatch.stuns = 0;
    state.currentMatch.teamfightParticipation = 0;
    state.currentMatch.towerDamage = 0;
    state.currentMatch.towersKilled = 0;
    state.currentMatch.xpm = 0;
  },
  saveMatchData(state: GameState, payload: GameStats) {
    state.isLoading = false;
    state.currentMatch.assists = payload.assists;
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
    state.currentMatch.neutralItem = payload.neutralItem;
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
