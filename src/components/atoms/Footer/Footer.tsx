import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.container}>
    <div className={classNames('container', styles.content)}>
      <ul className={styles.list}>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/dricholm/guess-the-hero">
            <a>GitHub</a>
          </Link>
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
