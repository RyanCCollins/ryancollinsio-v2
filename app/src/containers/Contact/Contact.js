import React, { PropTypes } from 'react';
import './Contact.scss';
import { ContactForm,
  LoadingIndicator,
  ErrorPanel,
  MessagePanel
} from '../../components';
import { Column, Row } from 'react-foundation';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { contact } from 'actions/actionCreators';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toastr = bindActionCreators(toastrActions, this.props.dispatch);
  }
  handleSubmit(params) {
    const {
      onSubmitContact
    } = this.props;
    onSubmitContact(params);
  }
  render() {
    const {
      isFetching,
      errors,
      messages
    } = this.props;
    return (
      <LoadingIndicator isLoading={isFetching}>
        <ErrorPanel errors={errors} isVisible={!isFetching && errors.length > 0} />
        <MessagePanel messages={messages} isVisible={!isFetching && messages.length > 0} />
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

const mapStateToProps = (state) => ({
  errors: state.errors.contact,
  messages: state.messages.contact,
  isFetching: state.contact.isFetching
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    onSubmitContact: (params) => dispatch(contact(params))
  });

Contact.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
  errors: PropTypes.array,
  messages: PropTypes.array,
  isFetching: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
