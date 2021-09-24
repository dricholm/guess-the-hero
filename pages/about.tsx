import { NextPage } from 'next';
import Head from 'next/head';
import About from 'src/components/pages/About';

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>About - Guess the Hero</title>
      <meta
        content="Read more information about the website, how it works and how you can contribute."
        name="description"
      />
    </Head>
    <About />
  </>
);

export default AboutPage;
