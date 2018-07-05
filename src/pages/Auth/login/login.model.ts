import { validation } from './validation';

export const loginFields = [
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Email:',
      placeholder: 'Email Address',
      required: true
    },
    validation: {
      messages: {
        required: validation.required
      }
    },
    validators: {
      email: validation.email
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      label: 'Password:',
      placeholder: 'Password',
      required: true
    },
    validation: {
      messages: {
        required: validation.required
      }
    },
  },
]
