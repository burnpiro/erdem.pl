// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Tabs from '../components/Tabs';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';
import Search from '../components/Search';
import {selectedTabType} from "../components/Tabs/Tabs";

type Props = {
    data: AllMarkdownRemark,
    pageContext: PageContext,
};

const PopularTemplate = ({ data, pageContext }: Props) => {
    const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

    const {
        currentPage,
        hasNextPage,
        hasPrevPage,
        prevPagePath,
        nextPagePath,
    } = pageContext;

    const { edges } = data.allMarkdownRemark;
    const pageTitle =
        currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

    return (
        <Layout title={pageTitle} description={siteSubtitle}>
            <Sidebar isIndex />
            <Page>
                <Search />
                <Tabs selectedTab={selectedTabType.POPULAR} />
                <Feed edges={edges} />
                <Pagination
                    prevPagePath={prevPagePath}
                    nextPagePath={nextPagePath}
                    hasPrevPage={hasPrevPage}
                    hasNextPage={hasNextPage}
                />
            </Page>
        </Layout>
    );
};

export const query = graphql`
  query PopularTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: { draft: { eq: false }, popular: { ne: null }, template: { eq: "post" } }
      }
      sort: { fields: [frontmatter___popular, frontmatter___date], order: [DESC, DESC] }
    ) {
      edges {
        node {
          fields {
            readTime {
              text
              minutes
            }
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`;

export default PopularTemplate;
