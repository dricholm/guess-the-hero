'use client';
// So API request is from the client to avoid reaching limit

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Game from 'src/components/pages/Game';
import Loading from '../loading';
import {
  fetchMatchData,
  fetchPublicMatches,
  getRandomElement,
  parseMatchData,
} from './logic';

const GamePage = () => {
  const matchesQuery = useQuery({
    queryFn: fetchPublicMatches,
    queryKey: ['matches'],
    refetchOnWindowFocus: false,
  });
  const randomMatch = useMemo(
    () => matchesQuery.data && getRandomElement(matchesQuery.data),
    [matchesQuery.data],
  );
  const matchQuery = useQuery({
    enabled: Boolean(randomMatch),
    queryFn: () => fetchMatchData(randomMatch?.match_id),
    queryKey: ['match', randomMatch?.match_id],
    refetchOnWindowFocus: false,
  });
  const match = useMemo(
    () => matchQuery.data && parseMatchData(matchQuery.data),
    [matchQuery.data],
  );
  const player = useMemo(
    () => match && getRandomElement(match.players),
    [match],
  );

  if (matchesQuery.error || matchQuery.error) {
    throw matchesQuery.error || matchQuery.error;
  }

  return match && player ? (
    <Game
      onNewGame={matchesQuery.refetch}
      stats={{ matchId: match.id, player }}
    />
  ) : (
    <Loading />
  );
};

export default GamePage;
