import React, { PropTypes } from 'react';

const PDFViewer = ({
  url
}) => (
  <iframe
    src={`http://docs.google.com/gview?url=${url}&embedded=true`}
    style={{ width: '100vw', height: '100vh' }}
  />
);

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired
};

export default PDFViewer;
