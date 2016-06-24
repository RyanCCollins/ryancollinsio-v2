import React from 'react';
import {
  Callout,
  Column,
  Row
} from 'react-foundation';
import './MessagePanel.scss';

const MessagePanel = ({
  messages
}) => (
  <Row className="message-panel">
    <Column small={12} large={8} isColumn centerOnSmall>
      <Callout color={'warning'} size={'small'} className="message-panel-callout">
        <h4 className="message-header">
          The following messages were returned from the server
        </h4>
        <ul>
          {messages.map((msg) =>
            <li className="message-list-item">
              <p className="message-text">
                {msg}
              </p>
            </li>
          )}
        </ul>
      </Callout>
    </Column>
  </Row>
);

export default MessagePanel;
