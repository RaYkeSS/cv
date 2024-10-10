import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { NextResponse } from "next/server";

let headers = { "accept-language": "ru-RU;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-EN", "ru-RU"];
let defaultLocale = "ru-RU";

match(languages, locales, defaultLocale); // -> 'ru-RU'

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  // if (pathname === "/pdf/cv.pdf") {
  //   return NextResponse.next();
  // }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  // const locale = getLocale(request);
  const locale = locales[1];
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /ru-RU/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/((?!api|_next/static|_next/image|img/|favicon.ico|pdf/).*)",
    // Optional: only run on root (/) URL
    // "/",
  ],
};
