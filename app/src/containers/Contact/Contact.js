import React from 'react';
import './Contact.scss';
import { ContactForm } from '../../components';
import {
  Column,
  Row
} from 'react-foundation';
import { toastr, actions as toastrActions } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(params) {
    // toastr.success('Success', 'Thanks for sending me a message!  I will get back to you as soon as possible.');
  }
  render() {
    return (
      <div className="contact-container">
        <Row>
          <Column small={12} medium={8} isColumn centerOnSmall>
            <h1 className="section-header">Contact Me</h1>
            <ContactForm
              {...this.props}
              onSubmit={this.submitForm}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Contact;
