import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import { ErrorPanel, MessagePanel } from 'components';

const MessagesSection = ({
  isFetching,
  messages,
  errors
}) => (
  <div className="messages-section">
    {(!isFetching && errors.length) &&
      <Row>
        <ErrorPanel errors={errors} />
      </Row>
    }
    {(!isFetching && messages.length && !errors.length) &&
      <Row>
        <MessagePanel messages={messages} />
      </Row>
    }
  </div>
);

MessagesSection.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  messages: PropTypes.array,
  errors: PropTypes.array
};

export default MessagesSection;
