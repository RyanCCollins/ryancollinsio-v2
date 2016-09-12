import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import PanelItem from '../../src/components/PanelItem/PanelItem';
import FakeIcon from '../__mocks__/iconMock';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('<PanelItem />', () => {
  it('renders with default props', () => {
    const mockItem = {
      id: 1,
      title: 'Hello World',
      description: 'Lorem ipsum'
    };
    const component = renderer.create(
      <PanelItem item={mockItem} icon={FakeIcon()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
