import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import Divider from '../../src/components/Divider/Divider';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('<Divider />', () => {
  it('renders with default props', () => {
    const component = renderer.create(
      <Divider />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with a color set', () => {
    const component = renderer.create(
      <Divider color={'#123456'} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
