import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Custom404: NextPage = () => (
  <>
    <Head>
      <title>Not found - Guess the Hero</title>
      <meta content="Page not found." name="description" />
      <meta content="noindex" name="robots" />
    </Head>
    <div className="container">
      <h1>Not found</h1>
      <Link href="/">
        <a>To home page</a>
      </Link>
    </div>
  </>
);

export default Custom404;
