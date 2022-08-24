import { FC, ReactNode } from 'react';
import Footer from 'src/components/atoms/Footer';
import Header from 'src/components/atoms/Header';
import PageLoader from 'src/components/atoms/PageLoader';

interface Props {
  children: ReactNode;
}

const Base: FC<Props> = ({ children }) => (
  <>
    <PageLoader />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Base;
