import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
  },
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, url } = useSiteMetadata();
  const {
    frontmatter: { title: postTitle, description, img },
  } = data.markdownRemark;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={description} image={img} siteURL={url}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        tagSlugs
        readTime {
          text
          minutes
        }
      }
      frontmatter {
        description
        tags
        date
        title
        img {
          publicURL
        }
      }
      html
      htmlAst
    }
  }
`;

export default PostTemplate;
