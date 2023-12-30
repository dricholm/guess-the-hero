'use client';
// So API request is from the client to avoid reaching limit

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Match from 'src/components/organisms/Match/Match';
import { fetchPublicMatches } from 'src/data/api';

const Play: React.FC = () => {
  const { data, error, refetch } = useQuery({
    queryFn: fetchPublicMatches,
    queryKey: ['matches'],
    refetchOnWindowFocus: false,
  });
  const [matchIndex, setMatchIndex] = useState(0);
  useEffect(() => {
    if (!data) return;
    setMatchIndex(0);
  }, [data]);

  const handleNext = () => {
    if (data && matchIndex < data.length - 1) {
      setMatchIndex((current) => current + 1);
      return;
    }
    refetch();
  };

  if (error) {
    throw error;
  }

  return (
    <Match
      id={data?.[data.length - 1 - matchIndex].match_id}
      onNext={handleNext}
    />
  );
};

export default Play;
