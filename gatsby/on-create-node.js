const parse = require('date-fns/parse');
const format = require('date-fns/format');
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
        value: `/${format(
          parse(node.frontmatter.date, 'yyyy-MM-dd', new Date()),
          'yyyy/MM'
        )}/${_.kebabCase(node.frontmatter.title)}`,
      });
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tag/${_.kebabCase(tag)}/`
      );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.template === 'post') {
      const readTime = readingTime(node.internal.content, {
        wordsPerMinute: 60,
      });
      createNodeField({ node, name: 'readTime', value: readTime });
    }
  }
};

module.exports = onCreateNode;
