'use strict';

module.exports = {
  'contact-details': {
    mixin: 'radio-group',
    validate: ['required'],
    options: [{
      value: 'email',
      toggle: 'email',
      child: 'input-text',
      dependent: {
        value: 'email',
        field: 'contact-details'
      }
    },
    {
      value: 'no-email',
      toggle: 'address-group',
      dependent: {
        value: 'no-email',
        field: 'contact-details'
      }
    }],
    legend: {
      className: 'visuallyhidden'
    }
  },
  // email: {
  //   validate: ['required', 'email'],
  //   type: 'email',
  //   dependent: {
  //     value: '',
  //     field: 'use-address'
  //   }
  // },
  'use-address': {
    toggle: 'address-group'
  },
  email: {
    validate: ['required', 'email'],
    dependent: {
      value: 'email',
      field: 'contact-details'
    }
  },
  'contact-address-house-number': {
    validate: ['required'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'no-email',
      field: 'contact-details'
    }
  },
  'contact-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'no-email',
      field: 'contact-details'
    }
  },
  'contact-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'no-email',
      field: 'contact-details'
    }
  },
  'contact-address-county': {
    label: 'fields.address-county.label'
  },
  'contact-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'no-email',
      field: 'contact-details'
    }
  }
};
