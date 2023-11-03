// @flow
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Citation.module.scss';
import { useSiteMetadata } from '../../../hooks';
import { format, parse } from 'date-fns';

const Citation = ({ date, slug, title }) => {
  const { author, url } = useSiteMetadata();

  const name = slug.split('/')[3].replace(/-([a-z0-9])/g, function(g) {
    return g[1].toUpperCase();
  });

  const parsedDate = parse(date, 'yyyy-MM-dd', new Date());

  const code = `@article{erdem${format(parsedDate, `yyyy`) + name},
    title   = "${title}",
    author  = "${author.name}",
    journal = "${url}",
    year    = "${format(parsedDate, `yyyy`)}",
    month   = "${format(parsedDate, `MMM`)}",
    url     = "${url + slug}"
}
`;

  return (
    <div className={styles['citation']}>
      <h3>Citation</h3>
      <blockquote className={styles['citation__text']}>
        {`${author.name}, (${format(parsedDate, `MMM yyyy`)}). "${title}". `}
        <a href={url + slug}>{url + slug}</a>
      </blockquote>
      <b>or</b>
      <pre
        className={styles['citation__code']}
        data-language={'javascript'}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Citation;
