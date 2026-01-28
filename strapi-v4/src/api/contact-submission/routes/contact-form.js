'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-form',
      handler: 'contact-submission.submit',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};

