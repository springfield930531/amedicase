export const DEFAULT_YOUTUBE_URL =
  "https://www.youtube.com/watch?v=f1EzQa3x204";
export const DEFAULT_YOUTUBE_ID = "f1EzQa3x204";

const YOUTUBE_ID_RE = /^[a-zA-Z0-9_-]{11}$/;

export const extractYoutubeId = (value?: string | null): string | null => {
  if (!value) return null;
  const raw = String(value).trim();
  if (!raw) return null;

  // If Strapi already stores the ID, accept it.
  if (YOUTUBE_ID_RE.test(raw)) return raw;

  // Try parsing as URL (support missing protocol too).
  const url = (() => {
    try {
      return new URL(raw);
    } catch {
      try {
        return new URL(`https://${raw}`);
      } catch {
        return null;
      }
    }
  })();

  if (!url) return null;

  const host = url.hostname.toLowerCase();
  const path = url.pathname || "";

  // youtu.be/<id>
  if (host.endsWith("youtu.be")) {
    const id = path.split("/").filter(Boolean)[0] || "";
    return YOUTUBE_ID_RE.test(id) ? id : null;
  }

  // youtube.com/watch?v=<id>
  if (host.includes("youtube.com") || host.includes("youtube-nocookie.com")) {
    if (path === "/watch") {
      const id = url.searchParams.get("v") || "";
      return YOUTUBE_ID_RE.test(id) ? id : null;
    }

    // youtube.com/embed/<id>
    const embedMatch = path.match(/\/embed\/([^/?]+)/i);
    if (embedMatch?.[1] && YOUTUBE_ID_RE.test(embedMatch[1])) {
      return embedMatch[1];
    }

    // youtube.com/shorts/<id>
    const shortsMatch = path.match(/\/shorts\/([^/?]+)/i);
    if (shortsMatch?.[1] && YOUTUBE_ID_RE.test(shortsMatch[1])) {
      return shortsMatch[1];
    }

    // youtube.com/live/<id>
    const liveMatch = path.match(/\/live\/([^/?]+)/i);
    if (liveMatch?.[1] && YOUTUBE_ID_RE.test(liveMatch[1])) {
      return liveMatch[1];
    }
  }

  return null;
};

