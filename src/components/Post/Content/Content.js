// @flow
import React from 'react';
import rehypeReact from 'rehype-react';
import styles from './Content.module.scss';
import Meta from '../Meta';
import XAIInfidelity from '../../XAIInfidelity';

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

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'xai-infidelity': XAIInfidelity },
}).Compiler;

const Content = ({ body, htmlAst, title, date, readTime }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <Meta date={date} readTime={readTime} />
    <div
      className={styles['content__body']}
      // dangerouslySetInnerHTML={{ __html: body }}
    >
      {renderAst(htmlAst)}
    </div>
  </div>
);

export default Content;
