import React, { PropTypes } from 'react';
import './Contact.scss';
import { ContactForm,
  LoadingIndicator,
  MessagesSection
} from '../../components';
import { Column, Row } from 'react-foundation';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  contact,
  clearContactMessages,
  clearContactErrors
} from 'actions/actionCreators';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toastr = bindActionCreators(toastrActions, this.props.dispatch);
    this.handleCloseMessages = this.handleCloseMessages.bind(this);
  }
  handleSubmit(params) {
    const {
      onSubmitContact
    } = this.props;
    onSubmitContact(params);
  }
  handleCloseMessages(sender) {
    const {
      clearMessages,
      clearErrors
    } = this.props;
    if (sender.target.id == 'button-close-messages-panel') {
      clearMessages();
    } else if (sender.target.id == 'button-close-error-panel') {
      clearErrors();
    }
  }
  render() {
    const {
      isFetching,
      errors,
      messages
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <MessagesSection
          isFetching={isFetching}
          messages={messages}
          errors={errors}
          onClose={this.handleCloseMessages}
        />
        <div className="contact-container">
          <Row>
            <Column small={12} medium={8} isColumn centerOnSmall>
              <h1 className="section-header">Contact Me</h1>
              <ContactForm
                {...this.props}
                onSubmit={this.handleSubmit}
              />
            </Column>
          </Row>
        </div>
      </LoadingIndicator>
    );
  }
}

Contact.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
  errors: PropTypes.array,
  messages: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  clearErrors: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired
};

// mapStateToProps :: {State} -> {Props} 
const mapStateToProps = (state) => ({
  errors: state.errors.contact,
  messages: state.messages.contact,
  isFetching: state.contact.isFetching
});

// mapDispatchToProps :: {Dispatch} -> {Props} 
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSubmitContact: (params) => contact(params),
    clearMessages: () => clearContactMessages(),
    clearErrors: () => clearContactErrors()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
