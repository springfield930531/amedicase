'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

const cloneDeep = (value) => JSON.parse(JSON.stringify(value));

const resolveTemplateId = (payload) => {
  if (!payload) return null;
  if (payload.templateId) return payload.templateId;
  if (payload.templateKey) return payload.templateKey;
  if (payload.template) return payload.template;
  return null;
};

const findTemplate = async (strapi, templateId) => {
  if (!templateId) return null;
  if (typeof templateId === 'number' || /^\d+$/.test(String(templateId))) {
    return strapi.entityService.findOne(
      'api::service-page-template.service-page-template',
      Number(templateId),
      { populate: ['sections', 'defaultSeo'] }
    );
  }
  const template = await strapi.db
    .query('api::service-page-template.service-page-template')
    .findOne({
      where: {
        $or: [{ key: templateId }, { documentId: templateId }],
      },
      populate: ['sections', 'defaultSeo'],
    });
  return template;
};

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async createFromTemplate(ctx) {
    const { title, slug } = ctx.request.body || {};
    const templateId = resolveTemplateId(ctx.request.body || {});

    if (!templateId) {
      return ctx.badRequest('templateId or templateKey is required');
    }
    if (!title || !slug) {
      return ctx.badRequest('title and slug are required');
    }

    const template = await findTemplate(strapi, templateId);
    if (!template) {
      return ctx.notFound('Template not found');
    }

    const existing = await strapi.entityService.findMany('api::page.page', {
      filters: { slug },
      limit: 1,
    });
    if (existing && existing.length) {
      return ctx.badRequest('slug already exists');
    }

    const payload = {
      title,
      slug,
      template: template.documentId || template.id,
      sections: cloneDeep(template.sections || []),
      seo: template.defaultSeo ? cloneDeep(template.defaultSeo) : undefined,
    };

    const created = await strapi.entityService.create('api::page.page', { data: payload });
    ctx.body = created;
  },
}));
