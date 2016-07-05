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
  isVisible,
  onClose
}) => (
  <Row className="error-panel">
    <Column small={12} large={8} isColumn centerOnSmall>
      <Callout
        color={'alert'}
        size={'small'}
        className="error-panel-callout radius"
        style={isVisible ? Styles.notHidden : Styles.hidden}
      >
        <button
          id="button-close-error-panel"
          className="btn btn-close"
          onClick={onClose}
        >✕</button>
        <MdWarning className="icon-medium icon-red" />
        <h4 className="error-header">Errors</h4>
        <p className="error-subheader">The following errors were returned from the server</p>
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
  errors: PropTypes.array,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ErrorPanel;
