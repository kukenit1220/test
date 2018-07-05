import { validation } from '../login/validation';


export const forgotFields = [
    {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email Address',
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
  ];