'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './Header.module.scss';

const ITEMS: { href: string; text: string }[] = [
  { href: '/play', text: 'Play' },
  { href: '/heroes', text: 'Heroes' },
  { href: '/items', text: 'Items' },
];

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <Link href="/">GtH</Link>
      </h1>

      <ul className={styles.list}>
        {ITEMS.map(({ href, text }) => (
          <li key={`${text}-${href}`}>
            <Link
              href={href}
              className={clsx(styles.link, {
                [styles.active]: pathname === href,
              })}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
