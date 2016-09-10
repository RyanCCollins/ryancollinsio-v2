import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';
import ErrorPane from '../../src/components/ErrorPane/ErrorPane';
// import jest, { expect, describe, it } from 'jest';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('<Divider />', () => {
  it('renders with default props', () => {
    const component = renderer.create(
      <ErrorPane />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders visible with errors', () => {
    const component = renderer.create(
      <ErrorPane isVisibile errors={['OOps 😋', 'What? 🤔']} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders invisible with no errors', () => {
    const component = renderer.create(
      <ErrorPane isVisibile={false} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
