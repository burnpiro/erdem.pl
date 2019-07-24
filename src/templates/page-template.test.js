// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import PageTemplate from './page-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import markdownRemark from '../../jest/__fixtures__/markdown-remark';
import type { RenderCallback } from '../types';
import IndexTemplate from './index-template';

describe('PageTemplate', () => {
  const props = {
    data: {
      ...markdownRemark,
    },
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<PageTemplate {...props} />, {
        createNodeMock: () => ({
          scrollIntoView: () => {},
        }),
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
