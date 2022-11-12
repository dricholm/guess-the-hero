import { FC, ReactNode } from 'react';
import Footer from 'src/components/atoms/Footer';
import Header from 'src/components/atoms/Header';
import 'styles/globals.scss';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="shortcut icon" href="/favicon.png" />
    </head>
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="absolute" id="modal" />
    </body>
  </html>
);

export default RootLayout;
