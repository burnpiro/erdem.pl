import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  wide?: boolean,
  children: React.Node,
};

const Page = ({ title, wide, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  const sidebarClass = wide
    ? styles['page'] + ' ' + styles['page--wide']
    : styles['page'];

  return (
    <div ref={pageRef} className={sidebarClass}>
      <div className={styles['page__inner']}>
        {title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
