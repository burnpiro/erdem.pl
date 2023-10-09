// @flow
import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import { types } from '@babel/core';

export const selectedTabType = {
  POPULAR: 'popular',
  MAIN: '',
};

type Props = {
  selectedTab: typeof selectedTabType,
};

const Tabs = ({ selectedTab: defaultSelectedTab }: Props) => {
  const handleItemClick = newSelectedTab => {
    if (newSelectedTab !== defaultSelectedTab) {
      window.location.href = `/${newSelectedTab}`;
    }
  };

  return (
    <div className={styles['tabset']}>
      <label
        onClick={() => handleItemClick(selectedTabType.POPULAR)}
        className={
          defaultSelectedTab === selectedTabType.POPULAR
            ? styles['tabset__tab'] + ' ' + styles['tabset__tab-checked']
            : styles['tabset__tab']
        }
      >
        Popular
      </label>
      <label
        onClick={() => handleItemClick(selectedTabType.MAIN)}
        className={
          defaultSelectedTab === selectedTabType.MAIN
            ? styles['tabset__tab'] + ' ' + styles['tabset__tab-checked']
            : styles['tabset__tab']
        }
      >
        Recent
      </label>
    </div>
  );
};

export default Tabs;
