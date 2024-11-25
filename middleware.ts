import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(uk|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
  matcher: ["/", "/(uk|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
