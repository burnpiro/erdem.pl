// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Post from './Post';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import markdownRemark from '../../../jest/__fixtures__/markdown-remark';
import type { RenderCallback } from '../../types';

describe('Post', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  const props = {
    post: {
      id: 'test-123',
      html: '<p>test</p>',
      htmlAst: { children: [], data: { quirksMode: false }, type: 'root' },
      fields: {
        slug: '/2020/02/understanding-region-of-interest-ro-i-pooling',
        categorySlug: '/test-category',
        tagSlugs: ['/test_0', '/test_1'],
      },
      frontmatter: {
        date: '2016-09-01',
        tags: ['test_0', 'test_1'],
        title: 'test',
      },
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
