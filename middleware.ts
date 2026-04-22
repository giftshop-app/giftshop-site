import { NextRequest, NextResponse } from "next/server";

const BYPASS_COOKIE = "gs-preview";
const BYPASS_COOKIE_VALUE = "1";
const BYPASS_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function isAllowListed(pathname: string): boolean {
  if (pathname === "/coming-soon") return true;
  if (pathname.startsWith("/api/")) return true;
  if (pathname.startsWith("/_next/")) return true;
  if (pathname === "/favicon.ico" || pathname === "/robots.txt" || pathname === "/icon.svg") return true;
  if (/\.[a-zA-Z0-9]{1,6}$/.test(pathname)) return true;
  return false;
}

export function middleware(req: NextRequest) {
  const mode = process.env.COMING_SOON_MODE;
  if (mode !== "true") return NextResponse.next();

  const { pathname, searchParams } = req.nextUrl;

  const bypassKey = process.env.COMING_SOON_BYPASS_KEY;
  const previewParam = searchParams.get("preview");
  if (bypassKey && previewParam && previewParam === bypassKey) {
    const res = NextResponse.next();
    res.cookies.set(BYPASS_COOKIE, BYPASS_COOKIE_VALUE, {
      maxAge: BYPASS_COOKIE_MAX_AGE_SECONDS,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    return res;
  }

  if (req.cookies.get(BYPASS_COOKIE)?.value === BYPASS_COOKIE_VALUE) {
    return NextResponse.next();
  }

  if (isAllowListed(pathname)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt).*)"],
};
