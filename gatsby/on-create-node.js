'use strict';

const moment = require('moment');
const readingTime = require('reading-time');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'slug',
        value
      });
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tag/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }
  }

  if (node.internal.type === 'blogger__POST') {
    if (node.labels) {
      const tagSlugs = node.labels.map((tag) => `/tag/${_.kebabCase(tag)}`);
      const postSlug = `/${moment(node.published).format('YYYY/MM')}/${node.slug}`;
      const readTime = readingTime(node.content);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
      createNodeField({ node, name: 'postSlug', value: postSlug });
      createNodeField({ node, name: 'readTime', value: readTime });
    }
  }
};

module.exports = onCreateNode;
