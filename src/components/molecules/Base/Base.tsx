import { FC } from 'react';
import Footer from 'src/components/atoms/Footer';
import Header from 'src/components/atoms/Header';

const Base: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Base;
