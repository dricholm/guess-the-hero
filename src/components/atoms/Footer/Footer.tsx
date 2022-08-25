import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.container}>
    <div className={clsx('container', styles.content)}>
      <ul className={styles.list}>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/dricholm/guess-the-hero"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className={styles.text}>
        Dota 2 is a registered trademark of Valve Corporation.
        <br />
        This site and service are not related in any way to Valve Corporation.
      </p>
    </div>
  </footer>
);

export default Footer;
