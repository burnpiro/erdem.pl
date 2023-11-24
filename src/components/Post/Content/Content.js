// @flow
import React from 'react';
import styles from './Content.module.scss';
import Meta from '../Meta';
import Citation from '../Citation';
import renderAst from "../../../utils/renderAst";

type Props = {
  body: string,
  htmlAst: string,
  title: string,
  date: string,
  readTime?: {
    text: string,
    minutes: number,
  },
};


const Content = ({ body, slug, htmlAst, title, date, readTime }: Props) => {
  return (
    <div className={styles['content']}>
      <h1 className={styles['content__title']}>{title}</h1>
      <Meta date={date} readTime={readTime} />
      <div
        className={styles['content__body']}
        // dangerouslySetInnerHTML={{ __html: body }}
      >
        {renderAst(htmlAst)}
      </div>
      <Citation slug={slug} title={title} date={date} />
    </div>
  );
};

export default Content;
