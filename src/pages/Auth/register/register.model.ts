import { validation } from '../login/validation';


export const registerFields =
  [
    {
      key: 'first_name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'First Name',
        placeholder: 'First Name',
        required: true
      },
      validation: {
        messages: {
          required: validation.required
        }
      },

    },
    {
      key: 'last_name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Last Name',
        placeholder: 'Last Name',
        required: true
      },
      validation: {
        messages: {
          required: validation.required
        }
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Email',
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
        label: 'Password',
        placeholder: 'Password',
        required: true
      },
      validation: {
        messages: {
          required: validation.required
        }
      },
      validators: {
        password: validation.password
      }


    },
    {
      key: 'passwordConfirm',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password Again',
        placeholder: 'Password Again',
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

    },
    {
      key: 'grams',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Grams',
        placeholder: 'Estimated Monthly Consumption (grams)',
        required: true
      },
      validation: {
        messages: {
          required: validation.required
        }
      },
    },
    {
      key: 'referral_number',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Referral Number',
        placeholder: 'Referral Number',
        required: true
      },
      validation: {
        messages: {
          required: validation.required
        }
      },
    },
  ]

