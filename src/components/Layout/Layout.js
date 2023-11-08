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
  displayCookie?: boolean,
  siteURL?: string,
  image?: {
    publicURL: string,
  },
};

const Layout = ({
  children,
  title,
  description,
  siteURL,
  image,
  displayCookie = true,
}: Props) => (
  <React.Fragment>
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="og:description" content={description} />
        {image ? <meta property="og:image" content={siteURL + image.publicURL} /> : ''}
      </Helmet>
      {children}
    </div>
    {displayCookie && (
      <CookieConsent location="bottom" style={{ backgroundColor: '#222' }}>
        This website uses cookies to enhance the user experience
      </CookieConsent>
    )}
  </React.Fragment>
);

export default Layout;
