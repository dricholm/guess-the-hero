import { Player } from 'src/components/pages/Game';
import { ApiMatchData, ApiPublicMatch, MatchData } from './types';

const BASE_URL = 'https://api.opendota.com/api';
const PATH_PUBLIC_MATCHES = 'publicMatches';
const PATH_MATCH_DETAILS = 'matches';

export const getRandomElement = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

/**
 * Fetches random public match IDs.
 */
export const fetchPublicMatches = async (): Promise<ApiPublicMatch[]> => {
  const response = await fetch([BASE_URL, PATH_PUBLIC_MATCHES].join('/'));
  return response.json();
};

export const fetchMatchData = async (
  matchId: number,
): Promise<ApiMatchData> => {
  const response = await fetch(
    [BASE_URL, PATH_MATCH_DETAILS, matchId].join('/'),
  );
  return response.json();
};

export const parseMatchData = (apiMatchData: ApiMatchData): MatchData => {
  return {
    id: apiMatchData.match_id,
    players: apiMatchData.players.map((player) => {
      const items: Player['items'] = {
        backpack: [player.backpack_0, player.backpack_1, player.backpack_2],
        inventory: [
          player.item_0,
          player.item_1,
          player.item_2,
          player.item_3,
          player.item_4,
          player.item_5,
        ],
      };
      if (player.item_neutral) items.neutral = player.item_neutral;
      return { heroId: player.hero_id, items };
    }),
  };
};
