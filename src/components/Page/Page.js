import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';
import renderAst from "../../utils/renderAst";
import type {MarkdownRemark} from "../../types";

type Props = {
  title?: string,
  wide?: boolean,
  children?: React.Node,
  page: MarkdownRemark,
};

const Page = ({ title, wide, children, page = {} }: Props) => {
  const pageRef = useRef();
  const { htmlAst } = page;

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
        <div className={styles['page__body']}>
          {htmlAst ? renderAst(htmlAst) : ''}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
