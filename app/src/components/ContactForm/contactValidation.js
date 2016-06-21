import memoize from 'lru-memoize';
import * as validation from '../../../lib/validation';

const contactValidation = validation.createValidator({
  fullName: [validation.required, validation.minLength(3), validation.maxLength(50)],
  email: [validation.required, validation.email],
  text: [validation.required, validation.maxLength(400)]
});

export default memoize(10)(contactValidation);
