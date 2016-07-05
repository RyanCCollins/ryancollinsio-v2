import React from 'react';
import { reduxForm } from 'redux-form';
import { Column, Row, Button } from 'react-foundation';
import {
  FaCog,
  FaPaperPlane
} from 'react-icons/lib/fa';
import './ContactForm.scss';
import contactValidation from './contactValidation';

export const fields = [
  'fullNameInput',
  'emailInput',
  'categoryInput',
  'messageInput'
];

const ContactForm = ({
  handleSubmit,
  submitting,
  resetForm,
  fields: {
    fullNameInput,
    emailInput,
    categoryInput,
    messageInput
  }
}) => (
  <Row>
    <Column small={12} large={8} isColumn centerOnSmall>
      <form onSubmit={handleSubmit} className="form-groups" data-abide>
        <div className="small-12 columns form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            id="full-name"
            type="text"
            placeholder="Full Name"
            className={fullNameInput.error ? 'form-control error' : 'form-control'}
            {...fullNameInput}
          />
          {fullNameInput.touched &&
            fullNameInput.error &&
            <small className="error">
              {fullNameInput.error}
            </small>
          }
        </div>
        <div className="small-12 columns form-group">
          <label htmlFor="email">Email</label>
          <input
            {...emailInput}
            id="email"
            type="email"
            placeholder="Email"
          />
        {emailInput.touched && emailInput.error &&
          <small className="error">{emailInput.error} </small>
        }
        </div>
        <div className="small-12 columns form-group">
          <label htmlFor="category">
            What are you contacting me about?
          </label>
          <div>
            <select
              {...categoryInput}
              id="category"
              value={categoryInput.value || ''}
              className={categoryInput.error ? 'error' : ''}
            >
              <option></option>
              <option value="help">I need your help on a project.</option>
              <option value="jobWellDone">I'd like to commend you on a job well done.</option>
              <option value="hire">I'd like to hire you.</option>
              <option value="else">Something else.</option>
            </select>
          </div>
        </div>
        <div className="small-12 columns form-group">
          <label htmlFor="message">Message</label>
          <div>
            <textarea
              {...messageInput}
              id="message"
              value={messageInput.value || ''}
              className={messageInput.error ? 'error' : ''}
              rows={5}
            />
          </div>
          {messageInput.touched && messageInput.error &&
            <small className="error">{messageInput.error}</small>
          }
        </div>
        <div className="button-group">
          <Button isExpanded size={'large'} disabled={submitting}>
            {submitting ?
              <FaCog className="fa-spin" />
            :
              <FaPaperPlane />
            }{' Submit'}
          </Button>
          <Button
            type="button"
            isExpanded
            size={'large'}
            disabled={submitting}
            onClick={resetForm}
          >
            Clear Form
          </Button>
        </div>
      </form>
    </Column>
  </Row>
);

ContactForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'contact',
  fields,
  validate: contactValidation
})(ContactForm);
