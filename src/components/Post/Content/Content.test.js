// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content';

describe('Content', () => {
  it('renders correctly', () => {
    const props = {
      title: 'test',
      body: '<p>test</p>',
      htmlAst: { children: [], data: { quirksMode: false }, type: 'root' },
      date: '2019-07-10',
      readTime: {
        text: '5 minutes',
        minutes: 5,
      },
    };

    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
