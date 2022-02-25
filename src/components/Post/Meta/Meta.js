// @flow
import React from 'react';
import { parse, format } from 'date-fns';
import styles from './Meta.module.scss';
import ReadTime from '../ReadTime';

type Props = {
  date: string,
  readTime?: {
    text: string,
    minutes: number,
  },
};

const Meta = ({ date, readTime }: Props) => (
  <div className={styles['meta']}>
    <span className={styles['meta__date']}>
      Published {format(parse(date, 'yyyy-MM-dd', new Date()), 'd MMM yyyy')}
    </span>
    {readTime && <span className={styles['meta__dot']}> &middot; </span>}
    {readTime && <ReadTime readTime={readTime} />}
  </div>
);

export default Meta;
