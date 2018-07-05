import { validation } from '../../login/validation';


export const checkcodeFields = [
  {
    key: 'code',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'Enter code',
      required: true,
      maxLength: 6,
      minLength: 6,
    },
    validation: {
      messages: {
        required: validation.required
      }
    },



  },
];