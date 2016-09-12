import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import CommentThread from '../../../src/components/Blog/CommentThread/CommentThread';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('<CommentThread />', () => {
  const mockedPost = {
    title: 'Hello World',
  };
  const mockedLocation = {
    pathname: '/blog'
  };
  it('renders with required props', () => {
    const component = renderer.create(
      <CommentThread
        post={mockedPost}
        location={mockedLocation}
        onNewComment={(e) => e}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
