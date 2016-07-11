import React, { PropTypes } from 'react';
import { Column } from 'react-foundation';
import './PanelItem.scss';

const PanelItem = ({
  item,
  icon
}) => (
  <Column
    small={12}
    medium={6}
    large={4}
    className={`panel-item ${item.id > 2 ? 'bottom' : 'top'}`}
  >
    <div className="inner-content">
      {icon}
      <h4 className="centered raleway uppercase">{item.title}</h4>
      <p className="text-small text-light justified">{item.description}</p>
    </div>
  </Column>
);

PanelItem.propTypes = {
  icon: React.Children,
  item: PropTypes.object.isRequired
};

export default PanelItem;
