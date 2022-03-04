import { Router } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';
import styles from './PageLoader.module.scss';

const PageLoader: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const handleStart = useCallback(() => {
    setLoading(true);
  }, []);
  const handleEnd = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleEnd);
    Router.events.on('routeChangeError', handleEnd);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleEnd);
      Router.events.off('routeChangeError', handleEnd);
    };
  }, [handleEnd, handleStart]);

  return isLoading ? (
    <div aria-label="Loading" className={styles.loader} />
  ) : null;
};

export default PageLoader;
