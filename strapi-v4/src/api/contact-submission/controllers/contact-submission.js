'use strict';

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreController('api::contact-submission.contact-submission', ({ strapi }) => ({
  async submit(ctx) {
    const body = ctx.request.body || {};
    const payload = body.data || body;

    if (!payload || typeof payload !== 'object') {
      return ctx.badRequest('Missing contact form payload.');
    }

    const requiredFields = ['firstName', 'lastName', 'email', 'message'];
    const missing = requiredFields.filter((field) => !payload[field]);

    if (missing.length > 0) {
      return ctx.badRequest(`Missing required fields: ${missing.join(', ')}`);
    }

    try {
      await strapi.entityService.create('api::contact-submission.contact-submission', {
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          phone: payload.phone || null,
          company: payload.company || null,
          message: payload.message,
          source: payload.source || 'website',
        },
      });

      ctx.send({ success: true });
    } catch (error) {
      strapi.log.error('Contact form submission failed', error);
      ctx.throw(500, 'Unable to submit contact form.');
    }
  },
}));

