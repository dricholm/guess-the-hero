import { Metadata, NextPage } from 'next';
import QueryProvider from 'src/components/atoms/QueryProvider/QueryProvider';
import Play from 'src/components/organisms/Play/Play';

const PlayContainer: NextPage = () => (
  <QueryProvider>
    <Play />
  </QueryProvider>
);

export const metadata: Metadata = {
  description:
    'Play a quiz game of Dota 2. Guess the hero from a random match only by seeing their inventory.',
  title: 'Dota 2 - Guess the Hero',
};

export default PlayContainer;
