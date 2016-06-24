import React from 'react';
import {
  Callout,
  Column,
  Row
} from 'react-foundation';
import './ErrorPanel.scss';

const ErrorPanel = ({
  errors
}) => (
  <Row className="error-messages">
    <Column small={12} large={8} isColumn centerOnSmall>
      <Callout className="error-message-panel" color={'alert'} size={'small'}>
        <h4 className="error-message-header">
          The following messages were returned from the server
        </h4>
        <ul>
          {errors.map((error) =>
            <li className="error-list-item">
              <p className="error-message-text">
                {error}
              </p>
            </li>
          )}
        </ul>
      </Callout>
    </Column>
  </Row>
);

export default ErrorPanel;
