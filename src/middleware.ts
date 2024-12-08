// src/app/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "./library/jwt";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  console.log(`Middleware reached for:---------------- ${url.pathname}`);
  if (
    url.pathname.startsWith("/api/user") ||
    url.pathname.startsWith("/api/open")
  ) {
    return NextResponse.next();
  }

  console.log(
    `Middleware ------------------ need auth`,
    request.cookies.get("x-access-token")?.value
  );
  const token = request.cookies.get("x-access-token")?.value;
  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized: Missing access token" },
      { status: 401 }
    );
  }
  // const response = NextResponse.next();
  // const businesstoken = request.cookies.get("x-business-token")?.value;
  // if(businesstoken) {
  //   const businessdecoded = await decodeToken(businesstoken);
  //   response.headers.set('x-business-data', JSON.stringify(businessdecoded));
  // }
  // Set the decoded token as a header to pass it to the route
  // const decoded = await decodeToken(token);
  // response.headers.set('x-user-data', JSON.stringify(decoded));
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*", // Apply this to all API routes
};
