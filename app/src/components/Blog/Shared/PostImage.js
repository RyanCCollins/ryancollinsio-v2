import React from 'react';

export const PostImage = ({
  image
}) => (
  <img
    src={image}
    alt={`A dynamically loaded image for the blog`}
  />
);
