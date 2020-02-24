import axios, { AxiosPromise } from 'axios';

import { GameStats } from '@/store/game/types';

const openDota = axios.create({
  baseURL: 'https://api.opendota.com/api/',
  responseType: 'json',
});

export async function queryRandom(
  durationMin: number,
  durationMax: number,
  mmrMin: number,
  mmrMax: number,
): Promise<GameStats> {
  const request = await openDota.get(
    `explorer?sql=${encodeURIComponent(`SELECT
player_matches.match_id,
public_matches.avg_mmr,
public_matches.duration,
public_matches.radiant_win,
player_matches.player_slot,
player_matches.hero_id,
player_matches.item_0,
player_matches.item_1,
player_matches.item_2,
player_matches.item_3,
player_matches.item_4,
player_matches.item_5,
player_matches.item_neutral,
player_matches.backpack_0,
player_matches.backpack_1,
player_matches.backpack_2,
player_matches.kills,
player_matches.deaths,
player_matches.assists,
player_matches.gold,
player_matches.last_hits,
player_matches.denies,
player_matches.gold_per_min,
player_matches.xp_per_min,
player_matches.gold_spent,
player_matches.hero_damage,
player_matches.tower_damage,
player_matches.hero_healing,
player_matches.level,
player_matches.stuns,
player_matches.lane,
player_matches.lane_role,
player_matches.is_roaming,
player_matches.teamfight_participation,
player_matches.towers_killed,
player_matches.roshans_killed,
match_patch.patch
FROM
public_matches
JOIN player_matches ON player_matches.match_id = public_matches.match_id
JOIN match_patch ON match_patch.match_id = public_matches.match_id
WHERE
public_matches.avg_mmr > ${mmrMin} AND public_matches.avg_mmr < ${mmrMax}
AND
public_matches.duration > ${durationMin *
      60} AND public_matches.duration < ${durationMax * 60}
ORDER BY RANDOM()
LIMIT 1
`)}`,
  );

  if (request.data.rows.length === 0) {
    throw new Error('No matches were returned');
  }

  return {
    assists: request.data.rows[0].assists,
    avgMmr: request.data.rows[0].avg_mmr,
    backpack0: request.data.rows[0].backpack_0,
    backpack1: request.data.rows[0].backpack_1,
    backpack2: request.data.rows[0].backpack_2,
    deaths: request.data.rows[0].deaths,
    denies: request.data.rows[0].denies,
    duration: request.data.rows[0].duration,
    gold: request.data.rows[0].gold,
    goldSpent: request.data.rows[0].gold_spent,
    gpm: request.data.rows[0].gold_per_min,
    heroDamage: request.data.rows[0].hero_damage,
    heroHealing: request.data.rows[0].hero_healing,
    heroId: request.data.rows[0].hero_id,
    isRoaming: request.data.rows[0].is_roaming,
    item0: request.data.rows[0].item_0,
    item1: request.data.rows[0].item_1,
    item2: request.data.rows[0].item_2,
    item3: request.data.rows[0].item_3,
    item4: request.data.rows[0].item_4,
    item5: request.data.rows[0].item_5,
    neutralItem: request.data.rows[0].item_neutral,
    kills: request.data.rows[0].kills,
    lane: request.data.rows[0].lane,
    laneRole: request.data.rows[0].lane_role,
    lastHits: request.data.rows[0].last_hits,
    level: request.data.rows[0].level,
    matchId: request.data.rows[0].match_id,
    patch: request.data.rows[0].patch,
    playerSlot: request.data.rows[0].player_slot,
    radiantWin: request.data.rows[0].radiant_win,
    roshansKilled: request.data.rows[0].roshans_killed,
    stuns: request.data.rows[0].stuns,
    teamfightParticipation: request.data.rows[0].teamfight_participation,
    towerDamage: request.data.rows[0].tower_damage,
    towersKilled: request.data.rows[0].towers_killed,
    xpm: request.data.rows[0].xp_per_min,
  };
}
