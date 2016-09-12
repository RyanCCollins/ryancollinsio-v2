import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import DownChevron from '../../src/components/DownChevron/DownChevron';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('<DownChevron />', () => {
  it('renders with a scroll To Section', () => {
    const component = renderer.create(
      <DownChevron scrollToSection="main" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
