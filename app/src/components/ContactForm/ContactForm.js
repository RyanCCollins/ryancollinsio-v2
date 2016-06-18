import React from 'react';
import { reduxForm } from 'redux-form';

export const fields = [
  'firstName',
  'lastName',
  'email',
  'category',
  'text'
];

class ContactForm extends React.Component {
  render() {
    const {
      handleSubmit,
      submitting,
      resetForm,
      fields: {
        firstName,
        lastName,
        email,
        category,
        text
      }
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="small-6 columns">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            className={firstName.error ? 'error' : ''}
            {...firstName}
          />
          <small class="error">Invalid entry</small>
        </div>
        <div className="small-6 columns">
          <label htmlFor="last-name">Last Name</label>
          <input {...lastName}
            id="last-name"
            type="text"
            placeholder="Last Name"
            className={lastName.error ? 'error' : ''}
          />
          <small className="error">
            {lastName.error ? lastName.error : ''}
          </small>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...email}
            id="email"
            type="email"
            placeholder="Email"
          />
          <small className="error">
            {email.error ? email.error : ''}
          </small>
        </div>
        <div>
          <label htmlFor="category">
            What are you contacting me about?
          </label>
          <div className="small-12 columns">
            <select {...category}
              id="category"
              value={category.value || ''}
              className={category.error ? 'error' : ''}
            >
            <option></option>
            <option value="help">I need your help on a project.</option>
            <option value="jobWellDone">I'd like to commend you on a job well done.</option>
            <option value="hire">I'd like to hire you.</option>
            <option value="hire">Something else.</option>
          </select>
          <small className="error">
            {email.error ? email.error : ''}
          </small>
        </div>
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <div className="small-12 columns">
          <textarea {...text}
            id="text"
            value={text.value || ''}
            className={text.error ? 'error' : ''}
          />
        </div>
      </div>
      <button type="submit" disabled={submitting}>
        Submit
      </button>
      <button type="button" disabled={submitting} onClick={resetForm}>
        Clear Form
      </button>
    </form>
    );
  }
}

ContactForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

ContactForm = reduxForm({
  form: 'contact',
  fields: [
    'firstName',
    'lastName',
    'email',
    'category',
    'text'
  ]
})(ContactForm);

export default ContactForm;
