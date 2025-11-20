import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAMES } from "./shared/config/constants";

const protectedRoutes = ["/about"];

export function proxy(request: NextRequest) {
  const authStorage = request.cookies.get(COOKIE_NAMES.AUTH_STORAGE);

  let isAuthenticated = false;

  if (authStorage) {
    try {
      const authData = JSON.parse(authStorage.value);
      isAuthenticated = authData?.state?.isAuthenticated === true;
    } catch {
      isAuthenticated = false;
    }
  }

  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("to", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/about"],
};
