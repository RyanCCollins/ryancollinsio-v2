import React from 'react';

const PDFViewer = ({
  url
}) => (
  <iframe
    src={`http://docs.google.com/gview?url=${url}&embedded=true`}
    style={{ width: '100vw', height: '100vh' }}
  />
);

export default PDFViewer;
