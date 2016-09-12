import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import PDFViewer from '../../src/components/PDFViewer/PDFViewer';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('<Divider />', () => {
  it('renders with default props', () => {
    const component = renderer.create(
      <PDFViewer
        url="https://s3.amazonaws.com/accredible-profile-uploads/udacity/resumes/1469994565898"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
