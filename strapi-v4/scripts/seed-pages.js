#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_API_TOKEN) {
  console.error("Missing STRAPI_API_TOKEN env var.");
  process.exit(1);
}

const uploadFile = async (filePath, fileName) => {
  const fileBuffer = fs.readFileSync(filePath);
  const form = new FormData();
  form.append("files", new Blob([fileBuffer]), fileName);
  const res = await fetch(`${STRAPI_URL}/api/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: form,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upload failed: ${res.status} ${text}`);
  }
  const json = await res.json();
  return json[0]?.id;
};

const root = path.resolve(__dirname, "..", "..");
const img = (rel) => path.join(root, "frontend", "public", rel);

const buildContactBlock = () => ({
  __component: "sections.contact-block",
  enabled: true,
  label: "What Our Clients Say",
  title: "Ready to Build Your Outsource Team?",
  videoTestimonials: [
    {
      name: "Client Name",
      position: "Client Position",
      youtubeId: "M7lc1UVf-VE",
    },
    {
      name: "Client Name 2",
      position: "Client Position 2",
      youtubeId: "ScMzIvxBSi4",
    },
    {
      name: "Client Name 3",
      position: "Client Position 3",
      youtubeId: "ysz5u1jJz2A",
    },
  ],
  contactEmail: "team@amedicase.com",
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/amedicase",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/amedicase",
    },
  ],
});

const upsertPage = async (payload) => {
  const search = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=${encodeURIComponent(payload.data.slug)}`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    }
  );
  if (!search.ok) {
    const text = await search.text();
    throw new Error(`Failed to lookup page: ${search.status} ${text}`);
  }
  const json = await search.json();
  const existing = json?.data?.[0];
  const existingId = existing?.documentId || existing?.id;

  const url = existingId ? `${STRAPI_URL}/api/pages/${existingId}` : `${STRAPI_URL}/api/pages`;
  const method = existingId ? "PUT" : "POST";
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to upsert page ${payload.data.slug}: ${res.status} ${text}`);
  }
};

const upsertTemplate = async (payload) => {
  const search = await fetch(
    `${STRAPI_URL}/api/service-page-templates?filters[key][$eq]=${encodeURIComponent(payload.data.key)}`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    }
  );
  if (!search.ok) {
    const text = await search.text();
    throw new Error(`Failed to lookup template: ${search.status} ${text}`);
  }
  const json = await search.json();
  const existing = json?.data?.[0];
  const existingId = existing?.documentId || existing?.id;

  const url = existingId
    ? `${STRAPI_URL}/api/service-page-templates/${existingId}`
    : `${STRAPI_URL}/api/service-page-templates`;
  const method = existingId ? "PUT" : "POST";
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to upsert template ${payload.data.key}: ${res.status} ${text}`);
  }
};

const main = async () => {
  const mediaIds = {
    heroServices: await uploadFile(img("images/services/hero-services.jpg"), "hero-services.jpg"),
    processHero: await uploadFile(img("images/process/hero-background.jpg"), "process-hero-background.jpg"),
    officeDocs: await uploadFile(
      img("images/creative-development/office-documents-background.jpg"),
      "office-documents-background.jpg"
    ),
    whiteShapes: await uploadFile(
      img("images/creative-development/white-shapes-overlay.svg"),
      "white-shapes-overlay.svg"
    ),
    contactSubtract: await uploadFile(
      img("images/contact/subtract-overlay.svg"),
      "contact-subtract-overlay.svg"
    ),
    aboutWhyChooseImage: await uploadFile(
      img("images/why-choose-image-figma.png"),
      "why-choose-image-figma.png"
    ),
    teamMemberPhoto: await uploadFile(img("images/team-member-photo.jpg"), "team-member-photo.jpg"),
    teamMemberMobilePhoto: await uploadFile(img("images/Dorin Acru.jpg"), "Dorin Acru.jpg"),
    teamDotPrimary: await uploadFile(img("images/team-member-1.png"), "team-member-1.png"),
    teamDotSecondary: await uploadFile(img("images/team-member-2.png"), "team-member-2.png"),
    cardBg1: await uploadFile(img("images/creative-development/card-bg-1.svg"), "card-bg-1.svg"),
    cardBg2: await uploadFile(img("images/creative-development/card-bg-2.svg"), "card-bg-2.svg"),
    cardBg3: await uploadFile(img("images/creative-development/card-bg-3.svg"), "card-bg-3.svg"),
    cardBg4: await uploadFile(img("images/creative-development/card-bg-4.svg"), "card-bg-4.svg"),
    dotIcon: await uploadFile(img("images/creative-development/dot-icon.svg"), "dot-icon.svg"),
    arrowDown: await uploadFile(img("images/creative-development/arrow-down.svg"), "arrow-down.svg"),
    arrowDownFinal: await uploadFile(
      img("images/creative-development/arrow-down-final.svg"),
      "arrow-down-final.svg"
    ),
    homeHealthIcon: await uploadFile(
      img("images/home-health/how-it-works-icon.svg"),
      "home-health-how-it-works-icon.svg"
    ),
    hospiceIcon: await uploadFile(
      img("images/hospice/how-it-works-icon.svg"),
      "hospice-how-it-works-icon.svg"
    ),
    servicesPillar1: await uploadFile(img("images/services/billing-finance-new.jpg"), "billing-finance-new.jpg"),
    servicesPillar2: await uploadFile(img("images/services/patient-intake-correct.jpg"), "patient-intake-correct.jpg"),
    servicesPillar3: await uploadFile(img("images/services/operations-admin-correct.jpg"), "operations-admin-correct.jpg"),
    servicesPillar4: await uploadFile(img("images/services/digital-growth-new.jpg"), "digital-growth-new.jpg"),
    servicesArrowIcon: await uploadFile(img("images/services/arrow-icon.svg"), "arrow-icon.svg"),
    servicesBulletIcon: await uploadFile(img("images/services/icon-dot.svg"), "icon-dot.svg"),
    servicesQualityImage: await uploadFile(img("images/services/we-deliver-quality.jpg"), "we-deliver-quality.jpg"),
    servicesQualityArrowTop: await uploadFile(img("images/services/arrow-vector-1.svg"), "arrow-vector-1.svg"),
    servicesQualityArrowBottom: await uploadFile(img("images/services/arrow-vector-2.svg"), "arrow-vector-2.svg"),
    servicesHowItWorks: await uploadFile(img("images/services/how-it-works-vector.svg"), "how-it-works-vector.svg"),
    servicesSeparator: await uploadFile(img("images/services/separator-vector.svg"), "separator-vector.svg"),
    servicesWhyChooseImage: await uploadFile(
      img("images/services/office-documents-filing-cabinet.jpg"),
      "office-documents-filing-cabinet.jpg"
    ),
    servicesSubtract: await uploadFile(img("images/services/subtract-overlay.svg"), "subtract-overlay.svg"),
  };

  const contactBlock = buildContactBlock();

  const servicesSections = [
    {
      __component: "shared.background-pattern",
      enabled: true,
      svgPath:
        "M0 9.3794C0 9.3794 131.225 303.916 268.172 343.047C371.051 372.467 472.495 318.908 502.691 306.314C532.887 293.721 717.37 192.134 752.353 161.493C752.353 161.493 578.748 239.392 497.097 258.512C362.464 290.051 308.189 251.079 206.198 103.12C156.758 31.4677 143.345 -22.5191 0 9.3794Z",
      viewBox: "0 0 517 1300",
      fill: "#7F92C7",
      opacity: 0.5,
      width: 516,
      height: 1300,
      top: 572,
      left: 0,
    },
    {
      __component: "sections.services-page-hero",
      enabled: true,
      badgeLabel: "SeRvices",
      title: "End-to-End Outsourcing Solutions for Home Health Agencies",
      titleDesktop: "End-to-End Outsourcing Solutions\nfor Home Health Agencies",
      subtitle:
        "From patient intake to billing and operations — Amedicase helps U.S. home health providers streamline workflows, cut costs, and focus on patient care.",
      subtitleDesktop:
        "From patient intake to billing and operations — Amedicase helps\nU.S. home health providers streamline workflows, cut costs, and focus on patient care.",
      backgroundImage: mediaIds.heroServices,
      primaryCta: {
        label: "Book a Free Consultation",
        url: "#",
        isExternal: false,
      },
      secondaryCta: {
        label: "Download Service Overview",
        url: "#",
        isExternal: false,
      },
    },
    {
      __component: "sections.services-page-pillars",
      enabled: true,
      label: "Our Service Pillars",
      cards: [
        {
          title: "Billing & Finance",
          titleMobile: "Billing &\nFinance",
          titleDesktop: "Billing & Finance",
          description: "Accurate billing.\nFaster payments.",
          descriptionDesktop: "Accurate billing. Faster payments.",
          descriptionMobile: "Accurate billing.\nFaster payments.",
          image: mediaIds.servicesPillar1,
          imageStyle: {
            heightPercent: 121.49,
            widthPercent: 100,
            leftPercent: 0,
            topPercent: -17.42,
          },
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          learnMoreIcon: mediaIds.servicesArrowIcon,
        },
        {
          title: "Patient Intake & Support",
          titleMobile: "Patient Intake\n& Support",
          titleDesktop: "Patient Intake & Support",
          description: "Accurate billing.\nFaster payments.",
          descriptionDesktop: "Accurate billing. Faster payments.",
          descriptionMobile: "Accurate billing.\nFaster payments.",
          image: mediaIds.servicesPillar2,
          imageStyle: {
            heightPercent: 100,
            widthPercent: 237.04,
            leftPercent: -71.67,
            topPercent: 0,
          },
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          learnMoreIcon: mediaIds.servicesArrowIcon,
        },
        {
          title: "Operations & Admin Support",
          titleMobile: "Operations &\nAdmin Support",
          titleDesktop: "Operations & Admin Support",
          description: "Reliable back-office for\nclinical teams.",
          descriptionDesktop: "Reliable back-office for clinical teams.",
          descriptionMobile: "Reliable back-office for\nclinical teams.",
          image: mediaIds.servicesPillar3,
          imageStyle: {
            heightPercent: 100,
            widthPercent: 187.27,
            leftPercent: -26.67,
            topPercent: 0,
          },
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          learnMoreIcon: mediaIds.servicesArrowIcon,
        },
        {
          title: "Digital Presence & Growth",
          titleMobile: "Digital Presence\n& Growth",
          titleDesktop: "Digital Presence & Growth",
          description: "Power your agency with\nsmart technology.",
          descriptionDesktop: "Power your agency with smart technology.",
          descriptionMobile: "Power your agency with\nsmart technology.",
          image: mediaIds.servicesPillar4,
          imageStyle: {
            heightPercent: 119.99,
            widthPercent: 100,
            leftPercent: 0,
            topPercent: -6,
          },
          learnMoreLabel: "Learn More",
          learnMoreUrl: "#",
          learnMoreIcon: mediaIds.servicesArrowIcon,
        },
      ],
    },
    {
      __component: "sections.services-page-how-we-help",
      enabled: true,
      label: "How We Help Home Health Agencies",
      title: "Designed to Help You Operate Efficiently and Scale with Confidence.",
      benefits: [
        { label: "Reduce Costs up to 60% without compromising HIPAA compliance." },
        { label: "Focus on Patient Care. Let us handle admin load." },
        { label: "Scale Seamlessly. Expand your team as your caseload grows." },
      ],
      bulletIcon: mediaIds.servicesBulletIcon,
      bulletIconBlur: 2,
    },
    {
      __component: "sections.services-page-quality",
      enabled: true,
      title: "We deliver quality.",
      backgroundImage: mediaIds.servicesQualityImage,
      overlayColor: "rgba(30,58,138,0.6)",
      mobileTopSvgPath:
        "M105.452 6.57873C105.452 6.57873 77.511 41.0652 57.9085 41.3891C43.1815 41.6355 31.6017 30.9003 28.0355 28.15C24.4693 25.3998 3.55974 5.32047 0 0C0 0 20.3072 16.5424 30.4823 21.9936C47.2595 30.9834 55.8642 27.7354 74.6963 11.6963C83.8224 3.93085 87.5291 -2.76936 105.452 6.57873Z",
      mobileBottomSvgPath:
        "M0 34.8145C0 34.8145 27.9409 0.328038 47.5434 0.00417593C62.2703 -0.242293 73.8502 10.493 77.4164 13.2432C80.9825 15.9934 101.892 36.0728 105.452 41.3932C105.452 41.3932 85.1446 24.8508 74.9695 19.3996C58.1924 10.4098 49.5877 13.6578 30.7556 29.6969C21.6295 37.4624 17.9227 44.1626 0 34.8145Z",
      mobileSvgViewBox: "0 0 106 42",
      desktopTopIcon: mediaIds.servicesQualityArrowTop,
      desktopBottomIcon: mediaIds.servicesQualityArrowBottom,
    },
    {
      __component: "sections.services-page-how-it-works",
      enabled: true,
      label: "How It Works",
      steps: [
        {
          title: "Discovery & Planning",
          description: "We identify your workflow needs and define clear KPIs.",
        },
        {
          title: "Onboarding & Training",
          description: "Your dedicated Amedicase team gets trained on your EMR tools and processes.",
        },
        {
          title: "Execution & Support",
          description: "We manage daily operations, reports, and QA checks.",
        },
        {
          title: "Ongoing Optimization",
          description: "Continuous performance tracking and scaling when needed.",
        },
      ],
      illustration: mediaIds.servicesHowItWorks,
      cta: {
        label: "Start Your Free Discovery Call",
        url: "#",
        isExternal: false,
      },
    },
    {
      __component: "sections.services-page-why-choose",
      enabled: true,
      label: "Why Choose Amedicase",
      benefits: [
        { label: "HIPAA-Compliant & Secure Data Handling" },
        { label: "Up to 60% Cost Savings\nvs. U.S. Operations" },
        { label: "Healthcare-trained Teams\nwith U.S. Experience" },
        { label: "Dedicated Account\nManagers" },
        { label: "Real-time Communication\n& U.S. Time-Zone Overlap" },
      ],
      separatorImage: mediaIds.servicesSeparator,
      mobileSeparatorSvgPath:
        "M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z",
      mobileSeparatorViewBox: "0 0 280 2",
      rightImage: mediaIds.servicesWhyChooseImage,
      rightOverlay: mediaIds.servicesSubtract,
    },
    contactBlock,
  ];

  const pages = [
    {
      slug: "services",
      title: "Services",
      seo: {
        metaTitle: "Services | Amedicase",
        metaDescription:
          "End-to-end outsourcing solutions for home health agencies. From intake to billing and operations.",
        ogTitle: "Services | Amedicase",
        ogDescription:
          "End-to-end outsourcing solutions for home health agencies. From intake to billing and operations.",
        canonicalUrl: "/services",
        noIndex: false,
      },
      sections: servicesSections,
    },
    {
      slug: "home-health",
      title: "Home Health",
      seo: {
        metaTitle: "Home Health | Amedicase",
        metaDescription:
          "Improve patient experience, documentation accuracy and operational efficiency with trained remote specialists.",
        ogTitle: "Home Health | Amedicase",
        ogDescription:
          "Improve patient experience, documentation accuracy and operational efficiency with trained remote specialists.",
        canonicalUrl: "/home-health",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Home Health",
          title: "Home Health Outsourcing",
          subtitle:
            "Improve your agency's patient experience, documentation accuracy and operational efficiency by leveraging trained remote specialists for billing, scheduling, intake and administrative support.",
          backgroundImage: mediaIds.heroServices,
          cta: {
            label: "Book a Discovery Call",
            url: "/#contact",
            isExternal: false,
          },
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "Outsourcing for Home Health Agencies",
          body:
            "In Home Health, accurate documentation, timely scheduling, clean claims and clear communication directly affect both patient outcomes and reimbursement cycles.\n\nStrategic outsourcing allows agencies to maintain clinical excellence while reducing administrative pressure on nurses and office staff.\n\nAmedicase provides dedicated remote teams trained in Home Health workflows,\nEMR updates, patient intake, authorization support and Medicare/Medicaid requirements.\n\nWith reliable specialists handling coordination and documentation, your agency\ncan deliver better patient care while staying compliant and operationally efficient.",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.benefit-cards",
          label: "What We Can Offer",
          title: "Outsourcing Benefits for Home Health",
          cards: [
            {
              label: "Agility",
              description:
                "Scale your support team up or down depending on census, referrals, authorizations or seasonal volume,\nwithout hiring delays or in-house overhead.",
            },
            {
              label: "Capability",
              description:
                "Our specialists are trained in HH workflows: intake, scheduling, documentation, billing support and QA tasks, ensuring accuracy and consistent output.",
            },
            {
              label: "Core Care Focus",
              description:
                "Outsourcing allows your clinical team\nto focus on patient care, visit quality and outcomes, while administrative tasks are handled by trained remote staff.",
            },
          ],
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.icon-steps",
          label: "How It Works",
          icon: mediaIds.homeHealthIcon,
          steps: [
            {
              title: "Assessment",
              description:
                "We begin by understanding your operational challenges and identifying the Home Health tasks best suited for outsourcing.",
            },
            {
              title: "Talent Selection",
              description:
                "We assign trained specialists experienced in Home Health intake, scheduling, documentation and billing coordination.",
            },
            {
              title: "Seamless Integration",
              description:
                "Your outsourced team integrates into your EMR, communication tools and workflow, working as an extension of your in-house staff.",
            },
            {
              title: "Monitoring & Optimization",
              description:
                "We provide ongoing monitoring, reporting and quality checks. Your team can be scaled anytime as your agency grows.",
            },
          ],
          cta: {
            label: "More Info",
            url: "/#contact",
            isExternal: false,
          },
        },
        contactBlock,
      ],
    },
    {
      slug: "hospice",
      title: "Hospice",
      seo: {
        metaTitle: "Hospice | Amedicase",
        metaDescription:
          "Access trained, compassionate support staff who help Hospice providers manage coordination and documentation.",
        ogTitle: "Hospice | Amedicase",
        ogDescription:
          "Access trained, compassionate support staff who help Hospice providers manage coordination and documentation.",
        canonicalUrl: "/hospice",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Hospice Outsourcing",
          title: "Hospice Outsourcing",
          subtitle:
            "Access trained, compassionate support staff who help Hospice providers manage coordination, documentation and family communication with accuracy and care.",
          backgroundImage: mediaIds.heroServices,
          cta: {
            label: "Book a Discovery Call",
            url: "/#contact",
            isExternal: false,
          },
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "Outsourcing for Hospice Agencies",
          body:
            "In Hospice care, every detail matters. Accurate documentation, timely coordination\nand sensitive communication with families directly impact both care quality and operational stability.\n\nOutsourcing non-clinical Hospice tasks lets your clinical team stay focused on bedside care, interdisciplinary planning and family support, while trained professionals manage\nthe administrative load.\n\nAmedicase provides remote specialists experienced in Hospice workflows, EMR updates, care coordination and family communication, ensuring consistency, compliance and operational clarity.",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.benefit-cards",
          label: "What We Can Offer",
          title: "Outsourcing Benefits\nfor Hospice",
          cards: [
            {
              label: "Agility",
              description:
                "Hospice census and visit volume change weekly. Outsourcing allows you to scale up or down quickly without the cost and delay of internal hiring.",
            },
            {
              label: "Capability",
              description:
                "Our team supports core Hospice operations: documentation, family communication, coordination, form updates, scheduling\nand authorizations. Skilled people without expanding internal headcount.",
            },
            {
              label: "Core Care Focus",
              description:
                "Your nurses, social workers and coordinators focus on patient and family care, while routine administrative tasks are handled by trained support staff.",
            },
          ],
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.icon-steps",
          label: "How It Works",
          icon: mediaIds.hospiceIcon,
          steps: [
            {
              title: "Assessment",
              description:
                "We analyze your Hospice workflows: referrals, scheduling, documentation, family touchpoints and identify the tasks\nsuitable for outsourcing.",
            },
            {
              title: "Talent Selection",
              description:
                "We assign trained support specialists experienced in healthcare coordination, documentation management and compassionate communication.",
            },
            {
              title: "Seamless Integration",
              description:
                "Your outsourced team works inside your EMR, communication tools and daily routines, operating as an extension of your\nin-house staff.",
            },
            {
              title: "Monitoring & Optimization",
              description:
                "We deliver continuous monitoring, reporting and quality checks. Your team scales easily as your Hospice census grows.",
            },
          ],
          cta: {
            label: "More Info",
            url: "/#contact",
            isExternal: false,
          },
        },
        contactBlock,
      ],
    },
    {
      slug: "accounting-finance",
      title: "Accounting and Finance",
      seo: {
        metaTitle: "Accounting & Finance | Amedicase",
        metaDescription:
          "Outsourcing billing, payroll prep, AR follow-up and claims reconciliation to specialized remote teams.",
        ogTitle: "Accounting & Finance | Amedicase",
        ogDescription:
          "Outsourcing billing, payroll prep, AR follow-up and claims reconciliation to specialized remote teams.",
        canonicalUrl: "/accounting-finance",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Accounting and Finance",
          title: "Accounting and Finance",
          subtitle:
            "Access trained, reliable and detail-oriented digital support specialists dedicated to improving your agency's online presence, documentation flows and patient experience.",
          subtitleDesktop:
            "Access trained, reliable and detail-oriented digital support specialists\ndedicated to improving your agency's online presence, documentation flows\nand patient experience.",
          backgroundImage: mediaIds.heroServices,
          cta: {
            label: "Book a Discovery Call",
            url: "/#contact",
            isExternal: false,
          },
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "Outsourcing Accounting & Finance Services\nfor Home Health Agencies",
          body:
            "Most Home Health and Hospice agencies across the U.S. are now outsourcing billing, payroll prep, AR follow-up and claims reconciliation to specialized remote teams.\n\nThis shift allows agencies to speed up payments, reduce denials, and maintain consistent financial accuracy without the cost of expanding an in-house office team.\n\nAmedicase specialists are trained on the systems commonly used in the U.S. healthcare sector, including WellSky, Axxess, MatrixCare, Brightree, QuickBooks and other\nRCM tools.\n\nBecause we operate in alignment with U.S. financial standards, Medicare guidelines, HIPAA compliance and state-specific requirements, outsourcing your billing and finance functions to Amedicase becomes efficient, accurate, and scalable.",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.card-grid",
          label: "What We Can Offer",
          title:
            "Digital support designed to strengthen your agency's online presence, documentation accuracy and patient experience.",
          dotIcon: mediaIds.dotIcon,
          cards: [
            {
              title: "Accounts Receivable Coordinators",
              description: "Follow-ups, payment posting, AR aging management, weekly and monthly reports.",
              backgroundImage: mediaIds.cardBg1,
            },
            {
              title: "Payroll & Timesheet Support",
              description: "Processing timesheets, preparing payroll reports, verifying visit records and EVV data.",
              backgroundImage: mediaIds.cardBg2,
            },
            {
              title: "Billing & Claims Specialists",
              description:
                "End-to-end claims submission, denial management, AR tracking and reconciliation\nfor Medicare, Medicaid and private pay.",
              backgroundImage: mediaIds.cardBg3,
            },
            {
              title: "Bookkeeping & Financial Assistants",
              description:
                "Digital documentation setup, EMR form mapping and patient-flow optimization for smoother operations.",
              backgroundImage: mediaIds.cardBg4,
            },
          ],
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.process-stages",
          label: "The Amedicase Process",
          arrowImage: mediaIds.arrowDown,
          arrowFinalImage: mediaIds.arrowDownFinal,
          stages: [
            {
              stageLabel: "Stage 1",
              title: "Understanding Your Needs",
              description:
                "We begin by analyzing your billing process, EMR setup, AR aging, payroll structure and reporting needs.\nWe identify the exact tasks to outsource and create a clear, tailored finance solution for your agency.",
            },
            {
              stageLabel: "Stage 2",
              title: "Assigning the Right Specialists",
              description:
                "We select professionals experienced in U.S. home health billing, AR management, payroll prep and financial support.\nEvery specialist is vetted, trained and aligned with HIPAA and Medicare compliance requirements.",
            },
            {
              stageLabel: "Stage 3",
              title: "Seamless Integration Into Your Agency",
              description:
                "Your outsourced team works directly with your EMR, RCM platform, financial tools and internal staff.\nCommunication, workflows and reports remain aligned with your agency's processes for a productive collaboration.",
            },
            {
              stageLabel: "Stage 4",
              title: "Quality Control & Continuous Support",
              description:
                "We provide frequent reporting, quality checks, denial analysis and financial insights. As your volume grows,\nwe adjust team size and workflows, to ensure your billing and finance remain accurate and fast.",
            },
          ],
          cta: {
            label: "Contact Us",
            url: "/#contact",
            isExternal: false,
          },
        },
        contactBlock,
      ],
    },
    {
      slug: "customer-support",
      title: "Customer Support",
      seo: {
        metaTitle: "Customer Support | Amedicase",
        metaDescription:
          "Trained, reliable and patient-focused support specialists who manage communication and scheduling.",
        ogTitle: "Customer Support | Amedicase",
        ogDescription:
          "Trained, reliable and patient-focused support specialists who manage communication and scheduling.",
        canonicalUrl: "/customer-support",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Customer Support",
          title: "Customer Support",
          subtitle:
            "Access trained, reliable and patient-focused support specialists who manage communication, scheduling and follow-ups for U.S. Home Health and Hospice agencies.",
          subtitleDesktop:
            "Access trained, reliable and patient-focused support specialists who manage communication, scheduling and follow-ups for U.S. Home Health\nand Hospice agencies.",
          backgroundImage: mediaIds.heroServices,
          cta: {
            label: "Book a Discovery Call",
            url: "/#contact",
            isExternal: false,
          },
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "Outsourcing Customer Support & Patient Intake Services",
          body:
            "Home Health agencies rely heavily on timely communication, accurate scheduling and consistent follow-up to deliver quality care.\n\nOutsourcing these tasks ensures your nurses, coordinators and clinicians stay focused\non patient needs, not administrative load.\n\nAmedicase provides trained intake and support specialists who understand the workflow, tone and urgency of U.S. healthcare communication.\n\nFrom eligibility verification to pre-visit reminders, our team keeps your patient operations organized, responsive and compliant.",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.card-grid",
          label: "What We Can Offer",
          title:
            "Reliable communication support designed to improve patient coordination, reduce administrative workload and enhance overall patient satisfaction.",
          dotIcon: mediaIds.dotIcon,
          cards: [
            {
              title: "Intake Coordinators",
              description: "Handling new patient calls, referral intake\nand data gathering for fast onboarding.",
              backgroundImage: mediaIds.cardBg1,
            },
            {
              title: "Scheduling & Rescheduling Support",
              description: "Coordinating appointments, managing calendars, notifying clinicians and updating EMR.",
              backgroundImage: mediaIds.cardBg2,
            },
            {
              title: "Eligibility & Insurance Verification",
              description: "Checking patient eligibility, confirming coverage details and preparing data for billing.",
              backgroundImage: mediaIds.cardBg3,
            },
            {
              title: "Follow-Ups & Pre-Visit Reminders",
              description: "Reducing missed visits through timely calls, reminders and patient check-ins.",
              backgroundImage: mediaIds.cardBg4,
            },
          ],
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.process-stages",
          label: "The Amedicase Process",
          arrowImage: mediaIds.arrowDown,
          arrowFinalImage: mediaIds.arrowDownFinal,
          stages: [
            {
              stageLabel: "Stage 1",
              title: "Understanding Your Workflow",
              description:
                "We evaluate your patient communication flow, EMR usage, referral process and scheduling challenges.\nWe define the tasks you want to delegate and build a tailored support plan.",
            },
            {
              stageLabel: "Stage 2",
              title: "Assigning Trained Intake Specialists",
              description:
                "We handpick specialists with experience in patient communication, referral intake and Home Health terminology.\nAll team members are HIPAA-aligned and trained in professional U.S. communication standards.",
            },
            {
              stageLabel: "Stage 3",
              title: "Seamless Integration Into Your Agency",
              description:
                "Your support team integrates with your EMR, communication tools and daily processes.\nWe work as an extension of your in-house staff, ensuring consistent communication.",
            },
            {
              stageLabel: "Stage 4",
              title: "Reporting, QA & Continuous Improvement",
              description:
                "We provide performance dashboards, call logs, activity summaries and QA reviews.\nAs your patient volume grows, we scale the team to match demand.",
            },
          ],
          cta: {
            label: "Contact Us",
            url: "/#contact",
            isExternal: false,
          },
        },
        contactBlock,
      ],
    },
    {
      slug: "creative-development",
      title: "Creative & Development",
      seo: {
        metaTitle: "Creative & Development | Amedicase",
        metaDescription:
          "Digital support for healthcare providers to improve online presence and documentation workflows.",
        ogTitle: "Creative & Development | Amedicase",
        ogDescription:
          "Digital support for healthcare providers to improve online presence and documentation workflows.",
        canonicalUrl: "/creative-development",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Creative and development",
          title: "Outsource Creative & Development",
          subtitle:
            "Access trained, reliable and detail-oriented digital support specialists dedicated to improving your agency's online presence, documentation flows and patient experience.",
          subtitleDesktop:
            "Access trained, reliable and detail-oriented digital support specialists\ndedicated to improving your agency's online presence, documentation flows\nand patient experience.",
          backgroundImage: mediaIds.heroServices,
          cta: {
            label: "Book a Discovery Call",
            url: "/#contact",
            isExternal: false,
          },
          ctaDesktop: {
            label: "Contact Us",
            url: "/#contact",
            isExternal: false,
          },
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "Outsourcing Creative & Development for Healthcare Providers",
          body:
            "Whether you're a Home Health agency needing better patient forms, a Hospice provider requiring updated digital documentation, or simply a healthcare organization looking to maintain a strong and compliant online presence — Amedicase delivers the digital support your agency needs.\n\nOur team helps U.S. healthcare providers update websites, improve patient forms, maintain digital content, and manage online reputation through coordinated feedback and review management.\nWe support Home Health, Hospice, and Medical Billing organizations across the U.S., ensuring they remain professional, visible, and trusted online.",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.card-grid",
          label: "What We Can Offer",
          title:
            "Digital support designed to strengthen your agency's online presence, documentation accuracy and patient experience.",
          dotIcon: mediaIds.dotIcon,
          cards: [
            {
              title: "Medical Form Designers",
              description:
                "Custom referral forms, intake templates, and digital documentation aligned with EMR needs.",
              backgroundImage: mediaIds.cardBg1,
            },
            {
              title: "Website & Landing Page Support",
              description:
                "Maintenance, updates, layout improvements, SEO basics, and compliance-driven content fixes.",
              backgroundImage: mediaIds.cardBg2,
            },
            {
              title: "Workflow & Document Coordinators",
              description:
                "Digital documentation setup, EMR form mapping\nand patient-flow optimization for smoother operations.",
              backgroundImage: mediaIds.cardBg3,
            },
            {
              title: "Digital Presence & Reputation Management",
              description:
                "Review monitoring, feedback collection, Google Business Profile optimization, online listings\nand response coordination, helping your agency strengthen trust and credibility online.",
              backgroundImage: mediaIds.cardBg4,
            },
          ],
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.process-stages",
          label: "The Amedicase Process",
          arrowImage: mediaIds.arrowDown,
          arrowFinalImage: mediaIds.arrowDownFinal,
          stages: [
            {
              stageLabel: "Stage 1",
              title: "Understanding Your Needs",
              description:
                "We analyze your website, digital assets, review platforms, online presence and internal documentation.\nWe identify what needs to be improved, updated or delegated, and build a clear outsourcing plan.",
            },
            {
              stageLabel: "Stage 2",
              title: "Assigning the Right Specialists",
              description:
                "We assign trained specialists experienced in healthcare documentation, website maintenance and online\nreputation management. Every team member is vetted, trained and aligned with HIPAA-compliant processes.",
            },
            {
              stageLabel: "Stage 3",
              title: "Seamless Integration Into Your Agency",
              description:
                "Your specialist integrates into your workflow, handling updates, review monitoring, feedback gathering\nand digital improvements as part of your day-to-day operations.",
            },
            {
              stageLabel: "Stage 4",
              title: "Quality Control & Continuous Support",
              description:
                "We monitor performance, provide reporting, manage reputation metrics, maintain digital consistency\nand scale your support team as your agency grows.",
            },
          ],
          cta: {
            label: "Contact Us",
            url: "/#contact",
            isExternal: false,
          },
        },
        contactBlock,
      ],
    },
    {
      slug: "about",
      title: "About",
      seo: {
        metaTitle: "About | Amedicase",
        metaDescription:
          "Meet the team behind Amedicase and learn how we power home health operations behind the scenes.",
        ogTitle: "About | Amedicase",
        ogDescription:
          "Meet the team behind Amedicase and learn how we power home health operations behind the scenes.",
        canonicalUrl: "/about",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.about-hero",
          badgeLabel: "About Us",
          title: "We Power Home Health Operations Behind the Scenes",
          titleDesktop: "We Power Home Health Operations\nBehind the Scenes",
          subtitle:
            "From billing and intake to back-office support, our healthcare-trained teams keep your agency efficient, compliant and ready to grow.",
          subtitleDesktop:
            "From billing and intake to back-office support, our healthcare-trained teams\nkeep your agency efficient, compliant and ready to grow.",
          backgroundImage: mediaIds.heroServices,
          primaryCta: {
            label: "Book a Free Consultation",
            url: "#",
            isExternal: false,
          },
          secondaryText: "Meet the Team",
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "Built to Help Home Health Agencies Operate Smarter",
          body:
            "Amedicase was founded by healthcare operations specialists who saw how much time U.S. home health agencies spent managing administrative tasks instead of patient care. We built a model that combines trained professionals, strong compliance, and modern workflows, helping agencies delegate what slows them down and focus on what truly matters: their patients.",
        },
        {
          __component: "sections.mission-values",
          label: "Mission & Values",
          cards: [
            {
              title: "Accuracy First",
              description: "We measure, verify, and improve every process.",
            },
            {
              title: "Compliance by Design",
              description: "HIPAA-compliant from onboarding to reporting.",
            },
            {
              title: "People Before Process",
              description: "Our strength is our trained, motivated team.",
            },
            {
              title: "Transparency Always",
              description: "Real-time communication and shared dashboards.",
            },
            {
              title: "Continuous Growth",
              description: "We learn, optimize, and help our partners scale.",
            },
          ],
          cta: {
            label: "Explore All Services",
            url: "/services",
            isExternal: false,
          },
        },
        {
          __component: "sections.about-team",
          label: "Our Team Behind the Care",
          title: "Meet the People Who Keep Healthcare Moving",
          subtitle:
            "Our success is built by people who understand both the human and operational sides of home health.\n\nEach member of our team brings professionalism, compassion, and precision to every process, from billing to patient support.",
          teamMembers: [
            {
              firstName: "Dorin",
              lastName: "Acru",
              role: "Marketing Manager",
              bio: "Building trust through precision, clarity\nand modern medical management.",
              photo: mediaIds.teamMemberPhoto,
              order: 0,
            },
            {
              firstName: "Dorin",
              lastName: "Acru",
              role: "Marketing Manager",
              bio: "Building trust through precision, clarity\nand modern medical management.",
              photo: mediaIds.teamMemberPhoto,
              order: 1,
            },
            {
              firstName: "Dorin",
              lastName: "Acru",
              role: "Marketing Manager",
              bio: "Building trust through precision, clarity\nand modern medical management.",
              photo: mediaIds.teamMemberPhoto,
              order: 2,
            },
          ],
          mobileProfilePhoto: mediaIds.teamMemberMobilePhoto,
          dotImagePrimary: mediaIds.teamDotPrimary,
          dotImageSecondary: mediaIds.teamDotSecondary,
        },
        {
          __component: "sections.video-embed",
          label: "Inside Amedicase",
          title: "Inside Amedicase",
          youtubeId: "M7lc1UVf-VE",
        },
        {
          __component: "sections.about-why-choose",
          label: "Why Choose Amedicase",
          title: "Why Leading Home Health Agencies Choose Us",
          benefits: [
            { label: "HIPAA-Compliant & Secure Data Handling" },
            { label: "Up to 60% Cost Savings vs\nU.S. Operations" },
            { label: "Healthcare-trained Teams \nwith U.S. Experience" },
            { label: "Dedicated Account Managers" },
            { label: "Real-time Communication \n& U.S. Time-Zone Overlap" },
          ],
          cta: {
            label: "Contact",
            url: "/#contact",
            isExternal: false,
          },
          image: mediaIds.aboutWhyChooseImage,
          overlayColor: "rgba(30,58,138,0.5)",
        },
      ],
    },
    {
      slug: "contact",
      title: "Contact",
      seo: {
        metaTitle: "Contact | Amedicase",
        metaDescription:
          "Get in touch with our team for consultations, service inquiries or onboarding questions.",
        ogTitle: "Contact | Amedicase",
        ogDescription:
          "Get in touch with our team for consultations, service inquiries or onboarding questions.",
        canonicalUrl: "/contact",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Contact Us",
          title:
            "Get in touch with our team for consultations, service inquiries or onboarding questions.",
          titleDesktop:
            "Get in touch with our team for consultations,\nservice inquiries or onboarding questions.",
          backgroundImage: mediaIds.heroServices,
          cta: {
            label: "Book a Discovery Call",
            url: "/#contact",
            isExternal: false,
          },
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "We're Here to Support Your Agency",
          body:
            "Whether you want to explore outsourcing options, request a service breakdown or discuss your agency's current workflow challenges, our team is ready to help.\n\nWe respond quickly, maintain full transparency and aim to understand your needs clearly before recommending solutions.",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(208,17,39,0.2)",
          overlayImage: mediaIds.contactSubtract,
        },
        {
          __component: "sections.contact-info-form",
          label: "Contact Information",
          infoCards: [
            {
              title: "Main Office",
              body: "Amedicase Operations\nChișinău, Moldova",
            },
            {
              title: "Email",
              body: "support@amedicase.com",
            },
            {
              title: "Phone",
              body: "+373 (xxx) xxx xxx",
            },
            {
              title: "Business Hours",
              body: "Monday — Friday: 9:00–18:00 (EET)\nU.S. overlap included.",
            },
          ],
          formTitle: "Send Us a Message",
          fields: [
            { name: "firstName", type: "text", placeholder: "First Name" },
            { name: "lastName", type: "text", placeholder: "Last Name" },
            { name: "email", type: "email", placeholder: "Email" },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
            { name: "company", type: "text", placeholder: "Company Name" },
            { name: "message", type: "textarea", placeholder: "Message / Service Inquiry", rows: 4 },
          ],
          submitLabel: "Submit",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.contactSubtract,
        },
        {
          __component: "sections.faq-list",
          label: "FAQ",
          items: [
            {
              question: "How fast do you respond?",
              answer: "Usually within a few hours during business days.",
            },
            {
              question: "Do you offer a free consultation?",
              answer: "Yes, all discovery calls and workflow assessments are free.",
            },
            {
              question: "Can we start with a small team?",
              answer: "Yes, you can start with one specialist and scale as needed.",
            },
          ],
        },
      ],
    },
    {
      slug: "process",
      title: "Process",
      seo: {
        metaTitle: "Process | Amedicase",
        metaDescription:
          "A clear, efficient and compliance-aligned workflow designed for healthcare providers.",
        ogTitle: "Process | Amedicase",
        ogDescription:
          "A clear, efficient and compliance-aligned workflow designed for healthcare providers.",
        canonicalUrl: "/process",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Process",
          title: "Our Process",
          subtitle:
            "A clear, efficient and compliance-aligned workflow designed for healthcare providers.",
          backgroundImage: mediaIds.processHero,
          cta: {
            label: "Book a Discovery Call",
            url: "/#contact",
            isExternal: false,
          },
        },
        {
          __component: "sections.story-block",
          label: "Our Story",
          title: "How Amedicase Works",
          body:
            "Every partnership begins with clarity. Our process ensures that your outsourced team integrates smoothly into your operations, maintains HIPAA-aligned standards and supports your agency with precision and consistency.\n\nWe follow a simple, transparent 4-stage model used across all Home Health and Hospice services.",
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.process-stages",
          label: "The Amedicase Process",
          stages: [
            {
              stageLabel: "Stage 1",
              title: "Assessment",
              description:
                "We review your workflows, EMR usage, operational challenges and define the exact tasks to outsource.\n\nGoal: clarity, task mapping, expectations, KPIs.",
            },
            {
              stageLabel: "Stage 2",
              title: "Talent Selection",
              description:
                "We assign trained specialists aligned with your operational needs: billing, intake, coordination, admin or digital tasks.\n\nGoal: match skills, onboarding readiness, HIPAA alignment.",
            },
            {
              stageLabel: "Stage 3",
              title: "Seamless Integration",
              description:
                "Your remote team works directly inside your systems: EMR, communication tools, schedules, documentation flows, operating like an extension of your in-house staff.\n\nGoal: smooth handover, workflow adoption, daily coordination.",
            },
            {
              stageLabel: "Stage 4",
              title: "Monitoring & Optimization",
              description:
                "We provide continuous monitoring, reporting, QA checks and performance tracking. As your agency grows, your team scales at any time.\n\nGoal: consistency, quality, scalability.",
            },
          ],
        },
        {
          __component: "sections.image-overlay",
          backgroundImage: mediaIds.officeDocs,
          overlayColor: "rgba(30,58,138,0.2)",
          overlayImage: mediaIds.whiteShapes,
        },
        {
          __component: "sections.process-why",
          label: "Why This Process Works",
          title: "Simple setup. Fast integration. Measurable results.",
          body:
            "Every partnership begins with clarity. Our process ensures that your outsourced team integrates smoothly into your operations, maintains HIPAA-aligned standards and supports your agency with precision and consistency.\n\nWe follow a simple, transparent 4-stage model used across all Home Health and Hospice services.",
        },
        contactBlock,
      ],
    },
    {
      slug: "privacy-policy",
      title: "Privacy Policy",
      seo: {
        metaTitle: "Privacy Policy | Amedicase",
        metaDescription: "Learn how Amedicase collects, uses, and protects your personal information.",
        ogTitle: "Privacy Policy | Amedicase",
        ogDescription: "Learn how Amedicase collects, uses, and protects your personal information.",
        canonicalUrl: "/privacy-policy",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Legal",
          title: "Privacy Policy",
          subtitle:
            "This policy explains how we collect, use, and safeguard information when you visit our website or use our services.",
        },
        {
          __component: "sections.story-block",
          label: "Overview",
          title: "Your Privacy Matters",
          body:
            "We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and the choices you have.\n\nInformation We Collect\nWe may collect information you provide directly (name, email, phone, company details) and information collected automatically (IP address, browser type, usage data).\n\nHow We Use Information\nWe use your information to respond to inquiries, provide services, improve our website, and comply with legal obligations.\n\nCookies & Analytics\nWe use cookies and similar technologies to understand usage patterns and improve user experience. You can control cookies through your browser settings.\n\nData Sharing\nWe do not sell your personal information. We may share data with trusted service providers who assist in operating our site and services, under confidentiality agreements.\n\nData Retention & Security\nWe retain data only as long as needed and apply reasonable security measures to protect it.\n\nYour Rights\nYou can request access, correction, or deletion of your personal data by contacting us.\n\nContact\nFor questions about this policy, email us at support@amedicase.com.",
        },
      ],
    },
    {
      slug: "terms",
      title: "Terms of Service",
      seo: {
        metaTitle: "Terms of Service | Amedicase",
        metaDescription: "Read the terms and conditions for using Amedicase services and website.",
        ogTitle: "Terms of Service | Amedicase",
        ogDescription: "Read the terms and conditions for using Amedicase services and website.",
        canonicalUrl: "/terms",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Legal",
          title: "Terms of Service",
          subtitle:
            "By accessing or using our website and services, you agree to these terms. Please read them carefully.",
        },
        {
          __component: "sections.story-block",
          label: "Overview",
          title: "Terms & Conditions",
          body:
            "These Terms govern your access to and use of Amedicase services and website.\n\nUse of Services\nYou agree to use our services lawfully and not to misuse, disrupt, or harm our systems or other users.\n\nIntellectual Property\nAll content, branding, and materials on this site are owned by Amedicase or licensed to us and are protected by law.\n\nThird-Party Links\nOur website may contain links to third-party sites. We are not responsible for their content or practices.\n\nDisclaimers\nServices are provided on an \"as-is\" basis. We do not guarantee uninterrupted or error-free service.\n\nLimitation of Liability\nTo the maximum extent permitted by law, Amedicase is not liable for indirect or consequential damages.\n\nChanges to Terms\nWe may update these Terms from time to time. Continued use constitutes acceptance of the updated terms.\n\nContact\nFor questions, contact support@amedicase.com.",
        },
      ],
    },
    {
      slug: "cookies",
      title: "Cookie Policy",
      seo: {
        metaTitle: "Cookie Policy | Amedicase",
        metaDescription: "Learn how Amedicase uses cookies and how you can manage your preferences.",
        ogTitle: "Cookie Policy | Amedicase",
        ogDescription: "Learn how Amedicase uses cookies and how you can manage your preferences.",
        canonicalUrl: "/cookies",
        noIndex: false,
      },
      sections: [
        {
          __component: "sections.page-hero",
          badgeLabel: "Legal",
          title: "Cookie Policy",
          subtitle:
            "This policy explains how we use cookies and similar technologies on our website.",
        },
        {
          __component: "sections.story-block",
          label: "Overview",
          title: "Cookies & Tracking",
          body:
            "Cookies are small text files stored on your device to help websites function and improve user experience.\n\nTypes of Cookies We Use\nNecessary cookies enable core functionality. Analytics cookies help us understand site usage and improve performance. Preference cookies remember your settings.\n\nManaging Cookies\nYou can control or disable cookies in your browser settings. Note that some features may not function properly without cookies.\n\nThird-Party Cookies\nWe may use third-party tools (such as analytics providers) that set their own cookies.\n\nUpdates\nWe may update this policy to reflect changes in our use of cookies.\n\nContact\nFor questions, email support@amedicase.com.",
        },
      ],
    },
  ];

  const templateSource = (slug) => pages.find((page) => page.slug === slug);

  const templates = [
    {
      key: "service-style-a",
      name: "Service Style A (Services)",
      description: "Services page layout: hero + pillars + how we help + quality + how it works + why choose + contact.",
      flags: { style: "services", hasBackgroundPattern: true },
      defaultSeo: templateSource("services")?.seo,
      sections: templateSource("services")?.sections || [],
    },
    {
      key: "service-style-b",
      name: "Service Style B (Home Health / Hospice)",
      description: "Service page layout: hero + story + overlay + benefits + overlay + how-it-works + contact.",
      flags: { style: "benefits", hasIconSteps: true },
      defaultSeo: templateSource("home-health")?.seo,
      sections: templateSource("home-health")?.sections || [],
    },
    {
      key: "service-style-c",
      name: "Service Style C (Accounting / Support / Creative)",
      description: "Service page layout: hero + story + overlay + card grid + process stages + contact.",
      flags: { style: "card-grid", hasProcessStages: true },
      defaultSeo: templateSource("accounting-finance")?.seo,
      sections: templateSource("accounting-finance")?.sections || [],
    },
    {
      key: "legal-style",
      name: "Legal Style (Policy Pages)",
      description: "Legal page layout: hero + story block.",
      flags: { style: "legal", hasHero: true },
      defaultSeo: templateSource("privacy-policy")?.seo,
      sections: templateSource("privacy-policy")?.sections || [],
    },
  ];

  for (const page of pages) {
    await upsertPage({ data: page });
    console.log(`Seeded page: ${page.slug}`);
  }

  for (const template of templates) {
    await upsertTemplate({ data: template });
    console.log(`Seeded template: ${template.key}`);
  }

  const applyTemplateToPage = async (slug, templateKey) => {
    const templateSearch = await fetch(
      `${STRAPI_URL}/api/service-page-templates?filters[key][$eq]=${encodeURIComponent(templateKey)}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );
    if (!templateSearch.ok) {
      const text = await templateSearch.text();
      throw new Error(`Failed to lookup template ${templateKey}: ${templateSearch.status} ${text}`);
    }
    const templateJson = await templateSearch.json();
    const template = templateJson?.data?.[0];
    const templateId = template?.documentId || template?.id;
    if (!templateId) {
      throw new Error(`Template not found: ${templateKey}`);
    }

    const pageSearch = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=${encodeURIComponent(slug)}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );
    if (!pageSearch.ok) {
      const text = await pageSearch.text();
      throw new Error(`Failed to lookup page ${slug}: ${pageSearch.status} ${text}`);
    }
    const pageJson = await pageSearch.json();
    const page = pageJson?.data?.[0];
    const pageId = page?.documentId || page?.id;
    if (!pageId) {
      throw new Error(`Page not found: ${slug}`);
    }

    const res = await fetch(`${STRAPI_URL}/api/pages/${pageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          template: templateId,
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to set template on ${slug}: ${res.status} ${text}`);
    }
    console.log(`Applied template ${templateKey} to page ${slug}`);
  };

  await applyTemplateToPage("privacy-policy", "legal-style");
  await applyTemplateToPage("terms", "legal-style");
  await applyTemplateToPage("cookies", "legal-style");

  console.log("All pages seeded successfully.");
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
