require('dotenv').config();

const siteConfig = require('./config.js');
const postCssPlugins = require('./postcss-config.js');

module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => {
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at erdem.pl. You can read it online by <a href="${site
                  .siteMetadata.site_url +
                  edge.node.fields.slug}">clicking here</a>.)</div>
              `;
                return Object.assign(
                  {},
                  {
                    title: edge.node.frontmatter.title,
                    description: edge.node.frontmatter.description,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.site_url + edge.node.fields.slug,
                    guid: site.siteMetadata.site_url + edge.node.fields.slug,
                    custom_elements: [
                      { 'content:encoded': edge.node.excerpt + postText },
                    ],
                  }
                );
              }),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {frontmatter: { draft: {eq: false}}}
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      htmlAst
                      fields { 
                        slug
                      }
                      frontmatter {
                        title
                        date
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Kemal Erdem Blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-katex',
            options: {
              strict: 'ignore',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 1280, linkImagesToOriginal: false },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // point!
            options: {},
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Quiet Light',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-component',
            options: {
              components: [
                'xai-infidelity',
                'rnn-process',
                'rnn-with-attention',
                'image-with-attention',
                'sin-position-embedding',
              ],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'posts',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          preset: 'match',
          tokenize: 'full',
          encode: 'advanced',
          bidirectional: true,
          depth: 2,
          resolution: 9,
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMarkdownRemark(
              filter: {
                frontmatter: { draft: { eq: false } }
              }
            ) {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  template
                  description
                  date
                }
                rawMarkdownBody
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'slug',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'description', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'slug', 'title', 'description', 'template', 'date'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            slug: node.fields.slug,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            template: node.frontmatter.template,
            date: node.frontmatter.date,
            body: node.rawMarkdownBody,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToStylesProvider: `src/styles-provider-props`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GOOGLE_ANALITICS_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: 'daily',
            priority: 0.7,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'static/main.jpg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-plugin-flow',
  ],
};
