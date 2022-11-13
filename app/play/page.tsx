'use client';
// So API request is from the client to avoid reaching limit

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Game from 'src/components/pages/Game';
import { getRandomElement } from 'src/data/utils';
import {
  fetchMatchData,
  fetchPublicMatches,
  parseMatchData,
} from '../../src/data/api';
import Loading from '../loading';

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
