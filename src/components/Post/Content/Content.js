// @flow
import React from 'react';
import rehypeReact from 'rehype-react';
import styles from './Content.module.scss';
import Meta from '../Meta';
import XAIInfidelity from '../../XAIInfidelity';
import RNNProcess from '../../RNNProcess/RNNProcess';
import RNNWithAttention from '../../RNNWithAttention/RNNWithAttention';
import ImageWithAttention from '../../ImageWithAttention/ImageWithAttention';

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
  components: {
    'xai-infidelity': XAIInfidelity,
    'rnn-process': RNNProcess,
    'rnn-with-attention': RNNWithAttention,
    'image-with-attention': ImageWithAttention,
  },
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
