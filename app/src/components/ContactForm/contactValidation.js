import memoize from 'lru-memoize';
import * as validation from '../../../lib/validation';

const fullNameInput = [
  validation.valueRequired,
  validation.minLength(3),
  validation.maxLength(50)
];

const emailInput = [
  validation.valueRequired,
  validation.isEmail
];

const messageInput = [
  validation.valueRequired,
  validation.maxLength(400)
];

const contactValidation = validation.createValidator({
  fullNameInput,
  emailInput,
  messageInput
});

export default memoize(10)(contactValidation);
