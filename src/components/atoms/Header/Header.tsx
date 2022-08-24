import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './Header.module.scss';

const ITEMS: Array<{ href: string; text: string }> = [
  { href: '/game', text: 'Game' },
  { href: '/heroes', text: 'Heroes' },
  { href: '/items', text: 'Items' },
];

const Header: FC = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <Link href="/">
          <a>GtH</a>
        </Link>
      </h1>

      <ul className={styles.list}>
        {ITEMS.map(({ href, text }) => (
          <li key={`${text}-${href}`}>
            <Link href={href}>
              <a
                className={clsx(styles.link, {
                  [styles.active]: asPath === href,
                })}
              >
                {text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
