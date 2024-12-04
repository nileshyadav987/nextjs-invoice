// src/app/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware reached!");
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*", // Apply this to all API routes
};
