'use strict';

const moment = require('moment');
const path = require('path');
const _ = require('lodash');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js')
  });

  // Posts and pages from markdown
  const results = await graphql(`
    {
      allBloggerPost(
        filter: { }
      ) {
        edges {
          node {
            fields {
              postSlug
            }
            slug,
            published
          }
        }
      }
      allBloggerPage(
        filter: { }
      ) {
        edges {
          node {
            slug,
            published
          }
        }
      }
    }
  `);

  const { allBloggerPost, allBloggerPage } = results.data;

  _.each(allBloggerPost.edges, (edge) => {
    createPage({
      path: edge.node.fields.postSlug,
      component: path.resolve('./src/templates/post-template.js'),
      context: { slug: edge.node.slug }
    });
  });

  _.each(allBloggerPage.edges, (edge) => {
    createPage({
      path: `/pages/${edge.node.slug}`,
      component: path.resolve('./src/templates/page-template.js'),
      context: { slug: edge.node.slug }
    });
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createPostsPages(graphql, actions);
};


module.exports = createPages;
