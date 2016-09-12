import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import AppStoreButton from '../../src/components/AppStoreButton/AppStoreButton';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('<AppStoreButton />', () => {
  it('renders with required props', () => {
    const component = renderer.create(
      <AppStoreButton url="https://www.ryancollins.io" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
