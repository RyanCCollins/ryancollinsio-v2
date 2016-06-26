import React from 'react';
import {
  Label
} from 'react-foundation';
import './TagList.scss';

const TagList = ({
  tags
}) => (
  <div className="tags-list">
    <div className="tag-list">
      {tags.map((tag) =>
        <Label color={'secondary'} className="tag-item">
          <p className="tag-list__text">{tag.name}</p>
        </Label>
      )}
    </div>
  </div>
);

export default TagList;
