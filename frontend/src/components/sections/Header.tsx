"use client";

import { useEffect, useState } from "react";
import { getSiteSettings } from "@/lib/strapi";
import { getMediaUrl } from "@/lib/strapi-home";
import { HeaderClient } from "@/components/sections/HeaderClient";
import type { SiteSettings } from "@/lib/site-settings-types";

export function Header() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    let mounted = true;
    getSiteSettings()
      .then((data) => {
        if (mounted) setSettings(data);
      })
      .catch(() => {
        if (mounted) setSettings(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const header = settings?.header;
  const logoUrl = getMediaUrl(header?.logo);

  return (
    <HeaderClient
      logoUrl={logoUrl}
      logoAlt={header?.logoAlt}
      navigation={header?.navigation || undefined}
      cta={header?.headerCta || undefined}
    />
  );
}
