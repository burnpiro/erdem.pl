// @flow
import React from 'react';
import styles from './ReadTime.module.scss';

import pikaCoffee from './coffee-pika.svg';
import coffee from './coffee.svg';

type Props = {
  readTime: {
    text: string,
    minutes: number,
  },
};

const ReadTime = ({ readTime: { text, minutes } }: Props) => (
  <span className={styles['readTime']}>
    {Array.from(new Array(Math.floor(Number(minutes / 20)))).map(
      (key, index) => (
        <img
          src={pikaCoffee}
          key={index}
          className={styles['readTime__icon-pika']}
          alt={'15min coffee icon'}
        />
      )
    )}
    {Array.from(
      new Array((Math.floor(minutes / 5) % 4) + (minutes < 20 ? 1 : 0))
    ).map((key, index) => (
      <img
        src={coffee}
        key={index}
        className={styles['readTime__icon']}
        alt={'5min coffee icon'}
      />
    ))}
    <span className={styles['readTime__text']}>{text}</span>
  </span>
);

export default ReadTime;
