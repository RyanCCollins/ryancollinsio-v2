import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import Author from '../../../src/components/Blog/Author/Author';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

const mockedAuthor = {
  avatar: '',
  bio: {
    md: 'Hello World'
  },
  name: {
    first: 'Ryan',
    last: 'Collins'
  }
}

describe('<Author />', () => {
  it('renders with required props', () => {
    const component = renderer.create(
      <Author author={mockedAuthor} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with social links', () => {
    const mockedAuthorWithLinks = Object.assign({}, mockedAuthor, {
      website: 'http://www.ryancollins.io',
      github: 'https://github.com/ryanccollins',
      twitter: 'https://twitter.com/ryancollinsio'
    });
    const component = renderer.create(
      <Author author={mockedAuthorWithLinks} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
