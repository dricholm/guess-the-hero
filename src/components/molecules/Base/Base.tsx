import { FC } from 'react';
import Footer from 'src/components/atoms/Footer';
import Header from 'src/components/atoms/Header';
import PageLoader from 'src/components/atoms/PageLoader/PageLoader';

const Base: FC = ({ children }) => (
  <>
    <PageLoader />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Base;
