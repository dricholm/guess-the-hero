import { FC, ReactNode } from 'react';
import Footer from 'src/components/atoms/Footer/Footer';
import Header from 'src/components/atoms/Header/Header';
import 'styles/globals.scss';
import { SpeedInsights } from '@vercel/speed-insights/next';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="absolute" id="modal" />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
