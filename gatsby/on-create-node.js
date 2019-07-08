const moment = require('moment');
const readingTime = require('reading-time');
const _ = require('lodash');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug,
      });
    } else {
      createNodeField({
        node,
        name: 'slug',
        value: `/${moment(node.date).format('YYYY/MM')}/${_.kebabCase(
          node.frontmatter.title
        )}`,
      });
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tag/${_.kebabCase(tag)}/`
      );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.template === 'post') {
      const readTime = readingTime(node.internal.content);
      createNodeField({ node, name: 'readTime', value: readTime });
    }
  }
};

module.exports = onCreateNode;
