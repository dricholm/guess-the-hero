import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import Button from 'src/components/atoms/Button';
import Card from 'src/components/atoms/Card';
import styles from './Home.module.scss';

const Home: FC = () => (
  <div className={clsx('container', styles.container)}>
    <h1>Test your Dota 2 knowledge</h1>
    <Card>
      <p>How well can you guess a hero from seeing their purchased items?</p>
      <Link href="/game" passHref={true} legacyBehavior>
        <Button>Play now</Button>
      </Link>
    </Card>
  </div>
);

export default Home;
