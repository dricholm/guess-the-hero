import { Metadata } from 'next';
import Play from 'src/components/organisms/Play/Play';

const PlayPage = () => <Play />;

export const metadata: Metadata = {
  description:
    'Play a quiz game of Dota 2. Guess the hero from a random match only by seeing their inventory.',
  title: 'Dota 2 - Guess the Hero',
};

export default PlayPage;
