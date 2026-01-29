'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/pages/create-from-template',
      handler: 'page.createFromTemplate',
      config: {
        auth: { scope: ['api::page.page.create'] },
        policies: [],
      },
    },
  ],
};
