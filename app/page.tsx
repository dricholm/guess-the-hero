import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import Card from 'src/components/atoms/Card/Card';
import styles from './styles.module.scss';

const Index: FC = () => (
  <div className={clsx('container', styles.container)}>
    <h1>Test your Dota 2 knowledge</h1>
    <Card>
      <p>How well can you guess a hero from seeing their purchased items?</p>
      <Link className="btn" href="/play">
        Play now
      </Link>
    </Card>
  </div>
);

export const metadata: Metadata = {
  description:
    'A Dota 2 quiz game. Guess the hero from items bought in a match. See the purchased items of a hero and other optional stats and use them to try to guess the hero.',
  title: 'A Dota 2 quiz - Guess the Hero',
};

export default Index;
