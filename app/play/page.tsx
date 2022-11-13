'use client';
// So API request is from the client to avoid reaching limit

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Match from 'src/components/organisms/Match';
import { fetchPublicMatches } from '../../src/data/api';
import Loading from '../loading';

const GamePage = () => {
  const { data, error, refetch } = useQuery({
    queryFn: fetchPublicMatches,
    queryKey: ['matches'],
    refetchOnWindowFocus: false,
  });
  const [matchIndex, setMatchIndex] = useState(0);

  const handleNext = () => {
    if (data && matchIndex < data.length - 1) {
      setMatchIndex((current) => current + 1);
      return;
    }
    refetch();
    setMatchIndex(0);
  };

  if (error) {
    throw error;
  }

  return data ? (
    <Match id={data[matchIndex].match_id} onNext={handleNext} />
  ) : (
    <Loading message="Fetching list of public matches..." />
  );
};

export default GamePage;
