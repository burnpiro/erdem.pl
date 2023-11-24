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
    bloggerPage: BloggerPage,
  },
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const {
    frontmatter: { title: pageTitle },
  } = data.markdownRemark;
  const metaDescription = siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}  page={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
      }
      html
      htmlAst
    }
  }
`;

export default PageTemplate;
