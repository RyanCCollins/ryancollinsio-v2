import React, { PropTypes } from 'react';
import { Callout, Column, Row } from 'react-foundation';
import { MdWarning } from 'react-icons/lib/md';
import './ErrorPanel.scss';

const Styles = {
  hidden: {
    display: 'none'
  },
  notHidden: {
    display: ''
  }
};

const ErrorPanel = ({
  errors,
  isVisible
}) => (
  <Row className="error-panel">
    <Column small={12} large={8} isColumn centerOnSmall>
      <Callout
        color={'alert'}
        size={'large'}
        className="error-panel-callout"
        style={isVisible ? Styles.hidden : Styles.notHidden}
      >
        <MdWarning />
        <h4 className="error-header">Errors</h4>
        <ul className="no-bullet error-list">
          {errors.map((error) =>
            <li className="error-list-item">
              <p className="error-list-item__text">
                {error}
              </p>
            </li>
          )}
        </ul>
      </Callout>
    </Column>
  </Row>
);

ErrorPanel.propTypes = {
  errors: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default ErrorPanel;
