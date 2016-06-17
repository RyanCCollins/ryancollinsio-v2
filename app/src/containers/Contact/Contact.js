import React from 'react';
import './Contact.scss';
import { ContactForm } from '../../components';

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
        <h1 className="section-header">Contact Me</h1>
        <ContactForm
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

export default Contact;
