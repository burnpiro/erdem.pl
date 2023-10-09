const path = require('path');
const _ = require('lodash');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');
const createPopularPostsPages = require('./pagination/create-popular-posts-page');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  });

  // Posts and pages from markdown
  const results = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                template
              }
            }
          }
        }
      }
    `
  );

  const { allMarkdownRemark } = results.data;

  _.each(allMarkdownRemark.edges, edge => {
    if (edge.node.frontmatter.template === 'post') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post-template.js'),
        context: { slug: edge.node.fields.slug },
      });
    }

    if (edge.node.frontmatter.template === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.fields.slug },
      });
    }
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createPostsPages(graphql, actions);
  await createPopularPostsPages(graphql, actions);
};

module.exports = createPages;
