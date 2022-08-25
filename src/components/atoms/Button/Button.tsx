import clsx from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: MouseEventHandler;
  size?: 'large';
  type?: 'button' | 'submit';
}

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, Props>(
  ({ children, disabled, href, onClick, size, type = 'button' }, ref) => {
    const classes = clsx(styles.button, {
      [styles.large]: size === 'large',
    });
    return href ? (
      <a className={classes} href={href} onClick={onClick} ref={ref}>
        {children}
      </a>
    ) : (
      <button
        className={classes}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        type={type}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
