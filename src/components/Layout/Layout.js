// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';
import CookieConsent from 'react-cookie-consent';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
};

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>
    {children}
    <CookieConsent location="bottom">
      This website uses cookies to enhance the user experience
    </CookieConsent>
  </div>
);

export default Layout;
