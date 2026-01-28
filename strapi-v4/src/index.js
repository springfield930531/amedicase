'use strict';

const path = require('path');
const fs = require('fs');
const mime = require('mime-types');
const crypto = require('crypto');

const FRONTEND_IMAGES_DIR = (() => {
  if (process.env.FRONTEND_IMAGES_DIR) {
    return path.resolve(process.env.FRONTEND_IMAGES_DIR);
  }
  return path.resolve(__dirname, '..', '..', 'frontend', 'public', 'images');
})();

const ensureMedia = async (strapi, relativePath, options = {}) => {
  if (!relativePath) {
    return null;
  }

  const absolutePath = path.resolve(FRONTEND_IMAGES_DIR, relativePath);
  if (!fs.existsSync(absolutePath)) {
    strapi.log.warn(`Seed: missing asset ${relativePath}`);
    return null;
  }

  const buffer = fs.readFileSync(absolutePath);
  const hash = crypto.createHash('md5').update(buffer).digest('hex');

  const existing = await strapi.db.query('plugin::upload.file').findOne({
    where: { hash },
  });
  if (existing) {
    return existing.id;
  }

  const stats = fs.statSync(absolutePath);
  const baseName = path.basename(relativePath);
  const uploadService = strapi.plugin('upload').service('upload');
  let uploaded;
  try {
    uploaded = await uploadService.upload({
      data: {
        fileInfo: {
          name: options.displayName || baseName,
          alternativeText: options.alt || baseName,
          caption: options.caption || relativePath,
        },
      },
      files: {
        path: absolutePath,
        filepath: absolutePath,
        originalFilename: baseName,
        mimetype: mime.lookup(absolutePath) || 'application/octet-stream',
        size: stats.size,
      },
    });
  } catch (error) {
    strapi.log.error(
      `Seed upload failed for ${relativePath} (resolved: ${absolutePath})`,
      error
    );
    throw error;
  }

  return uploaded?.[0]?.id || null;
};

const syncAllFrontendAssets = async (strapi) => {
  if (!fs.existsSync(FRONTEND_IMAGES_DIR)) {
    strapi.log.warn(`Seed: frontend images directory not found (${FRONTEND_IMAGES_DIR})`);
    return {};
  }

  const entries = {};
  const stack = [FRONTEND_IMAGES_DIR];

  while (stack.length > 0) {
    const current = stack.pop();
    const items = fs.readdirSync(current, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(current, item.name);
      if (item.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      const relative = path.relative(FRONTEND_IMAGES_DIR, fullPath);
      try {
        const id = await ensureMedia(strapi, relative);
        entries[relative] = id;
      } catch (error) {
        strapi.log.warn(
          `Seed: failed to import asset ${relative}: ${error && error.stack ? error.stack : error}`
        );
      }
    }
  }

  return entries;
};

const getAssetId = (assets, relativePath) => assets?.[relativePath] || null;

const buildHomeSections = async (strapi) => {
  const assetMap = await syncAllFrontendAssets(strapi);
  const heroDesktop = getAssetId(assetMap, 'hero-desktop-bg.jpg');
  const heroMobile = getAssetId(assetMap, 'Hero photo Mobile.jpg');
  const heroLogo = getAssetId(assetMap, 'amedicase-logo-desktop.svg');
  const imageHighlightBg = getAssetId(assetMap, 'Photo section3.jpg');
  const whyChooseImage = getAssetId(assetMap, 'why-choose-image-figma.png');
  const processIllustration = getAssetId(assetMap, 'how-it-works-image.jpg');
  const teamPhoto = getAssetId(assetMap, 'team-member-photo.jpg');
  const teamGraphic = getAssetId(assetMap, 'team-vector-logo.svg');
  const mailIcon = getAssetId(assetMap, 'mail-icon.svg');
  const facebookIcon = getAssetId(assetMap, 'facebook-icon.svg');
  const instagramIcon = getAssetId(assetMap, 'instagram-icon.svg');

  const heroSection = {
    __component: 'sections.hero-section',
    enabled: true,
    eyebrow: null,
    title: 'Optimize Your Healthcare & Medical Operations',
    subtitle:
      'Delegate your billing, intake, and back-office operations to U.S.-trained healthcare professionals, so you can focus on patient care.',
    primaryCta: {
      label: 'Start building your team today',
      url: '/contact',
      isExternal: false,
    },
    desktopBackground: heroDesktop,
    mobileBackground: heroMobile,
    logoImage: heroLogo,
  };

  const serviceGrid = {
    __component: 'sections.service-grid',
    enabled: true,
    label: 'Our Outsourcing Solutions',
    title: null,
    services: [
      {
        title: 'Customer Support',
        description: 'Patient calls, scheduling, follow-ups and pre-visit coordination.',
      },
      {
        title: 'Accounting & Finance',
        description: 'Billing, payroll and claims reconciliation.',
      },
      {
        title: 'QuickBooks support',
        description: 'Back office & administration for your ledgers and receivables.',
      },
      {
        title: 'Recruitment & Credentialing',
        description: 'HR onboarding, credentialing, documentation and data entry.',
      },
      {
        title: 'Creative & Development',
        description: 'Medical website maintenance, patient form design and EMR integrations.',
      },
    ],
    cta: {
      label: 'Explore All Services',
      url: '/services',
      isExternal: false,
    },
  };

  const imageHighlight = {
    __component: 'sections.image-highlight',
    enabled: true,
    label: null,
    title: 'Redefining patient management through clarity and trust.',
    subtitle: null,
    backgroundImage: imageHighlightBg,
    logoImage: heroLogo,
  };

  const whyChoose = {
    __component: 'sections.why-choose',
    enabled: true,
    label: 'Why Choose Amedicase',
    title: 'Why Home Health Agencies Choose Us',
    benefits: [
      { label: 'HIPAA-Compliant & Secure Data Handling' },
      { label: 'Up to 60% Cost Savings vs U.S. Operations' },
      { label: 'Healthcare-trained Teams with U.S. Experience' },
      { label: 'Dedicated Account Managers' },
      { label: 'Real-time Communication & U.S. Time-Zone Overlap' },
    ],
    supportImage: whyChooseImage,
    cta: {
      label: 'More About Us',
      url: '/about',
      isExternal: false,
    },
  };

  const processSteps = {
    __component: 'sections.process-steps',
    enabled: true,
    label: 'How It Works',
    title: null,
    steps: [
      { title: 'Discovery Call', description: 'Understand your workflow and needs' },
      { title: 'Onboarding Plan', description: 'Define roles, SOPs and tools' },
      { title: 'Training & Integration', description: 'Align with your EMR and QA standards' },
      { title: 'Ongoing Support & Quality Control', highlight: true },
    ],
    cta: {
      label: 'Start Your Free Assessment',
      url: '/contact',
      isExternal: false,
    },
    illustration: processIllustration,
  };

  const teamShowcase = {
    __component: 'sections.team-showcase',
    enabled: true,
    label: 'Our Team Behind the Care',
    title: 'Healthcare professionals & process engineers with 1+ years in U.S. home health operations.',
    members: [
      {
        firstName: 'Dorin',
        lastName: 'Acru',
        role: 'Marketing Manager',
        bio: 'Building trust through precision, clarity and modern medical management.',
        photo: teamPhoto,
        order: 1,
      },
      {
        firstName: 'Dorin',
        lastName: 'Acru',
        role: 'Marketing Manager',
        bio: 'Building trust through precision, clarity and modern medical management.',
        photo: teamPhoto,
        order: 2,
      },
      {
        firstName: 'Dorin',
        lastName: 'Acru',
        role: 'Marketing Manager',
        bio: 'Building trust through precision, clarity and modern medical management.',
        photo: teamPhoto,
        order: 3,
      },
    ],
    cta: {
      label: 'Learn More About Us',
      url: '/about',
      isExternal: false,
    },
    supportGraphic: teamGraphic,
  };

  const testimonials = [
    {
      name: 'Client Name',
      position: 'Client Position',
      youtubeId: 'M7lc1UVf-VE',
      quote: null,
    },
    {
      name: 'Client Name 2',
      position: 'Client Position 2',
      youtubeId: 'ScMzIvxBSi4',
      quote: null,
    },
    {
      name: 'Client Name 3',
      position: 'Client Position 3',
      youtubeId: 'ysz5u1jJz2A',
      quote: null,
    },
  ];

  const testimonialsSection = {
    __component: 'sections.testimonials',
    enabled: true,
    label: 'What Our Clients Say',
    title: null,
    items: testimonials,
    autoRotate: true,
  };

  const contactBlock = {
    __component: 'sections.contact-block',
    enabled: true,
    label: 'Ready to Build',
    title: 'Ready to build with us?',
    videoTestimonials: testimonials,
    contactEmail: 'team@amedicase.com',
    contactPhone: '+1 (415) 555-0112',
    contactAddress: '149 Medical Plaza, Suite 200\nAustin, TX 78701',
    socialLinks: [
      {
        platform: 'Email',
        url: 'mailto:team@amedicase.com',
        icon: mailIcon,
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/amedicase',
        icon: facebookIcon,
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/amedicase',
        icon: instagramIcon,
      },
    ],
    formDisclaimer: 'We typically reply within one business day.',
  };

  return [
    heroSection,
    serviceGrid,
    imageHighlight,
    whyChoose,
    processSteps,
    teamShowcase,
    testimonialsSection,
    contactBlock,
  ];
};

const seedHomePage = async (strapi) => {
  try {
    const homePageRepo = strapi.db.query('api::home-page.home-page');
    const existingEntries = await homePageRepo.findMany({ select: ['id'] });

    if (Array.isArray(existingEntries) && existingEntries.length > 0) {
      strapi.log.info('Home page already exists. Skipping seed to preserve admin edits.');
      return;
    }

    const sections = await buildHomeSections(strapi);

    await strapi.entityService.create('api::home-page.home-page', {
      data: {
        title: 'Homepage',
        contentSections: sections,
        publishedAt: new Date(),
      },
    });

    strapi.log.info('Seeded homepage content from frontend design.');
  } catch (error) {
    strapi.log.error('Failed seeding homepage content', error);
  }
};

const seedGenericPages = async (strapi) => {
  const pages = [
    { uid: 'api::about-page.about-page', title: 'About page' },
    { uid: 'api::services-page.services-page', title: 'Services page' },
    { uid: 'api::contact-page.contact-page', title: 'Contact page' },
    { uid: 'api::process-page.process-page', title: 'Process page' },
    { uid: 'api::case-studies-page.case-studies-page', title: 'Case studies page' },
    { uid: 'api::customer-support-page.customer-support-page', title: 'Customer support page' },
    { uid: 'api::accounting-finance-page.accounting-finance-page', title: 'Accounting finance page' },
    { uid: 'api::creative-development-page.creative-development-page', title: 'Creative development page' },
    { uid: 'api::home-health-page.home-health-page', title: 'Home health page' },
    { uid: 'api::hospice-page.hospice-page', title: 'Hospice page' },
  ];

  const pagesToSeed = [];
  for (const page of pages) {
    try {
      const repo = strapi.db.query(page.uid);
      const existingEntries = await repo.findMany({ select: ['id'] });
      if (Array.isArray(existingEntries) && existingEntries.length > 0) {
        strapi.log.info(`Skipping seed for ${page.title} to preserve admin edits.`);
        continue;
      }
      pagesToSeed.push(page);
    } catch (error) {
      strapi.log.error(`Failed seeding ${page.title} content`, error);
    }
  }

  if (pagesToSeed.length === 0) {
    return;
  }

  const sections = await buildHomeSections(strapi);
  for (const page of pagesToSeed) {
    try {
      await strapi.entityService.create(page.uid, {
        data: {
          title: page.title,
          contentSections: sections,
          publishedAt: new Date(),
        },
      });
      strapi.log.info(`Seeded ${page.title} content from frontend design.`);
    } catch (error) {
      strapi.log.error(`Failed seeding ${page.title} content`, error);
    }
  }
};

const ensurePublicPermissions = async (strapi) => {
  try {
    const role = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
      select: ['id'],
    });

    if (!role) {
      strapi.log.warn('Public role not found. Skipping permissions sync.');
      return;
    }

    const actions = [
      'api::home-page.home-page.find',
      'api::home-page.home-page.findOne',
      'api::about-page.about-page.find',
      'api::about-page.about-page.findOne',
      'api::services-page.services-page.find',
      'api::services-page.services-page.findOne',
      'api::contact-page.contact-page.find',
      'api::contact-page.contact-page.findOne',
      'api::process-page.process-page.find',
      'api::process-page.process-page.findOne',
      'api::case-studies-page.case-studies-page.find',
      'api::case-studies-page.case-studies-page.findOne',
      'api::customer-support-page.customer-support-page.find',
      'api::customer-support-page.customer-support-page.findOne',
      'api::accounting-finance-page.accounting-finance-page.find',
      'api::accounting-finance-page.accounting-finance-page.findOne',
      'api::creative-development-page.creative-development-page.find',
      'api::creative-development-page.creative-development-page.findOne',
      'api::home-health-page.home-health-page.find',
      'api::home-health-page.home-health-page.findOne',
      'api::hospice-page.hospice-page.find',
      'api::hospice-page.hospice-page.findOne',
    ];

    const permissionQuery = strapi.db.query('plugin::users-permissions.permission');

    for (const action of actions) {
      const existing = await permissionQuery.findOne({
        where: { role: role.id, action },
        select: ['id', 'enabled'],
      });

      if (!existing) {
        await permissionQuery.create({
          data: {
            action,
            role: role.id,
            enabled: true,
          },
        });
        continue;
      }

      if (!existing.enabled) {
        await permissionQuery.update({
          where: { id: existing.id },
          data: { enabled: true },
        });
      }
    }
  } catch (error) {
    strapi.log.error('Failed to sync public permissions for pages', error);
  }
};

module.exports = {
  register() {},
  bootstrap: async ({ strapi }) => {
    await seedHomePage(strapi);
    await ensurePublicPermissions(strapi);
  },
};
