import React, { PropTypes } from 'react';
import {
  Callout,
  Column,
  Row
} from 'react-foundation';
import './MessagePanel.scss';
import { MdMessage } from 'react-icons/lib/md';

const Styles = {
  hidden: {
    display: 'none'
  },
  notHidden: {
    display: ''
  }
};

const Style = {
  rippingRed: {
    color: '#ff1e40'
  }
};

const MessagePanel = ({
  messages,
  isVisible,
  onClose
}) => (
  <Row className="message-panel">
    <Column small={12} large={8} isColumn centerOnSmall>
      <Callout
        color={'warning'}
        size={'large'}
        className="message-panel-callout"
        style={isVisible ? Styles.notHidden : Styles.hidden}
      >
        <button
          id="button-close-messages-panel"
          className="btn btn-close"
          onClick={onClose}
        >✕</button>
        <MdMessage style={Styles.rippingRed} className="icon-medium" />
        <h4 className="message-header">Messages</h4>
        <p className="message-subheader">The following messages were returned from the server</p>
        <ul className="no-bullet message-list">
          {messages.map((msg) =>
            <li className="message-list-item">
              <p className="message-list-item__text">
                {msg}
              </p>
            </li>
          )}
        </ul>
      </Callout>
    </Column>
  </Row>
);

MessagePanel.propTypes = {
  messages: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MessagePanel;
