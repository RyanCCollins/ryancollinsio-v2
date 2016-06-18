import React from 'react';
import './Contact.scss';
import { ContactForm } from '../../components';
import {
  Column,
  Row
} from 'react-foundation';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    console.log("Clicked Handle Submit");
  }
  render() {
    const {
      handleSubmit
    } = this.props;
    return (
      <div className="contact-container">
        <Row>
          <Column small={12} medium={8} large={6}>
            <h1 className="section-header">Contact Me</h1>
            <ContactForm
              handleSubmit={handleSubmit}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default Contact;
