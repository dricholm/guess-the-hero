'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

const ClientOnlyPortal: FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#modal') as HTMLDivElement;
    setMounted(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return isMounted
    ? createPortal(children, ref.current ?? document.body)
    : null;
};

export default ClientOnlyPortal;
