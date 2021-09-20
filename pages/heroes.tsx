import { NextPage } from 'next';
import Head from 'next/head';
import Heroes from 'src/components/pages/Heroes';

const HeroesPage: NextPage = () => (
  <>
    <Head>
      <title>Dota 2 heroes - Guess the Hero</title>
      <meta content="See all of Dota 2's heroes." name="description" />
    </Head>
    <Heroes />
  </>
);

export default HeroesPage;
