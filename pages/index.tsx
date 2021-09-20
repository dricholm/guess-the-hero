import type { NextPage } from 'next';
import Head from 'next/head';
import Home from 'src/components/pages/Home';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>A Dota 2 quiz - Guess the Hero</title>
      <meta
        content="A Dota 2 quiz game. Guess the hero from items bought in a match. See the purchased items of a hero and other optional stats and use them to try to guess the hero."
        name="description"
      />
    </Head>
    <Home />
  </>
);

export default HomePage;
