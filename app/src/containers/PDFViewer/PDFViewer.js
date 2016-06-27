import React from 'react';

const PDFViewer = ({
  url
}) => (
  <iframe
    src={`http://docs.google.com/gview?url=${url}&embedded=true`}
    style="width:600px; height:500px;"
    frameborder="0"
  />
);

export default PDFViewer;
