'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/home-page',
      handler: 'home-page.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/home-page',
      handler: 'home-page.update',
      config: {
        policies: [],
      },
    },
  ],
};

