import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

const getProvidedSecret = (request: NextRequest) =>
  request.nextUrl.searchParams.get("secret") ||
  request.headers.get("x-revalidate-secret");

const getPathsToRevalidate = (request: NextRequest) => {
  const paths = request.nextUrl.searchParams.getAll("path").filter(Boolean);
  return paths.length ? paths : ["/"];
};

const json = (body: unknown, init?: ResponseInit) => {
  const response = NextResponse.json(body, init);
  response.headers.set("Cache-Control", "no-store");
  return response;
};

const handler = async (request: NextRequest) => {
  const configuredSecret = process.env.REVALIDATE_SECRET;
  if (!configuredSecret) {
    return json(
      { revalidated: false, error: "REVALIDATE_SECRET is not configured" },
      { status: 500 }
    );
  }

  const providedSecret = getProvidedSecret(request);
  if (!providedSecret || providedSecret !== configuredSecret) {
    return json({ revalidated: false, error: "Unauthorized" }, { status: 401 });
  }

  // Revalidate the root layout to refresh site-settings-driven header/footer/SEO.
  revalidatePath("/", "layout");

  const paths = getPathsToRevalidate(request);
  for (const path of paths) {
    if (!path.startsWith("/") || path.includes("://")) {
      continue;
    }
    revalidatePath(path);
  }

  return json({ revalidated: true, paths, ts: Date.now() });
};

export const GET = handler;
export const POST = handler;
