'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, ReactNode } from 'react';
import Footer from 'src/components/atoms/Footer/Footer';
import Header from 'src/components/atoms/Header/Header';
import queryClient from 'src/data/query-client';
import 'styles/globals.scss';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="absolute" id="modal" />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
