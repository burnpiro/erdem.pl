// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { BloggerPage } from '../types';

type Props = {
  data: {
    bloggerPage: BloggerPage
  }
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { content: pageBody } = data.bloggerPage;
  const { title: pageTitle } = data.bloggerPage;
  const metaDescription = siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    bloggerPage(slug: { eq: $slug }) {
      title
      slug
      content
      published
      kind
    }
  }
`;

export default PageTemplate;
