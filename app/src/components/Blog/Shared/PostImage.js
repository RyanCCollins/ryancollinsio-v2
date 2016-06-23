import React from 'react';
import placeholder from './placeholder.png';

const PostImage = ({
  url
}) => (
  <img
    src={url !== undefined && url.length > 0 ? url : placeholder}
    alt={`A dynamically loaded image for the blog`}
  />
);

export default PostImage;
