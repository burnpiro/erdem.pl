// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import NotFoundTemplate from './not-found-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../types';
import IndexTemplate from './index-template';

describe('NotFoundTemplate', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<NotFoundTemplate />, {
        createNodeMock: () => ({
          scrollIntoView: () => {},
        }),
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
