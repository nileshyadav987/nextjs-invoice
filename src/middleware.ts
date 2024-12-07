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
    request.headers.get("access-token")
  );
  const token = request.headers.get("access-token");
  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized: Missing access token" },
      { status: 401 }
    );
  }
  const decoded = await decodeToken(token);
  // Set the decoded token as a header to pass it to the route
  const response = NextResponse.next();
  response.cookies.set("user-data", JSON.stringify(decoded), {
    path: "/",
    httpOnly: true, // Optional: To prevent access via JavaScript
    secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
  });
  return response;
}

export const config = {
  matcher: "/api/:path*", // Apply this to all API routes
};
