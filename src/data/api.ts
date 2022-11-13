import { ApiMatchData, ApiPublicMatch } from './types';

export const BASE_URL = 'https://api.opendota.com/api';
export const PATH_PUBLIC_MATCHES = 'publicMatches';
export const PATH_MATCH_DETAILS = 'matches';

/**
 * Fetches random public match IDs.
 */
export const fetchPublicMatches = async (): Promise<ApiPublicMatch[]> => {
  const response = await fetch([BASE_URL, PATH_PUBLIC_MATCHES].join('/'));
  if (response.ok) return response.json();
  throw response;
};

export const fetchMatchData = async (
  matchId: number | undefined,
): Promise<ApiMatchData> => {
  if (!matchId) throw new Error('Match ID is required');
  const response = await fetch(
    [BASE_URL, PATH_MATCH_DETAILS, matchId].join('/'),
  );
  if (response.ok) return response.json();
  throw response;
};
