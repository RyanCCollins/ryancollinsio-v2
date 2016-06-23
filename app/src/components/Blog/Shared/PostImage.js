import React from 'react';
import placeholder from './placeholder.png';

export const PostImage = ({
  url
}) => (
  <img
    src={url.length > 0 && url !== undefined ? url : placeholder}
    alt={`A dynamically loaded image for the blog`}
  />
);
