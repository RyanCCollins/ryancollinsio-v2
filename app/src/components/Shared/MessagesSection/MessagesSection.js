import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import { ErrorPanel, MessagePanel } from 'components';
import './MessagesSection.scss';

const MessagesSection = ({
  isFetching,
  messages,
  errors,
  onClose
}) => (
  <div className="messages-section">
    {(() => {
      if (!isFetching && errors.length > 0) {
        return (
          <Row className="errors-row__wrapper">
            <ErrorPanel errors={errors} onClose={onClose} />
          </Row>
        );
      } else if (!isFetching && messages.length > 0 && errors.length < 0) {
        return (
          <Row className="messages-row__wrapper">
            <MessagePanel messages={messages} onClose={onClose} />
          </Row>
        );
      } else {
        return (
          <noscript />
        );
      }
    })()}
  </div>
);

MessagesSection.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  messages: PropTypes.array,
  errors: PropTypes.array,
  onClose: PropTypes.func.isRequired
};

export default MessagesSection;
