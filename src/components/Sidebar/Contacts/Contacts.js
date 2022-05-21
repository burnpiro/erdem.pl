// @flow
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import styles from './Contacts.module.scss';

type Props = {
  contacts: {
    [string]: string,
  },
  slim?: boolean,
};

const Contacts = ({ contacts, slim }: Props) => {
  const customClass = slim
    ? styles['contacts__list'] + ' ' + styles['contacts__list--slim']
    : styles['contacts__list'];
  return (
    <div className={styles['contacts']}>
      <ul className={customClass}>
        {Object.keys(contacts).map(name => (
          <li className={styles['contacts__list-item']} key={name}>
            <a
              className={styles['contacts__list-item-link']}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
              title={name}
            >
              <Icon icon={getIcon(name)} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
