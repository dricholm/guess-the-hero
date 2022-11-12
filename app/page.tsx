import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import Card from 'src/components/atoms/Card';
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

export default Index;
