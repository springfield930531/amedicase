'use strict';

const cloneDeep = (value) => JSON.parse(JSON.stringify(value));

const resolveTemplateId = (template) => {
  if (!template) return null;
  if (typeof template === 'string' || typeof template === 'number') {
    return template;
  }
  if (template?.connect?.length) {
    const first = template.connect[0];
    return first?.id ?? first;
  }
  if (template?.id) return template.id;
  if (template?.documentId) return template.documentId;
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
  return strapi.db
    .query('api::service-page-template.service-page-template')
    .findOne({
      where: { documentId: templateId },
      populate: ['sections', 'defaultSeo'],
    });
};

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    const templateId = resolveTemplateId(data.template);
    if (!templateId) return;

    const template = await findTemplate(strapi, templateId);
    if (!template) return;

    if (!data.sections || data.sections.length === 0) {
      data.sections = cloneDeep(template.sections || []);
    }
    if (!data.seo && template.defaultSeo) {
      data.seo = cloneDeep(template.defaultSeo);
    }
  },
};
