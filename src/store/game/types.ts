export interface GameStats {
  assists: number;
  avgMmr: number;
  backpack0: number;
  backpack1: number;
  backpack2: number;
  deaths: number;
  denies: number;
  duration: number;
  gold: number;
  goldSpent: number;
  gpm: number;
  heroDamage: number;
  heroHealing: number;
  heroId: number;
  isRoaming: boolean | null;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  neutralItem: number;
  kills: number;
  lane: number;
  laneRole: number;
  lastHits: number;
  level: number;
  matchId: number;
  patch: string;
  playerSlot: number;
  radiantWin: boolean;
  roshansKilled: number;
  stuns: number;
  teamfightParticipation: number;
  towerDamage: number;
  towersKilled: number;
  xpm: number;
}

export interface GameState {
  currentMatch: GameStats;
  error: boolean;
  isLoading: boolean;
}
