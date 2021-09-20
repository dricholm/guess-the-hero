import type { MouseEventHandler, ReactNode } from 'react';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
}

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  ({ children, disabled, href, onClick, type = 'button' }, ref) =>
    href ? (
      <a className={styles.button} href={href} onClick={onClick} ref={ref}>
        {children}
      </a>
    ) : (
      <button
        className={styles.button}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        type={type}
      >
        {children}
      </button>
    ),
);

Button.displayName = 'Button';

export default Button;
