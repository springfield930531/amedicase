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

const main = async () => {
  const mediaIds = {
    heroImage: await uploadFile(img("images/services/hero-services.jpg"), "hero-services.jpg"),
    pillar1: await uploadFile(img("images/services/billing-finance-new.jpg"), "billing-finance-new.jpg"),
    pillar2: await uploadFile(img("images/services/patient-intake-correct.jpg"), "patient-intake-correct.jpg"),
    pillar3: await uploadFile(img("images/services/operations-admin-correct.jpg"), "operations-admin-correct.jpg"),
    pillar4: await uploadFile(img("images/services/digital-growth-new.jpg"), "digital-growth-new.jpg"),
    learnMoreIcon: await uploadFile(img("images/services/arrow-icon.svg"), "arrow-icon.svg"),
    bulletIcon: await uploadFile(img("images/services/icon-dot.svg"), "icon-dot.svg"),
    qualityImage: await uploadFile(img("images/services/we-deliver-quality.jpg"), "we-deliver-quality.jpg"),
    qualityArrowTop: await uploadFile(img("images/services/arrow-vector-1.svg"), "arrow-vector-1.svg"),
    qualityArrowBottom: await uploadFile(img("images/services/arrow-vector-2.svg"), "arrow-vector-2.svg"),
    howItWorksIllustration: await uploadFile(img("images/services/how-it-works-vector.svg"), "how-it-works-vector.svg"),
    separatorVector: await uploadFile(img("images/services/separator-vector.svg"), "separator-vector.svg"),
    whyChooseImage: await uploadFile(
      img("images/services/office-documents-filing-cabinet.jpg"),
      "office-documents-filing-cabinet.jpg"
    ),
    subtractOverlay: await uploadFile(img("images/services/subtract-overlay.svg"), "subtract-overlay.svg"),
  };

  const payload = {
    data: {
      title: "Services page",
      backgroundPattern: {
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
      hero: {
        enabled: true,
        badgeLabel: "SeRvices",
        title: "End-to-End Outsourcing Solutions for Home Health Agencies",
        titleDesktop: "End-to-End Outsourcing Solutions\nfor Home Health Agencies",
        subtitle:
          "From patient intake to billing and operations — Amedicase helps U.S. home health providers streamline workflows, cut costs, and focus on patient care.",
        subtitleDesktop:
          "From patient intake to billing and operations — Amedicase helps\nU.S. home health providers streamline workflows, cut costs, and focus on patient care.",
        backgroundImage: mediaIds.heroImage,
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
      servicePillars: {
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
            image: mediaIds.pillar1,
            imageStyle: {
              heightPercent: 121.49,
              widthPercent: 100,
              leftPercent: 0,
              topPercent: -17.42,
            },
            learnMoreLabel: "Learn More",
            learnMoreUrl: "#",
            learnMoreIcon: mediaIds.learnMoreIcon,
          },
          {
            title: "Patient Intake & Support",
            titleMobile: "Patient Intake\n& Support",
            titleDesktop: "Patient Intake & Support",
            description: "Accurate billing.\nFaster payments.",
            descriptionDesktop: "Accurate billing. Faster payments.",
            descriptionMobile: "Accurate billing.\nFaster payments.",
            image: mediaIds.pillar2,
            imageStyle: {
              heightPercent: 100,
              widthPercent: 237.04,
              leftPercent: -71.67,
              topPercent: 0,
            },
            learnMoreLabel: "Learn More",
            learnMoreUrl: "#",
            learnMoreIcon: mediaIds.learnMoreIcon,
          },
          {
            title: "Operations & Admin Support",
            titleMobile: "Operations &\nAdmin Support",
            titleDesktop: "Operations & Admin Support",
            description: "Reliable back-office for\nclinical teams.",
            descriptionDesktop: "Reliable back-office for clinical teams.",
            descriptionMobile: "Reliable back-office for\nclinical teams.",
            image: mediaIds.pillar3,
            imageStyle: {
              heightPercent: 100,
              widthPercent: 187.27,
              leftPercent: -26.67,
              topPercent: 0,
            },
            learnMoreLabel: "Learn More",
            learnMoreUrl: "#",
            learnMoreIcon: mediaIds.learnMoreIcon,
          },
          {
            title: "Digital Presence & Growth",
            titleMobile: "Digital Presence\n& Growth",
            titleDesktop: "Digital Presence & Growth",
            description: "Power your agency with\nsmart technology.",
            descriptionDesktop: "Power your agency with smart technology.",
            descriptionMobile: "Power your agency with\nsmart technology.",
            image: mediaIds.pillar4,
            imageStyle: {
              heightPercent: 119.99,
              widthPercent: 100,
              leftPercent: 0,
              topPercent: -6,
            },
            learnMoreLabel: "Learn More",
            learnMoreUrl: "#",
            learnMoreIcon: mediaIds.learnMoreIcon,
          },
        ],
      },
      howWeHelp: {
        enabled: true,
        label: "How We Help Home Health Agencies",
        title: "Designed to Help You Operate Efficiently and Scale with Confidence.",
        benefits: [
          { label: "Reduce Costs up to 60% without compromising HIPAA compliance." },
          { label: "Focus on Patient Care. Let us handle admin load." },
          { label: "Scale Seamlessly. Expand your team as your caseload grows." },
        ],
        bulletIcon: mediaIds.bulletIcon,
        bulletIconBlur: 2,
      },
      weDeliverQuality: {
        enabled: true,
        title: "We deliver quality.",
        backgroundImage: mediaIds.qualityImage,
        overlayColor: "rgba(30,58,138,0.6)",
        mobileTopSvgPath:
          "M105.452 6.57873C105.452 6.57873 77.511 41.0652 57.9085 41.3891C43.1815 41.6355 31.6017 30.9003 28.0355 28.15C24.4693 25.3998 3.55974 5.32047 0 0C0 0 20.3072 16.5424 30.4823 21.9936C47.2595 30.9834 55.8642 27.7354 74.6963 11.6963C83.8224 3.93085 87.5291 -2.76936 105.452 6.57873Z",
        mobileBottomSvgPath:
          "M0 34.8145C0 34.8145 27.9409 0.328038 47.5434 0.00417593C62.2703 -0.242293 73.8502 10.493 77.4164 13.2432C80.9825 15.9934 101.892 36.0728 105.452 41.3932C105.452 41.3932 85.1446 24.8508 74.9695 19.3996C58.1924 10.4098 49.5877 13.6578 30.7556 29.6969C21.6295 37.4624 17.9227 44.1626 0 34.8145Z",
        mobileSvgViewBox: "0 0 106 42",
        desktopTopIcon: mediaIds.qualityArrowTop,
        desktopBottomIcon: mediaIds.qualityArrowBottom,
      },
      howItWorks: {
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
        illustration: mediaIds.howItWorksIllustration,
        cta: {
          label: "Start Your Free Discovery Call",
          url: "#",
          isExternal: false,
        },
      },
      whyChoose: {
        enabled: true,
        label: "Why Choose Amedicase",
        benefits: [
          { label: "HIPAA-Compliant & Secure Data Handling" },
          { label: "Up to 60% Cost Savings vs. U.S. Operations" },
          { label: "Healthcare-trained Teams with U.S. Experience" },
          { label: "Dedicated Account Managers" },
          { label: "Real-time Communication & U.S. Time-Zone Overlap" },
        ],
        separatorImage: mediaIds.separatorVector,
        mobileSeparatorSvgPath:
          "M0 1C0 1 72.4345 43.848 110.792 36.0488C139.61 30.1945 156.566 8.2968 162.077 2.4327C167.589 -3.4315 197.842 -44.0714 202 -54C202 -54 171.074 -19.2124 154.097 -6.272C126.106 15.0674 107.647 13.5761 62.5873 -3.8195C40.7548 -12.2382 30.0361 -21.2691 0 1.1229Z",
        mobileSeparatorViewBox: "0 0 280 2",
        rightImage: mediaIds.whyChooseImage,
        rightOverlay: mediaIds.subtractOverlay,
      },
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
    },
  };

  const res = await fetch(`${STRAPI_URL}/api/services-page`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to seed services page: ${res.status} ${text}`);
  }

  console.log("Services page seeded successfully.");
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
