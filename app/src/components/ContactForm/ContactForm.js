import React from 'react';
import { reduxForm } from 'redux-form';
import { FaPaperPlane, FaCog } from 'react-icons/fa'

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
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" {...lastName}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" {...email}/>
        </div>
        <div>
          <label>What are you contacting me about?</label>
          <div>
            <select
              {...category}
              value={category.value || ''}
            >
            <option></option>
            <option value="help">I need your help on a project.</option>
            <option value="jobWellDone">I'd like to commend you on a job well done.</option>
            <option value="hire">I'd like to hire you.</option>
            <option value="hire">Something else.</option>
          </select>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <textarea
            {...text}
            value={text.value || ''}
          />
        </div>
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ?
          <FaPaperPlane />
          :
          <FaCog className="spinning" />
        }
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
