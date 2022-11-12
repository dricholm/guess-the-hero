import { Player } from 'src/components/pages/Game';

export interface ApiPublicMatch {
  avg_mmr: number;
  avg_rank_tier: number;
  cluster: number;
  dire_team: string;
  /**
   * Match duration in seconds
   */
  duration: number;
  game_mode: number;
  lobby_type: number;
  match_id: number;
  match_seq_num: number;
  num_mmr: number;
  num_rank_tier: number;
  radiant_team: string;
  radiant_win: boolean;
  start_time: number;
}

export interface ApiMatchData {
  dire_score: number;
  /**
   * Match duration in seconds
   */
  duration: number;
  /**
   * Time in seconds at which first blood occured
   */
  first_blood_time: number;
  match_id: number;
  players: {
    assists: number;
    backpack_0: number;
    backpack_1: number;
    backpack_2: number;
    deaths: number;
    denies: number;
    gold: number;
    gold_per_min: number;
    hero_damage: number;
    hero_healing: number;
    hero_id: number;
    item_0: number;
    item_1: number;
    item_2: number;
    item_3: number;
    item_4: number;
    item_5: number;
    item_neutral: number;
    kills: number;
    last_hits: number;
    level: number;
    player_slot: number;
    tower_damage: number;
    xp_per_min: number;
  }[];
  radiant_score: number;
  radiant_win: boolean;
  /**
   * UNIX timestamp at which the game started
   */
  start_time: number;
}

export interface MatchData {
  id: number;
  players: Player[];
}
