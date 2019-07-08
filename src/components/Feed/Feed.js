// @flow
import React from 'react';
import moment from 'moment';
import striptags from 'striptags';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';
import ReadTime from '../Post/ReadTime';

type Props = {
  edges: Edges,
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map(edge => (
      <div className={styles['feed__item']} key={edge.node.fields.postSlug}>
        <div className={styles['feed__item-meta']}>
          <time
            className={styles['feed__item-meta-time']}
            dateTime={moment(edge.node.published).format('MMMM D, YYYY')}
          >
            {moment(edge.node.published).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link
            className={styles['feed__item-title-link']}
            to={edge.node.fields.postSlug}
          >
            {edge.node.title}
          </Link>
        </h2>
        <ReadTime readTime={edge.node.fields.readTime} />
        <p className={styles['feed__item-description']}>
          {striptags(edge.node.content, ['br']).split('<br />')[0]}
        </p>
        <Link
          className={styles['feed__item-readmore']}
          to={edge.node.fields.postSlug}
        >
          Read
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
