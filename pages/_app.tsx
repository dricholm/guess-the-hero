import type { AppProps } from 'next/app';
import { FC } from 'react';
import Base from 'src/components/molecules/Base';
import '../styles/globals.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Base>
    <Component {...pageProps} />
  </Base>
);

export default MyApp;
