// @flow
import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import { types } from '@babel/core';

export const selectedTabType = {
  POPULAR: '',
  MAIN: 'recent',
};

type Props = {
  selectedTab: typeof selectedTabType,
};

const Tabs = ({ selectedTab: defaultSelectedTab }: Props) => {
  return (
    <div className={styles['tabset']}>
      <a
        href={window.location.origin + `/${selectedTabType.POPULAR}`}
        className={
          defaultSelectedTab === selectedTabType.POPULAR
            ? styles['tabset__tab'] + ' ' + styles['tabset__tab-checked']
            : styles['tabset__tab']
        }
      >
        Popular
      </a>
      <a
        href={window.location.origin + `/${selectedTabType.MAIN}`}
        className={
          defaultSelectedTab === selectedTabType.MAIN
            ? styles['tabset__tab'] + ' ' + styles['tabset__tab-checked']
            : styles['tabset__tab']
        }
      >
        Recent
      </a>
    </div>
  );
};

export default Tabs;
