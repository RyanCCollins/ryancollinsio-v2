import React from 'react';
import {
  Label,
  Callout
} from 'react-foundation';
import './TagList.scss';

const TagList = ({
  tags
}) => (
  <div className="tags-list">
    <Callout size={'small'} className="tag-list">
      {tags.map((tag) =>
        <Label color={'secondary'} className="tag-item">
          <p className="tag-list__text">{tag.name}</p>
        </Label>
      )}
    </Callout>
  </div>
);

export default TagList;
