// @flow
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import ResumeButton from '../ResumeButton';

type Props = {
  isIndex?: boolean,
  slim?: boolean,
};

const Sidebar = ({ isIndex, slim }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  const sidebarClass = slim
    ? styles['sidebar'] + ' ' + styles['sidebar--slim']
    : styles['sidebar'];

  return (
    <div className={sidebarClass}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} showBio={!slim} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} slim={slim} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
