import { NextPage } from 'next';
import Head from 'next/head';
import Items from 'src/components/pages/Items';

const ItemsPage: NextPage = () => (
  <>
    <Head>
      <title>Dota 2 items - Guess the Hero</title>
      <meta
        content="Get to know all the items Dota 2 has to offer."
        name="description"
      />
    </Head>
    <Items />
  </>
);

export default ItemsPage;
