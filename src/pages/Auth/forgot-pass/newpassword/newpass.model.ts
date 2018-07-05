import { validation } from '../../login/validation';


export const newpassFields = [
  {
    key: 'new_password',
    type: 'input',
    table: 'user',
    templateOptions: {
      type: 'password',
      label: 'New Password',
      placeholder: 'New Password',
      required: true
    },
    validation: {
      messages: {
        required: validation.required
      }
    },
    validators: {
      password: validation.password
    },
  },
  {
    key: 'new_password_again',
    type: 'input',
    table: 'user',
    templateOptions: {
      type: 'password',
      label: 'New Password Again',
      placeholder: 'New Password Again',
      required: true
    },
    validation: {
      messages: {
        required: validation.required
      }
    },
    validators: {
      fieldMatch: {}
    },
  }
];