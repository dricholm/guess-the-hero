// App directory doesn't support 404 currently
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.scss';

const NotFound: NextPage = () => (
  <>
    <Head>
      <title>Not found - Guess the Hero</title>
      <meta content="Page not found." name="description" />
      <meta content="noindex" name="robots" />
    </Head>
    <main className="container">
      <h1>Not found</h1>
      <Link href="/">To home page</Link>
    </main>
  </>
);

export default NotFound;
