import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { BloggerPost } from '../types';

type Props = {
  data: {
    bloggerPost: BloggerPost
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { title: postTitle } = data.bloggerPost;
  const metaDescription = siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Post post={data.bloggerPost} />
    </Layout>
  );
};


export const query = graphql`
  query PostBySlug($slug: String!) {
    bloggerPost(slug: { eq: $slug }) {
      slug
      title
      published
      content
      labels
      id,
      fields {
        readTime {
          text
          minutes
        }
        tagSlugs
      }
    }
  }
`;


export default PostTemplate;
