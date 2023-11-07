// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content';
import { StaticQuery, useStaticQuery } from 'gatsby';
import type { RenderCallback } from '../../../types';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';

describe('Content', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });
  const props = {
    title: 'test',
    body: '<p>test</p>',
    slug: '/2020/02/understanding-region-of-interest-ro-i-pooling',
    htmlAst: { children: [], data: { quirksMode: false }, type: 'root' },
    date: '2019-07-10',
    readTime: {
      text: '5 minutes',
      minutes: 5,
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
