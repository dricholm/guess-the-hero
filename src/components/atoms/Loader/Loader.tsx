import clsx from 'clsx';
import { FC } from 'react';
import styles from './Loader.module.scss';

const Loader: FC = () => (
  <div className={styles.container} aria-label="Loading">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>

    <div className={clsx(styles.line, styles.radiant)}></div>
    <div className={clsx(styles.line, styles.dire)}></div>
  </div>
);

export default Loader;
