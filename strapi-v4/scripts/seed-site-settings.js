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
const asset = (rel) => path.join(root, rel);

const main = async () => {
  const mediaIds = {
    logo: await uploadFile(asset("frontend/public/images/amedicase-logo-desktop.svg"), "amedicase-logo-desktop.svg"),
    footerLogo: await uploadFile(asset("frontend/public/images/amedicase-logo-desktop.svg"), "amedicase-logo-desktop.svg"),
    mailIcon: await uploadFile(asset("frontend/public/images/mail-icon.svg"), "mail-icon.svg"),
    facebookIcon: await uploadFile(asset("frontend/public/images/facebook-icon.svg"), "facebook-icon.svg"),
    instagramIcon: await uploadFile(asset("frontend/public/images/instagram-icon.svg"), "instagram-icon.svg"),
    favicon: await uploadFile(asset("frontend/src/app/favicon.ico"), "favicon.ico"),
  };

  const payload = {
    data: {
      title: "Site settings",
      header: {
        logo: mediaIds.logo,
        logoAlt: "Amedicase",
        navigation: [
          { label: "About", url: "/about", isExternal: false },
          { label: "Services", url: "/services", isExternal: false },
          { label: "Process", url: "/process", isExternal: false },
          { label: "Case Studies", url: "/case-studies", isExternal: false },
          { label: "Contact", url: "/contact", isExternal: false },
        ],
        headerCta: {
          label: "Book a Call",
          url: "/contact",
          isExternal: false,
        },
      },
      footer: {
        footerLogo: mediaIds.footerLogo,
        footerLogoAlt: "Amedicase",
        navigation: [
          { label: "About", url: "/about", isExternal: false },
          { label: "Services", url: "/services", isExternal: false },
          { label: "Process", url: "/process", isExternal: false },
          { label: "Case Studies", url: "/case-studies", isExternal: false },
          { label: "Contact", url: "/contact", isExternal: false },
        ],
        columns: [
          {
            links: [
              { label: "About", url: "/about", isExternal: false },
              { label: "Sevices", url: "/services", isExternal: false },
            ],
          },
          {
            links: [
              { label: "Process", url: "/process", isExternal: false },
              { label: "Case Studies", url: "/case-studies", isExternal: false },
              { label: "Contact", url: "/contact", isExternal: false },
            ],
          },
          {
            links: [
              { label: "Home Health", url: "/home-health", isExternal: false },
              { label: "Hospice", url: "/hospice", isExternal: false },
              { label: "Acount and Finance", url: "/accounting-finance", isExternal: false },
            ],
          },
          {
            links: [
              { label: "Customer Support", url: "/customer-support", isExternal: false },
              { label: "Back Office and administration", url: "/services", isExternal: false },
              { label: "Creative and development", url: "/creative-development", isExternal: false },
            ],
          },
        ],
        socialLinks: [
          {
            platform: "Email",
            url: "mailto:team@amedicase.com",
            icon: mediaIds.mailIcon,
          },
          {
            platform: "Facebook",
            url: "https://www.facebook.com/amedicase",
            icon: mediaIds.facebookIcon,
          },
          {
            platform: "Instagram",
            url: "https://www.instagram.com/amedicase",
            icon: mediaIds.instagramIcon,
          },
        ],
        legalLinks: [
          { label: "Privacy Policy", url: "#privacy", isExternal: false },
          { label: "Terms of Service", url: "#terms", isExternal: false },
          { label: "Cookies", url: "#cookies", isExternal: false },
        ],
        copyrightText: "© Copyright 2025 amedicase. All Rights Reserved.",
      },
      brandAssets: {
        siteName: "Amedicase",
        favicon: mediaIds.favicon,
      },
    },
  };

  const res = await fetch(`${STRAPI_URL}/api/site-setting`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Seed failed: ${res.status} ${text}`);
  }

  console.log("Seeded site settings.");
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
