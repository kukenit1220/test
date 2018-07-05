import { validation } from '../../login/validation';


export const registerstep2Fields = [
    {
      key: 'id_type',
      type: 'select',
      templateOptions: {
        label: 'ID Type',
        required: true,
        options: [
          { label: 'Passport', value: '0' },
          { label: 'Driving Licence', value: '1' },
          { label: 'NIE', value: '2' },
        ],
      },
      validation: {
        messages: {
            required: validation.required
        }
    },
    },
    {
        key: 'IdNumber',
        type: 'input',
        templateOptions: {
          label: 'Id Number',
          required: true
        },
        validation: {
            messages: {
                required: validation.required
            }
        },
      },
  ];