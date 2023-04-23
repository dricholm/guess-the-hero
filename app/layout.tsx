import { FC, ReactNode } from 'react';
import Footer from 'src/components/atoms/Footer/Footer';
import Header from 'src/components/atoms/Header/Header';
import 'styles/globals.scss';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="absolute" id="modal" />
    </body>
  </html>
);

export default RootLayout;
