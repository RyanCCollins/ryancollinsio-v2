import React, { PropTypes } from 'react';
import './Contact.scss';
import { ContactForm } from '../../components';
import {
  Column,
  Row
} from 'react-foundation';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { contact } from 'actions/actionCreators';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toastr = bindActionCreators(toastrActions, this.props.dispatch)
  }
  handleSubmit (params) {
    const {
      onSubmitContact
    } = this.props;
  }
  render() {
    return (
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
  dispatch: PropTypes.func.isRequired,
  onSubmitContact: PropTypes.func.isRequired,
  errors: PropTypes.array,
  messages: PropTypes.array
};

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(Contact);
