'use strict';

/**
 * contact-submission controller
 */

module.exports = {
  async create(ctx) {
    // Allow public access - bypass permission check
    const { data } = ctx.request.body;
    
    try {
      const entry = await strapi.entityService.create(
        'api::contact-submission.contact-submission',
        {
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone || null,
            company: data.company || null,
            message: data.message,
            source: data.source || 'unknown',
          },
        }
      );
      
      ctx.send(entry);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
