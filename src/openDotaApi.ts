import { GameStats } from '@/store/game/types';
import axios from 'axios';

const openDota = axios.create({
  baseURL: 'https://api.opendota.com/api',
  responseType: 'json',
});

export async function queryRandom(): Promise<GameStats> {
  const publicMatches = await openDota.get('/publicMatches');
  const matchId =
    publicMatches.data[Math.floor(Math.random() * publicMatches.data.length)][
      'match_id'
    ];

  const match = await openDota.get(`/matches/${matchId}`);
  const player =
    match.data.players[Math.floor(Math.random() * match.data.players.length)];

  return {
    assists: player.assists,
    backpack0: player.backpack_0,
    backpack1: player.backpack_1,
    backpack2: player.backpack_2,
    deaths: player.deaths,
    denies: player.denies,
    duration: match.data.duration,
    gold: player.gold,
    goldSpent: player.gold_spent,
    gpm: player.gold_per_min,
    heroDamage: player.hero_damage,
    heroHealing: player.hero_healing,
    heroId: player.hero_id,
    isRoaming: player.is_roaming,
    item0: player.item_0,
    item1: player.item_1,
    item2: player.item_2,
    item3: player.item_3,
    item4: player.item_4,
    item5: player.item_5,
    neutralItem: player.item_neutral,
    kills: player.kills,
    lane: player.lane,
    laneRole: player.lane_role,
    lastHits: player.last_hits,
    level: player.level,
    matchId: match.data.match_id,
    patch: match.data.patch,
    playerSlot: player.player_slot,
    radiantWin: match.data.radiant_win,
    roshansKilled: player.roshans_killed == null ? 0 : player.roshans_killed,
    stuns: player.stuns,
    teamfightParticipation: player.teamfight_participation,
    towerDamage: player.tower_damage,
    towersKilled: player.towers_killed == null ? 0 : player.towers_killed,
    xpm: player.xp_per_min,
  };
}
